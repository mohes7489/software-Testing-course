import toInteger from "../src/toInteger.js";
import { expect } from "chai";

describe("toInteger", function() {
    it("should convert a positive decimal number to an integer", function() {
        expect(toInteger(3.2)).to.equal(3);
    });

    it("should convert a negative decimal number to an integer", function() {
        expect(toInteger(-3.7)).to.equal(-3);
    });

    it("should return the same number if it's already an integer", function() {
        expect(toInteger(5)).to.equal(5);
        expect(toInteger(-5)).to.equal(-5);
    });

    it("should convert Number.MIN_VALUE to 0", function() {
        expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    });

    it("should return the largest safe integer for positive infinity", function() {
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    });

    it("should return the smallest safe integer for negative infinity", function() {
        expect(toInteger(-Infinity)).to.equal(-1.7976931348623157e+308);
    });

    it("should convert a numeric string to an integer", function() {
        expect(toInteger("3.2")).to.equal(3);
        expect(toInteger("42")).to.equal(42);
    });

    it("should return 0 for non-numeric strings", function() {
        expect(toInteger("abc")).to.equal(0);
        expect(toInteger("")).to.equal(0);
    });

    // Those are the special values to be tested
    it("should return 0 for null, undefined, or NaN", function() {
        expect(toInteger(null)).to.equal(0);
        expect(toInteger(undefined)).to.equal(0);
        expect(toInteger(NaN)).to.equal(0);
    });

    it("should convert a single-element numeric array to an integer", function() {
        expect(toInteger([3.8])).to.equal(3);
    });

    it("should return 0 for multi-element or empty arrays", function() {
        expect(toInteger([1, 2, 3])).to.equal(0);
        expect(toInteger([])).to.equal(0);
    });

    it("should return 0 for objects", function() {
        expect(toInteger({})).to.equal(0);
        expect(toInteger({ key: "value" })).to.equal(0);
    });

    it("should handle very large numbers", function() {
        expect(toInteger(1.7976931348623157e+308)).to.equal(1.7976931348623157e+308);
    });

    it("should handle very small numbers", function() {
        expect(toInteger(-1.7976931348623157e+308)).to.equal(-1.7976931348623157e+308);
    });

    it("should handle fractional results when the value is almost an integer", function() {
        expect(toInteger(4.999999999999999)).to.equal(4);
    });
})