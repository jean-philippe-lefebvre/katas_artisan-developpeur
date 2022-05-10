const { assert}  = require('chai')
const Bonjour = require('../src/bonjour.js')

class MockClock {
	constructor(hours){
		this.hours = hours
	}
	getHours(){
		return this.hours
	}
}

describe('Bonjour', function() {
    let bonjour;
		let clock;

    beforeEach(function() {
			clock = new Date()
      bonjour = new Bonjour(clock);
    });

		it('should say hi #1', () => {
			assert.equal(bonjour.greet('Jean'), 'Bonjour Jean')
		});
		it('should say hi without espace around the name #2', () => {
			assert.equal(bonjour.greet(' Thomas  '), 'Bonjour Thomas')
		});
		it('should say hi with first letter of name in uppercase #3', () => {
			assert.equal(bonjour.greet(' mathis '), 'Bonjour Mathis')
		});

		it('should say hi only between 6h and 18h #4', () => {
			bonjour = new Bonjour(new MockClock(15))
			assert.equal(bonjour.greet(' pierre '), 'Bonjour Pierre')
		});
		it('should say good evening only between 18h and 23h #5', () => {
			bonjour = new Bonjour(new MockClock(18))
			assert.equal(bonjour.greet(' rodrigo '), 'Bonsoir Rodrigo')
		});
		it('should say good night only between 23h and 6h #6', () => {
			bonjour = new Bonjour(new MockClock(23))
			assert.equal(bonjour.greet(' peneloppe '), 'Bonne nuit Peneloppe')
		});


});
