import { LOCALES, type Locale } from './utils';

/** getStaticPaths helper for any `src/pages/[lang]/...` route. */
export function localePaths() {
  return LOCALES.map((lang) => ({ params: { lang }, props: { locale: lang as Locale } }));
}
