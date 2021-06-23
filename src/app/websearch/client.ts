import { genericResults } from "../../helper/results"
import {
  _autoComplete,
  _imageSearch,
  _newsSearch,
  _spellCheck,
  _trendingNews,
  _webSearch,
} from "../../lib/websearch"

/**
 * Gets news articles that are trending on the web and social networks.
 * More info: https://rapidapi.com/contextualwebsearch/api/web-search
 */
export async function wsTrendingNews(
  apiKey: string,
  pageNumber: string,
  pageSize: string,
  withThumbnails: string | null = null,
  location: string | null = null,
): Promise<{
  title: string
  result: unknown
}> {
  const options = {
    withThumbnails: withThumbnails,
    location: location,
  }
  const result = await _trendingNews(apiKey, options, pageNumber, pageSize)
  return await genericResults("Web Search - Trending", result)
}

/**
 * Check spelling.
 * More info: https://rapidapi.com/contextualwebsearch/api/web-search
 */
export async function wsSpellCheck(
  apiKey: string,
  text: string,
): Promise<{
  title: string
  result: unknown
}> {
  const result = await _spellCheck(apiKey, text)
  return await genericResults("Web Search - Spell Check", result)
}

/**
 * Get relevant web pages for a given query.
 * More info: https://rapidapi.com/contextualwebsearch/api/web-search
 */
export async function wsWebSearch(
  apiKey: string,
  q: string,
  pageNumber: string,
  pageSize: string,
  autoCorrect: string,
  safeSearch: string | null = null,
): Promise<{
  title: string
  result: unknown
}> {
  const options = { safeSearch: safeSearch }
  const result = await _webSearch(
    apiKey,
    options,
    q,
    pageNumber,
    pageSize,
    autoCorrect,
  )
  return await genericResults("Web Search - Web Search", result)
}

/**
 * Get news articles relevant for a given query.
 * More info: https://rapidapi.com/contextualwebsearch/api/web-search
 */
export async function wsNewsSearch(
  apiKey: string,
  q: string,
  pageNumber: string,
  pageSize: string,
  autoCorrect: string,
  safeSearch: string | null = null,
  withThumbnails: string | null = null,
  fromPublishedDate: string | null = null,
  toPublishedDate: string | null = null,
): Promise<{
  title: string
  result: unknown
}> {
  const options = {
    safeSearch: safeSearch,
    withThumbnails: withThumbnails,
    fromPublishedDate: fromPublishedDate,
    toPublishedDate: toPublishedDate,
  }
  const result = await _newsSearch(
    apiKey,
    options,
    q,
    pageNumber,
    pageSize,
    autoCorrect,
  )
  return await genericResults("Web Search - News Search", result)
}

/**
 * Get relevant images for a given query.
 * More info: https://rapidapi.com/contextualwebsearch/api/web-search
 */
export async function wsImageSearch(
  apiKey: string,
  q: string,
  pageNumber: string,
  pageSize: string,
  autoCorrect: string,
  safeSearch: string | null = null,
): Promise<{
  title: string
  result: unknown
}> {
  const options = { safeSearch: safeSearch }
  const result = await _imageSearch(
    apiKey,
    options,
    q,
    pageNumber,
    pageSize,
    autoCorrect,
  )
  return await genericResults("Web Search - Image Search", result)
}

/**
 * Suggest as-you-type completion.
 * More info: https://rapidapi.com/contextualwebsearch/api/web-search
 */
export async function wsAutoComplete(
  apiKey: string,
  text: string,
): Promise<{
  title: string
  result: unknown
}> {
  const result = await _autoComplete(apiKey, text)
  return await genericResults("Web Search - Auto Complete", result)
}
