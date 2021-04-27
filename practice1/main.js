let form = document.querySelector(".myform");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

function validateEmail() {
    let inputEmail = email.value;
    let emailValidationMsg = document.getElementById("emailValidationMsg");

    if (inputEmail) {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(inputEmail)) {
            emailValidationMsg.textContent = "Valid Email";
            emailValidationMsg.classList.remove("text-danger");
            emailValidationMsg.classList.add("text-success");
            return true
        } else {
            emailValidationMsg.textContent = "Invalid Name";

            emailValidationMsg.classList.add("text-danger");
            emailValidationMsg.classList.remove("text-success");
            return false
        }
    }
}

function validatePhone() {
    let inputPhone = phone.value;
    let phoneValidationMsg = document.getElementById("phoneValidationMsg");

    if (inputPhone) {
        if (/^(\+98|0)?9\d{9}$/.test(inputPhone)) {
            phoneValidationMsg.textContent = "Valid Phone";
            phoneValidationMsg.classList.remove("text-danger");
            phoneValidationMsg.classList.add("text-success");
            return true
        } else {
            phoneValidationMsg.textContent = "Invalid Phone Number";
            phoneValidationMsg.classList.add("text-danger");
            phoneValidationMsg.classList.remove("text-success");
            return false
        }
    }
}

function submitForm() {
    if (validatePhone() && validateEmail()) {
        alert('ثبت نام با موفقیت انجام شد')
        return true

    }

    return false

}