function solution(num_list) {
  let arr = [];
  for (let i = num_list.length; i > 0; i--) {
    arr.push(num_list[i - 1]);
  }
  return arr;
}

console.log(solution([1, 2, 3, 4, 5]));
