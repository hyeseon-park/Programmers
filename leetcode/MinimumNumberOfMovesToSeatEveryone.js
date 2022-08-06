const seats = [4, 1, 5, 9];
const students = [1, 3, 2, 6];

var minMovesToSeat = function (seats, students) {
  var move = 0;
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  seats.map((seat, idx) => {
    move += Math.abs(seat - students[idx]);
  });
  return move;
};

console.log(minMovesToSeat(seats, students));
