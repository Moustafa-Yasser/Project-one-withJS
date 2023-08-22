let input = document.getElementById("email");
let span = document.querySelector("form label span");
let mainDiv = document.getElementById("main");
let Suc = document.getElementById("cil");
let ch =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let buttonOne = document.getElementById("btn");
let buttonTwo = document.getElementById("ret");

buttonOne.addEventListener("click", function (e) {
  e.preventDefault();
});
input.onchange = function () {
  if (input.value.match(ch)) {
    input.style = "background-color: #fff;border-color: #ddd;";
    span.style = " visibility: hidden;";
    buttonOne.addEventListener("click", () => {
      mainDiv.style.display = "none";
      Suc.style.display = "Flex";
      let span2 = document.getElementById("gm");
      span2.textContent = input.value;
    });
  } else {
    input.style = "background-color: #ff00001f; border-color: red;";
    span.style = "visibility: visible;";
  }
};

buttonTwo.onclick = () => {
  mainDiv.style.display = "flex";
  Suc.style.display = "none";
};
