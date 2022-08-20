let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

var containsDuplicate = function (nums) {
  let hashmap = new Map();
  for (var i in nums) {
    if (hashmap.has(nums[i])) return true;
    hashmap.set(nums[i], 1);
  }
  return false;
};

console.log(containsDuplicate(nums));
