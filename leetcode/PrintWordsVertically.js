let s = "CONTEST IS COMING";

var printVertically = function (s) {
  let arr = [];

  let sArr = s.split(" ");
  let lengthArr = sArr.map((s) => s.length);
  let maxNum = Math.max(...lengthArr);

  let hashmap = new Map();
  for (var i = 0; i < sArr.length; i++) {
    for (var j = 0; j < maxNum; j++) {
      hashmap.set(
        j,
        hashmap.has(j)
          ? sArr[i][j] !== undefined
            ? hashmap.get(j) + sArr[i][j]
            : hashmap.get(j) + " "
          : sArr[i][j] !== undefined
          ? sArr[i][j]
          : " "
      );
    }
  }
  hashmap.forEach((values) => arr.push(values.trimEnd()));

  return arr;
};

console.log(printVertically(s));
