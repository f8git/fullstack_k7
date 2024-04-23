// Tự động chuyển về kiểu logic để so sánh(truthy, falsy)
// Falsy: 0, NaN, null, "", undefined, false
// Truthy: Các trường hợp còn lại
// var a = -1;
// var b = a ? "F8" : "Mạnh Tiến";

// Cú pháp truthy: variable
// Cú pháp falsy: !variable
// console.log(b);

// Toán tử && --> tìm biểu thức sai, còn đúng thì còn chạy đến khi nào hết thì thôi
// var a = 0;
// var b = a && "F8";
// console.log(b);

// Toán tử || --> Tìm biểu thức đúng, còn sai là còn chạy đến khi nào hết thì thôi
// var a = false;
// var b = 0;
// var result = a || b || "F8";
// console.log(result);
