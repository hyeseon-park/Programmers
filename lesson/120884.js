function solution(chicken) {
  let allCoupon = 0;
  let leftCoupon = 0;

  while (chicken >= 1) {
    let coupon = Math.floor(chicken / 10);
    leftCoupon += chicken % 10;
    allCoupon += coupon;
    chicken = coupon;
    if (leftCoupon >= 10) {
      chicken += leftCoupon;
      leftCoupon = 0;
    }
  }
  return allCoupon;
}

console.log(solution(1081));
