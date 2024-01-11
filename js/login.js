let loginPasswordInput = document.getElementById('loginPasswordInput');
let loginEmailInput = document.getElementById('loginEmailInput');
let message = document.getElementById('message');
let loginBtn = document.getElementById('loginBtn');

let arrOfAccounts = JSON.parse(localStorage.getItem('user')) || [];

loginBtn.addEventListener('click',login);

function login(){
    if (!validateInputs()){
        if (checkAccount()){
            location.href = 'home.html';
        }else{
            messageAlert('Invalid Information');
        }
    }else{
        messageAlert('All Inputs Required');
    }
}

function checkAccount(){
    for (let i = 0; i < arrOfAccounts.length; i++) {
        if (arrOfAccounts[i].email === loginEmailInput.value && arrOfAccounts[i].password === loginPasswordInput.value) {
            localStorage.setItem('name', arrOfAccounts[i].name);
            return true;
        }
    }
    return false;
}

function validateInputs(){
    return (loginPasswordInput.value === '' || loginEmailInput.value === '');
}

function messageAlert(sms){
    message.classList.replace('d-none', 'd-block');
    message.innerHTML = sms;
}