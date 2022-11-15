let userInpt = document.querySelector("#user-inp");
let btn = document.querySelector("#tap");
const output = document.querySelector("#output");

btn.addEventListener("click", design);

function design(e) {
  e.preventDefault();
  output.innerHTML = "";
  if (userInpt.value < 10) {
    for (let i = 1; i <= userInpt.value; i++) {
      for (let j = 1; j <= i; j++) {
        output.innerHTML += "*";
        output.style.color = "black";
      }
      output.innerHTML += "<br>";
    }
  } else {
    output.innerHTML += "its so long";
    output.style.color = "red";
    output.style.fontSize = "x-large";
    output.style.padding = "3rem";
  }
}
