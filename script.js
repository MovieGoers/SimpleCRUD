const title = document.getElementById("main-title");
const text = document.getElementById("inputs");
const btn = document.getElementById("btn");
const nightdaybtn = document.getElementById("night-day");
const mainBody = document.getElementById("main-body");

function onClickChangeNightDay(){
    if(mainBody.className === 'day'){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        mainBody.className = "night";
    } else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        mainBody.className = "day";       
    }
    
}

function onClick(){
    title.innerHTML = text.value;
}

nightdaybtn.addEventListener("click", onClickChangeNightDay);
btn.addEventListener("click", onClick);
