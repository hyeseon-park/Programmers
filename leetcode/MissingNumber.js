let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length;
};

console.log(missingNumber(nums));
