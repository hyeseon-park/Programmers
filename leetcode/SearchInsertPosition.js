let nums = [1, 3, 5, 6];
let target = 7;

var searchInsert = function (nums, target) {
  if (target < nums[0]) return 0;
  if (nums[nums.length - 1] < target) return nums.length;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] < target && target < nums[i + 1]) {
      return i + 1;
    }
  }
};

console.log(searchInsert(nums, target));
