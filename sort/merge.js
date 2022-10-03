let arr = [23, 4, 6, 3, 563, 634, 9];

const mergeSort = (left, right) => {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  } // left, right 둘 중 하나라도 길이가 0이 되면 while 종료
  // 남은 배열을 뒤에 붙여줌
  return [...sortedArr, ...left, ...right];
};

const divideArr = (arr) => {
  if (arr.length === 1) return arr;
  const boundary = Math.ceil(arr.length / 2);
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);

  return mergeSort(divideArr(left), divideArr(right));
};

console.log(divideArr(arr));
