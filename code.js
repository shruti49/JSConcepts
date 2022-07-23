// Write your code here
let counter = 0;
function removeLastDigit(n) {
    let number = n.toString();
    const removedNo = number.substring(0, number.length - 1);
	checkPrime(parseInt(removedNo));
}

function checkPrime(no) {
	if (typeof no === "number") {
		if (no >= 1) {
			let isPrime = true;
			if (no === 1) {
				return counter;
			} else if (no > 1) {
				for (let i = 2; i < no; i++) {
					if (no % i == 0) {
						isPrime = false;
						break;
					}
				}
			}
			if (isPrime) {
				counter++;
				removeLastDigit(no);
			}
		}
	}
	return counter;
}

console.log(checkPrime(313));
