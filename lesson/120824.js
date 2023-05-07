function solution(num_list) {
  let cnt = 0;

  num_list.map((x) => {
    if (x % 2 === 0) {
      cnt++;
    }
  });

  return [cnt, num_list.length - cnt];
}

console.log(solution([1, 2, 3, 4, 5]));
