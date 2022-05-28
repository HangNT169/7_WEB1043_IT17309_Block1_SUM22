/**
 * 1. DOM la gi ? XD dc cha con, anh em? Cau truc
 * 2. Truy xuat phan tu element
 */
// 2.1: On lai CSS selector
// C1: Basic
// Element selector :h1{}
// Class selector : .class{}
// ID selector : #id{}
// *{}:Tat ca deu an
// => Trong Dom cung co DOM selector
// 2.2 Truy xuat phan tu
// - thuoc tinh: dac diem dai dien cho node
// - phuong thuc: the hien thao tac: them, truy cap, xoa ...
//C1: Truy xuat bang ID
// let x = document.getElementById("content");
// // thay doi mau
// x.style.color = "blue";
// // gan lai gia tri: innerText , innerHTML
// x.innerHTML = "Thay doi text";

// // C2: Truy xuat bang classname
// let x1 = document.getElementsByClassName("header");
// // for(let i = 0 ;i<x1.length;i++){
// //     x1[i].style.color="....";
// // }
// x1[0].style.color = "pink";

// // C3: Truy xuat bang tagname
// // tagname: ten the: p, div,h1...
// let x2 = document.getElementsByTagName("p");
// console.log(x2.length);

// // C4: Truy xuat bang CSS selector
// let x3 = document.querySelectorAll("div p");

// BT:
// 1. Click button => show anh
function hienThiAnh() {
  let img = document.getElementById("hienThiAnh");
  img.innerHTML = "<img src ='#'>";
}

// 2. Tao 2 o input. 1 Button Cong. Khi an cong thi se fill kq o duoi
function congHaiSo() {
  // truy xuat phan tu
  let soThuNhat = document.getElementById("soThuNhat");
  let soThuHai = document.getElementById("soThuHai");
  let ketQua = document.getElementById("ketQua");
  // lay gia tri cua o vua truy xuat
  let value1 = soThuNhat.value;
  let value2 = soThuHai.value;
  // ep kieu
  let total = Number(value1) + Number(value2);
  console.log(total);
  // gan vao o ket qua
  ketQua.innerHTML = total;
}

/**
 * Them node: appendChild
 * Xoa node : removeChild
 */
// B3: Them node vao element
function add_child() {
  //tạo phần tử p
  var p = document.createElement("p");
  //tạo phần tử text
  var node = document.createTextNode("Some new text");
  //gắn node vào p
  p.appendChild(node);
  //Thay đổi một số thuộc tính của p
  p.appendChild(node);
  p.style.backgroundColor = "red";
  p.style.padding = "10px";
  p.style.color = "white";

  var div = document.getElementById("demo");
  //gắn p vào div
  div.appendChild(p);
}

// B4:Xoa phan tu
var child = document.getElementById("p1");
child.parentNode.removeChild(child);
