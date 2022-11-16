const num = fizzBuzz(15);

function fizzBuzz(param) {
	if (param % 15 == 0) {
		console.log("Fizz Buzz");
	} else if (param % 5 == 0) {
		console.log("Buzz");
	} else if (param % 3 == 0) {
		console.log("Fizz");
	} else {
		console.log("Unknown");
	}
	return fizzBuzz;
}
