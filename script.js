const lists = document.getElementById("lists");
const text = document.getElementById("inputs");
const btn = document.getElementById("btn");
const nightdaybtn = document.getElementById("night-day");
const mainBody = document.getElementById("main-body");
const btndelete = document.getElementById("btndelete");

var i = 1;

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
    if(text.value===''){
        alert('Please write something!');
    }else{
        let li = document.createElement('li');
    
        li.innerHTML = text.value;
        li.id = i;
        lists.append(li);
    
        text.value='';
    
        i++;
    }
}

function onClickDelete(){
    if(i === 1){
        alert('You don\'t have anything to delete!');
    }else{
        let lidelete = document.getElementById(i-1);
        lists.removeChild(lidelete);
        i--;
    }
}

nightdaybtn.addEventListener("click", onClickChangeNightDay);
btn.addEventListener("click", onClick);
btndelete.addEventListener("click", onClickDelete);