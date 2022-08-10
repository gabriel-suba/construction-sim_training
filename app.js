const architectural = require('./data/architectural.js');
const concreting = require('./data/concreting.js');
const cost = require('./data/cost.js');
const masonry = require('./data/masonry.js');
const painting = require('./data/painting.js');
const reinforced = require('./data/reinforced.js');
const brain = require('brain.js');
const fs = require('fs');

const testingData = [
	{
		input: 'I would like to know the cost to build a house',
		output: 'Construction-Cost',
	},
	{ 
		input: 'how much paint do i need',
		output: 'Painting'
	},
	{
		input: 'I want to install tiles for my bedroom',
		output: 'Architectural',
	},
	{
		input: 'How many chb do i need for any project',
		output: 'Masonry',
	},
	{
		input: 'give me an estimate for concrete sink',
		output: 'Concreting',
	},
	{
		input: 'i want to paint my wall',
		output: 'Painting',
	},
	{
		input: 'How much will it cost to build a house',
		output: 'Construction-Cost',
	},
	{
		input: 'i need to know how many steel bars there are',
		output: 'Reinforcement-Works',
	},
];

const trainingData = [
	...architectural,
	...concreting,
	...cost,
	...masonry,
	...painting,
	...reinforced,
];

const tempData = [ // temporary testing data
	{
		input: 'please provide a house cost estimate',
		output: 'Construction-Cost',
	},
	{ 
		input: 'i want to know the quantity of paint',
		output: 'Painting'
	},
	{
		input: 'estimate the number of tiles',
		output: 'Architectural',
	},
	{
		input: 'give me a rough estimate for hollow blocks',
		output: 'Masonry',
	},
	{
		input: 'determine the quantity of concrete',
		output: 'Concreting',
	},
	{
		input: 'determine the pieces of steel bars',
		output: 'Reinforcement-Works',
	},
	// below are new
	{
		input: 'determine the steel bar quantity',
		output: 'Reinforcement-Works',
	},
	{
		input: 'figure out the total amount of concrete',
		output: 'Concreting',
	},
	{
		input: 'figure out the number of hollow blocks',
		output: 'Masonry',
	},
	{
		input: 'calculate the number of tiles',
		output: 'Architectural',
	},
	{ 
		input: 'calculate the liters of paint',
		output: 'Painting'
	},
	{
		input: 'please provide a cost estimate for a house',
		output: 'Construction-Cost',
	},
];

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
	log: (stats) => console.log(stats),
	logPeriod: 20,
	errorThresh: 0.009, 
	iterations: 1000,
})

const networkState = net.toJSON();
fs.writeFileSync('./net/pretrained.json', JSON.stringify(networkState), 'utf-8');

// 91.66% at 800 epochs

const netAccuracy = () => {
	let hit = 0;
	for (let i = 0; i < tempData.length; i++) {
		let curr = tempData[i];
		let prediction = net.run(curr.input);

		if (prediction === curr.output) {
			hit++;
		}

		// console.log("current input:", curr.input);
		console.log("expected output:", curr.output, "prediction:", prediction)
	}

	return (hit / tempData.length) * 100;
}

console.log(netAccuracy());

// clean the data
// add training data for phrases:
// detemine the -, figure out the -,