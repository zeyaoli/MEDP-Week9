const boxContainer = document.getElementById("box-container");

const colors = ["#ff00ff", "#33ff68", "#2f6890"];

// Pay attention to the logic and the developing mindset - breakdown the big project into small chunks

/* First step, add a box with static px to the div container 
let boxDiv = document.createElement("div");
boxDiv.classList.add("box");
boxDiv.style.top = "50px";
boxDiv.style.left = "20px";

boxContainer.appendChild(boxDiv);
*/

/* Second Step, wrap the button click function 
const addButton = document.getElementById("add-box");
addButton.addEventListener("click", function () {
    let boxDiv = document.createElement("div");
    boxDiv.classList.add("box");
    boxDiv.style.top = "50px";
    boxDiv.style.left = "20px";

    boxContainer.appendChild(boxDiv);
});
*/

/* Third Step, make a random value */
let indexNumber = 0;
const addButton = document.getElementById("add-box");
addButton.addEventListener("click", function () {
    let boxDiv = document.createElement("div");
    boxDiv.classList.add("box");
    boxDiv.innerHTML = `<p>${indexNumber}</p>`;
    boxDiv.style.top = `${randomRange(10, 90)}vh`;
    boxDiv.style.left = `${randomRange(10, 90)}vw`;
    boxDiv.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    boxContainer.appendChild(boxDiv);
    indexNumber++;
});

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/* Fourth Step: add random Color to the box */
/* Fifth Step: add a number to the box */
/* Sixth Step: Add a remove Button */

const removeButton = document.getElementById("remove-box");
removeButton.addEventListener("click", function () {
    let boxes = document.getElementsByClassName("box");
    // it's an array!
    console.log(boxes);
    if (boxes.length > 0) {
        boxes[Math.floor(Math.random() * boxes.length)].remove();
    }
});

/* Extra: Automatic with setTimeout */
