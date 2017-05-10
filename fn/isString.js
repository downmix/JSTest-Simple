const getType = require('../utils/getType');

function isString(value){
	//console.log(typeof value);
	/*return typeof value === 'string' || 
		typeof value === 'object' && Object.prototype.toString.call(value) === '[object String]';
	*/
	/*
	const type = typeof value;
	const tag = Object.prototype.toString.call(value);
	
	return type === 'string' || (type === 'object' && tag === '[object String]');
	*/

	const type = getType(value);
	return type.of === 'string' || (type.of === 'object' && type.tag === '[object String]');
	/*
	const {type, tag} = getType(value);
	return type === 'string' || (type === 'object' && tag === '[object String]');
	*/
}

module.exports = isString;