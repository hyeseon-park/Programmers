// let s = "acb";
// let s = "hot";
// let s = "codility";
let s = "aaaa";

const solution = (s) => {
  let wordArr = [];
  for (var i = 0; i < s.length; i++) {
    wordArr.push(s.substring(0, i) + s.substring(i + 1, s.length));
  }
  wordArr.sort();
  return wordArr[0];
};

console.log(solution(s));
