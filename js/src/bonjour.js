class Bonjour {
	constructor(Clock) {
		this.clock = Clock;
	}
	greet(firstName) {
		//Delete Space
		firstName = firstName.trim();

		//1er letter uppercase
		let letterUpCase = firstName.charAt(0).toUpperCase();
		firstName = letterUpCase + firstName.slice(1);

		let hours = this.clock.getHours();
		let hi = "Bonne nuit";
		if (hours >= 6 && hours < 18) hi = "Bonjour";
		else if (hours >= 18 && hours < 23) hi = "Bonsoir";

		return `${hi} ${firstName}`;
	}
}

module.exports = Bonjour;
