
function func(x, y) {
	x += 2;
	y.push(1);
}

const x = 1;
const y = [];
func(x, y);
console.log(x, y);
