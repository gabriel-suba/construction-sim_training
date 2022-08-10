const randomNumber = (min = 0, max = 100) => {
	var difference = max - min;
	var rand = Math.random();
	rand = Math.floor( rand * difference);
	rand = rand + min;

	return rand;
}

const rawData = (multiplier) => {
	var arr = [];

	for (let i = 1; i <= 10; i++) {
		let x = i * 200;
		let y = x * multiplier;
		
		arr.push([ x, y ]);
	}

	return arr;
}

const generateNumber = (min = 0, max = 100) => {
	let difference = max - min;
	let rand = Math.random();
	rand = Math.floor(rand * difference);
	rand = rand + min;

	return rand;
}

const testData = (multiplier) => {
	var arr = [];

	for (let i = 0; i < 5; i++) {
		var x = generateNumber(200, 2000);
		var y = x * multiplier;
	
		arr.push([x, parseFloat(y.toFixed(2))]);
	}

	return arr;
}

module.exports = { randomNumber, rawData, testData };