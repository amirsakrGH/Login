let logOutBtn = document.getElementById('logOutBtn');
let welcomeUser = document.getElementById('welcomeUser');

logOutBtn.addEventListener('click', logOut);

function displayUserName(){
    let userName = localStorage.getItem('name');
    welcomeUser.innerHTML = `Welcome ${userName}`;
}

displayUserName();

function logOut(){
    location.replace('index.html');
    localStorage.removeItem('name');
}