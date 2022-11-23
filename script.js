// 1: 5x2 => Thực hiện phép tính
// 2: Kiem tra so chan, le
// 3: In ra man hinh => Ket qua la so chan: 10

let num = prompt('Nhap phep tinh')
// 6+9
// 9-4
// 7*8
// 7/5
let result = 0

// Tìm hiểu về array (mảng) trong javascript

num = num.split('')
// vd: num = '7*8'

let soThuNhat = num[0] // num[0] = '7'
let phepTinh = num[1] // num[1] = '*'
let soThuHai = num[2] // num[2] = '8'

let a = true

while (a) {
    // if (phepTinh == '*') {
    //     result = soThuNhat * soThuHai
    //     break;
    // }
    // else if (phepTinh == '/') {
    //     result = soThuNhat / soThuHai
    //     break;
    // }
    // else if (phepTinh == '+') {
    //     result = Number(soThuNhat) + Number(soThuHai)
    //     break;
    // }
    // else if (phepTinh == '-') {
    //     result = soThuNhat - soThuHai
    //     break;
    // }
    // else {
    //     alert('Phep tinh khong dung')
    //     num = prompt('Nhap phep tinh')
    //     soThuNhat = num[0]
    //     phepTinh = num[1]
    //     soThuHai = num[2]
    // }

    switch(phepTinh) {
        case '*':
            result = soThuNhat * soThuHai;
            a = false
            break;
        case '-':
            result = soThuNhat - soThuHai;
            a = false
            break;
        case '/':
            result = soThuNhat / soThuHai;
            a = false
            break;
        case '+':
            result = Number(soThuNhat) + Number(soThuHai);
            a = false
            break;
        default:
            alert('Phep tinh khong dung');
            num = prompt('Hay nhap lai phep tinh');
            soThuNhat = num[0];
            phepTinh = num[1];
            soThuHai = num[2];
    }
}

// if (result % 2 == 0) {
//     result = 'Ket qua la so chan: ' + result
// }
// else {
//     result = 'Ket qua la so le: ' + result
// }

result = result % 2 == 0 ? 'Ket qua la so chan: ' + result : 'Ket qua la so le: ' + result

// Đổi if else sang dùng toán tử 3 ngôi
// Điều kiện ? Đúng điều kiện : Sai điều kiện

alert(result)


// Tách chuỗi 'Hello World' sang mảng chứa 'Hello' và 'World'
let textTemp = 'Hello World'
let temp = textTemp.split(' ')
console.log(temp);