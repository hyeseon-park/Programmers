function solution(babbling) {
  return babbling.filter(
    (b) =>
      !b.includes("ayaaya") &&
      !b.includes("yeye") &&
      !b.includes("woowoo") &&
      !b.includes("mama") &&
      b
        .replaceAll("aya", " ")
        .replaceAll("ye", " ")
        .replaceAll("woo", " ")
        .replaceAll("ma", " ")
        .trim() === ""
  ).length;
}

console.log(solution(["aya", "ayayeaya", "yayae"]));
