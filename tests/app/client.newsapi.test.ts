import "dotenv/config"
import {
  newsapiEverything,
  newsapiSources,
  newsapiTopHeadlines,
} from "../../src/app/newsapi/client"

jest.setTimeout(10000)

const apiKey = process.env.NEWSAPI_APIKEY

test("News API client has results for Top Headlines", async () => {
  const result = await newsapiTopHeadlines(apiKey)
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("News API - Top Headlines")
  expect(result.result).toBeTruthy()
})

test("News API client has results for Everything", async () => {
  const result = await newsapiEverything(apiKey, 'bitcoin')
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("News API - Everything")
  expect(result.result).toBeTruthy()
})

test("News API client has results for trending", async () => {
  const result = await newsapiSources(apiKey)
  expect(result).toBeInstanceOf(Object)
  expect(result).toHaveProperty("title")
  expect(result).toHaveProperty("result")
  expect(result.title).toBe("News API - Sources")
  expect(result.result).toBeTruthy()
})
