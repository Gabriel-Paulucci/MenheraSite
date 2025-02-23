const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

export default new NextI18Next({
  defaultLanguage: 'pt',
  otherLanguages: ['en'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
})
