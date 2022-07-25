const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;
let result = [];

const solution = () => {
  let id_count = new Array(id_list.length).fill(0);
  let report2 = [...new Set(report)];
  let respondentMap = new Map();

  // 1단계 : 신고 당한 사람 카운트
  for (var i = 0; i < report2.length; i++) {
    let respondent = report2[i].split(" ")[1];
    if (respondentMap.has(respondent)) {
      respondentMap.set(respondent, respondentMap.get(respondent) + 1);
    } else {
      respondentMap.set(respondent, 1);
    }
  }

  // 2단계 : 신고된 사람을 신고한 사람한테 메일 보내기
  result = new Array(id_list.length).fill(0);
  respondentMap.forEach(function (value, key) {
    if (value >= k) {
      for (var j = 0; j < report2.length; j++) {
        if (report2[j].split(" ")[1] === key) {
          result[id_list.indexOf(report2[j].split(" ")[0])] += 1;
        }
      }
    }
  });

  return result;
};

console.log(solution());
