const scaleDown = require('./scaleDown');
const scaleUp = require('./scaleUp');

const testAccuracy = (data, net) => {
	var arr = [];
	var normalized = data.map(scaleDown);
	
	var max = 2000;
	var min = 200;

	for (let i = 0; i < data.length; i++) {
		var input = normalized[i][0];
		var output = data[i][1];
		var prediction = scaleUp(net.run([input]), min, max);
		var diff = parseFloat(prediction.toFixed(2)) - parseFloat(output.toFixed(2));

		var absErr = parseFloat(prediction.toFixed(2)) - parseFloat(output.toFixed(2));
		var meanErr = (parseFloat(prediction.toFixed(2)) + parseFloat(output.toFixed(2))) / 2;
		var relErr = (absErr / meanErr) * 100;

		console.log(
			`
			predicted: ${prediction}, 
			actual: ${output}, 
			abs_err: ${absErr},
			rel_err: ${relErr.toFixed(2)}%
			`
		);
		
		arr.push(diff);
	}

	return arr;
}

module.exports = testAccuracy;