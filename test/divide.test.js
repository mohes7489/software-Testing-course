import divide from "../src/divide.js";
import { expect } from "chai";

describe("divide", function() {
    it("should return 1.5 when divided 6 over 4 ", function() {
        expect(divide(6,4)).to.equal(1.5);
    });
})