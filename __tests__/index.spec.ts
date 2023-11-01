import { sample } from "@randybinondo/typescript-module";

describe("Sample Typescript Module", () => {
  it("runs", () => {
    const name = 'testname'
    const result = sample`test run here${name}`

    expect(result).toBe(`string: test run here, first parameter: ${name}`)
  })
})