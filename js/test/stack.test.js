const { assert } = require("chai");
const Stack = require("../src/stack.js");

describe("Stack", function () {
	let stack = null;

	this.beforeEach(() => {
		stack = new Stack();
	});

	it("push should stake the provided value -14", () => {
		stack.push(14);
		assert.equal(stack.pop(), 14);
	});
	it("push should stake the provided value -88", () => {
		stack.push(88);
		assert.equal(stack.pop(), 88);
	});
	it("push should stake FILO style", () => {
		stack.push(16);
		stack.push(61);
		assert.equal(stack.pop(), 61);
		assert.equal(stack.pop(), 16);
	});

	it("count should return the stack size _1", () => {
		stack.push(42);
		assert.equal(stack.count(), 1);
	});
	it("count should return the stack size _3", () => {
		stack.push(42);
		stack.push(11);
		stack.push(39);
		assert.equal(stack.count(), 3);
	});
});
