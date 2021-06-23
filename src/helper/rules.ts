import { TopHeadlinesNewsAPI } from "../common/types"

export async function topheadlinesApplyRules(
  params: TopHeadlinesNewsAPI,
): Promise<TopHeadlinesNewsAPI> {
  if (params.pageSize) {
    const pageSize = parseInt(params.pageSize, 10)
    if (pageSize > 100) {
      params.pageSize = "100"
    } else if (pageSize < 1) {
      params.pageSize = "1"
    }
  }
  if (params.country || params.category) {
    params.sources = null
  }
  if (
    params.sources === null &&
    params.country === null &&
    params.category === null &&
    params.q === null
  ) {
    params.country = "us"
  }
  return params
}
