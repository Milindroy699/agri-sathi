import en from './en.json';
import hi from './hi.json';

export const LOCALES = ['en', 'hi'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

const DICTS: Record<Locale, Record<string, string>> = { en, hi };

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'hi';
}

/** Returns a translator bound to a locale, with {placeholder} interpolation. */
export function useTranslations(locale: Locale) {
  const dict = DICTS[locale] ?? DICTS[DEFAULT_LOCALE];
  return function t(key: string, vars?: Record<string, string | number>): string {
    let value = dict[key] ?? DICTS[DEFAULT_LOCALE][key] ?? key;
    if (vars) {
      for (const [name, replacement] of Object.entries(vars)) {
        value = value.replace(new RegExp(`\\{${name}\\}`, 'g'), String(replacement));
      }
    }
    return value;
  };
}

/** Picks the localized string from a { en, hi } field, falling back to en. */
export function pick<T>(field: { en: T; hi?: T } | undefined, locale: Locale): T | undefined {
  if (!field) return undefined;
  if (locale === 'hi' && field.hi != null) return field.hi;
  return field.en;
}

/** Strips the locale prefix from a pathname, e.g. /hi/crops/ -> /crops/ */
export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/(en|hi)(?=\/|$)/, '') || '/';
}

/** Builds a path within the given locale, honoring Astro's base. */
export function localizedPath(base: string, locale: Locale, path = ''): string {
  const clean = path.replace(/^\//, '');
  const root = base.endsWith('/') ? base : `${base}/`;
  return `${root}${locale}/${clean}`.replace(/\/{2,}/g, '/');
}

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'hi' : 'en');
