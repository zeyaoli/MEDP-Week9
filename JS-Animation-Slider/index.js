let box = document.getElementById("box");
let slider = document.getElementById("slider");
let positionSlider = document.getElementById("position_slider");

function rotate() {
    console.log("slide");
    let value = slider.value;
    let positionValue = positionSlider.value;
    box.style.transformOrigin = "center";
    box.style.transform = `translateX(${positionValue}vw) rotate(${value}deg)`;
}

function move() {
    console.log("move!");
    let rotateValue = slider.value;
    let positionValue = positionSlider.value;
    box.style.transform = `translateX(${positionValue}vw) rotate(${rotateValue}deg)`;
}

slider.addEventListener("input", rotate);
positionSlider.addEventListener("input", move);
