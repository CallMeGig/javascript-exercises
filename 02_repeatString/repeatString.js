const repeatString = function(string, num) {
	let workingString = "";
	if (num < 0) {
		workingString = "ERROR";
	} else {
		for (let i = 0; i < num; i++) {
			workingString += string;
		}
	}
	return workingString;
};

// Do not edit below this line
module.exports = repeatString;
