/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */

const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

const showObjectKeys = (obj) => {
  if (typeof obj === "object") {
    return Object.keys(obj);
  }
  throw new Error("It's not an object");
};

console.log(showObjectKeys(audi));
