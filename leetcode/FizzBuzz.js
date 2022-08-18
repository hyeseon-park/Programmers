let n = 15;

var fizzBuzz = function (n) {
  let arr = [];
  for (var i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(String(i));
    }
  }
  return arr;
};

console.log(fizzBuzz(n));
