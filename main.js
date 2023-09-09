
let dropDownCont1 = document.querySelector("#drop-down-cont1");
let dropDownCont2 = document.querySelector("#drop-down-cont2");
let dropDownCont3 = document.querySelector("#drop-down-cont3");
let dropDownCont4 = document.querySelector("#drop-down-cont4");
let dropDownCont5 = document.querySelector("#drop-down-cont5");

// drop-down-values 

let dropDown1 = document.querySelector("#dropdown1");
let dropDown2 = document.querySelector("#dropdown2");
let dropDown3 = document.querySelector("#dropdown3");
let dropDown4 = document.querySelector("#dropdown4");
let dropDown5 = document.querySelector("#dropdown5");

// drop-down-values

let arrow1 = document.querySelector("#arrow1");
let arrow2 = document.querySelector("#arrow2");
let arrow3 = document.querySelector("#arrow3");
let arrow4 = document.querySelector("#arrow4");
let arrow5 = document.querySelector("#arrow5");

dropDownCont1.addEventListener('click', function() {
    if (dropDown1.style.display === "none") {
        dropDown1.style.display = "block";
        arrow1.classList.add('arrow-down-active');
        dropDown2.style.display === "none";
        dropDown3.style.display = "none";
        dropDown4.style.display = "none";
        dropDown5.style.display = "none";
        arrow2.classList.remove('arrow-down-active');
        arrow3.classList.remove('arrow-down-active');
        arrow4.classList.remove('arrow-down-active');
        arrow5.classList.remove('arrow-down-active');
    } else {
        dropDown1.style.display = "none";
        arrow1.classList.remove('arrow-down-active');
    }
})


dropDownCont2.addEventListener('click', function() {
    if (dropDown2.style.display === "none") {
        dropDown2.style.display = "block";
        arrow2.classList.add('arrow-down-active');
        dropDown1.style.display = "none";
        dropDown3.style.display = "none";
        dropDown4.style.display = "none";
        dropDown5.style.display = "none";
        arrow1.classList.remove('arrow-down-active');
        arrow3.classList.remove('arrow-down-active');
        arrow4.classList.remove('arrow-down-active');
        arrow5.classList.remove('arrow-down-active');
    } else {
        dropDown2.style.display = "none";
        arrow2.classList.remove('arrow-down-active');
    }
})

dropDownCont3.addEventListener('click', function() {
    if (dropDown3.style.display === "none") {
        dropDown3.style.display = "block";
        arrow3.classList.add('arrow-down-active');
        dropDown2.style.display = "none";
        dropDown1.style.display = "none";
        dropDown4.style.display = "none";
        dropDown5.style.display = "none";
        arrow2.classList.remove('arrow-down-active');
        arrow1.classList.remove('arrow-down-active');
        arrow4.classList.remove('arrow-down-active');
        arrow5.classList.remove('arrow-down-active');
    } else {
        dropDown3.style.display = "none";
        arrow3.classList.remove('arrow-down-active');
    }
})

dropDownCont4.addEventListener('click', function() {
    if (dropDown4.style.display === "none") {
        dropDown4.style.display = "block";
        arrow4.classList.add('arrow-down-active');
        dropDown2.style.display = "none";
        dropDown3.style.display = "none";
        dropDown1.style.display = "none";
        dropDown5.style.display = "none";
        arrow2.classList.remove('arrow-down-active');
        arrow3.classList.remove('arrow-down-active');
        arrow1.classList.remove('arrow-down-active');
        arrow5.classList.remove('arrow-down-active');
    } else {
        dropDown4.style.display = "none";
        arrow4.classList.remove('arrow-down-active');
    }
})

dropDownCont5.addEventListener('click', function() {
    if (dropDown5.style.display === "none") {
        dropDown5.style.display = "block";
        arrow5.classList.add('arrow-down-active');
        dropDown2.style.display = "none";
        dropDown3.style.display = "none";
        dropDown4.style.display = "none";
        dropDown1.style.display = "none";
        arrow2.classList.remove('arrow-down-active');
        arrow3.classList.remove('arrow-down-active');
        arrow4.classList.remove('arrow-down-active');
        arrow1.classList.remove('arrow-down-active');
    } else {
        dropDown5.style.display = "none";
        arrow5.classList.remove('arrow-down-active');
    }
})