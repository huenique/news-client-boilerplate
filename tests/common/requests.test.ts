import { _request, performGetRequest } from "../../src/common/requests"

jest.setTimeout(5000)

test("_request builds a url", async () => {
  const data = await _request(
    "https://searchconsole.googleapis.com",
    "/$discovery/rest",
    { version: "v1" },
  )
  expect(data).toBe(
    "https://searchconsole.googleapis.com/$discovery/rest?version=v1",
  )
})

test("GET request return a response", async () => {
  const data = await performGetRequest(
    "https://searchconsole.googleapis.com",
    "/$discovery/rest",
    { version: "v1" },
    { "accept-encoding": "gzip, deflate, br" },
  )
  expect(data).toBeInstanceOf(Object)
})
