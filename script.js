const carousel = document.querySelector(".carrossel"),
firstImg = document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");


let isDragStart = false, prevPageX, prevScrollLeft;

const showHideIcons = () =>{
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon =>{
    icon.addEventListener("click", () =>{
        let firstImgWidth = firstImg.clientWidth + 250;
        carousel.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth; 
        setTimeout(() => showHideIcons(), 160);
    });
});

const dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    carousel.scrollLeft = e.pageX;
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () =>{
    isDragStart = false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);



function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}



let altura = document.getElementById('altura')
let kg = document.getElementById('kg')

let resultado = document.getElementById('imc')

function bmi(){
    resultado.innerHTML = "your BMI is " + (parseFloat(kg.value) / (parseFloat(altura.value) * parseFloat(altura.value))).toFixed(2); 

}





document.getElementById('mostrarAlerta').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var usuario = document.getElementById('username').value;

    if (email !== "" && usuario !== "") {
        document.getElementById('alerta').style.display = 'block';
    }
});

document.getElementById('fecharAlerta').addEventListener('click', function() {
    document.getElementById('alerta').style.display = 'none';
});



function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId); 
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  }

  const scrollLinks = document.querySelectorAll("[data-scroll]");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });