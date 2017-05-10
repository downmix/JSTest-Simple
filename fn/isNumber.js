const getType = require('../utils/getType');

function isNumber(value){
	/*
	const type = typeof value;
	const tag = Object.prototype.toString.call(value);
	
	return type === 'number' || (type === 'object' && tag === '[object Number]');
	*/
	
	const type = getType(value);
	return type.of === 'number' || (type.of === 'object' && type.tag === '[object Number]');
}

module.exports = isNumber;