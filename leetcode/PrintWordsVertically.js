let s = "TO BE OR NOT TO BE";

var printVertically = function (s) {
  let sArr = s.split(" ");
  let hashmap = new Map();
  for (var i = 0; i < sArr.length; i++) {
    for (var j = 0; j < sArr[i].length; j++) {
      hashmap.set(j, hashmap.has(j) ? hashmap.get(j) + sArr[i][j] : sArr[i][j]);
    }
  }
  return hashmap;
};

console.log(printVertically(s));
