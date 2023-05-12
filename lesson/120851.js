function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (Number(cur) ? acc + Number(cur) : Number(acc)),
    0
  );
}

console.log(solution("aAb1B2cC34oOp"));
