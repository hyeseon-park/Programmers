function scope() {
  let localLet = "let으로 선언한 변수";
  if (true) {
    let localLetInBlock = "블럭 안에서 let으로 선언한 변수";
    console.log(localLet); // 'let으로 선언한 변수' 출력
  }
  console.log(localLetInBlock); // ReferenceError 출력
}

scope();
console.log(localLet); // ReferenceError 출력
