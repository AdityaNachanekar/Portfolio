let Tsprogress = [50, 63, 80, 92];
let Psprogress = [50, 63, 38, 90];

let psouter = document.querySelectorAll(".outer");
let psnumber = document.querySelectorAll(".psprogressper");

for (let i = 0; i < psouter.length; i++) {
    psouter[i].style.background = `conic-gradient(var(--orange), ${Psprogress[i] * 3.6}deg, #fff 0deg)`;
    psnumber[i].innerText = `${Psprogress[i]}%`;
}


let tsouter = document.querySelectorAll(".myprogress");
let tsnumber = document.querySelectorAll(".tsprogressper");

for (let i = 0; i < psouter.length; i++) {
    tsouter[i].style.width = `${Tsprogress[i]}%`;
    tsnumber[i].innerText = `${Tsprogress[i]}%`;
    tsnumber[i].style.right = `calc(calc(100% - ${Tsprogress[i]}%) - 20px)`;
}

// Light & Dark Theme

const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
    if(mode.getAttribute("name") == "moon"){
        mode.setAttribute("name", "sunny-outline");
    } else{
        mode.setAttribute("name", "moon");
    }
    document.body.classList.toggle("dark-mode");
});

//Menu-btn
let menu = document.getElementById("menu-btn");
menu.addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("active");
})