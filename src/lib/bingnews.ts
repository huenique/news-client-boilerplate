import { AxiosResponse } from "axios"
import { headerBing } from "../helper/headers"
import { CategoryBing, SearchBing, TrendingBing } from "../common/types"
import { performGetRequest } from "../common/requests"

const bingrapidapi = "https://bing-news-search1.p.rapidapi.com"
const defaultParams = { safeSearch: "Off", textFormat: "Raw" }

export async function _trending(
  options: TrendingBing,
  rapidApiKey: string,
): Promise<AxiosResponse<unknown> | Error> {
  const header = await headerBing(rapidApiKey)
  const params = Object.assign(defaultParams, { options })
  return await performGetRequest(
    bingrapidapi,
    "/news/trendingtopics",
    params,
    header,
  )
}

export async function _search(
  q: string,
  options: SearchBing,
  rapidApiKey: string,
): Promise<AxiosResponse<unknown> | Error> {
  const header = await headerBing(rapidApiKey)
  const params = Object.assign(defaultParams, { options }, { q: q })
  return await performGetRequest(bingrapidapi, "/news/search", params, header)
}

export async function _category(
  options: CategoryBing,
  rapidApiKey: string,
): Promise<AxiosResponse<unknown> | Error> {
  const header = await headerBing(rapidApiKey)
  const params = Object.assign(defaultParams, { options })
  return await performGetRequest(bingrapidapi, "/news", params, header)
}
