import { createContext, useContext, useState, useCallback } from 'react'
import { COUNTRIES, DEFAULT_COUNTRY } from '../lib/countries'
import es from '../lib/i18n/es'
import ptBR from '../lib/i18n/pt-BR'

const translations = { es, 'pt-BR': ptBR }

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [countryCode, setCountryCode] = useState(() => {
    try { return localStorage.getItem('app-country') || DEFAULT_COUNTRY } catch { return DEFAULT_COUNTRY }
  })

  const country = COUNTRIES[countryCode] || COUNTRIES[DEFAULT_COUNTRY]
  const lang = country.language
  const dict = translations[lang] || translations.es

  const setCountry = useCallback((code) => {
    try { localStorage.setItem('app-country', code) } catch { /* private mode */ }
    setCountryCode(code)
  }, [])

  const formatCurrency = useCallback((n) =>
    new Intl.NumberFormat(country.locale, {
      style: 'currency',
      currency: country.currency,
      maximumFractionDigits: 0,
    }).format(n),
  [country.locale, country.currency])

  const formatDate = useCallback((dateStr, opts) =>
    new Date(dateStr + 'T12:00:00').toLocaleDateString(country.locale, opts),
  [country.locale])

  const localDate = useCallback(() =>
    new Date().toLocaleString('sv-SE', { timeZone: country.timezone }).slice(0, 10),
  [country.timezone])

  const t = useCallback((key) => dict[key] ?? es[key] ?? key, [dict])

  return (
    <LocaleContext.Provider value={{
      countryCode, country, setCountry,
      formatCurrency, formatDate, localDate,
      t, lang,
    }}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
