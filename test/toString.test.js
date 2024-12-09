import toString from "../src/toString.js";
import { expect } from "chai";

describe("toString", function() {
    it("should convert number to string", function() {
        expect(toString(2)).to.equal("2");
        expect(toString(123)).to.equal("123");
        expect(toString(-4)).to.equal("-4");
    });

    it("should convert array of numbers to string", function() {
        expect(toString([1, 2, 3])).to.equal("1,2,3");
    });

    it('should handle nested arrays', () => {
        expect(toString([1, [2, [3]]])).to.equal('1,2,3');
    });

    it("should return an empty string when the input is null", function() {
        expect(toString(null)).to.equal('');       // failing test, expected '' but got 'null'
    });

    it("should return the same string when the input is string", function() {
        expect(toString("test")).to.equal("test");
    });

    it('should return an empty string for undefined', () => {
        expect(toString(undefined)).to.equal('');   // failing test, expected '' but got 'undefined'
    });

    it('should handle arrays containing null and undefined', () => {
        expect(toString([1, null, undefined, 3])).to.equal('1,,,3');
    });

    it('should preserve the sign of -0', () => {
        expect(toString(-0)).to.equal('-0');
    });

    it("should return '0' for 0", function() {
        expect(toString(0)).to.equal("0");
    });

    it('should handle an empty array', () => {
        expect(toString([])).to.equal('');
    });

    // those are some special values

    it("should return 'Infinity' for Infinity", function() {
        expect(toString(Infinity)).to.equal("Infinity");
    });

    it("should return '-Infinity' for -Infinity", function() {
        expect(toString(-Infinity)).to.equal("-Infinity");
    });

    it("should return 'NaN' for NaN", function() {
        expect(toString(NaN)).to.equal("NaN");
    });
})