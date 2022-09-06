setTimeout(function () {
	console.log("timer");
}, 5000);

function x(y) {
	console.log("funtion - ", y);
	console.log("x");
	y();
}

x(function y() {
	console.log("y");
});


document.getElementById("btn-1").addEventListener("click", (e) => {
	console.log("Button Pressed");
});
