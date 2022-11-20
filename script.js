// 1: 5x2 => Thực hiện phép tính
// 2: Kiem tra so chan, le
// 3: In ra man hinh => Ket qua la so chan: 10

let num = prompt('Nhap phep tinh')
// 66+9
// 99-4
// 7*8
// 7/5
let result = 0

// Tìm hiểu về array (mảng) trong javascript
num = num.split('')
// vd: num = '7*8'

let soThuNhat = num[0] // num[0] = '7'
let phepTinh = num[1] // num[1] = '*'
let soThuHai = num[2] // num[2] = '8'

while (true) {
    if (phepTinh == '*') {
        result = soThuNhat * soThuHai
        break;
    }
    else {
        alert('Phep tinh khong dung')
        num = prompt('Nhap phep tinh')
        soThuNhat = num[0]
        phepTinh = num[1]
        soThuHai = num[2]
    }
    // Đổi if else sang dùng switch case cho các phép tính * / + -
}

if (result % 2 == 0) {
    result = 'Ket qua la so chan: ' + result
}
else {
    result = 'Ket qua la so le: ' + result
}

// Đổi if else sang dùng toán tử 3 ngôi
// Điều kiện ? Đúng điều kiện : Sai điều kiện

alert(result)


// Tách chuỗi 'Hello World' sang mảng chứa 'Hello' và 'World'
let textTemp = 'Hello World'

console.log(textTemp);