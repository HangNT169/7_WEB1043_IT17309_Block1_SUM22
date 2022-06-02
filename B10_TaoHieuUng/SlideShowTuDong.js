let imageObjects = [];
let indexHienTai = 0;
let intevarId;
// Nap tat ca cac anh vao body khi project chay
function loadImage() {
  // B1: Tao ra 1 mang chua ten tat ca cac anh trong thu muc
  const images = ["cat.jpg", "chicken.jpg", "dog.jpg", "monkey.jpg", "pig.jpg"];

  // B2: Tao 1 ra 1 bien la ten cua folder chua anh
  const imgFolderName = "images/";

  //B3:Push anh vao html
  images.forEach(function (e) {
    // Khoi tao 1 doi tuong image
    let img = new Image();
    // gan duong dan anh
    img.src = imgFolderName + e;
    // push anh
    imageObjects.push(img);
  });

  // Slide show tu dong
  start();
  // B4: Xet lai vao html
  document.img_pet.src = imageObjects[indexHienTai].src;
}

function start() {
  if (intevarId === undefined) {
    // set time cho no
    intevarId = setInterval(function () {
      nextImage();
    }, 1500);
  }
}
function nextImage() {
  indexHienTai++;
  if (indexHienTai >= imageObjects.length) {
    indexHienTai = 0;
  }
  //  Xet lai vao html
  document.img_pet.src = imageObjects[indexHienTai].src;
}
