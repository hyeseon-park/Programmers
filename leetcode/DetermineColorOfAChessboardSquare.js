let coordinates = "a1";

var squareIsWhite = function (coordinates) {
  return (coordinates.charCodeAt([0]) + Number(coordinates.charAt(1))) % 2 === 0
    ? false
    : true;
};

console.log(squareIsWhite(coordinates));
