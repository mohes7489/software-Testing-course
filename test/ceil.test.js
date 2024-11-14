import ceil from "../src/ceil.js"
import { expect } from "chai";

describe("ceil", function() {
    it("it should round the number up", function() {
        expect(ceil(5.05)).to.equal(6);
    });

    it("it should round up the number with twp decimal points", function() {
        expect(ceil(6.004, 2)).to.equal(6.01);
    });

    it("it should round up the number with twp decimal points when the precision is negative", function() {
        expect(ceil(6040, -2)).to.equal(6100);
    });

    it("it should return the same integer if an integer is provided", function() {
        expect(ceil(6)).to.equal(6);
    });

    it("it should round up to a whole integer (positive value)", function() {
        expect(ceil(0.1)).to.equal(1);
    });

    it("it should round up to a whole integer (negative value)", function() {
        expect(ceil(-1.05)).to.equal(-1);
    });

    it("should round up negative numbers with precision", function() {
        expect(ceil(-6.804, 2)).to.equal(-6.8);
    });
})