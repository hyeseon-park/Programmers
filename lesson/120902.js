function solution(my_string) {
  let anx = 0;
  var answer = my_string.split(" ");
  anx += Number(answer[0]);

  for (let i = 1; i < answer.length; i += 2) {
    if (answer[i] === "+") {
      anx += Number(answer[i + 1]);
    } else {
      anx -= Number(answer[i + 1]);
    }
  }

  return anx;
}

console.log(solution("3 + 4"));
