const getType = require('../utils/getType');

function isUndefined(value){
	const type = getType(value);
	return type.of === 'undefined';
}

module.exports = isUndefined;