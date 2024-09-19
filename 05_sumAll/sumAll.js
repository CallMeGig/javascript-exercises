const sumAll = function(num1, num2) {
	let smallerNum = Math.min(num1, num2);
	let largerNum = Math.max(num1, num2);
	let result = 0;
	
	if (smallerNum < 0) {
		return "ERROR";
	} else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
		return "ERROR";
	}

	for (let i = smallerNum; i <= largerNum; i++) {
		result += i;
	}
	return result;
};

// Do not edit below this line
module.exports = sumAll;
