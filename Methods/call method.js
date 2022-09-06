//Call - function borrowing

//EXAMPLE - 1
let object1 = {
	firstName: "John",
	lastName: "Doe",
	getFullName: function () {
		console.log(`My full name is ${this.firstName} ${this.lastName}`);
	},
};

let object2 = {
	firstName: "Harry",
	lastName: "Smith",
};

object1.getFullName.call(object2);

// EXAMPLE - 2
//Better practise to keep the functions outside object for reusability

let object3 = {
	firstName: "John",
	lastName: "Doe",
};

let object4 = {
	firstName: "Harry",
	lastName: "Smith",
};

function getFullName(hometown) {
	console.log(`${this.firstName} ${this.lastName} is from ${hometown}`);
}

//We can pass any no of arguments
getFullName.call(object3, "Delhi");
getFullName.call(object4, "Bareilly");
