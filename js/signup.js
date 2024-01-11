const passwordField = document.getElementById('passwordField');
const emailField = document.getElementById('emailField');
const nameField = document.getElementById('nameField');
const signUpBtn = document.getElementById('signUpBtn');
const message = document.getElementById('message');

let arrOfAccounts = JSON.parse(localStorage.getItem('user')) || [];

signUpBtn.addEventListener('click', signUp);

function signUp() {
    const account = {
        name: nameField.value,
        email: emailField.value,
        password: passwordField.value
    };

    if (validateInputs()) {
        if (!existEmail()) {
            arrOfAccounts.push(account);
            localStorage.setItem('user', JSON.stringify(arrOfAccounts));
            clear();
            alertMessage('Successfully signed', 'green');
        } else {
            alertMessage('Email Already Exists', 'crimson');
        }
    }
}

function validateInputs() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,12}$/;
    if (
        nameField.value !== '' &&
        emailRegex.test(emailField.value) &&
        passwordRegex.test(passwordField.value)
    ) {
        return true;
    } else {
        alertMessage('Please enter valid information', 'red');
        return false;
    }
}

function existEmail() {
    return arrOfAccounts.some(account => account.email === emailField.value);
}

function alertMessage(text, color) {
    message.classList.replace('d-none', 'd-block');
    message.innerHTML = text;
    message.style.color = color;
}

function clear() {
    nameField.value = '';
    emailField.value = '';
    passwordField.value = '';
}
