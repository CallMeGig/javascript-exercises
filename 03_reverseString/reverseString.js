const reverseString = function(string) {
	const stringArray = string.split("");
	let result = "";

	for (let i = string.length-1; i >=0; i--) {
		result += stringArray[i];
	}
	return result;
};

// Do not edit below this line
module.exports = reverseString;
