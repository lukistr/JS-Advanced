import { expect } from "chai";
import { lookupChar } from "../03. Char Lookup.js"

describe("lookupChar", () => {
    it("Returning undefined", () => {
        expect(lookupChar(1234, 'asd')).to.be.undefined;
        expect(lookupChar([1234], [])).to.be.undefined;
        expect(lookupChar([1234], 'asd')).to.be.undefined;
        expect(lookupChar({}, 'asd')).to.be.undefined;
        expect(lookupChar({}, {})).to.be.undefined;
        expect(lookupChar(1234, "2")).to.be.undefined;
    });
    it('Returning an "Incorrect index"', () => {
        expect(lookupChar("abcd", 6)).to.be.equal("Incorrect index");
        expect(lookupChar("abcd", -6)).to.be.equal("Incorrect index");
    })
    it('Returning the char at the specified index', () => {
        expect(lookupChar("abcde", 3)).to.be.equal("d");
    })
});

describe('lookupChar', () => {
    // Test for non-string first parameter
    it('should return undefined for non-string first parameter', () => {
        expect(lookupChar(123, 0)).to.be.undefined;
        expect(lookupChar({}, 0)).to.be.undefined;
        expect(lookupChar([], 0)).to.be.undefined;
        expect(lookupChar(true, 0)).to.be.undefined;
    });

    // Test for non-integer second parameter
    it('should return undefined for non-integer second parameter', () => {
        expect(lookupChar('test', '0')).to.be.undefined;
        expect(lookupChar('test', 1.5)).to.be.undefined;
        expect(lookupChar('test', NaN)).to.be.undefined;
        expect(lookupChar('test', null)).to.be.undefined;
    });

    // Test for index out of bounds
    it('should return "Incorrect index" for out-of-bounds index', () => {
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
        expect(lookupChar('test', 10)).to.equal('Incorrect index');
    });

    // Test for correct index
    it('should return the correct character for valid index', () => {
        expect(lookupChar('test', 0)).to.equal('t');
        expect(lookupChar('test', 1)).to.equal('e');
        expect(lookupChar('test', 2)).to.equal('s');
        expect(lookupChar('test', 3)).to.equal('t');
    });

    // Test for multiple different valid inputs
    it('should return correct results for multiple valid inputs', () => {
        expect(lookupChar('hello', 0)).to.equal('h');
        expect(lookupChar('world', 1)).to.equal('o');
        expect(lookupChar('chai', 2)).to.equal('a');
        expect(lookupChar('mocha', 3)).to.equal('h');
    });
});