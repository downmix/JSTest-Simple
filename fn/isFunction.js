const getType = require('../utils/getType');

function isFunction(value){
	const type = getType(value);
	return type.of === 'function' ;
}

module.exports = isFunction;