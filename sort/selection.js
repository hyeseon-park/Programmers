let arr = [23, 4, 6, 3, 563, 634, 2345, 213, 345, 5, 56, 74, 56, 5, 2, 3];

const selectionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] >= arr[j]) min = j;
    }
    let tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
  return arr;
};

console.log(selectionSort(arr));
