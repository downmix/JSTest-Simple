function getType(value){
	const of = typeof value;
	const tag = Object.prototype.toString.call(value);
	
	return {
		of, tag
	};
}

module.exports = getType;
