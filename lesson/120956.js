function solution(babbling) {
  return babbling
    .map((b) => b.replace(/aya|ye|woo|ma/g, ""))
    .filter((a) => a === "").length;
}

console.log(solution(["ye", "ye"]));
