let nums = [3, 2, 3];

var majorityElement = function (nums) {
  let anx = 0;
  let hashmap = new Map();
  for (var i in nums) {
    var num = nums[i];
    if (hashmap.has(num)) {
      hashmap.set(num, hashmap.get(num) + 1);
    } else {
      hashmap.set(num, 1);
    }
  }
  hashmap.forEach(function (value, key) {
    if (value > nums.length / 2) {
      anx = key;
    }
  });
  return anx;
};

console.log(majorityElement(nums));
