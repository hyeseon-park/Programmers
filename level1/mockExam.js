function solution(answers) {
  let anx = [];
  let arr = [0, 0, 0];
  let supoza1 = [1, 2, 3, 4, 5];
  let supoza2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supoza3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.map((a, idx) => {
    if (a === supoza1[idx % 5]) arr[0]++;
    if (a === supoza2[idx % 8]) arr[1]++;
    if (a === supoza3[idx % 10]) arr[2]++;
  });

  let max = Math.max(arr[0], arr[1], arr[2]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      anx.push(i + 1);
    }
  }
  return anx;
}

console.log(solution([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]));
