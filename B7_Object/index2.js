/**
 * 1. Cach khai bao Object
 */

// C1:
// Khoi tao 1 Object rong
let hoa1 = {};
// them thuoc tinh
hoa1.mauSac = "xanh";
//Khoi tao 1 Object co thuoc tinh ben trong
let hoa2 = {
  mau: "hong",
  soCanhHoa: 2,

  // cac ham
  // tenHam : function
  hienThi: function () {
    // muon lam gi thi lam
  },
};

// log
console.log(hoa2.soCanhHoa + " - " + hoa2.mau);
// thay doi
hoa2.mau = "Do";
hoa2.soCanhHoa = 10;
console.log(hoa2.soCanhHoa + " - " + hoa2.mau);

// C2:
var hoaLoaKen = new Object();
hoaLoaKen.mau = "Vang";
console.log(hoaLoaKen.mau);

/**
 * 2. Class
 * - Khoi tao bang = function
 * - Khoi tao bang = class
 */

// C1: Khoi tao bang class
class DongVat {
  // constructor();
  // ten;
  // tuoi;
  ///...
}

// c2: Khoi tao bang function
/*
    Cú pháp:

    function tenlop (tenbien1, tenbien2…){
        tenthuoctinh1 = tenbien1;
        tenthuoctinh2 = tenbien2;
        tenphuongthuc = function(){
            Viết mã cho phương thức ở đây
        }
    }
*/
function Hoa(mauSac, soCanh) {
  this.mau = mauSac;
  this.soCanh = soCanh;
  this.mui = function () {
    // code gi thi code
  };
}

function Dog(name, tuoi) {
  this.name = name;
  this.tuoi = tuoi;
  this.tiengKeu = function () {
    return "gau gau";
  };
}

Dog[0] = new Dog("cho1", 10);
Dog[1] = new Dog("cho2", 1);
Dog[2] = new Dog("cho3", 2);
Dog[3] = new Dog("cho4", 20);
Dog[4] = new Dog("cho5", 8);
// Mang in cac phan tu trong list Object
// for - in
// for (let i in Dog) {
//   console.log(Dog[i].name);
// }
// for of
// for (let value of Dog) {
// }
