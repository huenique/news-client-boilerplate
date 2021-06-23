import { _everything, _sources, _topheadlines } from "../../src/lib/newsapi"
import "dotenv/config"

jest.setTimeout(10000)

const apiKey = process.env.RAPIDAPI_APIKEY

test("News API _everything returns a response", async () => {
  await new Promise((r) => setTimeout(r, 2000))
  const result = await _topheadlines({
    apiKey: apiKey,
    country: "us",
    category: "technology",
    sources: "us",
    q: "Bitcoin",
    pageSize: "20",
    page: "1",
  })
  expect(result).toBeInstanceOf(Object)
})

test("News API _everything returns a response", async () => {
  await new Promise((r) => setTimeout(r, 2000))
  const result = await _everything({
    apiKey: apiKey,
    q: "Bitcoin",
    qInTitle: "bitcoin",
    sources: "us",
    domains: "techcrunch.com",
    excludeDomains: "bbc.co.uk",
    from: "2021-01-01",
    to: "2021-12-30",
    language: "en",
    sortBy: "relevancy",
    pageSize: "20",
    page: "1",
  })
  expect(result).toBeInstanceOf(Object)
})

test("News API _sources returns a response", async () => {
  await new Promise((r) => setTimeout(r, 2000))
  const result = await _sources({
    apiKey: apiKey,
    category: "technology",
    language: "en",
    country: "us",
  })
  expect(result).toBeInstanceOf(Object)
})