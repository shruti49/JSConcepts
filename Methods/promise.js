// //Getting request
// fetch("https://jsonplaceholder.typicode.com/todos/1", {
// 	headers: {
// 		"Content-type": "application/json: charset-UTF-8",
// 	},
// 	method: "GET",
// })
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

const { axios } = require("axios");

// //Creating request
// fetch("https://jsonplaceholder.typicode.com/posts", {
// 	method: "POST",
// 	body: JSON.stringify({
// 		title: "foo",
// 		body: "bar",
// 		userId: 1,
// 	}),
// 	headers: {
// 		"Content-type": "application/json; charset=UTF-8",
// 	},
// })
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));

// //Updating request
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
// 	method: "PUT",
// 	body: JSON.stringify({
// 		id: 1,
// 		title: "foo",
// 		body: "bar",
// 		userId: 1,
// 	}),
// 	headers: {
// 		"Content-type": "application/json; charset=UTF-8",
// 	},
// })
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));

// //Deleting request
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
// 	method: "DELETE",
// });

//AXIOS
// GET Request
// axios
// 	.get("https://jsonplaceholder.typicode.com/todos/1")
// 	.then(function (response) {
// 		// handle success
// 		console.log(response.data);
// 	})
// 	.catch(function (error) {
// 		// handle error
// 		console.log(error);
// 	})
// 	.then(function () {
// 		// always executed
// 	});

//POST Request
axios.post("https://jsonplaceholder.typicode.com/posts", {
	title: "foo",
	body: "bar",
	userId: 1,
});
