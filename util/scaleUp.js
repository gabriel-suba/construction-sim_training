const scaleUp = (input, min, max) => {
	return input * (max - min) + min;
}

module.exports = scaleUp;