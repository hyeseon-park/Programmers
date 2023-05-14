function solution(s) {
  let arr = s.split(" ");
  let sumArr = [];
  arr.forEach((element) => {
    if (element === "Z") {
      sumArr.pop();
    } else {
      sumArr.push(Number(element));
    }
  });

  return sumArr.reduce((a, b) => a + b, 0);
}

console.log(solution("-1 -2 -3 Z"));
