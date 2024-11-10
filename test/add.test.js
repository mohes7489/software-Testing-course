import { expect } from "chai";
import add from "../src/add.js";


describe('add', function() {
    it('should add two positive numbers', function() {
        expect(add(3, 6)).to.equal(9);
    });

    it('should add two negative numbers', function() {
        expect(add(-2, -4)).to.equal(-6);
    });

    it('should add zero to a numbers', function() {
        expect(add(0, -4)).to.equal(-4);
        expect(add(4, 0)).to.equal(4);
    });

    it('should add negative number to a positive numbers', function() {
        expect(add(-5, 4)).to.equal(-1);
        expect(add(5, -4)).to.equal(1);
    });

    it('should return default value 0 when both arguments are undefined', function() {
        expect(add(undefined, undefined)).to.equal(0);
    });

    it('should return the other number when one argument is undefined', function() {
        expect(add(undefined, 5)).to.equal(5);
        expect(add(4 ,undefined)).to.equal(4);
    });

    it('should concatenate numeric strings', function() {
        expect(add("3", "7")).to.equal("37");
    });

    it('should concatenate non-numeric strings', function() {
        expect(add("abc", 5)).to.equal("abc5");
        expect(add(5, "abc")).to.equal("5abc");
        expect(add("a", "bc")).to.equal("abc");
    });

    it('should return NaN for non-numeric objects', function() {
        expect(add({}, 5)).to.be.NaN;
    });

    it('should add number to onr element numeric array', function() {
        expect(add([2], 5)).to.equal(7);
    });

    it('should return NaN for non-numeric array', function() {
        expect(add([2, 4], 5)).to.be.NaN;
    });

});