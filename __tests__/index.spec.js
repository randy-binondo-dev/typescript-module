"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_module_1 = require("@randybinondo/typescript-module");
describe("Sample Typescript Module", () => {
    it("runs", () => {
        const name = 'testname';
        const result = (0, typescript_module_1.sample) `test run here${name}`;
        expect(result).toBe(`string: test run here, first parameter: ${name}`);
    });
});
