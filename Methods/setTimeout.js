// function x() {
// 	for (var i = 1; i <= 5; i++) {
// 		setTimeout(function () {
// 			console.log(i);
// 		}, x * 1000);
// 	}
// }
// x();

// function y() {
// 	for (let i = 1; i <= 5; i++) {
// 		setTimeout(function () {
// 			console.log(i);
// 		}, x * 1000);
// 	}
// }
// y();

// function Z() {
// 	for (var i = 1; i <= 5; i++) {
// 		function func(i) {
// 			setTimeout(function () {
// 				console.log(i);
// 			}, x * 1000);
// 		}
// 		func(i);
// 	}
// }
// Z();

// These ids can be passed to clear the timeout and interval
function a() {
	const timeoutId = setTimeout(() => console.log(this), 1000);
}

function b() {
	const intervalId = setInterval(() => console.log(this), 2000);
}

console.log(a(), b());
// console.log(timeoutId, intervalId);

// clearInterval(intervalId);
// clearTimeout(timeoutId);
