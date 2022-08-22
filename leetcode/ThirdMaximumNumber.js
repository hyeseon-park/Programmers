let nums = [2, 2, 3, 1];

var thirdMax = function (nums) {
  let set = new Set(nums);
  let arr = [...set].sort((a, b) => b - a);
  if (set.size < 3) {
    return arr[0];
  } else {
    return arr[2];
  }
};

console.log(thirdMax(nums));
