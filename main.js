
let dropDown = document.querySelector(".drop-down");

// drop-down-values 

let dropDown1 = document.querySelector("#dropdown1");
let dropDown2 = document.querySelector("#dropdown2");
let dropDown3 = document.querySelector("#dropdown3");
let dropDown4 = document.querySelector("#dropdown4");
let dropDown5 = document.querySelector("#dropdown5");

// drop-down-values

dropDown.addEventListener('click', function() {
    
    if (!email.value) {
        emailCont.classList.add('error');
        emailError.innerText = "Can’t be empty";
    } else {
        emailCont.classList.remove('error');
        emailError.innerText = ""
    }
})