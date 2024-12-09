import countBy from "../src/countBy.js";
import { expect } from "chai";

describe("countBy", function() {
    it("should count items based on the iteratee result", function () {          // failing test
        const users = [
            { user: "barney", active: true },
            { user: "betty", active: true },
            { user: "fred", active: false },
        ];
        const result = countBy(users, (value) => value.active);
        expect(result).to.deep.equal({ true: 2, false: 1 });
    });


    it("should handle arrays of numbers", function () {                          // failing test
        const numbers = [1, 2, 3, 4, 5];
        const result = countBy(numbers, (value) => value % 2 === 0);
        expect(result).to.deep.equal({ false: 3, true: 2 }); // Odd and even numbers
    });


    it("should count occurrences of strings based on their length", function () {    // failing test
        const strings = ["one", "two", "three", "four"];
        const result = countBy(strings, (value) => value.length);
        expect(result).to.deep.equal({ 3: 2, 5: 2 });
    });

    it("should return an empty object for empty collections", function () {
        expect(countBy([], () => true)).to.deep.equal({});
        expect(countBy({}, () => true)).to.deep.equal({});
    });

    it("should handle objects as collections", function () {                         // failing test
        const obj = { a: 1, b: 2, c: 3, d: 4 };
        const result = countBy(obj, (value) => value % 2 === 0);
        expect(result).to.deep.equal({ false: 2, true: 2 });
    });

    it("should support custom iteratee functions", function () {                     // failing test
        const animals = ["cat", "dog", "cow", "duck"];
        const result = countBy(animals, (value) => value.startsWith("d"));
        expect(result).to.deep.equal({ false: 2, true: 2 });
    });

    it("should handle invalid inputs gracefully", function () {
        expect(countBy(null, () => true)).to.deep.equal({});
        expect(countBy(undefined, () => true)).to.deep.equal({});
    });

    it("should correctly handle cases where all elements map to the same key", function () {     // failing test
        const data = [true, true, true];
        const result = countBy(data, (value) => value);
        expect(result).to.deep.equal({ true: 3 });
    });

     it("should correctly count elements when iteratee returns different data types", function () {       // failing test
        const mixed = [1, "1", true, "true", 1];
        const result = countBy(mixed, (value) => typeof value);
        expect(result).to.deep.equal({ number: 2, string: 2, boolean: 1 });
    });
})