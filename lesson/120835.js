function solution(emergency) {
  let sort = [...emergency].sort((a, b) => b - a);

  return emergency.map((k) => {
    const queue = sort.findIndex((v) => v === k);
    return queue + 1;
  });
}

console.log(solution([3, 76, 24]));
