let num = 2932;

var minimumSum = function (num) {
  let arr = String(num).split("");
  arr.sort((a, b) => a - b);
  return Number(arr[0] + arr[2]) + Number(arr[1] + arr[3]);
};

console.log(minimumSum(num));
