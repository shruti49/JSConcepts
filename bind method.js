//APPLY - the only difference between the call and apply is just the way of passing arguments

// function borrowing
// EXAMPLE - 1
//Better practise to keep the functions outside object for reusability

let object7 = {
	firstName: "John",
	lastName: "Doe",
};

let object8 = {
	firstName: "Harry",
	lastName: "Smith",
};

function getFullName(country, state, city) {
	console.log(`${this.firstName} ${this.lastName} is from ${country} ${state} ${city}`);
}

//We can pass any no of arguments

var bindmethod = getFullName.bind(object7);
bindmethod("India", "Haryana", "Bhiwani");
