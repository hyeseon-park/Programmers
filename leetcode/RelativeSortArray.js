let arr1 = [
  2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31,
];
let arr2 = [2, 42, 38, 0, 43, 21];

var relativeSortArray = function (arr1, arr2) {
  let anxArr = [];

  let hashmap = new Map();
  for (var i in arr1) {
    hashmap.set(arr1[i], hashmap.has(arr1[i]) ? hashmap.get(arr1[i]) + 1 : 1);
  }

  for (var i in arr2) {
    let num = arr2[i];
    let cnt = hashmap.get(num);
    hashmap.delete(num);
    for (var j = 0; j < cnt; j++) {
      anxArr.push(num);
    }
  }
  let tmpArr = [...hashmap.entries()].sort((a, b) => a[0] - b[0]);

  for (var i in tmpArr) {
    for (var j = 0; j < tmpArr[i][1]; j++) {
      anxArr.push(tmpArr[i][0]);
    }
  }

  return anxArr;
};

console.log(relativeSortArray(arr1, arr2));
