import {genericResults} from '../../src/helper/results'

test("genericResults returns object with correct key-value pairs", async () => {
  const header = await genericResults("Title", {test: "test"})
  expect(header).toStrictEqual({
    title: "Title",
    result: { test: "test" },
  })
})
