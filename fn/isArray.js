const getType = require('../utils/getType');

function isArray(value){
	const type = getType(value);
	return type.of === 'object' || type.tag == '[object Array]';
}

module.exports = isArray;