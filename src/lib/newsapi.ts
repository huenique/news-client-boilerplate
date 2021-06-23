import { AxiosResponse } from "axios"
import { performGetRequest } from "../common/requests"
import { topheadlinesApplyRules } from "../helper/rules"
import "dotenv/config"
import {
  EverythingNewsAPI,
  SourcesNewsAPI,
  TopHeadlinesNewsAPI,
} from "../common/types"

const newsapiorg = "https://newsapi.org/v2"

export async function _topheadlines(
  options: TopHeadlinesNewsAPI,
): Promise<AxiosResponse<unknown> | Error> {
  const params = topheadlinesApplyRules({
    apiKey: options.apiKey,
    country: options.country,
    category: options.category,
    sources: options.sources,
    q: options.q,
    pageSize: options.pageSize,
    page: options.page,
  })
  return await performGetRequest(newsapiorg, "/top-headlines", { params })
}

export async function _everything(
  options: EverythingNewsAPI,
): Promise<AxiosResponse<unknown> | Error> {
  const params = {
    apiKey: options.apiKey,
    q: options.q,
    qInTitle: options.qInTitle,
    sources: options.sources,
    domains: options.domains,
    excludeDomains: options.excludeDomains,
    from: options.from,
    to: options.to,
    language: options.language,
    sortBy: options.sortBy,
    pageSize: options.pageSize,
    page: options.page,
  }
  return await performGetRequest(newsapiorg, "/everything", params)
}

export async function _sources(
  options: SourcesNewsAPI,
): Promise<AxiosResponse<unknown> | Error> {
  const params = {
    apiKey: options.apiKey,
    category: options.category,
    language: options.language,
    country: options.country,
  }
  return await performGetRequest(newsapiorg, "/sources", params)
}
