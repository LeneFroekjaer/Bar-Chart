"use script";

// FØRSTE FORSØG
////////////////////////////////////////////////////////////////////////////////
// Creates the bars.
function createBar() {
  // Create a bar from template
  const clone = document.querySelector("#bartemplate").content.cloneNode(true);
  const bar = clone.querySelector(".bar");
  document.querySelector("#container").appendChild(clone);

  // sætter en tilfældig højde på baren (part 1)
  const height = randomNumber() * 2.5 + "px";
  bar.style.height = height;

  //console.log(Array.from(document.querySelector("#bartemplate")));

  createArr();
}

// Skaber loop, så createbar() bliver gentaget 40 gange, hvilket så giver 40 bars.
let counter = 0;
loopBars();
function loopBars() {
  createBar();
  counter++;
  //console.log(counter);
  if (counter < 40) {
    loopBars();
  }
}

// sætter en tilfældig højde på baren (part 2)
function randomNumber(min = 0, max = 35) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//////////////////////////////////////////////////////////////////////////////

// EKSTRA TIL FØRSTE FORSØG
//////////////////////////////////////////////////////////////////////////////
function createArr() {
  //console.log(document.querySelector(".bar").style.height);

  const arr = [0];
  arr.length = 4;
  arr.shift();
  arr.push(document.querySelector(".bar").style.height);
  //console.log(arr);
}

//////////////////////////////////////////////////////////////////////////////

// ANDET FORSØG

//////////////////////////////////////////////////////////////////////////////

let fakeArr = [0];
createFakeArray();
function createFakeArray() {
  fakeArr.push = randomIntBetween();

  // // sætter en tilfældig højde på baren (part 1)
  // const height = randomIntBetween() + "px";
  // const fakeBar = document.querySelector(".bar");
  // fakeBar.style.height = fakeArr;
}

function randomIntBetween(min = 0, max = 35) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(fakeArr);

// Skaber loop
let count = 0;
loopLoop();
function loopLoop() {
  createFakeArray();

  count++;
  //console.log(counter);
  if (count < 40) {
    loopLoop();
  }
}
