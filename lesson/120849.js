function solution(my_string) {
  return my_string.replace(/[aeiou]/gi, "");
}

console.log(solution("nice to meet you"));
