let nums = [-4, -1, 0, 3, 10];

var sortedSquares = function (nums) {
  nums = nums.map((val) => val * val);
  return nums.sort((a, b) => a - b);
};

console.log(sortedSquares(nums));
