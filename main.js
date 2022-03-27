// Khai báo mảng
var numberArray = [];
// đọc số người dùng nhập và lưu lại
document.getElementById("btnThemSo").onclick = function () {
  var number = document.getElementById("txtNumber").value * 1;

  numberArray.push(number);

  console.log(numberArray);
};

// 1. Tổng các số dương trong mảng
document.getElementById("btnTongDuong").onclick = function () {
  var tongDuong = 0;
  for (var i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] > 0) {
      tongDuong += numberArray[i];
    }
  }
  document.getElementById("footerSubmit").innerHTML = tongDuong;
};

// 2. Đếm có bao nhiêu số dương trong mảng.
document.getElementById("btnSoDuong").onclick = function () {
  var soDuong = 0;
  for (var i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] > 0) {
      soDuong += 1;
    }
  }
  document.getElementById("footerSubmit").innerHTML =
    "Mảng có : " + soDuong + " số dương";
};

// 3. Tìm số nhỏ nhất trong mảng.
document.getElementById("btnSoNhoNhat").onclick = function () {
  var soNhoNhat = 0;
  for (var i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] < soNhoNhat) {
      soNhoNhat += numberArray[i];
    }
  }
  document.getElementById("footerSubmit").innerHTML = soNhoNhat;
};

// 4. Tìm số dương nhỏ nhất trong mảng.
document.getElementById("btnSoDuongNhoNhat").onclick = function () {
  var soDuongNhoNhat = -1;
  for (var i = 0; i <= numberArray.length; i++) {
    if (soDuongNhoNhat < 0 && numberArray[i] > 0) {
      soDuongNhoNhat = numberArray[i];
    } else if (numberArray[i] < soDuongNhoNhat && numberArray[i] > 0) {
      soDuongNhoNhat = numberArray[i];
    }
    // return soDuongNhoNhat;
  }
  document.getElementById("footerSubmit").innerHTML = soDuongNhoNhat;
};

// 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
document.getElementById("btnSoChanCuoiCung").onclick = function () {
  var soChanCuoiCung = 0;

  for (var i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] % 2 == 0) {
      soChanCuoiCung = numberArray[i];
      break;
    } else {
      soChanCuoiCung = -1;
      break;
    }
  }
  document.getElementById("footerSubmit").innerHTML = soChanCuoiCung;
};

// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
document.getElementById("btnHoanDoiViTri").onclick = function () {};

// 7. Sắp xếp mảng theo thứ tự tăng dần.
document.getElementById("btnSapXepMang").onclick = function () {
  var output = [];
  var sapXep;

  output = sapXepMang(numberArray);

  document.getElementById("footerSubmit").innerHTML =
    "Mảng đuợc sắp xếp theo thứ tự tăng dần là :" + output;
};

function sapXepMang(numberArray) {
  for (var i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] > numberArray[i + 1]) {
      let temp = numberArray[i];
      numberArray[i] = numberArray[i + 1];
      numberArray[i + 1] = temp;

      i = -1;
    }
  }
  return numberArray;
}

// 8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
document.getElementById("btnSoNguyenToDauTien").onclick = function () {
  var mangNguyenTo = xetSoNguyenTo(numberArray);

  if (mangNguyenTo[0] > 0) {
    var kq = "Số nguyên Tố đầu tiên trong mảng là: " + mangNguyenTo[0];
  } else {
    var kq = "Số nguyên Tố đầu tiên trong mảng là: " + -1;
  }
  document.getElementById("footerSubmit").innerHTML = kq;
};

function xetSoNguyenTo(a) {
  var soNguyenTo;
  var mangSoNguyenTo = [];
  for (var i = 0; i <= a.length; i++) {
    if (a[i] < 2) {
      soNguyenTo = null;
      // mangSoNguyenTo = "không có số nguyên tố trong mảng";
    } else if (a[i] % i == 0) {
      soNguyenTo = null;
      // mangSoNguyenTo = "không có số nguyên tố trong mảng";
    } else {
      soNguyenTo = a[i];
      mangSoNguyenTo.push(a[i]);
    }
  }
  return mangSoNguyenTo;
}

// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
document.getElementById("btnSoNguyen").onclick = function () {
  var soNguyen = 0;
  for (i = 0; i <= numberArray.length; i++) {
    check = checkSoNguyen(numberArray[i]);
    if (check === 1) {
      soNguyen++;
    }
  }
  document.getElementById("footerSubmit").innerHTML = soNguyen;
};

function checkSoNguyen(a) {
  //flag = 1 => là số nguyên
  //flag = 0 => không phải là số nguyên

  let flag = 1;
  if (Math.ceil(a) != Math.floor(a)) flag = 0;
  return flag;
}

// 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

document.getElementById("btnSoAmDuong").onclick = function(){
  var countSoDuong = 0 ;
  var countSoAm = 0 ; 
  for (var i= 0 ; i <= numberArray.length ; i ++){
    if (numberArray[i] > 0){
      countSoDuong++;
    }else if (numberArray[i] < 0){
      countSoAm ++;
    }
    // break;
  }
  var kqCount;
  if (countSoDuong > countSoAm){
    kqCount = 
    "Số lượng số Dương:"+ countSoDuong +"<br>"
    + "Số lượng số Âm :" + countSoAm + "<br>"
    + "Số lượng số Dương nhiều hơn số lượng số Âm."
  }else if (countSoDuong > countSoAm){
    kqCount = 
    "Số lượng số Dương:"+ countSoDuong +"<br>"
    + "Số lượng số Âm :" + countSoAm + "<br>"
    + "Số lượng số Dương ít hơn số lượng số Âm."
  }else {
    kqCount = 
    "Số lượng số Dương:"+ countSoDuong +"<br>"
    + "Số lượng số Âm :" + countSoAm + "<br>"
    + "Số lượng số Dương bằng số lượng số Âm."
  }
  document.getElementById("footerSubmit").innerHTML = kqCount;
}
