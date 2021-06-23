import "dotenv/config"
import {
  wsAutoComplete,
  wsImageSearch,
  wsNewsSearch,
  wsSpellCheck,
  wsTrendingNews,
  wsWebSearch,
} from "../../src/app/websearch/client"

jest.setTimeout(10000)

const apiKey = process.env.RAPIDAPI_APIKEY

test("Web Search Client has results for Auto Complete", async () => {
  const result = await wsAutoComplete(apiKey, "do")
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("Web Search - Auto Complete")
  expect(result.result).toBeTruthy()
})

test("Web Search Client has results for Image Search", async () => {
  const result = await wsImageSearch(apiKey, "taylor swift", "1", "10", "true")
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("Web Search - Image Search")
  expect(result.result).toBeTruthy()
})

test("Web Search Client has results for News Search", async () => {
  const result = await wsNewsSearch(apiKey, "taylor swift", "1", "10", "true")
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("Web Search - News Search")
  expect(result.result).toBeTruthy()
})

test("Web Search Client has results for Spell Check", async () => {
  const result = await wsSpellCheck(apiKey, "teylor swiift")
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("Web Search - Spell Check")
  expect(result.result).toBeTruthy()
})

test("Web Search Client has results for Trending News", async () => {
  const result = await wsTrendingNews(apiKey, "1", "10")
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("Web Search - Trending")
  expect(result.result).toBeTruthy()
})

test("Web Search Client has results for Web Search", async () => {
  const result = await wsWebSearch(apiKey, "taylor swift", "1", "10", "true")
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("Web Search - Web Search")
expect(result.result).toBeTruthy()
})
