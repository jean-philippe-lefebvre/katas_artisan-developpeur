const { assert}  = require('chai')
const Diseur = require('../src/diseur.js')

describe('Diseur', function() {
    let diseur;
    beforeEach(function() {
      diseur = new Diseur();
    });

		it('should say 11 to 1', () => {
			assert.equal(diseur.suivant('1'), 11)
		})
		it('should say 21 to 11', () => {
			assert.equal(diseur.suivant('11'), 21)
		})
		it('should say 1211 to 21', () => {
			assert.equal(diseur.suivant('21'), 1211)
		})
		it('should say 312211 to 111221', () => {
			assert.equal(diseur.suivant('111221'), 312211)
		})
		it('should say 13112221 to 312211', () => {
			assert.equal(diseur.suivant('312211'), 13112221)
		})

});
