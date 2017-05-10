const FG_RED = '\x1b[31m';
const FG_GREEN = '\x1b[32m';
const FG_CYAN = '\x1b[36m';
const BG_RED = '\x1b[41m';
const RESET = '\x1b[0m';

function assert(title, actual, expect){
	if(actual === expect){
		console.log(`${FG_GREEN} => ${title}${RESET}`);
	}else{
		console.log(`${BG_RED} => ${title}${RESET}`);
		console.log(`${FG_CYAN} - actual: ${actual}${RESET}`);
		console.log(`${FG_RED} - expect: ${expect}${RESET}`);
	}
}

function test(describe, callback){
	console.log(`-------------------------------------`);
	console.log(`# ${describe}`);
	
	callback();
}
/*
test('더하기 테스트', () => {
	assert('1 + 2 = 3', 1+2, 3);
	assert('12 + 8 = 20', 12+8, 20);
	assert('5 + 4 = 10', 5+4, 10);
});
*/

const isString = require('../fn/isString');
const isNumber = require('../fn/isNumber');
const isBoolean = require('../fn/isBoolean');
const isNull = require('../fn/isNull');
const isUndefined = require('../fn/isUndefined');
const isSymbol = require('../fn/isSymbol');
const isObject = require('../fn/isObject');
const isArray = require('../fn/isArray');
const isFunction = require('../fn/isFunction');

test('문자열 타입여부를 확인할수있다.', () => {
	assert('문자열을 전달하면 true 반환', isString('abc'), true);
	assert('숫자를 전달하면 false 반환', isString(123), false);
	assert('객체를 전달하면 false 반환', isString(Object()), false);
	assert('문자열 객체를 전달하면 true 반환', isString(new String('abc')), true);	
});

test('숫자 타입여부를 확인할 수 있다.', () => {
	assert('숫자를 전달하면 true 반환', isNumber(123), true);
	assert('문자열을 전달하면 false 반환', isNumber('abc'), false);
	assert('숫자객체를 전달하면 true 반환', isNumber(new Number(123)),true);
});

test('불리언 타입 여부를 확인할 수 있다.', () =>{
	assert('불리언을 전달하면 true가 반환', isBoolean(true), true);
	assert('문자열을 전달하면 fase가 반환', isBoolean('abc'), false);
	assert('불리언 객체를 전달 전달하면 ture가 반환', isBoolean(new Boolean(0)), true);
});

test('널 타입 여부를 확인할 수 있다.', () => {
	assert('널을 전달하면 ture 반환', isNull(null), true);
	assert('undefined를 전달하면 false 반환', isNull(undefined), false);
});

test('undefined 타입 여부를 확인할 수 있다.', () =>{
	assert('undefined를 전달하며 true가 반환', isUndefined(undefined), true);
	assert('null를 전달하며 false가 반환', isUndefined(null), false);
});

test('Symbol 타입 여부를 확인할 수 있다', () =>{
	assert('Symbol를 전달하며 true 반환', isSymbol(Symbol()), true);
	assert('문자열을 전달하면 false 반환', isSymbol('abc'), false);
	assert('Symbol 객체 전달하며 true 반환', isSymbol(Object(Symbol())), true);
});

test('객체 타입 여부를 확인할 수 잇다.', () =>{
	assert('객체를 전달하면 true 반환', isObject(Object()), true);
	assert('객체 리터럴 전달하면 true 반환', isObject(Object({})), true);
	assert('배열을 전달하면 true 반환', isObject(Object([])), true);
	assert('문자열을 전달하면 false 반환', isObject('abc'), false);
	assert('널을 전달하면 false 반환', isObject(null), false);
	assert('함수 전달하면 true 반환', isObject(Function), true);
});

test('배열 타입 여부를 확인할 수 있다.', () =>{
	assert('배열을 전달하면 true가 반환된다.', isArray(Array()), true);
	assert('배열 리터럴 전달하면 true가 반환된다.', isArray([]), true);
	assert('함수를 전달하면 false가 반환된다.', isArray(function(){}), false);
	assert('문자열를 전달하면 false가 반환된다.', isArray('abc'), false);
});

test('함수 타입 여부를 확인할 수 있다.', () =>{
	assert('생성자를 전달하면 true 반환 ', isFunction(Function), true);
	assert('함수를 전달하면 true 반환 ', isFunction(function(){}), true);
	assert('객체를 전달하면 false 반환 ', isFunction(""), false);
	assert('숫자를 전달하면 false 반환 ', isFunction(1234), false);
});
