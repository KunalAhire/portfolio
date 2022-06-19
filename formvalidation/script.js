var loginform = document.getElementById('form');
var username= document.getElementById('username')
var erroruser = document.getElementById('username-error');
var phoneuser = document.getElementById('phone-error');
var phoneNo = document.getElementById('phone');
var email = document.getElementById('Email');
var emailError = document.getElementById('email-error');

username.addEventListener('input',function(e){
    var pattern = /^[\w\s]{6,20}$/gi;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);
    
    if(valid){
        erroruser.style.display = 'none'
    }else{
        erroruser.style.display = 'block'
    }
});

phoneNo.addEventListener('input',function(e){
    var pattern = /^(\+91)?[\d]{10}$/g;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);
    
    if(valid){
        phoneuser.style.display = 'none'
    }else{
        phoneuser.style.display = 'block'
    }
});

email.addEventListener('input',function(e){
    var pattern = /^[\w_\.]+[@][\w]+[\.][a-zA-Z]{2,3}$/;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);
    
    if(valid){
        emailError.style.display = 'none'
    }else{
        emailError.style.display = 'block'
    }
});