/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

import {
  composition,
  division,
  subtraction,
  multiplication,
} from "./modules/math/index.js";
import { one, two, three, four, five } from "./modules/numbers/numbers.js";

let a = composition(one, four);
let b = division(four, two);
let c = subtraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
