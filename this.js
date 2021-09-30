function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
};
var a = 230;
var bar = obj.foo;
bar();

// var x = obj.foo();
// x();

// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this.name);
//   }
        
// }
        
// var getName = obj.getName;
        
// var obj2 =
// {
//     name: "akshay",
//     getName
// };
// obj2.getName();


// var bikeDetails = {
// 	displayDetails: function (registrationNumber, brandName) {
// 		return this.name + " , " + "bike details: " + registrationNumber + " , " + brandName;
// 	},
// };

// var person1 = { name: "Vivek" };

// var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");

// console.log(detailsOfPerson1());
