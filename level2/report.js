const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;
let result = [];

const solution = () => {
  let id_count = new Array(id_list.length).fill(0);
  let report2 = [...new Set(report)];

  // 1단계 : 신고 당한 사람 카운트
  for (var i = 0; i < report2.length; i++) {
    let respondent = report2[i].split(" ")[1];
    id_count[id_list.indexOf(respondent)] += 1;
  }

  // 2단계 : 신고된 사람을 신고한 사람한테 메일 보내기
  result = new Array(id_list.length).fill(0);
  for (var i = 0; i < id_count.length; i++) {
    if (id_count[i] >= k) {
      for (var j = 0; j < report2.length; j++) {
        if (report2[j].split(" ")[1] === id_list[i]) {
          result[id_list.indexOf(report2[j].split(" ")[0])] += 1;
        }
      }
    }
  }

  return result;
};

console.log(solution());
