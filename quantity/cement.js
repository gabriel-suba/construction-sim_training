const scaleDown = require('../util/scaleDown');
const testAccuracy = require('../util/testAccuracy');
const generate = require('../util/generate');
const brain = require('brain.js');
const fs = require('fs');

const data = generate.rawData(0.4);
const testData = generate.testData(0.4);
const trainingData = data.map(scaleDown);

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
	iterations: 1500,
});

// const networkState = net.toJSON();
// fs.writeFileSync('../net/pretrained_cement.json', JSON.stringify(networkState), 'utf-8');

const output = testAccuracy(testData, net);
const avgDiff = output.reduce((a,b) => a + b, 0) / output.length;
console.log(output);
console.log(avgDiff);