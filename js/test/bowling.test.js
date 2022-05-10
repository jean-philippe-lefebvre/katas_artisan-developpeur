const { assert}  = require('chai')
const Bowling = require('../src/bowling.js')

describe('Bowling', function() {
    let bowling;
    beforeEach(function() {
        bowling = new Bowling();
    });

  it('should score 300 with perfect game', () => {
			for(let i = 0; i < 12; i++) bowling.roll(10)	
			assert.equal(bowling.score(), 300)
	});

  it('should score 0', () => {
			bowling.roll(0)	
			assert.equal(bowling.score(), 0)
	});
  it('should score 5', () => {
			bowling.roll(5)	
			assert.equal(bowling.score(), 5)
	});
  it('should score 6 in 2 roll', () => {
			bowling.roll(5)	
			bowling.roll(1)	
			assert.equal(bowling.score(), 5+1)
	});
  it('should score 20 spare', () => {
			bowling.roll(5)	
			bowling.roll(5)	
			bowling.roll(5)	
			assert.equal(bowling.score(), (5+5+5)+5)
	});
  it('should score 24 spare', () => {
			bowling.roll(5)	
			bowling.roll(5)	

			bowling.roll(5)	
			bowling.roll(4)	

			bowling.roll(6)	
			bowling.roll(3)	
			assert.equal(bowling.score(), (5+5+5+4+6+3) + 5)
	});
  it('should score 40 strike', () => {
			bowling.roll(5)	
			bowling.roll(2)	

			bowling.roll(10)	

			bowling.roll(6)	
			bowling.roll(3)	
			assert.equal(bowling.score(), (5+2+10+6+3)+(6+3))
	});
  it('should score 48 spare + strike', () => {
			bowling.roll(5)	
			bowling.roll(5)	

			bowling.roll(10)	

			bowling.roll(6)	
			bowling.roll(3)	
			assert.equal(bowling.score(), (5+5+10+6+3)+(10+6+3))
	});
  it('should score 48 strike + spare', () => {
			bowling.roll(10)	

			bowling.roll(5)	
			bowling.roll(5)	

			bowling.roll(6)	
			bowling.roll(3)	
			assert.equal(bowling.score(), (10+5+5+6+3)+(5+5+6))
	});
  it('should score 49 strike + strike', () => {
			bowling.roll(10)	

			bowling.roll(10)	
			bowling.roll(5)	

			bowling.roll(6)	
			bowling.roll(3)	
			assert.equal(bowling.score(), (10+10+5+6+3)+(10+5+5+6))
	});
});
