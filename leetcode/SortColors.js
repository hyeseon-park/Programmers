let nums = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
      }
    }
  }

  return nums;
};

console.log(sortColors(nums));
