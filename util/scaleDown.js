const scaleDown = (data) => {
	var max = 2000;
	var min = 200;
		
	var normalizedInput = (data[0] - min) / (max - min);
	var normalizedOutput = (data[1] - min) / (max - min);

	return [ normalizedInput, normalizedOutput ];
}

module.exports = scaleDown;