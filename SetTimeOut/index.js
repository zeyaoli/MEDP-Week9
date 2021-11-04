const changeMe = document.getElementById("change-me");
const timer = 5000;
changeMe.innerHTML = `I will be changed in ${timer / 1000} seconds`;

setTimeout(() => {
    console.log("this is the first message");
}, 5000);
setTimeout(() => {
    console.log("this is the second message");
}, 3000);
setTimeout(() => {
    console.log("this is the third message");
}, 1000);

function changeContent() {
    changeMe.innerHTML = `I am different now`;
}

setTimeout(changeContent, timer);
