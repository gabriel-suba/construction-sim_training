const brain = require('brain.js');
const fs = require('fs');

const minArea = 200;
const maxArea = 2000;

const minOutput = 427350.42;
const maxOutput = 4273504.27;

const generate = {
	randNumber: (min = 0, max = 100) => {
		var difference = max - min;
		var rand = Math.random();
			rand = Math.floor(rand * difference);
			rand = rand + min;
	
		return rand;
	},
	testData: (rate = 23_000) => {
		var arr = [];

		for (let i = 1; i <= 5; i++) {
			var area = i * 200;
			var cost = (area / 10.764) * rate;

			arr.push([ area, parseFloat(cost.toFixed(2)) ]);
		}

		return arr;
	},
	trainingData: (rate = 23_000) => {
		var arr = [];

		for (let i = 1; i <= 10; i++) {
			let area = i * 200;
			let cost = (area / 10.764) * rate;

			arr.push([ area, cost ]);
		}

		return arr;
	}
}

const scaleDownCost = (data) => {	
	var normalizedArea = (data[0] - minArea) / (maxArea - minArea);
	var normalizedOutput = (data[1] - minOutput) / (maxOutput - minOutput);

	return [ parseFloat(normalizedArea.toFixed(3)), parseFloat(normalizedOutput.toFixed(3)) ];
}

const scaleUp = (data) => {
	var scaledUpOutput = data * (maxOutput - minOutput) + minOutput;

	return scaledUpOutput;
}

const testAccuracy = (data, net) => {
	var arr = [];
	var normalized = data.map(scaleDownCost);
	
	for (let i = 0; i < data.length; i++) {
		var input = normalized[i][0];
		var output = data[i][1];
		var prediction = net.run([input]);
		var scaledUp = scaleUp(prediction);

		var absErr = parseFloat(scaledUp.toFixed(2)) - parseFloat(output.toFixed(2));
		var meanErr = (parseFloat(scaledUp.toFixed(2)) + parseFloat(output.toFixed(2))) / 2;
		var relErr = (absErr / meanErr) * 100;

		console.log(
			`
			predicted: ${scaledUp}, 
			actual: ${output}, 
			abs_err: ${absErr},
			rel_err: ${relErr.toFixed(2)}%
			`
		);

		var diff = parseFloat(scaledUp.toFixed(2)) - parseFloat(output.toFixed(2));
		arr.push(diff);
	}
	
	return arr;
}


const trainingData = generate.trainingData().map(scaleDownCost);
const testData = generate.testData();

const config = {
	inputSize: 1,
	outputSize: 1,
	hiddenLayers: [30],
	learningRate: 0.1,
}

const net = new brain.recurrent.LSTMTimeStep(config);

net.train(trainingData, {
	errorThresh: 0.0001,
	log: stats => console.log(stats),
	logPeriod: 1,
	iterations: 1000,
});

// const networkState = net.toJSON();
// fs.writeFileSync('./net/cost_rough_finish.json', JSON.stringify(networkState), 'utf-8');

testAccuracy(testData, net);