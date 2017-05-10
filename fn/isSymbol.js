const getType = require('../utils/getType');

function isSymbol(value){
	const type = getType(value);
	return type.of === 'symbol' || (type.of === 'object' && type.tag === '[object Symbol]');
}

module.exports = isSymbol;