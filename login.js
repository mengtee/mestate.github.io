const form = document.getElementById('form');
const nric = document.getElementById('nric');
const password1 = document.getElementById('password1');


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
    const nricValue = nric.value.trim();
    const password1Value = password1.value.trim();

    if(nricValue === '') {
        setError(nric, 'Please enter your IC number');
    } else if(isNaN(nricValue)){
        setError(nric, 'It is not a number')
    } else if (nricValue.length != 12){
        setError(nric, 'IC length must be 12 digit long')}
    else {
        setSuccess(nric);
    }


    if(password1Value === '') {
        setError(password1, 'Password is required');
    } else if (password1Value.length < 8 ) {
        setError(password1, 'Password must be at least 8 character.')
    } else {
        setSuccess(password1);
    }


};

const menu = document.querySelector('.menu')
const navlink= document. querySelector('.nav-link')

menu.addEventListener('click',()=>{navlink.classList.toggle('mobile-menu')})