import capitalize from "../src/capitalize.js";
import { expect } from "chai";

describe("capitalize", function() {
    it("it should capitalize the first letter", function() {
        expect(capitalize("software")).to.equal("Software");
    });

    it('should capitalize a single-character string', () => {
        expect(capitalize('f')).to.equal('F');
    });

    it("should capitalize a string with all uppercase letters", function() {
        expect(capitalize("HELLO")).to.equal("Hello");
    });

    it("should capitalize a mix of uppercase letters and lowercase letters", function() {
        expect(capitalize("hELlO")).to.equal("Hello");
    });

    it('should return an empty string when input is an empty string', () => {
        expect(capitalize('')).to.equal('');
    });

    it('should handle boolean input', () => {
        expect(capitalize(true)).to.equal('True');
        expect(capitalize(false)).to.equal('False');
    });

    it('should handle numeric input', () => {
        expect(capitalize(123)).to.equal('123');
    });

    it('should handle null input', () => {
        expect(capitalize(null)).to.equal("Null");
    });

    it('should handle an array input', () => {
        expect(capitalize(["hello"])).to.equal('Hello');
    });

    it('should handle strings with leading or trailing spaces', () => {
        expect(capitalize('  hello')).to.equal('  hello');
        expect(capitalize('hello  ')).to.equal('Hello  ');
    });

    it('should preserve the sign of -0', () => {
        expect(capitalize(-0)).to.equal('-0');
    });

})