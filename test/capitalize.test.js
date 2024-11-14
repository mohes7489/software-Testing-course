import capitalize from "../src/capitalize.js";
import { expect } from "chai";

describe("capitalize", function() {
    it("it should capitalize the first letter", function() {
        expect(capitalize("software")).to.equal("Software");
    })
})