//back button
const button = document.getElementById("backbtn");
const goBack = () =>{
    window.history.back();
};
button.addEventListener("click",(event)=>{
    goBack();
})

//navigation bar
const menu = document.querySelector('.menu')
const navlink= document. querySelector('.nav-link')

menu.addEventListener('click',()=>{navlink.classList.toggle('mobile-menu')})

//text validation for form (name, email, phoneno validation)
function validation(){
    var email = document.getElementById("email").value;
    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!pattern.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
     }
}
