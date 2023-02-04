const body = document.querySelector('body');
const sidebar = body.querySelector('.sidebar');
const toggle = body.querySelector('.toggle');
const searchBtn = body.querySelector('.search-box');
const modeSwitch = body.querySelector('.toggle-switch');
const modeText = body.querySelector('.mode-text');
let menuOpen = false;

let arrow = document.querySelectorAll(".arrow");
    for (let  i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e)=>{
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("showMenu");
    });
}

    toggle.addEventListener('click', () => {
        if(!menuOpen) {
            toggle.classList.toggle('close');
            sidebar.classList.toggle('close');
            menuOpen = true;
    } else {
        toggle.classList.remove('close');
        sidebar.classList.remove('close');
        menuOpen = false;
    }
});

let sidebarBtn = document.querySelector(".icon");
console.log(sidebar);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
});

const subMenuBtn = document.querySelectorAll('.sub-menu-btn');

    subMenuBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const subMenu = btn.nextElementSibling;
            if(subMenu.style.display === "block") {
                subMenu.style.display = "none";
        } else {
            subMenu.style.display = "block";
        }
    });
});

const menuOptions = document.querySelectorAll('.menu-option');

    menuOptions.forEach(option => {
        option.addEventListener('click', () => {
            window.location = option.getAttribute('data-link');
    });
});
