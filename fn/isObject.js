const getType = require('../utils/getType');
const isNull = require('./isNull');

function isObject(value){
	const type = getType(value);
	
	//return type.of === 'object' && value !== null;
	return (type.of === 'object' || type.of === 'function') && !isNull(value);
}

module.exports = isObject;