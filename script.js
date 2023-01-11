const title = document.getElementById("main-title");
const text = document.getElementById("inputs");
const btn = document.getElementById("btn");

function onClick(){
    title.innerHTML = text.value;
}

btn.addEventListener("click", onClick);