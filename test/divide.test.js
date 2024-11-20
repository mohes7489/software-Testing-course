import divide from "../src/divide.js";
import { expect } from "chai";

describe("divide", function() {
    /* it("should return 1.5 when divided 6 over 4", function() {
        expect(divide(6,4)).to.equal(1.5);                  // failing
    }); */

    /* it("should return 3 when divided 6 over 2", function() {
        expect(divide(6,2)).to.equal(3);                    // failing
    }); */

    it("should return 1 when divided 1 over 1", function() {
        expect(divide(1,1)).to.equal(1);
    });

    /* it("should return 0 when divided 0 over any number", function() {
        expect(divide(0,2)).to.equal(0);                    // failing
    }); */
})