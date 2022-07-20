function Queue() {
  this.data = [];
}
Queue.prototype.enqueue = function (v) {
  this.data.push(v);
};
Queue.prototype.dequeue = function () {
  return this.data.shift() || null;
};
Queue.prototype.size = function () {
  return this.data.length;
};
Queue.prototype.sum = function () {
  return this.data.length;
};

var queue1 = new Queue();

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];
let second = 0;

const solution = () => {
  let bridge = [];
  bridge.push([truck_weights[0], 1]);
  second += 1;

  let i = 0;
  while (bridge.length !== 0) {
    if (bridge[i][1] > bridge_length) {
      bridge.shift(); // 다리를 지남
    } else {
      bridge[i][1] += 1; //
    }

    console.log(bridge);

    let sum = 0;
    for (var j = 0; j < bridge.length; j++) {
      sum += bridge[j][0];
    }
    sum += truck_weights[i + 1];

    console.log(sum);
    bridge.shift();

    console.log("-----------");
    if (sum < weight) {
      bridge.push([truck_weights[i + 1], 1]);
    } else {
    }
    // second += 1;
  }

  // let truck2 = truck_weights;
  // truck2 = truck2.map((t) => [t, 0]);

  // while (truck2.length !== 0) {
  //   second += 1;
  //   for(var i=0; i<truck2.length; i++) {
  //     truck2[i][1] += 1;
  //   }

  // }

  return second;
};

console.log(solution());
