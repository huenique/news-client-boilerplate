import { _category, _search, _trending } from "../../lib/bingnews"
import { genericResults } from "../../helper/results"

/**
 * Get trending topics identified by Bing. More info:
 * https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1
 */
export async function bingTrending(
  apiKey: string,
  count: string | null = null,
  since: string | null = null,
  offset: string | null = null,
  safeSearch: string | null = null,
  textFormat: string | null = null,
  cc: string | null = null,
  mkt: string | null = null,
  setLang: string | null = null,
  textDecorations: string | null = null,
  sortBy: string | null = null,
): Promise<{ title: string; result: unknown }> {
  const options = {
    count: count,
    since: since,
    offset: offset,
    safeSearch: safeSearch,
    textFormat: textFormat,
    cc: cc,
    mkt: mkt,
    setLang: setLang,
    textDecorations: textDecorations,
    sortBy: sortBy,
  }
  const result = await _trending(options, apiKey)
  return await genericResults("Bing — Trending", result)
}

/**
 * Get news articles relevant for a given query. More info:
 * https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1
 */
export async function bingSearch(
  apiKey: string,
  q: string,
  safeSearch: string | null = null,
  offset: string | null = null,
  textFormat: string | null = null,
  originalImg: string | null = null,
  freshness: string | null = null,
  mkt: string | null = null,
  cc: string | null = null,
  setLang: string | null = null,
  sortBy: string | null = null,
  textDecorations: string | null = null,
  count: string | null = null,
): Promise<{ title: string; result: unknown }> {
  const options = {
    q: q,
    safeSearch: safeSearch,
    offset: offset,
    textFormat: textFormat,
    originalImg: originalImg,
    freshness: freshness,
    mkt: mkt,
    cc: cc,
    setLang: setLang,
    sortBy: sortBy,
    textDecorations: textDecorations,
    count: count,
  }
  const result = await _search(q, options, apiKey)
  return await genericResults("Bing - Search", result)
}

/**
 * Returns news for a provided category. More info:
 * https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1
 */
export async function bingCategory(
  apiKey: string,
  textFormat: string | null = null,
  safeSearch: string | null = null,
  textDecorations: string | null = null,
  setLang: string | null = null,
  mkt: string | null = null,
  headlineCount: string | null = null,
  cc: string | null = null,
  category: string | null = null,
  originalImg: string | null = null,
  offset: string | null = null,
  count: string | null = null,
): Promise<{ title: string; result: unknown }> {
  const options = {
    textFormat: textFormat,
    safeSearch: safeSearch,
    textDecorations: textDecorations,
    setLang: setLang,
    mkt: mkt,
    headlineCount: headlineCount,
    cc: cc,
    category: category,
    originalImg: originalImg,
    offset: offset,
    count: count,
  }
  const result = await _category(options, apiKey)
  return await genericResults("Bing - Category", result)
}
