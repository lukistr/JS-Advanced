import { expect } from 'chai';
import { mathEnforcer } from '../mathEnforcer.js';

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined for non-number input', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });

        it('should return correct result for positive numbers', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });

        it('should return correct result for negative numbers', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });

        it('should return correct result for floating-point numbers', () => {
            expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
            expect(mathEnforcer.addFive(-5.5)).to.be.closeTo(-0.5, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined for non-number input', () => {
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });

        it('should return correct result for positive numbers', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });

        it('should return correct result for negative numbers', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });

        it('should return correct result for floating-point numbers', () => {
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
            expect(mathEnforcer.subtractTen(-10.5)).to.be.closeTo(-20.5, 0.01);
        });
    });

    describe('sum', () => {
        it('should return undefined for non-number first parameter', () => {
            expect(mathEnforcer.sum('10', 10)).to.be.undefined;
            expect(mathEnforcer.sum(null, 10)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 10)).to.be.undefined;
            expect(mathEnforcer.sum({}, 10)).to.be.undefined;
            expect(mathEnforcer.sum([], 10)).to.be.undefined;
        });

        it('should return undefined for non-number second parameter', () => {
            expect(mathEnforcer.sum(10, '10')).to.be.undefined;
            expect(mathEnforcer.sum(10, null)).to.be.undefined;
            expect(mathEnforcer.sum(10, undefined)).to.be.undefined;
            expect(mathEnforcer.sum(10, {})).to.be.undefined;
            expect(mathEnforcer.sum(10, [])).to.be.undefined;
        });

        it('should return correct sum for positive numbers', () => {
            expect(mathEnforcer.sum(10, 5)).to.equal(15);
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
        });

        it('should return correct sum for negative numbers', () => {
            expect(mathEnforcer.sum(-10, -5)).to.equal(-15);
            expect(mathEnforcer.sum(-10, 5)).to.equal(-5);
        });

        it('should return correct sum for floating-point numbers', () => {
            expect(mathEnforcer.sum(10.5, 5.5)).to.be.closeTo(16, 0.01);
            expect(mathEnforcer.sum(-10.5, 5.5)).to.be.closeTo(-5, 0.01);
        });
    });
});
