function solution(i, j, k) {
  let cnt = 0;
  let str = "";
  for (let num = i; num <= j; num++) str += num;
  let arr = str.split("");
  for (a of arr) if (Number(a) === k) cnt++;
  return cnt;
}

console.log(solution(1, 13, 1));
