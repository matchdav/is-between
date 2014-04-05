module.exports = function between(num, min, max) {
	num = parseFloat(num),
	min = parseFloat(min),
	max = parseFloat(max);
	var equal = num == min || num == max;
	if(isNaN(num) || isNaN(min) || isNaN(max)){
		throw new Error('between() expects numerical input.');
	}
	if(min > max) {
		throw new Error('Not a valid range: ' + max + ' < ' + min + '.');
	}
	var inRange = (num > min && num < max);
	return equal || inRange;
}