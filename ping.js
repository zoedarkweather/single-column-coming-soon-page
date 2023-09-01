const form = document.querySelector("form");
const email = document.querySelector("#email-input");
const emailError = document.querySelector(".error-msg");

email.addEventListener("focus", () => {
    emailError.textContent = "";
    email.setAttribute("class", "email-input")        
    
});

form.addEventListener("submit", (e) => {
    if (!email.validity.valid) {
        e.preventDefault();
        showError();        
    } 
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Whoops! It looks like you forgot to add your email";
    } else if(email.validity.typeMismatch) {
        emailError.textContent = "Please provide a valid email address";
    }

    email.setAttribute("class", "email-input error")
}