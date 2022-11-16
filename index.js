// function fizzBuzz(param) {
//   if (param % 15 == 0) {
//     console.log("Fizz Buzz");
//   } else if (param % 5 == 0) {
//     console.log("Buzz");
//   } else if (param % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log("Unknown");
//   }
//   return fizzBuzz;
// }

function fizzBuzz(param) {
  let result = "";
  if (param % 15 == 0) {
    result = "Fizz Buzz";
  } else if (param % 5 == 0) {
    result = "Buzz";
  } else if (param % 3 == 0) {
    result = "Fizz";
  } else {
    return param;
  }
  return result;
}

const num = fizzBuzz(15);

console.log(num);
