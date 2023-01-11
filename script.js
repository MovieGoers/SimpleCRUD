const lists = document.getElementById("lists");

const text = document.getElementById("inputs");
const textBig = document.getElementById("input-big");

const btn = document.getElementById("btn");
const btndelete = document.getElementById("btndelete");
const btnupdate = document.getElementById("btnupdate");

const nightdaybtn = document.getElementById("night-day");

const mainBody = document.getElementById("main-body");


var i = 1;
var listInside = [];
var clickedListId = -1;

listInside.push('temp');

function onClickChangeNightDay(){
    if(mainBody.className === 'day'){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        mainBody.className = "night";
    } else{
        document.body.style.backgroundColor = "cornflowerblue";
        document.body.style.color = "black";
        mainBody.className = "day";       
    }
    
}

function onClickList(event){
    text.value=event.target.innerHTML;
    textBig.value=listInside[event.target.id];

    clickedListId = event.target.id;
    document.getElementById('choice').innerHTML = 'You chose '+document.getElementById(clickedListId).innerHTML+'.';
}

function onClick(){
    if(text.value===''){
        alert('Please write something!');
    }else{
        let li = document.createElement('li');
    
        li.innerHTML = text.value;
        listInside.push(textBig.value);

        li.id = i;
        li.addEventListener('click', onClickList);
        lists.append(li);
    
        text.value='';
        textBig.value='';
    
        i++;
    }
}

function onClickDelete(){
    if(i === 1){
        alert('You don\'t have anything to delete!');
    }else{
        let lidelete = document.getElementById(i-1);
        lists.removeChild(lidelete);
        listInside.pop();
        i--;
        document.getElementById('choice').innerHTML = '';
    }
}

function onClickUpdate(){
    if(clickedListId == Number(-1)){
        alert('Please choose something on list to update!');
    }else if(text.value===''){
        alert('Please write something!');
    }else{
        templist = document.getElementById(clickedListId);
        templist.innerHTML = text.value;
        listInside[clickedListId] = textBig.value;
        document.getElementById('choice').innerHTML = 'Updated!';
    }
}

nightdaybtn.addEventListener("click", onClickChangeNightDay);
btn.addEventListener("click", onClick);
btndelete.addEventListener("click", onClickDelete);
btnupdate.addEventListener("click", onClickUpdate);