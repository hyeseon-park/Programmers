function solution(my_string, n) {
  let str = "";
  var answer = [...my_string];
  answer.map((x) => (str += x.repeat(n)));
  return str;
}

console.log(solution("hello", 3));
