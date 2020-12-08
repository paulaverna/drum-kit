// FIRST TRY
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked");
// }

// SIMPLE
// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked.");
// });

// EASIER
var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked.");
    });
}