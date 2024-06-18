import { expect } from "chai";
import { isOddOrEven } from "../isOddOrEven.js";
//import * as oddEven from "../isOddOrEven.js";

describe("isOddOrEven", () => {
    //let result = isOddOrEven(5);
    it("Returning undefined", () => {
        expect(isOddOrEven(5)).to.be.undefined;
    });
    //result = isOddOrEven("abcd");
    it('Returning "even"', () => {
        expect(isOddOrEven("abcd")).to.be.equal("even");
    })
    it('Returning "odd"', () => {
        expect(isOddOrEven("abcde")).to.be.equal("odd");
    })
});

describe('isOddOrEven', () => {
    // Test for non-string parameter
    it('should return undefined for non-string parameter (number)', () => {
        expect(isOddOrEven(123)).to.be.undefined;
    });

    it('should return undefined for non-string parameter (object)', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('should return undefined for non-string parameter (array)', () => {
        expect(isOddOrEven([1, 2, 3])).to.be.undefined;
    });

    it('should return undefined for non-string parameter (boolean)', () => {
        expect(isOddOrEven(true)).to.be.undefined;
    });

    // Test for even length string
    it('should return "even" for even length string', () => {
        expect(isOddOrEven('test')).to.equal('even');
    });

    // Test for odd length string
    it('should return "odd" for odd length string', () => {
        expect(isOddOrEven('testing')).to.equal('odd');
    });

    // Test for multiple different strings
    it('should return correct results for multiple strings', () => {
        expect(isOddOrEven('a')).to.equal('odd');
        expect(isOddOrEven('ab')).to.equal('even');
        expect(isOddOrEven('abc')).to.equal('odd');
        expect(isOddOrEven('abcd')).to.equal('even');
        expect(isOddOrEven('abcde')).to.equal('odd');
        expect(isOddOrEven('abcdef')).to.equal('even');
    });
});