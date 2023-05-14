function solution(my_string) {
  let set = new Set(my_string);
  return Array.from(set).join("");
}

console.log(solution("We are the world"));
