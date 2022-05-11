class Bowling {
	constructor() {
		this.points = [];
	}
	roll(pins) {
		this.points.push(pins);
	}
	score() {
		let score = 0;
		let tir = 0;
		let spare = 0;
		let strike = 0;

		for (let i = 0; i < this.points.length; i++) {
			let current = this.points[i];
			let before = this.points[i - 1];
			let bonus = 0;

			// Specifically for the end of the game
			if (i > 9 && strike >= 2) strike = 1;
			if (i > 10) strike = 0;

			//Bonus point
			if (strike || spare) {
				bonus = current;

				if (strike <= 2 && strike != 0) strike--;
				else if (strike == 3) {
					strike = strike - 2;
					bonus = current * 2;
				} else spare = 0;
			}

			score = score + current + bonus;

			// Activation : Strike || Spare
			if (tir == 0 && current == 10) strike = strike + 2;
			if (tir == 1 && current + before == 10) spare = 1;

			tir = tir == 1 || strike >= 2 ? 0 : 1;
		}

		return score;
	}
}

module.exports = Bowling;
