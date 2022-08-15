let nums = [1, 1, 1, 1];

var findLHS = function (nums) {
  let hashmap = new Map();
  for (var i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (hashmap.has(num)) {
      hashmap.set(num, hashmap.get(num) + 1);
    } else {
      hashmap.set(num, 1);
    }
  }

  let arr = [...hashmap.entries()];
  arr.sort((a, b) => a[0] - b[0]);

  let max = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1][0] - arr[i][0] === 1) {
      let sum = arr[i + 1][1] + arr[i][1];
      if (sum > max) max = sum;
    }
  }

  return max;
};

var findLHS = function (nums) {
  let hashmap = new Map();
  for (var i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (hashmap.has(num)) {
      hashmap.set(num, hashmap.get(num) + 1);
    } else {
      hashmap.set(num, 1);
    }
  }

  let max = 0;
  hashmap.forEach(function (value, key) {
    if (hashmap.has(key + 1)) {
      max = Math.max(max, hashmap.get(key) + hashmap.get(key + 1));
    }
  });

  return max;
};

console.log(findLHS(nums));
