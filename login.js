var form = document.querySelector('form');
var forem=document.getElementById('formex1');
 var pw = document.getElementById('formex4');
 const darori = value => value === '' ? false : true;

    var lowercase = /[a-z]/g;
    var uppercase = /[A-Z]/g;
    var numbers = /[0-9]/g;
     
    

form.addEventListener('submit', function (e) {
   if(pw.value.length >= 8 && pw.value.match(lowercase) && pw.value.match(uppercase) && pw.value.match(numbers) && forem.value.length>=3 && forem.value.length<25  )
        {
            form.action="home.html";
        }

   else e.preventDefault();
    
});