const form = document.querySelector('#form');
const Username = document.querySelector('#Username');
const password = document.querySelector('#password');

form.addEventListener('submit',(e)=>{

    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const UsernameVal = Username.value.trim();
    const passwordVal = password.value.trim();
    let success = true;

    if(UsernameVal === ''){
        success = false;
        seterror(Username,'Username is required')
    }
    else{
        setsuccess(Username)
    }

    if(passwordVal === ''){
        success = false;
        seterror(password,'password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        seterror(password,'password must be atleast 8 characters')
    }
    else{
        setsuccess(password)
    }

    return success;

}

function seterror(element,message){
    const formControl = element.parentElement;
    const errorElement = formControl.querySelector('.error')

    errorElement.innerText = message;
    formControl.classList.add('error')
    formControl.classList.remove('success')
}

function setsuccess(element){
    const formControl = element.parentElement;
    const errorElement = formControl.querySelector('.error')

    errorElement.innerText = '';
    formControl.classList.add('success')
    formControl.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function link(){
    window.location.href ="./index.html"
}