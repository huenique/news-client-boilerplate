export async function headerBing(apiKey: string): Promise<{
  "x-bingapis-sdk": string
  "x-rapidapi-key": string
  "x-rapidapi-host": string
  useQueryString: boolean
}> {
  return {
    "x-bingapis-sdk": "true",
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    useQueryString: true,
  }
}

export async function headerWebSearch(apiKey: string): Promise<{
  "x-rapidapi-key": string
  "x-rapidapi-host": string
}> {
  return {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  }
}
