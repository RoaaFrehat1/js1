var change=document.querySelector(".fontSize");

 
 var largF=document.querySelector(".large");


var smallF=document.querySelector(".smallBtn");
console.log(change);
console.log(largF);
console.log(smallF);
function changeFontL(){
    change.classList.add("large");
    change.classList.remove("smallF");
}
function changeFontS(){
    change.classList.add("smallF");
    change.classList.remove("large");
}
largF.onclick=changeFontL;
smallF.onclick=changeFontS;