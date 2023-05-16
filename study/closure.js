let one;
one = 1;

function addOne(num) {
  console.log(one + num);
}

addOne(5);

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2)); // 5

const add10 = makeAdder(10);
console.log(add10(5)); // 15
console.log(add3(1)); // 4

function makeCounter() {
  let num = 0;
  return function () {
    return num++;
  };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
