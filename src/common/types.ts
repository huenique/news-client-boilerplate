export interface TopHeadlinesNewsAPI {
  apiKey: string
  country: string | null
  category: string | null
  sources: string | null
  q: string | null
  pageSize: string | null
  page: string | null
}

export interface EverythingNewsAPI {
  apiKey: string
  q: string | null
  qInTitle: string | null
  sources: string | null
  domains: string | null
  excludeDomains: string | null
  from: string | null
  to: string | null
  language: string | null
  sortBy: string | null
  pageSize: string | null
  page: string | null
}

export interface SourcesNewsAPI {
  apiKey: string
  category: string | null
  language: string | null
  country: string | null
}

export interface TrendingBing {
  count: string | null
  since: string | null
  offset: string | null
  safeSearch: string | null
  textFormat: string | null
  cc: string | null
  mkt: string | null
  setLang: string | null
  textDecorations: string | null
  sortBy: string | null
}

export interface SearchBing {
  safeSearch: string | null
  offset: string | null
  textFormat: string | null
  originalImg: string | null
  freshness: string | null
  mkt: string | null
  cc: string | null
  setLang: string | null
  sortBy: string | null
  textDecorations: string | null
  count: string | null
}

export interface CategoryBing {
  textFormat: string | null
  safeSearch: string | null
  textDecorations: string | null
  setLang: string | null
  mkt: string | null
  headlineCount: string | null
  cc: string | null
  category: string | null
  originalImg: string | null
  offset: string | null
  count: string | null
}

export interface TrendingNewsWebSearch {
  withThumbnails: string | null
  location: string | null
}

export interface WebImageSearchWebSearch {
  safeSearch: string | null
}

export interface NewsSearchWebSearch {
  safeSearch: string | null
  withThumbnails: string | null
  fromPublishedDate: string | null
  toPublishedDate: string | null
}
