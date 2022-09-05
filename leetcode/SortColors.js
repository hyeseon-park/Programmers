let nums = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  let i = 0;
  let j = 0;
  j++;
  while (i < nums.length || j < nums.length) {
    if (nums[i] > nums[i + 1]) {
      let tmp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = tmp;
    } else {
    }
    i++;
    j++;
  }
  return nums;
};

console.log(sortColors(nums));
