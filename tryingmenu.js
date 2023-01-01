const secen = document.querySelector(".grid2");
const fbtn = document.querySelectorAll(".filter-button ")
const cours= document.getElementsByClassName("menu-item")
var rop=document.getElementById('change');
var rom=document.getElementById('chmw');
const searching= () =>{
    const search = document.getElementById("search").value.toUpperCase();
    const headline = document.getElementsByTagName("h4")
       for(var i=0; i< headline.length; i++){
        let match = cours[i].getElementsByTagName('h4')[0];

        if(match){
           let txt= match.textContent || match.innerHTML

           if(match){
            if(txt.toUpperCase().indexOf(search)> -1){
                cours[i].style.display="";

           }
           else{
            cours[i].style.display = "none";      }
           }}}
    };


var p=document.getElementById('p');
var courses = [{ 
    id: 1,
    image: 'cssColors.png',
    title: 'CSS Colors',
    category: 'CSS',
    price: 9.9,
    },
    {   
    id: 2,
    image: 'htmlBasics.png',
    title: 'basics of HTML ',
    category: 'HTML',
    price: 5.9,
    },
    {
    id: 3,
    image: 'htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9,
    },
    {
    id: 4,
    image: 'cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9,
    },
    {
    id: 5,
    image: 'htmlAttrVal.jpg',
    title: 'variables and attributes of HTML',
    category: 'HTML',
    price: 19.9,
    },
    {
    id: 6,
    image: 'javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: 19.9,
    },
    {
    id: 7,
    image: 'javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9,
    
    },
    {
        id: 8,
        image: 'cssAnimation.png',
        title: 'CSS Animation',
        category: 'CSS',
        price: 30.9,
        
        },
 {
            id: 9,
            image: 'cssMesures.png',
            title: 'CSS Mesures',
            category: 'CSS',
            price: 30.9,
            
    },
   {
                id: 10,
                image: 'phpBasics.png',
                title: 'PHP Basics',
                category: 'PHP',
                price: 30.9,
  },
    {
            id: 11,
            image: 'phpCRUD.png',
            title: 'PHP CRUD',
            category: 'PHP',
            price: 30.9,
                    
    },
    {
        id: 12,
        image: 'javascriptDef.png',
        title: 'JS Definition',
        category: 'JS',
        price: 40.9,
                
},
{
    id: 13,
    image: 'javascriptDOM.png',
    title: 'JS DOM',
    category: 'JS',
    price: 18.9,         
},
{
    id: 14,
    image: 'htmlTags.png',
    title: 'HTML Tags',
    category: 'HTML',
    price: 10.9,
            
},
    {
        id: 15,
        image: 'phpDataBase.png',
        title: 'PHP DataBase',
        category: 'PHP',
        price: 30.9,
                
},






];

window.addEventListener("DOMContentLoaded", function(){
    dispitem(courses);});
function dispitem(coursitem){
        let dispcourses = coursitem.map(function(item){
            
            return `<article class="menu-item">
            <img src=${item.image} class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
                       <h4>${item.title}</h4>
                     <h4 class="price">${item.price}</h4>
                  </header>
                
                         </div>
                        </article>`;
        });
   dispcourses = dispcourses.join("");
   secen.innerHTML=dispcourses;
};

fbtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.id;
        
        const catcourses = courses.filter(function(coursitem){
            if(coursitem.category === category){
                    return coursitem;
            }
        });
if(category === 'all'){
     dispitem(courses);
} else{
    dispitem(catcourses);
}

    });
});

function filter(e){
    e.nextElementSibling.value = e.value;
const pricefilter = courses.filter(s=>s.price >= e.value);
    
    dispitem(pricefilter); 
};

 
    rop.addEventListener('click', cm)
function cm(){   
    document.body.style.backgroundColor = 'white';
    document.body.style.color='black';
}
rom.addEventListener('click', cmw)
function cmw(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color='white';
    
}

 