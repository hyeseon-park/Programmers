let arr = [0, 0, 2, 5, 6, 3, 6, 3];

var checkIfExist = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (2 * arr[i] === arr[j]) {
        return true;
      } else if (arr[i] / 2 === arr[j]) {
        return true;
      }
    }
  }
  return false;
};

var checkIfExist = function (arr) {
  let set = new Set();
  for (var i in arr) {
    if (set.has(arr[i] * 2) || (arr[i] % 2 === 0 && set.has(arr[i] / 2))) {
      return true;
    }
    set.add(arr[i]);
  }
  return false;
};

console.log(checkIfExist(arr));
