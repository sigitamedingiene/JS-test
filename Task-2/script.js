/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const clickMe = document.querySelector(".btn");
let click = 0;
clickMe.addEventListener("click", () => {
    const clickNumber = document.querySelector("#btn");
    click++;
    clickNumber.innerText = click;
});
