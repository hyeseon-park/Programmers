function solution(quiz) {
  return quiz.map((q) => {
    let arr = q.split(" = ");
    if (eval(arr[0]) === Number(arr[1])) {
      return "O";
    } else {
      return "X";
    }
  });
}

console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
);
