import {useEffect, useState} from 'react';
import StylePropsDocs from './docs/StylePropsDocs';
import type {Locale} from './docs/docs-ui';

const STORAGE_KEY = 'react-style-props-docs-locale';

export default function App() {
  const [locale, setLocale] = useState<Locale>('ko');

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === 'ko' || saved === 'en') setLocale(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === 'ko' ? 'ko' : 'en';
  }, [locale]);

  return <StylePropsDocs locale={locale} setLocale={setLocale} />;
}
