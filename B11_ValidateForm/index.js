function onChangeKhoaHoc() {
  // Truy xuat toi 2 phan tu combobox va value de hien thi
  let khoaHocElement = document.getElementById("khoaHoc");
  let hocPhiElement = document.getElementById("hocPhi");
  hocPhiElement.value = khoaHocElement.value;
}

function register2() {
  // B1B1: Lay ra tat ca cac o field phai nhap
  let inputTexts = document.getElementsByClassName("inputText");
  // Kiem tra tat ca cac field phai nhap vao
  for (let i = 0; i < inputTexts.length; i++) {
    // lay ra doi tuong
    let inputItem = inputTexts.item(i); // inputTexts[i]

    // reset lai text
    inputItem.nextElementSibling.innerText = "";
    inputItem.nextElementSibling.style.color = "red";
    inputItem.nextElementSibling.style.fontSize = "10px";

    // Kiem tra rong
    if (inputItem.value === "") {
      inputItem.nextElementSibling.innerText = "* Bat buoc";
    } else {
      // kiem tra email phai hop le
      if (
        inputItem.getAttribute("type") === "email" &&
        isValidEmail(inputItem.value) === false
      ) {
        inputItem.nextElementSibling.innerText = "* Email khong dung dinh dang";
      }

      // Kiem tra so dien thoai
      if (
        inputItem.getAttribute("type") === "number" &&
        isNaN(inputItem.value) === true
      ) {
        inputItem.nextElementSibling.innerText =
          "* So dinh thoai khong dung dinh dang";
      }
    }
  }
}
function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
