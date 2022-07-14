const form = document.getElementById('form');
const icname = document.getElementById('icname');
const nric = document.getElementById('nric');
const phoneno = document.getElementById('phoneno');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const icnameValue = icname.value.trim();
    const nricValue = nric.value.trim();
    const phonenoValue = phoneno.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();


    if(icnameValue === '') {
        setError(icname, 'Username is required');
    } 
    else {
        setSuccess(icname);
    }

    if(nricValue === '') {
        setError(nric, 'Please enter your IC number');
    } else if(isNaN(nricValue)){
        setError(nric, 'It is not a number')
    } else if (nricValue.length != 12){
        setError(nric, 'IC length must be 12 digit long')}
    else {
        setSuccess(nric);
    }

    if(phonenoValue === '') {
        setError(phoneno, 'Please enter your phone number');
    } else if(isNaN(phonenoValue)){
        setError(phoneno, 'It is not a number')
    } else if (phonenoValue.length <9){
        setError(phoneno, 'Incorrect phone no')}
    else {
        setSuccess(phoneno);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(password1Value === '') {
        setError(password1, 'Password is required');
    } else if (password1Value.length < 8 ) {
        setError(password1, 'Password must be at least 8 character.')
    } else {
        setSuccess(password1);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== password1Value) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};


const menu = document.querySelector('.menu')
const navlink= document. querySelector('.nav-link')

menu.addEventListener('click',()=>{navlink.classList.toggle('mobile-menu')})
