let nums = [3, 5, 4, 2, 4, 6];

var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let max = 0;
  for (var i = 0; i < nums.length / 2; i++) {
    let tmp = nums[i] + nums[nums.length - 1 - i];
    if (max < tmp) max = tmp;
  }
  return max;
};

console.log(minPairSum(nums));
