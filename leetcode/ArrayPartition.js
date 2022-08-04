const nums = [6, 2, 6, 5, 1, 2];

var arrayPartition = function (nums) {
  var sum = 0;
  nums.sort((a, b) => b - a);
  nums.map((num, idx) => {
    if (idx % 2 === 1) {
      sum += num;
    }
  });
  return sum;
};

console.log(arrayPartition(nums));
