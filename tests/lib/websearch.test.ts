import {
  _autoComplete,
  _imageSearch,
  _newsSearch,
  _spellCheck,
  _trendingNews,
  _webSearch,
} from "../../src/lib/websearch"
import "dotenv/config"

jest.setTimeout(10000)

const apiKey = process.env.RAPIDAPI_APIKEY

test("Web Search _trendingNews returns a response", async () => {
  const result = await _trendingNews(
    apiKey,
    {
      withThumbnails: "False",
      location: "us",
    },
    "1",
    "10",
  )
  expect(result).toBeInstanceOf(Object)
})

test("Web Search _spellCheck returns a response", async () => {
  const result = await _spellCheck(apiKey, "teylor swiift")
  expect(result).toBeInstanceOf(Object)
})

test("Web Search _webSearch returns a response", async () => {
  const result = await _webSearch(
    apiKey,
    {
      safeSearch: "False",
    },
    "taylor swift",
    "1",
    "10",
    "True",
  )
  expect(result).toBeInstanceOf(Object)
})

test("Web Search _newsSearch returns a response", async () => {
  const result = await _newsSearch(
    apiKey,
    {
      safeSearch: "False",
      withThumbnails: "False",
      fromPublishedDate: "2021-01-01",
      toPublishedDate: "2021-12-30",
    },
    "taylor swift",
    "1",
    "10",
    "True",
  )
  expect(result).toBeInstanceOf(Object)
})

test("Web Search _imageSearch returns a response", async () => {
  const result = await _imageSearch(
    apiKey,
    {
      safeSearch: "False",
    },
    "taylor swift",
    "1",
    "10",
    "True",
  )
  expect(result).toBeInstanceOf(Object)
})

test("Web Search _autoComplete returns a response", async () => {
  const result = await _autoComplete(apiKey, "taylor swift")
  expect(result).toBeInstanceOf(Object)
})
