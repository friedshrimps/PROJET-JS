



var al1=Math.floor(Math.random()*5)
var al2=Math.floor(Math.random()*5)
var al3=Math.floor(Math.random()*5)

var rop=document.getElementById('change');
var rom=document.getElementById('chmw');
 

var text = document.getElementById('text');
var text1 = document.getElementById('text1');

var drj=document.getElementById('pho');
var obr=document.getElementById('phu');

var conto=document.getElementById('c2');
var so=document.getElementsByClassName('so');
var su=document.getElementsByClassName('su');
var section= document.querySelector('section');
var navt = document.getElementsByClassName('nav-header');

var btno=document.getElementsByClassName('op');
var courses = [{ 
image: 'javascriptDef.png',
title: 'what is javascript?',
price: 9.9
},
{   image: 'htmlBasics.png',
title: 'basics of HTML<br>',
price: 5.9
},
{
image: 'htmlElements.png',
title: 'HTML elements and tags<br>',
price: 9.9
},
{
image: 'cssSelectors.jpg',
title: 'CSS selectors<br>',
price: 69.9
},
{
image: 'htmlAttrVal.jpg',
title: 'variables and attributes of HTML<br>',
price: 19.9
},
{
image: 'javascriptVariables.png',
title: 'variables and data type of javascript<br>',
price: 19.9
},
{
image: 'javascriptOperators.png',
title: 'Javascript operators and conditions<br>',
price: 29.9

}]

const arr=[]
do {

const randomNumber = Math
.floor(Math.random() * 5) + 1


if (!arr.includes(randomNumber)) {
arr.push(randomNumber);
}

} while (arr.length < 3);






document.getElementById("cours1").innerHTML='<img class="affimg" src="'+courses[arr[0]].image+' ">'+'<p>'
+courses[arr[0]].title+'</p>'+'<p>'+courses[arr[0]].price+'</p>';
document.getElementById("cours2").innerHTML='<img class="affimg" src="'+courses[arr[1]].image+' ">'+'<p>'
+courses[arr[1]].title+'</p>'+'<p>'+courses[arr[1]].price+'</p>';
document.getElementById("cours3").innerHTML='<img class="affimg" src="'+courses[arr[2]].image+' ">'+'<p>'
+courses[arr[2]].title+'</p>'+'<p>'+courses[arr[2]].price+'</p>';







rop.addEventListener('click', cm)
function cm(){
    
    document.body.style.backgroundColor = 'white';
    text.style.color = "blue";
    text1.style.color = "blue";
     
}
rom.addEventListener('click', cmw)
function cmw(){
    document.body.style.backgroundColor = 'black';
   
    text.style.color = "white";
    text1.style.color = "white";
}


 