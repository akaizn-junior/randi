const { describe, it } = require('mocha');
const { expect } = require('chai');

const randi = require('./randi');
const randn = require('./randn');

describe('randi tests', () => {
    const defaultSeparator = ' ';
    it('should test randi without a separator', () => {
        const res = randi();
        expect(res).to.contain(defaultSeparator);
    });

    it('should test randi with a separator', () => {
        const res = randi('-');
        expect(res).to.contain('-');
    });

    it('should test randi with an empty string as a separator', () => {
        const res = randi('');
        expect(res).to.contain(defaultSeparator);
    });

    it('should test randi with a null separator', () => {
        const res = randi(null);
        expect(res).to.contain(defaultSeparator);
    });
});

describe('randn tests', () => {
	const defaultMax = 1;
    it('should test randn with default values', () => {
        const res = randn();
        expect(res).to.be.lessThan(defaultMax);
	});

	it('should test randn with max value', () => {
		const max = 50;
        const res = randn(max);
        expect(res).to.be.lessThan(max);
	});

	it('should test randn with max and min values', () => {
		const max = 50;
		const min = 10;
        const res = randn(max, min);
        expect(res).to.be.lessThan(max);
        expect(res).to.not.be.lessThan(min);
    });
});
