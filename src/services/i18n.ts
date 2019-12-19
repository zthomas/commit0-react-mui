import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../lang/en'

const initOptions = {
  resources: {
    en: {
      translation: en,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  debug: process.env.REACT_LOG_LEVEL === 'debug',
  parseMissingKeyHandler: function(key: string) {
    return key.replace(/[_-]/g, ' ')
  },
}

i18n.use(initReactI18next).init(initOptions)

export default i18n
