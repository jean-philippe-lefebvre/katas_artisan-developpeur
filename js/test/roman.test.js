const { assert }  = require('chai')
const Roman = require('../src/roman.js')

describe('Roman', function() {
    let roman;
    beforeEach(function() {
        roman = new Roman();
    });

		//TEST ACCEPTANCE
    it('should decode CCCLXIX into integer', () => {
			assert.equal(roman.decode('CCCLXIX'), 369)
		});
    it('should decode CDXLVIII into integer', () => {
			assert.equal(roman.decode('CDXLVIII'), 448)
		});
    it('should decode MCMXCVIII into integer', () => {
			assert.equal(roman.decode('MCMXCVIII'), 1998)
		});

    it('should decode I into integer', () => {
			assert.equal(roman.decode('I'), 1)
		});
    it('should decode V into integer', () => {
			assert.equal(roman.decode('V'), 5)
		});
    it('should decode X into integer', () => {
			assert.equal(roman.decode('X'), 10)
		});
    it('should decode L into integer', () => {
			assert.equal(roman.decode('L'), 50)
		});
    it('should decode C into integer', () => {
			assert.equal(roman.decode('C'), 100)
		});
    it('should decode D into integer', () => {
			assert.equal(roman.decode('D'), 500)
		});
    it('should decode M into integer', () => {
			assert.equal(roman.decode('M'), 1000)
		});

    it('should add I to I in integer', () => {
			assert.equal(roman.decode('II'), 2)
		});
    it('should subtract IV', () => {
			assert.equal(roman.decode('IV'), 4)
		});

});
