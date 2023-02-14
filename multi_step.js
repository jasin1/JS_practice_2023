// test
console.log("We are in!!");
/*
Eerst alle elementen verzamelen die ik nodig heb.
Daarna eerste stap zichtbaar maken door "active" class toe te voegen

*/
const mainSteps = document.getElementsByClassName("form-step");
const stepsIndi = document.getElementById("steps-wrapper");
const prevBtn = document.querySelector("step-btn-prev");
const nxtBtn = document.querySelector("step-btn-next");

mainSteps[0].classList.remove("hidden");
prevBtn.innerHTML = "vorige stap";

