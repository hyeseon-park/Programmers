function solution(polynomial) {
  let arr = polynomial.split(" + ");
  let 일차항 = 0;
  let 상수항 = 0;
  arr.map((a) => {
    if (a.includes("x")) {
      일차항 += Number(a.length > 1 ? a.substr(0, a.length - 1) : 1);
    } else {
      상수항 += Number(a);
    }
  });

  return (
    (일차항 !== 0 ? (일차항 === 1 ? "" : 일차항) + "x" : "") +
    (일차항 !== 0 && 상수항 !== 0 ? " + " : "") +
    (상수항 !== 0 ? 상수항 : "")
  );
}

console.log(solution("x"));
