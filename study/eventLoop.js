function first() {
  second();
  console.log("첫 번째");
}

function second() {
  third();
  console.log("두 번째");
}

function third() {
  console.log("세 번째");
}

first();
third();

// console.log("시작");
// setTimeout(() => {
//   console.log("중간");
// }, 0);
// console.log("끝");

console.log("시작");

setTimeout(() => {
  console.log("중간");
}, 0);

Promise.resolve().then(function () {
  console.log("프로미스");
});

console.log("끝");
