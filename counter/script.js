



theCount=document.querySelector(".counter");
let count = 0;
icrementBtn=document.getElementById("increment");
saveBtn=document.getElementById("save");
previous=document.getElementById("pe");


icrementBtn.addEventListener("click", inc);

function inc(){
    count++

    theCount.innerHTML= count;

}


saveBtn.addEventListener("click",sav);

function sav(){
    previous.innerHTML+=count +" - ";

    theCount.innerHTML=0;
    count=0;

}
