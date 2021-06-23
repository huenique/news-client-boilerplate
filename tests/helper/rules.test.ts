import { topheadlinesApplyRules } from "../../src/helper/rules"

test("topheadlinesApplyRules returns object with correct key-value pairs", async () => {
  const data = await topheadlinesApplyRules({
    apiKey: "apikey",
    country: "us",
    category: "technology",
    sources: "us,ph",
    q: "bitcoin",
    pageSize: "-1",
    page: "1",
  })
  expect(data).toStrictEqual({
    apiKey: "apikey",
    country: "us",
    sources: null,
    category: "technology",
    q: "bitcoin",
    pageSize: "1",
    page: "1",
  })
})


test("topheadlinesApplyRules returns appropriate object on null values", async () => {
  const data = await topheadlinesApplyRules({
    apiKey: "apikey",
    country: null,
    category: null,
    sources: null,
    q: null,
    pageSize: "-1",
    page: "1",
  })
  expect(data).toStrictEqual({
    apiKey: "apikey",
    country: "us",
    sources: null,
    category: null,
    q: null,
    pageSize: "1",
    page: "1",
  })
})
