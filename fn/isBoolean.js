const getType = require('../utils/getType');

function isBoolean(value){

	const type = getType(value);
	return type.of === 'boolean' || (type.of === 'object' && type.tag === '[object Boolean]');

}

module.exports = isBoolean;