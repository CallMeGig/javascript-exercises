const removeFromArray = function(arr) {
	let result = [];
	const numsToRemove = Array.from(arguments).slice(1);
	for (value of arr) {
		if (numsToRemove.includes(value)) {
			continue;
		} else {
			result.push(value);
		}
	}
	return result;
};

// Do not edit below this line
module.exports = removeFromArray;
