let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var minSetSize = function (arr) {
  let arrLen = arr.length;
  let hashmap = new Map();

  for (var i in arr) {
    hashmap.set(arr[i], hashmap.has(arr[i]) ? hashmap.get(arr[i]) + 1 : 1);
  }
  let tmpArr = [...hashmap.entries()].sort((a, b) => b[1] - a[1]);

  for (var i = 0; i < tmpArr.length; i++) {
    arrLen -= tmpArr[i][1];
    if (arrLen <= arr.length / 2) return i + 1;
  }
  return minSize;
};

console.log(minSetSize(arr));
