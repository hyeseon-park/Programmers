let s = "aaaabbbbcccc";

var sortString = function (s) {
  let arr = s.split("");
  let hashmap = new Map();
  for (var i in arr) {
    hashmap.set(arr[i], hashmap.has(arr[i]) ? hashmap.get(arr[i]) + 1 : 1);
  }
  let tmpArr = [...hashmap.entries()].sort();
  let str = "";

  while (tmpArr.length !== 0) {
    for (var i = 0; i < tmpArr.length; i++) {
      str += tmpArr[i][0];
      tmpArr[i][1] = tmpArr[i][1] - 1;
      if (tmpArr[i][1] === 0) {
        tmpArr.splice(i, 1);
        i--;
      }
    }
    if (tmpArr.length === 0) break;
    for (var i = tmpArr.length - 1; i >= 0; i--) {
      str += tmpArr[i][0];
      tmpArr[i][1] = tmpArr[i][1] - 1;
      if (tmpArr[i][1] === 0) {
        tmpArr.splice(i, 1);
      }
    }
  }
  return str;
};

console.log(sortString(s));
