let fs = require("fs");
let [n, ...arr] = fs
  .readFileSync("baekjoon/input.txt")
  .toString()
  .trim()
  .split(/\n/);

const bridge = (west, east) => {
  let arr2 = Array.from(Array(east + 1), () => Array(west + 1).fill(0));
  arr2[1][0] = 1;
  arr2[1][1] = 1;
  for (var j = 2; j <= east; j++) {
    arr2[j][0] = 1;
    for (var k = 1; k <= west; k++) {
      arr2[j][k] = arr2[j - 1][k - 1] + arr2[j - 1][k];
    }
  }
  console.log(arr2[east][west]);
};

arr
  .map((v) => v.split(" ").map((x) => +x))
  .forEach((y) => {
    bridge(y[0], y[1]);
  });
