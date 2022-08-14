let arr = [3, 8, -10, 23, 19, -4, -14, 27];

var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let hashmap = new Map();
  for (var i = 0; i < arr.length - 1; i++) {
    let gap = Math.abs(arr[i + 1] - arr[i]);
    if (hashmap.has(gap)) {
      var tmpArr = hashmap.get(gap);
      tmpArr.push([arr[i], arr[i + 1]]);
      hashmap.set(gap, tmpArr);
    } else {
      let tmpArr = [];
      tmpArr.push([arr[i], arr[i + 1]]);
      hashmap.set(gap, tmpArr);
    }
  }
  return [...hashmap.entries()].reduce((a, b) => (a[0] < b[0] ? a : b))[1];
};

var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let anx = [];
  let gap = 2000000;
  for (var i = 0; i < arr.length - 1; i++) {
    let newGap = arr[i + 1] - arr[i];
    if (newGap < gap) {
      anx = [];
      anx.push([arr[i], arr[i + 1]]);
      gap = newGap;
    } else if (newGap === gap) {
      anx.push([arr[i], arr[i + 1]]);
    }
  }
  return anx;
};

console.log(minimumAbsDifference(arr));
