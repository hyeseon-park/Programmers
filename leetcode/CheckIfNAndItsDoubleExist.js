let arr = [0, 0];

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

console.log(checkIfExist(arr));
