import { headerBing, headerWebSearch } from "../../src/helper/headers"

test("headerBing returns object with correct key-value pairs", async () => {
  const header = await headerBing("apikey")
  expect(header).toStrictEqual({
    "x-bingapis-sdk": "true",
    "x-rapidapi-key": "apikey",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    useQueryString: true,
  })
})

test("headerWebSearch returns object with correct key-value pairs", async () => {
  const header = await headerWebSearch("apikey")
  expect(header).toStrictEqual({
    "x-rapidapi-key": "apikey",
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  })
})
