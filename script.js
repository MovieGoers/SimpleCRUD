const lists = document.getElementById("lists");
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
    let li = document.createElement('li');
    
    li.innerHTML = text.value;
    lists.append(li);
}

nightdaybtn.addEventListener("click", onClickChangeNightDay);
btn.addEventListener("click", onClick);
