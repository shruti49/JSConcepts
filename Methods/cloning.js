/*
* PRIMITIVE TYPES - By default Deep Copy(pass by value) is created
* Number;
* Boolean;
* String;
* Null;
* Undefined;
* Symbol;
*/
let a = 10;
let b = a;
console.log("****** Before mutating ******");
console.log("a =", a);
console.log("b =", b);

b = 20;
console.log("****** After mutating *****");
console.log("a =", a);
console.log("b =", b);
console.log("  ");
console.log("  ");

/* 
* NON PRIMITIVE TYPES - By default Shallow Copy( pass by reference ) is created
* (Object, Array, Functions, Math, etc.) 
*/
let obj1, obj2, obj3;
obj1 = {
	name: "John Doe",
	location: {
		country: {
			name: "India",
		},
	},
	getName() {
		return this.name;
	},
};

obj2 = obj1;

console.log("****** Before mutating ******");
console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("  ");

/* 
? when we do cloning like this a shallow copy is created i.e. both objects points to same memory address
*/
setTimeout(() => {
	console.log("***** Using Assignment Operator - SHALLOW COPY ******");
	// ? CHANGING IN OBJECT2 ALSO CHANGES OBJECT1
	obj2.name = "Rajpal Yadav";
	obj2.location.country.name = "America";

	console.log("After mutating");
	console.log("obj1", obj1);
	console.log("obj2", obj2);
	console.log(" ");
}, 3000);

// ?  IF WE DONT WANT THIS BEHAVIOUR , SO WE USE OBJECT'S CONSTRUCTOR FUNCTION - OBJECT.ASSIGN(TARGET OBJECT,SOURCE OBJECT)

// ? when we do cloning like this a deep copy is created i.e. both objects points to different memory address
setTimeout(() => {
	console.log("****** Using Object.assign() - PARTIAL DEEP COPY *****");
	obj2 = Object.assign({}, obj1);
	// ? CHANGING IN OBJECT2 DOES NOT CHANGE OBJECT1
	obj2.name = "Mohan Sharma";

	// ? BUT IT DOES NOT WORK ON NESTED FIELDS, IT STILL CHANGES THE COUNTRY NAME
	obj2.location.country.name = "Europe";
	console.log("After mutating");
	console.log("obj1", obj1);
	console.log("obj2", obj2);
	console.log("  ");
}, 5000);

setTimeout(() => {
	console.log("***** Using Spread Operator - PARTIAL DEEP COPY ******");
	obj2 = { ...obj1 };
	// ? CHANGING IN OBJECT2 DOES NOT CHANGE OBJECT1
	obj2.name = "Rahul Gandhi";

	// ? BUT IT DOES NOT WORK ON NESTED FIELDS, IT STILL CHANGES THE COUNTRY NAME
	obj2.location.country.name = "Islamabad";

	console.log("After mutating");
	console.log("obj1", obj1);
	console.log("obj2", obj2);
	console.log("  ");
}, 7000);

// * NESTED COPYING

// * If we don't want to store the reference of nested objects we first stringy and the parse those objects

setTimeout(() => {
	console.log("****** Stringfy to avoid changing nested fields - PARTIAL DEEP COPY ******");

	obj2 = JSON.stringify(obj1);
	obj2 = JSON.parse(obj2);

	obj2.location.country.name = "Pakistan";

	console.log("After mutating");
	console.log("obj1", obj1);
	console.log("obj2", obj2);
	console.log("  ");
}, 9000);

/* 
 ! JSON.stringify() method provideS deep copy. However, there is one disadvantage of using this method is that when you use JSON.stringify on an object which has a function as value then it won’t able to justify the copy operation. As you can see in the above example it has removed out key getName from copiedVal as it’s type is Function. I would recommend use this method only if your objects have not any key with Function type.
 */

// * OR WE CAN USE LIBRARIES LIKE LODASH WHICH PROVIDES METHODS LIKE

// * _.CloneDeep();

setTimeout(() => {
	console.log("***** Using _.CloneDeep() - FULL DEEP COPY ******");

	obj2 = _.CloneDeep(obj1);

	obj2.name = "VED VYAS";
	obj2.location.country.name = "LATIN";

	console.log("After mutating");
	console.log("obj1", obj1);
	console.log("obj2", obj2);
	console.log(" ");
}, 11000);

