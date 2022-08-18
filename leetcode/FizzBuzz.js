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

var fizzBuzz = function (n) {
  let arr = [];
  let f = 0;
  let b = 0;
  for (var i = 1; i < n + 1; i++) {
    f++;
    b++;
    if (f === 3 && b === 5) {
      arr.push("FizzBuzz");
      f = 0;
      b = 0;
    } else if (f === 3) {
      arr.push("Fizz");
      f = 0;
    } else if (b === 5) {
      arr.push("Buzz");
      b = 0;
    } else {
      arr.push(String(i));
    }
  }
  return arr;
};

console.log(fizzBuzz(n));
