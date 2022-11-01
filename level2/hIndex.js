const citations = [0, 1, 2, 6, 6, 6, 7, 8, 10];

const solution = (citations) => {
  let h = citations[citations.length - 1];
  citations.sort((a, b) => a - b);

  while (h <= citations[citations.length - 1]) {
    let cnt = 0;
    citations.map((c) => c >= h && cnt++);
    if (cnt >= h && citations.length - cnt <= h) return h;
    h--;
  }
};

console.log(solution(citations));
