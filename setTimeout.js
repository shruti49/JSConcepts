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

function func(x, y) {
	x += 2;
	y.push(1);
}

const x = 1;
const y = [];
func(x, y);
console.log(x, y);
