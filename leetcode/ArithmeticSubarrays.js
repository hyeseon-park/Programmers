let nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10];
let l = [0, 1, 6, 4, 8, 7];
let r = [4, 4, 9, 7, 9, 10];

var checkArithmeticSubarrays = function (nums, l, r) {
  let anxArr = new Array(l.length).fill(true);

  for (var i = 0; i < l.length; i++) {
    let arr = [...nums].slice(l[i], r[i] + 1);
    arr.sort((a, b) => a - b);

    let gap = Number.MAX_SAFE_INTEGER;
    for (var j = 0; j < arr.length - 1; j++) {
      if (gap !== Number.MAX_SAFE_INTEGER) {
        if (gap !== Math.abs(arr[j + 1] - arr[j])) {
          anxArr[i] = false;
          break;
        }
      } else {
        gap = Math.abs(arr[j + 1] - arr[j]);
      }
    }
  }

  return anxArr;
};

console.log(checkArithmeticSubarrays(nums, l, r));
