const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

const solution = () => {
  let ans = 1;
  let visited = maps;
  let queue = [];
  const dx = [-1, 1, 0, 0]; //왼, 오, 아래, 위
  const dy = [0, 0, -1, 1];
  const n = maps.length; //세로
  const m = maps[0].length; //가로

  queue.push([0, 0]);
  visited[0][0] = 0;

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx === n - 1 && ny === m - 1) {
            return ++ans; //상대 팀 진영 도착
          }
          queue.push([nx, ny]); //지나간 길
          visited[nx][ny] = 0; //지나간 길 없애기
        }
      }
    }
    ans++; //이동거리 증가
  }
  return -1;
};

console.log(solution());
