//PASSING FUNCTION AS A PARAMETER
// function myfunction(param) {
// 	 console.log(param)
// }

// myfunction(function x() {
// 	console.log("a");
// });

//Both produces error messages
// myfunction(var x = function () { console.log("hey") });
// myfunction(var x = () => { }));

//RETURNING FUNCTION
// function x() {
// 	var a = 10;
// 	function y() {
// 		console.log(a);
// 	}
// 	var a = 30;
// 	return y;
// }

// *******OR********

// function x() {
// 	var a = 10;
// 	return function y() {
// 		var a = 30;
// 		console.log(a);
// 	}
// }

// let result = x();
// console.log(result);
// result();

// function outer() {
// 	var a = 1000;
// 	function out() {
// 		var b = 2000;
// 		function inner() {
// 			var c = 3000;
// 			function innermost() {
// 				console.log(a, b, c);
// 			}
// 			innermost();
// 		}
// 		inner();
// 	}
// 	out();
// }
// outer();

//Use either let or var closures will stil work
// function outer() {
// 	var a = 1000;
// 	console.log(a);
// 	function out() {
// 		var b = 2000;
// 		console.log(a, b);
// 		function inner() {
// 			var c = 3000;
// 			//console.log(a, b, c);
// 			function innermost(d) {
// 				console.log(a, b, c, d);
// 			}
// 			var c = 4000;
// 			var b = 5000; //if uncommented then line 63 gives 
// 			var a = 6000; //undefined due to hoisting during console
// 			return innermost;
// 		}
// 		return inner;
// 	}
// 	return out;
// }
// outer()()()("innermost");

//  var closures = outer()()();
// closures("innermost");


//GOOD AND SCALABLE CODE - data privacy
function Counter() {
	var count  = 0;
	//Constructor function
	this.increCounter = function () {
		count++; //increment
		console.log(count);
	}
	this.decreCounter = function () {
		count--; //decrement
		console.log(count);
	};
}

var Counter1 = new Counter();
Counter1.increCounter();
Counter1.decreCounter();