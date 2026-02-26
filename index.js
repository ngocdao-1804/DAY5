//BAI 2 gia tien rand 100 - 5tr
// bien numOfOrder = 5 (mua 5 món)
// Total
// For, 1 gia ran cho sp, cộng dồn vào total
// in tong tien phai tra
// let total = 0;


//Fixed bai 2:
const NUMBER_OF_ORDERS = 5;
let total = 0;

for (let i = 0; i < NUMBER_OF_ORDERS; i++) {
  let price = Math.ceil(Math.random() * 5000000);

  if (price < 100000) {
    price = 100000;
  }

  total += price;

  console.log(
    `Tổng tiền sau đơn hàng thứ ${i + 1} là: ${total.toLocaleString()}VNĐ`,
  );
}

console.log(`Tổng tiền phải trả là: ${total.toLocaleString()}VNĐ`);

//Bai làm:
//  let total = 0;


// for(let numOfOrder = 5; numOfOrder>=1; numOfOrder--){
//     let price = Math.round((Math.random()*5000000))
// if (price < 100000){
//     price = 100000
// }
//     console.log(`Tổng tiền phải trả là ${total+price} `)
// }




// /Fixed bai 1
// // let time = 21;
// const halfTime = Math.floor(time / 2);

// while (time > 0) {
//   time--;
//   if (time === halfTime) {
//     console.log("Đã qua nửa thời gian");
//   } else {
//     console.log(`Còn lại ${time} giây`);
//   }
// }

// console.log("Hết giờ");

// BÀI 1: khai báo biến time 10
// lopp while dk time > 0
// time === 5; in đã qua 1/2 thời gian
// còn lại: còn time giây
// xong loop Hết giờ

// let time = 10;
// while (time > 0) {
//     time--;
//     console.log(`còn ${time} giây`)
//     if (time === 5) {
//         console.log(`đã qua nửa thời gian`)
//     }
// } 
// console.log(`Hết giờ `)

// let time = 41;
// let halftime= Math.round (time/2);
// while (time > 0) {
//   if (time == halftime) {
//     console.log("Đã qua nửa thời gian");
//   } else {
//     console.log(`Còn lại ${time} giây`);
//   }
//   time--;
// }
// console.log("Đã hết giờ ");