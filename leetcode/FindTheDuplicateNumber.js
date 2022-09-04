let nums = [3, 1, 3, 4, 2];

var findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
  return 0;
};

var findDuplicate = function (nums) {
  let arr = new Array(nums.length - 1).fill(0);
  for (var i = 0; i < nums.length; i++) {
    arr[nums[i] - 1]++;
    if (arr[nums[i] - 1] > 1) return nums[i];
  }
  return 0;
};

console.log(findDuplicate(nums));
