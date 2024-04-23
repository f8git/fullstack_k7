/*
Vòng lặp:
- Cú pháp trong lập trình
- Cho phép đoạn chương trình chạy lặp đi lặp lại theo số lần định trước

2 loại vòng lặp
- Vòng lặp với số lần xác định trước
==> for

- Vòng lặp với số lần không xác định trước
==> while, do while
*/

// Vòng lặp for
/*
for (initial; condition; step) {
    code
}
*/

var n = 5;
var value = 0,
  tmp = 1;
for (var i = 1; i <= n; i++) {
  tmp *= i;
  value += tmp;
}
console.log(value);
