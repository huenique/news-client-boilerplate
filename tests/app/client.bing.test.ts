import 'dotenv/config'
import {
  bingCategory,
  bingSearch,
  bingTrending,
} from "../../src/app/bing/client"

jest.setTimeout(10000)

const apiKey = process.env.RAPIDAPI_APIKEY

test("Bing client has results for Trending", async () => {
  const result = await bingTrending(apiKey)
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("Bing — Trending")
  expect(result.result).toBeTruthy()
})

test("Bing client has results for Search", async () => {
  const result = await bingSearch(apiKey, "query")
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("Bing - Search")
  expect(result.result).toBeTruthy()
})

test("Bing client has results for Category", async () => {
  const result = await bingCategory(apiKey)
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("Bing - Category")
  expect(result.result).toBeTruthy()
})
