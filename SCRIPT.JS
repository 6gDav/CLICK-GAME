const gameArea = document.querySelector("#gamearea");

//#region -- feltölt
let t = [];
for (let i = 0; i < 12; i++) {
  t.push(i + 1);
}
//#endregion
//#region -- keverés
for (let i = 0; i < 100; i++) {
  let pos1 = Math.floor(Math.random() * 12);
  let pos2 = Math.floor(Math.random() * 12);
  let temp = t[pos1];
  t[pos1] = t[pos2];
  t[pos2] = temp;
}
//#endregion
//#region -- 12 szam  <- ha ide lenne írva rendesen hogy mit kéne csinálnia ennek a program résznek, akkor könnyebb lenne kijavítanom, de így hogy nem tudom, hogy mit csinál.....
let nextNumber = 1;
for (let i = 0; i < 12; i++) {
  let szamDoboz = document.createElement("div");
  szamDoboz.innerText = gameArea?.appendChild(szamDoboz);

  szamDoboz.addEventListener("click", function () {
    if (szamDoboz.innerText == nextNumber) {
      szamDoboz.classList.add("rejtett");
      nextNumber++;
    }
  });
}
//#endregion
//#region másik számláló

// const szammlalo = document.querySelector("#szamlalo");
// let ido = 0;
// setInterval(function () {
//   ido++;
//   szammlalo.innerText = ido;
// }, 1000);
// console.log("jó?!");

//#endregion
// NINCS PRETTIER !!!!! ez hogy lehet? tessék azonnal telepíteni!!

//állytsd be hogy mentésre formázzon

//ctrl+shift+p  -> settings ui
//hiába mentem még mindig nem jós

//na működik a prettier és rögtön jelzi, hogy hibás a program.
document.addEventListener("DOMContentLoaded", function () {
  // Itt helyezd el a JavaScript kódodat
  const startButton = document.querySelector("#start");
  const timerElement = document.querySelector("#timer");

  let seconds = 0;
  let intervalId;

  startButton.addEventListener("click", () => {
    if (!intervalId) {
      seconds = 0;
      intervalId = setInterval(() => {
        seconds++;
        timerElement.textContent = seconds;
      }, 1000);
    }
  });
});
