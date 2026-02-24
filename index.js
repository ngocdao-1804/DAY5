// khai báo biến time 10
// lopp while dk time > 0
// time === 5; in đã qua 1/2 thời gian
// còn lại: còn time giây
// xong loop Hết giờ

// let time = 10;
// while (time > 0) {
//     console.log(`còn ${time} giây`)
//     time--;
//     if (time === 5) {
//         console.log(`đã qua nửa thời gian`)
//     }
// } 
// console.log(`Hết giờ `)

let time = 20;
let halftime= time/2;
while (time > 0) {
  if (time === halftime) {
    console.log("Đã qua nửa thời gian");
  } else {
    console.log(`Còn lại ${time} giây`);
  }
  time--;
}
console.log("Đã hết giờ ");