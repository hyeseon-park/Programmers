let arr = [1, 12, 5, 26, 7, 14, 3, 7, 2];

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = [arr[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      pivot.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

const quickSort2 = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  const partition = divide(arr, left, right, pivot);

  quickSort2(arr, left, partition - 1);
  quickSort2(arr, partition, right);

  return arr;
};

let divide = (array, left, right, pivot) => {
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      let swap = array[left];
      array[left] = array[right];
      array[right] = swap;
      left++;
      right--;
    }
  }
  return left;
};

console.log(quickSort2(arr));
