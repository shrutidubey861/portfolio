const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});



const topBtn = document.querySelector(".top");

window.addEventListener("scroll",()=>{
    topBtn.classList.toggle("show",window.scrollY>400);
});


const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

const code = `const developer = {
    name: "Shruti Dubey",
    role: "Frontend Developer",
    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    learning: "DSA",
    status: "Open to Internship"
};`;

const typing = document.getElementById("typing");

let index = 0;

function typeCode(){

    if(index < code.length){

        typing.textContent += code.charAt(index);

        index++;

        setTimeout(typeCode,40);

    }

}

window.addEventListener("load",typeCode);
