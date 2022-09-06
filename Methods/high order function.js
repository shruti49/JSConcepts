const radius = [2, 3, 4000, 0];

// const area = function (radius) {
//     return Math.PI * (Math.pow(radius, 2));
// }

// const cicumference = function (radius) {
//     return Math.PI * 2 * radius;
// }

// const diameter = function (radius) {
// 	return 2 * radius;
// };

// const calculate = function (arr, logic) {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//         output.push(logic(arr[i]));
//     }
//     return output
// }

// console.log(calculate(radius, area))
// console.log(calculate(radius, cicumference));
// console.log(calculate(radius, diameter));

// Array.prototype.cal = function (logic) {
//     const output = [];
//     for (let i = 0; i < this.length; i++){
//         output.push(logic(this[i]))
//     }
//     return output;
// }

// console.log(radius.cal(area));

//REDUCE

// const sum = (arr) => {
// 	let total = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		total = total + arr[i];
// 	}
// 	return total;
// };

// const product = (arr) => {
// 	let prod = 1;
// 	for (let i = 0; i < arr.length; i++) {
// 		prod = prod * arr[i];
// 	}
// 	return prod;
// };

// const calcy = function (arr) {
// 	let result1 = sum(arr);
// 	let result2 = product(arr);
// 	return {
// 		result1: result1,
// 		result2: result2,
// 	};
// };

// const max = function (arr) {
// 	let max = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (max < arr[i]) {
// 			max = arr[i];
// 		}
// 	}
// 	return max;
// };

//console.log(calcy(radius).result1,calcy(radius).result2);
// console.log(
// 	radius.reduce((sum, currentElement) => {
// 		sum = sum + currentElement;
// 		return sum;
// 	}, 0),
// 	radius.reduce((prod, currentElement) => {
// 		prod = prod * currentElement;
// 		return prod;
// 	}, 1),
// 	radius.reduce((max, currentElement) => {
// 		return max < currentElement ? currentElement : max;
// 	}, 0)
// );

//reverse a string
//"abc def" =>  "def abc"
//"abc def" =>  "fed cba"
//"abc def" =>  "cba fed"

const reverse1 = (str) => {
	let arr = str.split(" ");
	let newStr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		newStr.push(arr[i]);
	}
	return newStr.join(" ");
};

const reverse2 = (str) => {
	let newStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newStr = newStr + str[i];
	}
	return newStr;
};

const reverse3 = (str) => {
	//cba fed
	let arr = str.split(" "); //[abc,def,ghi,jkl]
	let newStr = [];
	for (let i = 0; i < arr.length; i++) {
		newarr = arr[i].split("");
		let s = "";
		for (let j = newarr.length - 1; j >= 0; j--) {
			s = s + newarr[j];
		}
		newStr.push(s);
	}
	//console.log(array);
	return newStr.join(" ");
	//return null
};

function PalindromeChecker(stri) {
	for (let i = 0; i < stri.length; i++) {
		if (stri[i] !== stri[stri.length - 1 - i]) {
			return "not a palindrome";
		}
	}
	return "palindrome";
}

function secondMax(arr) {
	//2, 3, 4000, 0
	let firstMax = arr[0];
	let secondMax = arr[1];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > firstMax) {
			secondMax = firstMax; //2 3
			firstMax = arr[i]; //3 4000
		} else if (secondMax < arr[i]) {
			secondMax = arr[i];
		}
	}
	return secondMax;
}

function coding() {
	let str = "abc def ghi jkl";
	let stri = "abcdfcba";
	let reversedStr1 = reverse1(str);
	let reversedStr2 = reverse2(str);
	let reversedStr3 = reverse3(str);
	let secondmax = secondMax(radius);
	console.log(reversedStr1);
	console.log(reversedStr2);
	console.log(reversedStr3);
	console.log("secondMax", secondmax);
	console.log(PalindromeChecker(stri));
}

coding();

var scope = "global scope";
function checkscope() {
	var scope = "local scope";
	function f() {
		return scope;
	}
	return f;
}

console.log(checkscope()());

const myObj = [
	{ name: "John", age: 26 },
	{ name: "Krishna", age: 2000 },
	{ name: "Harry", age: 31 },
];

//find age greater than 30
const output = myObj.reduce((previous, current) => {
	if (current.age > 30) {
		previous.push(current.name);
	}
	return previous;
}, []);

const output1 = myObj.filter((x) => x.age > 30).map((x) => x.name);

console.log(output, output1);
