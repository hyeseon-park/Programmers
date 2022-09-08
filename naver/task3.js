// let A = ["co", "dil", "ity"];
// let A = ["abc", "yyy", "def", "csv"];
// let A = ["patato", "kayak", "banana", "racecar"];
let A = ["eva", "jqw", "tyn", "jan"];

const solution = (A) => {
  A.sort((a, b) => b.length - a.length);
  let wordCnt = A.length;
  while (wordCnt > 0) {
    let returnArr = getCombinations(A, wordCnt);
    for (var i = 0; i < returnArr.length; i++) {
      let newWord = "";
      for (var j = 0; j < returnArr[i].length; j++) {
        newWord += returnArr[i][j];
      }
      let newSet = new Set(newWord.split(""));
      if (newSet.size === newWord.length) {
        return newWord.length;
      }
    }
    wordCnt--;
  }
  return 0;
};

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};

console.log(solution(A));
