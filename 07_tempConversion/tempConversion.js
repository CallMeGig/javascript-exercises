// converts temperature from fahrenheit to celsius
const convertToCelsius = function(tempF) {
	let tempC = (tempF - 32) * (5/9);
	// round to one decimal
	tempC = Math.round(tempC * 10) / 10;
	return tempC;
};

// converts temperature from celsius to fahrenheit
const convertToFahrenheit = function(tempC) {
	let tempF = tempC * (9/5) + 32;
	tempF = Math.round(tempF * 10) / 10;
	return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
