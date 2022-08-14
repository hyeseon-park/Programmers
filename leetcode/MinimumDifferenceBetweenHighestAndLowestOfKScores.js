let nums = [64407, 3036];
let k = 2;

var minimumDifference = function (nums, k) {
  if (k === 1) return 0;
  nums.sort((a, b) => b - a);
  let gap = 100000;
  for (var i = 0; i < nums.length - k + 1; i++) {
    let tmpGap = nums[i] - nums[i + k - 1];
    if (tmpGap < gap) gap = tmpGap;
  }
  return gap;
};

console.log(minimumDifference(nums, k));
