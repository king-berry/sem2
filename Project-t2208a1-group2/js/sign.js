const signupBtn = document.getElementById('signupBtn');
const signinBtn = document.getElementById('signinBtn');
const title = document.getElementById('title');
const nameField = document.getElementById('nameField');

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign Up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}