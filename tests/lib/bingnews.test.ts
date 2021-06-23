import { _category, _search, _trending } from "../../src/lib/bingnews"
import "dotenv/config"

jest.setTimeout(10000)

const apiKey = process.env.RAPIDAPI_APIKEY

test("Bing _trending returns a response", async () => {
  const result = await _trending(
    {
      count: "1",
      since: "1609430400",
      offset: "0",
      safeSearch: "Off",
      textFormat: "Raw",
      cc: "us",
      mkt: "en-US",
      setLang: "EN",
      textDecorations: "false",
      sortBy: "Date",
    },
    apiKey,
  )
  expect(result).toBeInstanceOf(Object)
})

test("Bing _search returns a response", async () => {
  const result = await _search(
    "taylor swift",
    {
      safeSearch: "Off",
      offset: "0",
      textFormat: "Raw",
      originalImg: "false",
      freshness: "Day",
      mkt: "en-US",
      cc: "us",
      setLang: "EN",
      sortBy: "Date",
      textDecorations: "false",
      count: "1",
    },
    apiKey,
  )
  expect(result).toBeInstanceOf(Object)
})

test("Bing _category returns a response", async () => {
  const result = await _category(
    {
      textFormat: "Raw",
      safeSearch: "Off",
      textDecorations: "false",
      setLang: "EN",
      mkt: "en-US",
      headlineCount: "12",
      cc: "us",
      category: "Sports",
      originalImg: "false",
      offset: "0",
      count: "1",
    },
    apiKey,
  )
  expect(result).toBeInstanceOf(Object)
})
