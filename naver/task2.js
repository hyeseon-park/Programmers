// let A = [1, 0, 1, 0, 1, 1];
// let A = [1, 1, 0, 1, 1];
// let A = [0, 1, 0];
let A = [0, 1, 1, 0];

const solution = (A) => {
  let copyA1 = [...A];
  let cnt1 = 0;
  let standard1 = 0;
  for (var i = 0; i < copyA1.length; i++) {
    if (copyA1[i] !== standard1) {
      cnt1++;
    }
    if (standard1 === 1) {
      standard1 = 0;
    } else {
      standard1 = 1;
    }
  }

  let copyA2 = [...A];
  let cnt2 = 0;
  let standard2 = 1;
  for (var i = 0; i < copyA2.length; i++) {
    if (copyA2[i] !== standard2) {
      cnt2++;
    }
    if (standard2 === 1) {
      standard2 = 0;
    } else {
      standard2 = 1;
    }
  }

  return cnt1 <= cnt2 ? cnt1 : cnt2;
};

console.log(solution(A));
