var generate = function (numRows) {
  let arr = [];
  arr.push([1]);

  for (let i = 0; i < numRows - 1; i++) {
    let stanArr = arr[i];
    let tmpArr = [];

    for (let j = 0; j <= stanArr.length; j++) {
      tmpArr.push(
        (stanArr[j - 1] === undefined ? 0 : stanArr[j - 1]) +
          (stanArr[j] === undefined ? 0 : stanArr[j])
      );
    }
    arr.push(tmpArr);
  }
  return arr;
};

console.log(generate(1));
