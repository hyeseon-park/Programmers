function solution(age) {
  var answer = "";
  let ageStr = age.toString();
  for (let i = 0; i < ageStr.length; i++) {
    answer += String.fromCharCode(Number(ageStr.charAt(i)) + 97);
  }
  return answer;
}

console.log(solution(100));
