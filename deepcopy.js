var obj1 = {
	name: "John Doe",
	location: {
		state: {
			area: "Green Park",
		},
	},
};
console.log("Before shallow copying Object1", obj1.location.state.area);
//If we want to copy nested objects and don't want to store the reference of nested objects we first stringy and the parse those objects
var obj2 = Object.assign({}, obj1);
obj2.location.state.area = "Yamuna Vihar";
console.log("After shallow copying Object1", obj1.location.state.area);

var obj3 = JSON.stringify(obj1);
var obj3 = JSON.parse(obj3);

obj3.location.state.area = "Nainital";
console.log("After deep copying Object1", obj1.location.state.area);
