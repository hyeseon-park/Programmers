let fs = require("fs");
let [n, ...arr] = fs
  .readFileSync("baekjoon/input.txt")
  .toString()
  .trim()
  .split(/\n/);

console.log(n);
console.log(arr);

// for (var i = 0; i < n; i++) {
var conviCnt = arr[1];
let songdoMap = Array.from(Array(conviCnt + 2), () => Array(2).fill(0));
for (var j = i + 1; j < n2 + 2; j++) {
  let arrr = arr[j].split(" ");

  arr2[1][0] = arrr[0];
  arr2[1][1] = arrr[1];
}
// }

arr
  .map((v) => v.split(" "))
  .forEach((y) => {
    // console.log(y);
  });
