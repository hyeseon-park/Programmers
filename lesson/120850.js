function solution(my_string) {
  return [...my_string.replace(/[A-z]/gi, "")]
    .sort((a, b) => a - b)
    .map((a) => Number(a));
}

console.log(solution("hi12392"));
