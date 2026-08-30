/* Weather & spray advisory — Open-Meteo (free, no key). Online: fetch + cache.
   Offline: show last cached forecast. The static checklist always renders. */

interface Strings {
  locating: string;
  gpsFailed: string;
  offline: string;
  noData: string;
  updated: string;
  today: string;
  rain: string;
  wind: string;
  tempHi: string;
  tempLo: string;
  spray: string;
  sprayGood: string;
  sprayCaution: string;
  sprayBad: string;
  whyRain: string;
  whyWind: string;
  whyHeat: string;
  whyOk: string;
  alertFrost: string;
  alertHeat: string;
  alertRain: string;
  alertDry: string;
  alertNone: string;
  locale: string;
}

interface Loc {
  lat: number;
  lon: number;
}
interface Daily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
  precipitation_probability_max: number[];
  wind_speed_10m_max: number[];
}
interface Cache {
  at: number;
  loc: Loc;
  daily: Daily;
}

const LOC_KEY = 'agri-sathi:weather:loc:v1';
const CACHE_KEY = 'agri-sathi:weather:cache:v1';

const el = <T extends Element>(s: string) => document.querySelector<T>(s);
const S: Strings = JSON.parse(el('#wx-strings')?.textContent || '{}');

const locBox = el<HTMLElement>('[data-wx-loc]');
const report = el<HTMLElement>('[data-wx-report]');
const msg = el<HTMLElement>('[data-wx-msg]');
const gpsBtn = el<HTMLButtonElement>('[data-wx-gps]');
const manualForm = el<HTMLFormElement>('[data-wx-manual]');
const changeBtn = el<HTMLButtonElement>('[data-wx-change]');
const offlineNote = el<HTMLElement>('[data-wx-offline]');
const placeEl = el<HTMLElement>('[data-wx-place]');
const updatedEl = el<HTMLElement>('[data-wx-updated]');
const alertsEl = el<HTMLElement>('[data-wx-alerts]');
const daysEl = el<HTMLElement>('[data-wx-days]');

function esc(str: string) {
  return str.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  );
}
function readJSON<T>(k: string): T | null {
  try {
    return JSON.parse(localStorage.getItem(k) || 'null');
  } catch {
    return null;
  }
}
function writeJSON(k: string, v: unknown) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {
    /* ignore */
  }
}

function showMsg(text: string) {
  if (!msg) return;
  msg.textContent = text;
  msg.hidden = !text;
}

function sprayVerdict(rainMm: number, rainProb: number, windKmh: number, tmax: number) {
  if (rainMm >= 2 || rainProb >= 60) return { v: 'bad', why: S.whyRain };
  if (windKmh >= 20) return { v: 'bad', why: S.whyWind };
  if (tmax >= 38) return { v: 'bad', why: S.whyHeat };
  if (rainProb >= 40 || windKmh >= 15 || tmax >= 35) {
    const why = rainProb >= 40 ? S.whyRain : windKmh >= 15 ? S.whyWind : S.whyHeat;
    return { v: 'caution', why };
  }
  return { v: 'good', why: S.whyOk };
}

function buildAlerts(d: Daily): Array<{ sev: string; text: string }> {
  const out: Array<{ sev: string; text: string }> = [];
  if (d.temperature_2m_min.some((x) => x <= 2)) out.push({ sev: 'frost', text: S.alertFrost });
  if (d.temperature_2m_max.some((x) => x >= 40)) out.push({ sev: 'heat', text: S.alertHeat });
  if (d.precipitation_sum.some((x) => x >= 50)) out.push({ sev: 'rain', text: S.alertRain });
  const total = d.precipitation_sum.reduce((a, b) => a + b, 0);
  const maxProb = Math.max(...d.precipitation_probability_max);
  if (total < 2 && maxProb < 30) out.push({ sev: 'dry', text: S.alertDry });
  if (out.length === 0) out.push({ sev: 'none', text: S.alertNone });
  return out;
}

