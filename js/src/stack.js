class Stack {
	constructor() {
		this.value = [];
	}

	push(value) {
		this.value.push(value);
	}

	pop() {
		return this.value.pop();
	}

	count() {
		return this.value.length;
	}
}

module.exports = Stack;
