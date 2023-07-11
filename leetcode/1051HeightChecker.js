var heightChecker = function (heights) {
  let sortedArr = [...heights].sort((a, b) => a - b);
  sortedArr = sortedArr.filter((a, index) => a !== heights[index]);
  return sortedArr.length;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
