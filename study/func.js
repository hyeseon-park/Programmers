funcDeclarations(); // A function declaration
funcExpression(); // TypeError: funcExpression is not a function

function funcDeclarations() {
  return "A function declaration";
}

let funcExpression = function () {
  return "A function expression";
};
