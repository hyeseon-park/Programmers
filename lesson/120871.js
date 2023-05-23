function solution(n) {
  let arr3 = [];
  let i = 0;
  while (arr3.length !== n) {
    i++;
    if (i % 3 !== 0 && String(i).indexOf("3") === -1) arr3.push(i);
  }
  return arr3[n - 1];
}

console.log(solution(40));
