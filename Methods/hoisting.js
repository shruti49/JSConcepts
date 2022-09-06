//* Vaiables declared with let and cont keyword are not hoisted 
//? because let and cont variables have seperate scope

console.log(letValue, constValue); //! Uncaught ReferenceError: Cannot access'letValue, 
								   //! constValue' before initialization
const constValue = "hey";
let letValue = "hellow";

getName();
getName1(); //not a function
getName2(); //not a function

console.log(getName);
console.log(getName1); //undefined
console.log(getName2); //undefined


console.log(x); //undefined
console.log(y); //not defined
z = 10;
console.log(z); //10

function getName() {
	console.log("first function");
}

var getName1 = function () {
	console.log("second function");
};

var getName2 = () => {
	console.log("third function");
};

var x = 9;
var z;

var bar = 10;
var bar;
console.log(bar);

myfunction();
var myfunction = function () {
	console.log("moon");
};
myfunction();
function myfunction() {
	console.log("sun");
}
myfunction();

console.log(foo());
function foo() {
	var bar = function () {
		return 3;
	};
	return bar();
	var bar = function () {
		return 8;
	};
}

var foo = 100;

function baz() {
	var foo = 200;
	return;

	function foo() {}
}
//baz();
console.log(baz());
console.log(foo);
