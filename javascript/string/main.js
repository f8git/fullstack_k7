// LAM VIEC VOI CHUOI

var myString = "   Hoc JS tai nha!  ";

// Keyword: Javascript string menthods

// 1. Length
console.log(myString.length);

// 2. Find index
// console.log(myString.indexOf("JS", 6));
// console.log(myString.lastIndexOf("JS"));
// console.log(myString.search("JS"));

// 3. Cut string
console.log(myString.slice(4, 6));

// 4. Replace
// console.log(myString.replace("JS", "Javascript"));
console.log(myString.replace(/JS/g, "Javascript"));

// 5. Convert to upper case
console.log(myString.toLocaleUpperCase());

// 6. Convert to lower case
console.log(myString.toLocaleLowerCase());

// 7. Trim
console.log(myString.trim().length);

// 8. Split
var languages = "Javascript, PHP, Ruby";

console.log(languages.split(", "));

// 9. Get a character by index
const myString2 = "Tien Le";

// console.log(typeof myString2.charAt(10));
console.log(typeof myString2[10]);
