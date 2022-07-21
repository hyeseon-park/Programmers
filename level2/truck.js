const bridge_length = 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

const solution = () => {
  let bridge = new Array(bridge_length).fill(0);
  let second = 0;
  let sum = -1;

  while (sum !== 0) {
    second += 1;
    sum = 0;
    for (var j = 1; j < bridge.length; j++) {
      sum += bridge[j]; // 다리 위 트럭 무게 다 더하기
    }
    if (truck_weights.length !== 0) {
      sum += truck_weights[0]; // 대기 트럭 중 첫번째 트럭 무게 더하기
    }

    // 이동
    bridge[0] = 0;
    for (var j = 0; j < bridge.length - 1; j++) {
      bridge[j] = bridge[j + 1];
    }
    bridge[bridge_length - 1] = 0;

    // 태우기
    if (truck_weights.length !== 0 && sum <= weight) {
      bridge[bridge_length - 1] = truck_weights[0];
      truck_weights.shift();
    }
  }

  return second;
};

console.log(solution());
