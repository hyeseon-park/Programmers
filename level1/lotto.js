const lottos = [44, 1, 2, 3, 31, 25];
const win_nums = [4, 10, 45, 5, 6, 7];

const solution = () => {
  let rightCnt = 0;
  let zeroCnt = 0;
  let wrongCnt = 0;

  lottos.map((num) => {
    win_nums.includes(num) ? rightCnt++ : num === 0 ? zeroCnt++ : wrongCnt++;
  });

  return [
    rightCnt === 0 && zeroCnt === 0 ? 6 : 7 - rightCnt - zeroCnt,
    rightCnt === 0 ? 6 : 7 - rightCnt,
  ];
};

console.log(solution());
