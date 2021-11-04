const container = document.getElementById("container");

// https://www.w3.org/wiki/CSS/Properties/color/keywords
const colors = [
    "black",
    "silver",
    "red",
    "purple",
    "green",
    "yellow",
    "blue",
    "aqua",
    "teal",
    "lime",
    "maroon",
    "cyan",
    "darkgreen",
    "gold",
    "lightblue",
];

setInterval(function () {
    console.log("Sending this every second");
}, 1000);

let prevIndex = 0;
let index = 0;
function changeColor() {
    prevIndex = index;
    index = Math.floor(Math.random() * colors.length);
    if (prevIndex === index) {
        index = Math.floor(Math.random() * colors.length);
    } else {
    }
    container.style.backgroundColor = colors[index];
    console.log(index);
}
setInterval(changeColor, 500);
