import toNumber from "../src/toNumber.js";
import { expect } from "chai";

describe("toNumber", function() {
    it("should return the same number for a numeric input", function() {
        expect(toNumber(3.2)).to.equal(3.2);
        expect(toNumber(-42)).to.equal(-42);
        expect(toNumber(0)).to.equal(0);
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
        expect(toNumber(Infinity)).to.equal(Infinity);
        expect(toNumber(-Infinity)).to.equal(-Infinity);
    });

    it("should convert numeric strings to numbers", function() {
        expect(toNumber("3.2")).to.equal(3.2);
        expect(toNumber("42")).to.equal(42);
        expect(toNumber("0")).to.equal(0);
        expect(toNumber("  15  ")).to.equal(15);
        expect(toNumber("10  ")).to.equal(10);
        expect(toNumber("  20")).to.equal(20);
    });

    it("should handle binary, octal, and hexadecimal strings", function() {
        expect(toNumber("0b1010")).to.equal(10);
        expect(toNumber("0o77")).to.equal(63);
        expect(toNumber("0x1F")).to.equal(31);
    });

    it("should return NaN for invalid numeric strings", function() {
        expect(toNumber("abc")).to.be.NaN;
        expect(toNumber("0xZZ")).to.be.NaN;
        expect(toNumber("0b102")).to.be.NaN;
        expect(toNumber("0o89")).to.be.NaN;
    });

    it("should convert objects with a valid valueOf method", function() {
        const obj = {
            valueOf: () => 42,
        };
        expect(toNumber(obj)).to.equal(42);
    });

    it("should handle objects with no valid valueOf method", function() {
        expect(toNumber({})).to.be.NaN;
    });


    it("should return NaN for Symbol inputs", function() {
        expect(toNumber(Symbol("test"))).to.be.NaN;
    });

    // Test special values
    it("should return NaN for null and undefined", function() {
        expect(toNumber(null)).to.equal(0);
        expect(toNumber(undefined)).to.be.NaN;
    });

    it("should handle boolean values", function() {
        expect(toNumber(true)).to.equal(1);
        expect(toNumber(false)).to.equal(0);
    });

    it("should convert single-element numeric arrays", function() {
        expect(toNumber([42])).to.equal(42);
        expect(toNumber(["3.2"])).to.equal(3.2);
    });

    it("should return NaN for multi-element or empty arrays", function() {
        expect(toNumber([1, 2, 3])).to.be.NaN;
        expect(toNumber([])).to.equal(0);
    });

    it("should handle values close to zero for both positive and negative", function() {
        expect(toNumber(0.0000000000001)).to.equal(0.0000000000001);
        expect(toNumber(-0.0000000000001)).to.equal(-0.0000000000001);
    });

    it("should return NaN for BigInt values", function() {
        expect(() => toNumber(42n)).to.throw(TypeError);
    });
})