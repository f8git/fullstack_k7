export { product } from "./module3.js";

export const a = 10;
export const b = 20;
export function getMassage() {
  console.log("getMessage");
}

const c = 50;
// export { a, b };

export default c; // export default chỉ có 1
console.log(c);
