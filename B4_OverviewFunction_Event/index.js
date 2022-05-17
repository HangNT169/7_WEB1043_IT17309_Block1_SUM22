/**
 * Function co 2 loai:
 * - Co kieu du lieu tra ve
 * - Khong co kieu du lieu tra ve
 */
// cu phap:
// khong co kieu tra ve
// function hienThiThongTin(name) {
//   alert(name);
// }
// co kieu tra ve
// function tinhTong(a, b) {
//   return a + b;
// }
// // goi ham
// // hienThiThongTin("Trong cung file ham");
// let ketQua = tinhTong(3, 4);
// alert(ketQua);
// // https://codelearn.io/sharing/function-javascript

// // ES5:
// let sumES5 = function tinhTongHaiSoES5(a, b) {
//   return a + b;
// };

// // cach goi ham trong ES5
// let ketQuaES5 = sumES5(3, 5);
// console.log(ketQuaES5);

// // ES6:arrow function
// let sumES6 = (a, b = 1) => {
//   return a + b;
// };
// console.log(sumES6(4, 2));

// 2. Pham vi truy cap
// Bien toan cuc
// Bien cuc bo
// let v1 = "Bien toan cuc";
// console.log("Truoc vong lap:" + v1);
// // console.log("Truoc vong lap:" + v2);
// for (let i = 0; i < 3; i++) {
//   let v2 = "Bien cuc bo";
//   console.log("Trong vong lap:" + v1);
//   console.log("Trong vong lap" + v2);
//   if (i == 3) {
//     let v3 = "Trong if";
//     console.log(v3);
//   }
//   console.log("Ra ngoai if" + v3);
// }
// console.log("Ngoai vong lap" + v1);
// console.log("Ngoai vong lap" + v2);
function clickMe() {
  alert("Xin chao");
}

function showImageFirst() {
  //   document.write("<img src ='img/anh1.jpeg'/>");
  document.write("Hien thi anh 1");
}
function showImageSecond() {
  document.write("Hien thi anh 2");
}

function showImage(text) {
  // neu anh 1 => Show anh 1
  // neu anh 2 => show anh 2
  if (text == "anh1") {
    document.write("Hien thi anh 1");
  } else {
    document.write("Hien thi anh 2");
  }
}
