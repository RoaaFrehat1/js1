var change=document.querySelector(".fontSize");

 
 var largF=document.querySelector(".larg");


var smallF=document.querySelector(".smallBtn");
console.log(change);
console.log(largF);
console.log(smallF);
function changeFontL(){
    change.classList.add("larg");
    change.classList.remove("smallF");
}
function changeFontS(){
    change.classList.add("smallF");
    change.classList.remove("larg");
}
largF.onclick=changeFontL;
smallF.onclick=changeFontS;