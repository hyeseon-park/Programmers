let list1 = ["happy", "sad", "good"];
let list2 = ["sad", "happy", "good"];

var findRestaurant = function (list1, list2) {
  let min = Number.MAX_SAFE_INTEGER;
  let words = [];

  for (var i = 0; i < list1.length; i++) {
    for (var j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        let tmp = i + j;
        if (tmp < min) {
          min = tmp;
          words = [];
          words.push(list1[i]);
        } else if (tmp === min) {
          words.push(list1[i]);
        }
      }
    }
  }
  return words;
};

console.log(findRestaurant(list1, list2));
