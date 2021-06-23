import { AxiosResponse } from "axios"
import { headerWebSearch } from "../helper/headers"
import { performGetRequest } from "../common/requests"
import {
  NewsSearchWebSearch,
  TrendingNewsWebSearch,
  WebImageSearchWebSearch,
} from "../common/types"

const websearchrapidapi =
  "https://contextualwebsearch-websearch-v1.p.rapidapi.com"

export async function _trendingNews(
  rapidApiKey: string,
  options: TrendingNewsWebSearch,
  pageNumber: string,
  pageSize: string,
): Promise<AxiosResponse<unknown> | Error> {
  const header = await headerWebSearch(rapidApiKey)
  const params = Object.assign(
    { pageNumber: pageNumber, pageSize: pageSize },
    { options },
  )
  return await performGetRequest(
    websearchrapidapi,
    "/api/search/TrendingNewsAPI",
    params,
    header,
  )
}

export async function _spellCheck(
  rapidApiKey: string,
  text: string,
): Promise<AxiosResponse<unknown> | Error> {
  const header = await headerWebSearch(rapidApiKey)
  return await performGetRequest(
    websearchrapidapi,
    "/api/spelling/SpellCheck",
    { text: text },
    header,
  )
}

export async function _webSearch(
  rapidApiKey: string,
  options: WebImageSearchWebSearch,
  q: string,
  pageNumber: string,
  pageSize: string,
  autoCorrect: string,
): Promise<AxiosResponse<unknown> | Error> {
  const header = await headerWebSearch(rapidApiKey)
  const params = Object.assign(
    {
      q: q,
      pageNumber: pageNumber,
      pageSize: pageSize,
      autoCorrect: autoCorrect,
    },
    { options },
  )
  return await performGetRequest(
    websearchrapidapi,
    "/api/Search/WebSearchAPI",
    params,
    header,
  )
}

export async function _newsSearch(
  rapidApiKey: string,
  options: NewsSearchWebSearch,
  q: string,
  pageNumber: string,
  pageSize: string,
  autoCorrect: string,
): Promise<AxiosResponse<unknown> | Error> {
  const header = await headerWebSearch(rapidApiKey)
  const params = Object.assign(
    {
      q: q,
      pageNumber: pageNumber,
      pageSize: pageSize,
      autoCorrect: autoCorrect,
    },
    { options },
  )
  return await performGetRequest(
    websearchrapidapi,
    "/api/search/NewsSearchAPI",
    params,
    header,
  )
}

export async function _imageSearch(
  rapidApiKey: string,
  options: WebImageSearchWebSearch,
  q: string,
  pageNumber: string,
  pageSize: string,
  autoCorrect: string,
): Promise<AxiosResponse<unknown> | Error> {
  const header = await headerWebSearch(rapidApiKey)
  const params = Object.assign(
    {
      q: q,
      pageNumber: pageNumber,
      pageSize: pageSize,
      autoCorrect: autoCorrect,
    },
    { options },
  )
  return await performGetRequest(
    websearchrapidapi,
    "/api/Search/ImageSearchAPI",
    params,
    header,
  )
}

export async function _autoComplete(
  rapidApiKey: string,
  text: string,
): Promise<AxiosResponse<unknown> | Error> {
  const header = await headerWebSearch(rapidApiKey)
  return await performGetRequest(
    websearchrapidapi,
    "/api/spelling/AutoComplete",
    { text: text },
    header,
  )
}
