var title="";
title+=" <h2> My Fav Programming Language </h2>";
document.querySelector("div").innerHTML+=title;
var lang=[ 'HTML' , 'CSS' , 'JS'];
var result="";
for(var i=0; i<3 ; i++){
    result+="<li>" + lang[i] + "</li>";
}
document.querySelector("ul").innerHTML=result;