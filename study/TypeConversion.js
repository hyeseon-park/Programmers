let result1 = 1 + "2";
console.log(result1); // 12
console.log(typeof result1); // string

let result2 = true + "2";
console.log(result2); // true2
console.log(typeof result2); // string

let result3 = true + 2;
console.log(result3); // 3
console.log(typeof result3); // number

// 숫자로 형변환
let str = "12.34";
console.log(parseInt(str)); // 12
console.log(parseFloat(str)); // 12.34
console.log(Number(str)); // 12.34

// 문자열로 형변환
let num = 12;
console.log(String(num)); // 12
console.log(typeof String(num)); // string
console.log(num.toString(16)); // c
console.log(typeof num.toString()); // string
console.log(num.toFixed(2)); // 12.00
console.log(typeof num.toFixed()); // string

// 불린으로 형변환
let zero = 0;
console.log(Boolean(zero)); // false
