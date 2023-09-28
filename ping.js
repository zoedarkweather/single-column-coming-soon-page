const form = document.querySelector("#email-form");
const email = document.querySelector("#email-input");
const emailError = document.querySelector(".error-msg");

email.addEventListener("focus", () => {
    emailError.textContent = "";
    email.classList.remove("error");
    
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
    
    email.classList.add("error");
}