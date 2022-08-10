const rawData = [
	{
		"BuiltUpArea": 431,
		"Cement": 172,
		"Sand": 352,
		"Aggregate": 262,
		"Steel": 1724,
		"Paint": 78,
		"Bricks": 3448,
		"Flooring": 560,
	},
	{
		"BuiltUpArea": 538.20,
		"Cement": 215,
		"Sand": 439,
		"Aggregate": 327,
		"Steel": 2153,
		"Paint": 97,
		"Bricks": 4306,
		"Flooring": 700,
	},
	{
		"BuiltUpArea": 645.80,
		"Cement": 259,
		"Sand": 527,
		"Aggregate": 393,
		"Steel": 2583,
		"Paint": 116,
		"Bricks": 5166,
		"Flooring": 840,
	},
	{
		"BuiltUpArea": 753.50,
		"Cement": 301,
		"Sand": 615,
		"Aggregate": 458,
		"Steel": 3014,
		"Paint": 136,
		"Bricks": 6028,
		"Flooring": 980,
	},
	{
		"BuiltUpArea": 861,
		"Cement": 344,
		"Sand": 703,
		"Aggregate": 523,
		"Steel": 3444,
		"Paint": 156,
		"Bricks": 6888,
		"Flooring": 1119,
	},
	{
		"BuiltUpArea": 969,
		"Cement": 387,
		"Sand": 791,
		"Aggregate": 589,
		"Steel": 3876,
		"Paint": 174,
		"Bricks": 7752,
		"Flooring": 1260,
	},
	{
		"BuiltUpArea": 1076,
		"Cement": 430,
		"Sand": 878,
		"Aggregate": 654,
		"Steel": 4304,
		"Paint": 194,
		"Bricks": 8608,
		"Flooring": 1399,
	},
	{
		"BuiltUpArea": 1184,
		"Cement": 474,
		"Sand": 966,
		"Aggregate": 719,
		"Steel": 4736,
		"Paint": 213,
		"Bricks": 9472,
		"Flooring": 1539,
	},
	{
		"BuiltUpArea": 1292,
		"Cement": 517,
		"Sand": 1054,
		"Aggregate": 786,
		"Steel": 5168,
		"Paint": 233,
		"Bricks": 10336,
		"Flooring": 1679,
	},
	{
		"BuiltUpArea": 1399,
		"Cement": 560,
		"Sand": 1142,
		"Aggregate": 851,
		"Steel": 5596,
		"Paint": 252,
		"Bricks": 11192,
		"Flooring": 1819,
	},
];

const cementData = [ // bua = builtup area
	{ input: { bua: 431 }, output: { cement: 172 } },
	{ input: { bua: 538.20 }, output: { cement: 215 } },
	{ input: { bua: 645.80 }, output: { cement: 259 } },
	{ input: { bua: 753.50 }, output: { cement: 301 } },
	{ input: { bua: 861 }, output: { cement: 344 } },
	{ input: { bua: 969 }, output: { cement: 387 } },
	{ input: { bua: 1076 }, output: { cement: 430 } },
	{ input: { bua: 1184 }, output: { cement: 474 } },
	{ input: { bua: 1292 }, output: { cement: 517 } },
	{ input: { bua: 1399 }, output: { cement: 156072 } },
]

const scaleDownCement = (step) => {
	var min = 431;
	var max = 1399;

	return {
		input: { bua: (step.input.bua - min) / (max - min) },
		output: { cement: (step.output.cement - min) / (max - min) }
	}
}

const normalized = cementData.map(scaleDownCement)

console.log("normalized data: ", normalized)

const scaleupCement = (step) => {
	var min = 431;
	var max = 1399;

	// return {
	// 	input: { bua: (step.input * (max - min)) + min },
	// 	output: { cement:(step.output * (max - min)) + min }
	// }

	return (step * (max - min)) + min
}

// console.log("denormalized output: ", scaleupCement(normalized[0]))

// const net = new brain.NeuralNetwork();

// net.train(normalized, { learningRate: 0.005, errorThresh: 0.01, log: (stats) => console.log(stats), logPeriod: 500 });

// const prediction = net.run({ bua: 530 })
// console.log(prediction)
// console.log(scaleupCement(prediction.cement))


const normalize = (step) => {
	var min = 431;

	return {
		BuiltUpArea: step.BuiltUpArea / min,
		Cement:  step.Cement / min,
		Sand: step.Sand / min,
		Aggregate: step.Aggregate / min,
		Steel: step.Steel / min,
		Paint: step.Paint / min,
		Bricks: step.Bricks / min,
		Flooring: step.Flooring / min,
	}
}

const denormalize = (step) => {
	var min = 431;

	return {
		BuiltUpArea: step.BuiltUpArea * min,
		Cement:  step.Cement * min,
		Sand: step.Sand * min,
		Aggregate: step.Aggregate * min,
		Steel: step.Steel * min,
		Paint: step.Paint * min,
		Bricks: step.Bricks * min,
		Flooring: step.Flooring * min,
	}
}

// const scaledData = rawData.map(normalize);

// const trainingData = [
// 	scaledData.slice(0, 5),
// 	scaledData.slice(5),
// ]

// console.log(trainingData);

// const net = new brain.recurrent.LSTMTimeStep({
// 	// inputSize: 2,
// 	// outputSize: 2,
//   	// hiddenLayers: [4],
// });

// net.train(trainingData, { learningRate: 0.005, errorThresh: 0.02, log: (stats) => console.log(stats), iterations: 2000 });

// console.log(denormalize(net.run(trainingData[0])))
// console.log(trainingData[0])
// console.log(trainingData[1])