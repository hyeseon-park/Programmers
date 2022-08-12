let s = "MCMXCIV";

var romanToInt = function (s) {
  let anx = 0;

  for (var i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      case "I":
        if (s.charAt(i + 1) === "V") {
          i++;
          anx += 4;
        } else if (s.charAt(i + 1) === "X") {
          i++;
          anx += 9;
        } else {
          anx += 1;
        }
        break;
      case "V":
        anx += 5;
        break;
      case "X":
        if (s.charAt(i + 1) === "L") {
          i++;
          anx += 40;
        } else if (s.charAt(i + 1) === "C") {
          i++;
          anx += 90;
        } else {
          anx += 10;
        }
        break;
      case "L":
        anx += 50;
        break;
      case "C":
        if (s.charAt(i + 1) === "D") {
          i++;
          anx += 400;
        } else if (s.charAt(i + 1) === "M") {
          i++;
          anx += 900;
        } else {
          anx += 100;
        }
        break;
      case "D":
        anx += 500;
        break;
      case "M":
        anx += 1000;
        break;
      default:
        anx += 0;
        break;
    }
  }
  return anx;
};

console.log(romanToInt(s));
