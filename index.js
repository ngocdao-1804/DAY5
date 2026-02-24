// khai báo biến time 10
// lopp while dk time > 0
// time === 5; in đã qua 1/2 thời gian
// còn lại: còn time giây
// xong loop Hết giờ
let time = 10;
while (time > 0) {
    time--;
    console.log(`còn ${time} giây`)
    if (time === 5) {
        console.log(`đã qua nửa thời gian`)
       
    }
    
} 
console.log(`Hết giờ `)