function solution(s) {
  let anx = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) anx.push(c);
  return anx.sort().join("");
}

console.log(solution("hello"));
