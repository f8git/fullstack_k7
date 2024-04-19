// Bieu thuc = Toan tu + toan hang

//  s = a + b * c

// s, a, b, c --> toan hang
// =, +, * --> toan tu

// 1. Toan tu so hoc
/*
+, -, *, /
% --> chia lay du
** --> luy thua
++ --> Tang len 1 don vi
-- --> giam di 1 don vi
*/
var a = 1;
// a--;
// a++;
// --a;
var b = ++a;

console.log(a);
console.log(b);

// 2. Toan tu gan
var a = 10;
// a += 10;
// a -= 10;
// a *= 10;
// a /= 10;
// a %= 10;
a **= 10;
// console.log(a);

// 3. Toan tu so sanh
/*
>, <, >=, <=, ==, ===, !=, !==

==> Luon tra ve kieu du lieu logic(boolean): true, false

Luu y: 
== so sanh bang nhung chi so sanh gia tri
=== so sanh bang ca gia tri va kieu du lieu
!= so sanh khac nhung chi so sanh gia tri
!== so sanh khac ca kieu giu lieu va gia tri
*/

// var a = 10;

// var check = a >= 10;
// console.log(check);

// 4. Toan tu ly luan (ket hop)
/*
&& --> ket hop and
|| --> ket hop or
! --> ket hop not

Thu tu uu tien: Ngoac tron --> and --> or --> not
*/

var a = 10;
var check = a >= 5 && a <= 15;
console.log(check);

// 5. Toan tu 3 ngoi
// Cu phap: dieukien ? giatridung : giatrisai

// var a = 10;
// var b = a >= 10 ? "F8" : "Manh Tien";
// console.log(b);

// 6. Toan tu nullish (??)
// Cu phap: bien ?? giatri
// Cach hoat dong: Neu bien !== undefined va bien !== null lay bien, nguoc lai lay giatri
var x = 2;
var result = x !== null && x !== undefined ? x : "f8";
console.log(result);
