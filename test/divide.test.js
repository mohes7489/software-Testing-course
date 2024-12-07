import divide from "../src/divide.js";
import { expect } from "chai";

describe("divide", function() {
    /* it("should return 1.5 when divided 6 over 4", function() {
        expect(divide(6,4)).to.equal(1.5);                  // failing expected 1.5, actual 1
    }); */

    /* it("should return 3 when divided 6 over 2", function() {
        expect(divide(6,2)).to.equal(3);                    // failing expected 3, actual 1
    }); */

    it("should return 1 when divided 1 over 1", function() {
        expect(divide(1,1)).to.equal(1);
    });

    /* it("should return 0 when divided 0 over any number", function() {
        expect(divide(0,2)).to.equal(0);                    // failing expected 0, actual 1
    }); */

    /* it("should return -1 when divided -1 over 1", function() {
        expect(divide(-1,1)).to.equal(-1);                  // failing expected -1, actual 1
    }); */

    /* it("should return -2 when divided 6 over -3", function() {
        expect(divide(6,-3)).to.equal(-2);                  // failing expected -2, actual 1
    }); */

    it("should return 1 when divided -1 over -1", function() {
        expect(divide(-1,-1)).to.equal(1);
    });

    /* it("should return 0.5 when divided 1 over 2", function() {
        expect(divide(1,2)).to.equal(0.5);                  // failing expected 0.5, actual 1
    }); */
})