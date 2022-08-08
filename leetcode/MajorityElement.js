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

var majorityElement = function (nums) {
  let anx = nums[0];
  let cnt = 1;
  for (var i = 1; i < nums.length; i++) {
    if (cnt == 0) {
      cnt++;
      anx = nums[i];
    } else if (anx === nums[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }
  return anx;
};

console.log(majorityElement(nums));