function renderReport(cache: Cache, stale: boolean) {
  if (!report || !alertsEl || !daysEl) return;
  locBox && (locBox.hidden = true);
  report.hidden = false;
  offlineNote && (offlineNote.hidden = !stale);

  if (placeEl) placeEl.textContent = `${cache.loc.lat.toFixed(3)}, ${cache.loc.lon.toFixed(3)}`;
  if (updatedEl)
    updatedEl.textContent = `${S.updated}: ${new Date(cache.at).toLocaleString(S.locale, {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: '2-digit',
    })}`;

  alertsEl.innerHTML = buildAlerts(cache.daily)
    .map((a) => `<li data-sev="${a.sev}">${esc(a.text)}</li>`)
    .join('');

  const d = cache.daily;
  daysEl.innerHTML = d.time
    .map((iso, i) => {
      const date = new Date(iso + 'T00:00:00');
      const label =
        i === 0
          ? S.today
          : date.toLocaleDateString(S.locale, { weekday: 'short', day: 'numeric', month: 'short' });
      const rainMm = Math.round(d.precipitation_sum[i]);
      const prob = Math.round(d.precipitation_probability_max[i]);
      const wind = Math.round(d.wind_speed_10m_max[i]);
      const tmax = Math.round(d.temperature_2m_max[i]);
      const tmin = Math.round(d.temperature_2m_min[i]);
      const sp = sprayVerdict(d.precipitation_sum[i], prob, wind, tmax);
      const spLabel =
        sp.v === 'good' ? S.sprayGood : sp.v === 'caution' ? S.sprayCaution : S.sprayBad;
      return `<li class="wx-day">
        <span class="wx-day__date">${esc(label)}</span>
        <span class="wx-day__nums"><b>${tmax}°</b> / ${tmin}°  ·  ${S.rain} ${rainMm} mm (${prob}%)  ·  ${S.wind} ${wind} km/h</span>
        <span class="wx-spray" data-v="${sp.v}">${esc(S.spray)}: ${esc(spLabel)}</span>
        <span class="wx-day__why">${esc(sp.why)}</span>
      </li>`;
    })
    .join('');
}

async function fetchForecast(loc: Loc): Promise<Cache | null> {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}` +
    `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max` +
    `&timezone=auto&forecast_days=7`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const json = await res.json();
    if (!json?.daily?.time) return null;
    const cache: Cache = { at: Date.now(), loc, daily: json.daily };
    writeJSON(CACHE_KEY, cache);
    return cache;
  } catch {
    return null;
  }
}

async function loadFor(loc: Loc) {
  writeJSON(LOC_KEY, loc);
  showMsg('');
  const fresh = navigator.onLine ? await fetchForecast(loc) : null;
  if (fresh) {
    renderReport(fresh, false);
    return;
  }
  const cached = readJSON<Cache>(CACHE_KEY);
  if (cached) {
    renderReport(cached, true);
  } else {
    showMsg(S.noData);
  }
}

function showLocPicker() {
  locBox && (locBox.hidden = false);
  report && (report.hidden = true);
}

gpsBtn?.addEventListener('click', () => {
  if (!navigator.geolocation) {
    showMsg(S.gpsFailed);
    return;
  }
  showMsg(S.locating);
  navigator.geolocation.getCurrentPosition(
    (pos) => loadFor({ lat: +pos.coords.latitude.toFixed(4), lon: +pos.coords.longitude.toFixed(4) }),
    () => showMsg(S.gpsFailed),
    { timeout: 10000, maximumAge: 600000 }
  );
});

manualForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(manualForm);
  const lat = parseFloat(String(data.get('lat')));
  const lon = parseFloat(String(data.get('lon')));
  if (Number.isFinite(lat) && Number.isFinite(lon)) loadFor({ lat, lon });
});

changeBtn?.addEventListener('click', showLocPicker);

window.addEventListener('online', () => {
  const loc = readJSON<Loc>(LOC_KEY);
  if (loc && report && !report.hidden) loadFor(loc);
});

// Boot
const savedLoc = readJSON<Loc>(LOC_KEY);
if (savedLoc) {
  loadFor(savedLoc);
} else {
  showLocPicker();
}
