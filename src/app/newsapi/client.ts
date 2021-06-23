import { _everything, _sources, _topheadlines } from "../../lib/newsapi"
import { genericResults } from "../../helper/results"

/**
 * Retrieves headlines for display on news tickers or similar.
 * More info: https://newsapi.org/docs/endpoints/top-headlines
 */
export async function newsapiTopHeadlines(
  apiKey: string,
  country: string | null = null,
  category: string | null = null,
  sources: string | null = null,
  q: string | null = null,
  pageSize: string | null = null,
  page: string | null = null,
): Promise<{ title: string; result: unknown }> {
  const options = {
    apiKey: apiKey,
    country: country,
    category: category,
    sources: sources,
    q: q,
    pageSize: pageSize,
    page: page,
  }
  const result = await _topheadlines(options)
  return await genericResults("News API - Top Headlines", result)
}

/**
 * Search through millions of articles from small news sources and blogs.
 * More info: https://newsapi.org/docs/endpoints/everything
 */
export async function newsapiEverything(
  apiKey: string,
  q: string | null = null,
  qInTitle: string | null = null,
  sources: string | null = null,
  domains: string | null = null,
  excludeDomains: string | null = null,
  from: string | null = null,
  to: string | null = null,
  language: string | null = null,
  sortBy: string | null = null,
  pageSize: string | null = null,
  page: string | null = null,
): Promise<{ title: string; result: unknown }> {
  const options = {
    apiKey: apiKey,
    q: q,
    qInTitle: qInTitle,
    sources: sources,
    domains: domains,
    excludeDomains: excludeDomains,
    from: from,
    to: to,
    language: language,
    sortBy: sortBy,
    pageSize: pageSize,
    page: page,
  }
  const result = await _everything(options)
  return await genericResults("News API - Everything", result)
}

/**
 * Convenience endpoint for keeping track of the publishers available on the API.
 * More info: https://newsapi.org/docs/endpoints/sources
 */
export async function newsapiSources(
  apiKey: string,
  category: string | null = null,
  language: string | null = null,
  country: string | null = null,
): Promise<{ title: string; result: unknown }> {
  const options = {
    apiKey: apiKey,
    category: category,
    language: language,
    country: country,
  }
  const result = await _sources(options)
  return await genericResults("News API - Sources", result)
}
