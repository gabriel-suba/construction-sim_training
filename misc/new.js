const cementData = [ // bua -> builtup area
	{ input: { bua: 500 }, output: { cement: 200 } },
	{ input: { bua: 1000 }, output: { cement: 400 } },
	{ input: { bua: 1500 }, output: { cement: 600 } },
	// { input: { bua: 2000 }, output: { cement: 800 } },
	// { input: { bua: 2500 }, output: { cement: 1000 } },
	// { input: { bua: 969 }, output: { cement: 387 } },
	// { input: { bua: 1076 }, output: { cement: 430 } },
	// { input: { bua: 1184 }, output: { cement: 474 } },
	// { input: { bua: 1292 }, output: { cement: 517 } },
	// { input: { bua: 1399 }, output: { cement: 156072 } },
]

const minBua = 431;
const maxBua = 1399;

const minCement = 172;
const maxCement = 156072;


// scaleUp function
const scaleUp = (step) => {
	var min = 431;
	var max = 1399;

	return (step * (maxCement - minCement)) + minCement;
}

// scaleUpArray
const scaleUpArray = (step) => {
	var min = 431;
	var max = 1399;
	
	return {
		input: { bua: (step.input.bua * (maxBua - minBua)) + minBua },
		output: { cement:(step.output.cement * (maxCement - minCement)) + minCement }
	}
}

// scalelDown array function
const scaleDownArray = (step) => {
	var min = 431;
	var max = 1399;

	// console.log((step.input.bua - minBua) / (maxBua - minBua))

	return {
		input: { bua: (step.input.bua - minBua) / (maxBua - minBua) },
		output: { cement: (step.output.cement - minCement) / (maxCement - minCement) }
	}
}

// scaleDown function
const scaleDown = (num) => {
	var min = 431;
	var max = 1399;

	// console.log((num - minBua) / (maxBua - minBua))

	return (num - minBua) / (maxBua - minBua);
}

console.log("pre-normalized data: ", cementData);

const normalizedData = cementData.map(scaleDownArray);
console.log("normalized data: ", normalizedData);

const denormalizedData = normalizedData.map(scaleUpArray);
console.log("denormalized data: ", denormalizedData)


const net = new brain.NeuralNetwork();
net.train(normalizedData, {
	log: (stats) => console.log(stats), 
	logPeriod: 200, 
	errorThresh: 0.00001, 
	iterations: 50000,
	learningRate: 0.01
});

const input = scaleDown(500); // = 200

const output = net.run({ bua: 0.07128099173553719 });
console.log(output)
console.log("normalized", output.cement)
console.log("denormalized", scaleUp(output.cement))