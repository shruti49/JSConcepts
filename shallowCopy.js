var obj1 = {
	name: "John Doe",
	location: {
		state: "New Delhi",
	},
};

console.log("Before Normal Copying",obj1.name);
//when we copy like this reference is stored
var obj2 = obj1;
//If changed the name in obj2 obj1 also changes
obj2.name = "John Smith";
console.log("After Normal Copying", obj1.name);

//  IF WE DONT WANT THIS BEHAVIOUR , SO WE USE OBJECT'S CONSTRUCTOR FUNCTION - OBJECT.ASSIGN(TARGET OBJECT,SOURCE OBJECT)

var obj3 = Object.assign({}, obj1);
obj3.name = "Harry Smith";
console.log("After Shallow Copying", obj1.name);
