//APPLY - the only difference between the call and apply is just the way of passing arguments

// function borrowing
// EXAMPLE - 1
//Better practise to keep the functions outside object for reusability

let object5 = {
	firstName: "John",
	lastName: "Doe",
};

let object6 = {
	firstName: "Harry",
	lastName: "Smith",
};

function getFullName(country, state, city) {
	console.log(`${this.firstName} ${this.lastName} is from ${country} ${state} ${city}`);
}

//We can pass any no of arguments
getFullName.apply(object5, ["India", "Haryana", "Bhiwani"]);
getFullName.apply(object6, ["India", "UP", "Bareilly"]);
