var forem=document.getElementById('formex1');
var forem1=document.getElementById('email');
var forem2 = document.getElementById('formex4');
var forem3 = document.getElementById('formex5');
var form = document.querySelector('form');

 var message = document.getElementById('message'); 
 var message1 = document.getElementById('message1');
 var message2 = document.getElementById('message2');
 var message5 = document.getElementById('message5');

 var email = document.getElementById('email');
 var pw = document.getElementById('formex4');
 var cpw = document.getElementById('formex5');


form.addEventListener('submit', function (e) {
   if(message.style.display=="none" && message1.style.display=="none" && message2.style.display=="none" && message5.style.display=="none")
        {
            form.action="home.html";
        }

   else e.preventDefault();
    
});

 const darori = value => value === '' ? false : true;

    forem.addEventListener('keyup', function(){

            if(forem.value.length<3 || forem.value.length>25  ){
            forem.setAttribute("class","error")   ; 
            message.style.display="block";  

                if(forem.value.length==0){
                    message.style.display="none";
                    forem.setAttribute("class","form-control");
         }}

         else{
    forem.setAttribute("class","success"); 
    message.style.display="none";  
}
})

forem1.addEventListener('keyup', function(){
           

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if(email.value.match(mailformat)){
            forem1.setAttribute("class","success"); 
            message1.style.display="none";
           } 
           else 
                {
                    forem1.setAttribute("class","error")   ; 
                    message1.style.display="block";
                }

            });

forem2.addEventListener('keyup', function(){
    var lowercase = /[a-z]/g;
    var uppercase = /[A-Z]/g;
    var numbers = /[0-9]/g;
     
    if(pw.value.length >= 8 && pw.value.match(lowercase) && pw.value.match(uppercase) && pw.value.match(numbers))
    {
        forem2.setAttribute("class","success"); 
        message2.style.display="none";
       } 
       else
              { forem2.setAttribute("class","error")   ; 
              message2.style.display="block";}

})

forem3.addEventListener('keyup', function(){
    if(cpw.value == pw.value)
    {
        forem3.setAttribute("class","success"); 
        message5.style.display="none";
       } 
       else
              { forem3.setAttribute("class","error")   ; 
              message5.style.display="block";}

       
})



/* Regex code not working:
const username = document.getElementsByClassName('u1');
const email = document.getElementsByClassName('email');
const pw = document.getElementsByClassName('pw');
const cpw = document.getElementsByClassName('cpw');

const form = document.querySelector('form');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const user = username.value.trim();

    if (!isRequired(user)) {
        showError(username, 'Username cannot be blank.');
    } else if (!isBetween(user.length, min, max)) {
        showError(username, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(username);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const em = email.value.trim();
    if (!isRequired(em)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = pw.value.trim();

    if (!isRequired(password)) {
        showError(pw, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(pw, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(pw);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
     
    const confirmPassword = cpw.value.trim();
    const password = pw.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(cpw, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(cpw, 'The password does not match');
    } else {
        showSuccess(cpw);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (pw) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(pw);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
     
    const formField = input.parentElement;
     
    formField.classList.remove('success');
    formField.classList.add('error');
 
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
     
    const formField = input.parentElement;

  
    formField.classList.remove('error');
    formField.classList.add('success');
 
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
   
    e.preventDefault();
 
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;
 
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
   
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'pw':
            checkPassword();
            break;
        case 'cpw':
            checkConfirmPassword();
            break;
    }
}));*/