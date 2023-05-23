function solution(id_pw, db) {
  let text = "fail";
  db.map((data) => {
    if (id_pw[0] === data[0]) {
      if (id_pw[1] === data[1]) {
        text = "login";
      } else {
        text = "wrong pw";
      }
    }
  });
  return text;
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
