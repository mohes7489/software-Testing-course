import drop from "../src/drop.js";
import { expect } from "chai";

describe("drop", function() {
    it("should return an empty array when input is an empty array", function() {
        expect(drop([])).to.deep.equal([]);
    });

    it("should return an empty array when input is null or undefined", function() {
        expect(drop(null)).to.deep.equal([]);
        expect(drop(undefined)).to.deep.equal([]);
    });

    it("should drop 1 element by default", function() {
        expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
    });

    it("should drop 2 elements when n is 2", function() {
        expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
    });

    it("should return an empty array when n is greater than the array length", function() {
        expect(drop([1, 2, 3], 5)).to.deep.equal([]);
    });

    it("should return the original array when n is 0", function() {
        expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
    });

    it("should return the original array when n is negative", function() {
        expect(drop([1, 2, 3], -1)).to.deep.equal([1, 2, 3]);
    });

    it("should handle arrays with one element", function() {
        expect(drop([1], 1)).to.deep.equal([]);
    });

    it("should handle arrays with one element and n greater than 1", function() {
        expect(drop([1], 2)).to.deep.equal([]);
    });

    it("should handle empty array even when n is large", function() {
        expect(drop([], 100)).to.deep.equal([]);
    });

    it("should handle non-integer n values by converting them to integers", function() {
        expect(drop([1, 2, 3], 2.5)).to.deep.equal([3]);
    });

    it("should treat non-numeric n as 0", function() {
        expect(drop([1, 2, 3], "a")).to.deep.equal([1, 2, 3]);
        expect(drop([1, 2, 3], NaN)).to.deep.equal([1, 2, 3]);
    });

})