/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const button = document.getElementById("btn__element");
const outputState = document.getElementById("btn__state");

let count = 0;

if (button && outputState) {
  button.addEventListener(
    "click",
    function () {
      count += 1;
      outputState.innerHTML = count;
    },
    true
  );
}
