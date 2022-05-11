const { assert } = require("chai");
const Cart = require("../src/cart.js");

describe("Cart", function () {
	let cart;
	beforeEach(function () {
		cart = new Cart();
	});

	it("should return 0 when the cart is empty", () => {
		assert.equal(cart.getPrice(), 0);
	});

	it("should return 8 when the cart contain 1 book", () => {
		cart.addBook("À l’école des sorciers");
		assert.equal(cart.getPrice(), 8);
	});

	it("should apply 5% when the cart contain 2 book", () => {
		cart.addBook("À l’école des sorciers");
		cart.addBook("La Chambre des secrets");

		assert.equal(cart.getPrice(), 16 * 0.95);
	});
	it("should apply 10% when the cart contain 3 book", () => {
		cart.addBook("À l’école des sorciers");
		cart.addBook("La Chambre des secrets");
		cart.addBook("Le Prisonnier d'Azkaban");

		assert.equal(cart.getPrice(), 24 * 0.9);
	});
	it("should apply 15% and 5% when the cart contain a lot of 3 book and a lot of 2 books", () => {
		cart.addBook("À l’école des sorciers");
		cart.addBook("La Chambre des secrets");
		cart.addBook("Le Prisonnier d'Azkaban");

		cart.addBook("À l’école des sorciers");
		cart.addBook("La Chambre des secrets");

		assert.equal(cart.getPrice(), 3 * 8 * 0.9 + 2 * 8 * 0.95);
	});
});
