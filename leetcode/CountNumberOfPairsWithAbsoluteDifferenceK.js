let nums = [1, 2, 2, 1];
let k = 1;

var countKDifference = function (nums, k) {
  let cnt = 0;
  for (var i = 0; i < nums.length; i++) {
    let target = nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      if (Math.abs(target - nums[j]) === k) {
        cnt++;
      }
    }
  }
  return cnt;
};

var countKDifference = function (nums, k) {
  let cnt = 0;
  let hashmap = new Map();
  for (var i = 0; i < nums.length; i++) {
    let target = nums[i];
    if (hashmap.has(target - k)) {
      cnt += hashmap.get(target - k);
    }
    if (hashmap.has(target + k)) {
      cnt += hashmap.get(target + k);
    }
    hashmap.set(target, hashmap.has(target) ? hashmap.get(target) + 1 : 1);
  }
  return cnt;
};

console.log(countKDifference(nums, k));
