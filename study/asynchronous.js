let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in arr) {
  setTimeout(() => {
    console.log("안녕");
  }, 1000);
}
