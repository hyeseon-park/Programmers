function solution(s, skip, index) {
  let answer = "";
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  alphabet = alphabet.filter((a) => !skip.includes(a));

  for (let i = 0; i < s.length; i++) {
    let num = alphabet.indexOf(s.charAt(i)) + index;
    answer += alphabet[num % alphabet.length];
  }

  return answer;
}

console.log(solution("aukks", "wbqd", 5));
