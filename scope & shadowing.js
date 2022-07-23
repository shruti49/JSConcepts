var a = 1000;
value = 5000;
let b = 2000;
const c = 3000;

console.log("value =", value) //5000 GLOBAL SCOPE
console.log("a =", a); //1000 GLOBAL SCOPE
console.log("b =", b); //2000 SEPERATE SCOPE
console.log("c =", c); //3000 SEPERATE SCOPE
console.log("");


//BLOCK SCOPE OR LEXICAL SCOPE
{
	console.log("** BLOCK SCOPE - 1 STARTS**");
	console.log("Before mutation");
	console.log("a =", a); //1000 GLOBAL SCOPE
	// console.log("b =", b); //Error
	// console.log("c =", c); //Error
	console.log("");

	var a = 20;
	let b = 30;
	const c = 40;


	console.log("After mutation");
	console.log("a =", a); //20 replaced by shadowing GLOBAL SCOPE
	console.log("b =", b); //30 replaced by shadowing BLOCK SCOPE - 1
	console.log("c =", c); //40 replaced by shadowing BLOCK SCOPE - 1
	console.log("");

	{
		console.log("** BLOCK SCOPE - 2 STARTS **");
		console.log("Before mutation");
		console.log("a =", a); //20 replaced by shadowing GLOBAL SCOPE
		// console.log("b =", b); //Error
		// console.log("c =", c); //Error

		var a = 60;
		let b = 70;
		const c = 80;

		console.log("After mutation");
		console.log("a =", a); //60 replaced by shadowing GLOBAL SCOPE
		console.log("b =", b); //70 replaced by shadowing BLOCK SCOPE - 2
		console.log("c =", c); //80 replaced by shadowing BLOCK SCOPE - 2
		console.log("** BLOCK SCOPE - 2 ENDS **");
		console.log("");
	}

	console.log("a =", a); //60 replaced by shadowing GLOBAL SCOPE
	console.log("b =", b); //30 replaced by shadowing BLOCK SCOPE - 1
	console.log("c =", c); //40 replaced by shadowing BLOCK SCOPE - 1
	console.log("** BLOCK SCOPE - 1 ENDS **");
	console.log("");
}

console.log("a =", a); //60 GLOBAL SCOPE
console.log("b =", b); //2000 SEPERATE SCOPE
console.log("c =", c); //3000 SEPERATE SCOPE
console.log("");

//FUNCTION SCOPE
function x() {
	var a = 20;
	let b = 30;
	const c = 40;

	console.log("** FUNCTIONAL SCOPE - STARTS **");
	console.log("a =", a); //20 replaced by shadowing FUNCTIONAL SCOPE
	console.log("b =", b); //30 replaced by shadowing FUNCTIONAL SCOPE
	console.log("c =", c); //40 replaced by shadowing FUNCTIONAL SCOPE
	console.log("** FUNCTIONAL SCOPE - ENDS **");
	console.log("");
}

x();

console.log("a =", a); //60 replaced by shadowing GLOBAL SCOPE

//these did not replace beacuse they are kept in seperate
//memory space (Script)

console.log("b =", b); //2000 SEPERATE SCOPE
console.log("c =", c); //3000 SEPERATE SCOPE




const d = 100; 

function myfunction() {
	var d = 300;
	console.log("d =", d);
}
myfunction();