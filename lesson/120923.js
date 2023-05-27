function solution(num, total) {
  var answer = [];
  let start = Math.ceil(total / num) - Math.floor(num / 2);
  for (let i = start; i < start + num; i++) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(5, 5));
