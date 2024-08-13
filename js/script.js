AOS.init();


let slideIndex = 1;
showSlides(slideIndex);

// Controles anterior/próximo
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Controles de miniaturas
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}



//fotter buttons 

let buttonOpen = document.getElementById('links1');
let linksFlex = document.getElementById('links1Flex');
let buttonOpen2 = document.getElementById('links2');
let linksFlex2 = document.getElementById('links2Flex');
let buttonOpen3 = document.getElementById('links3')
let linksFlex3 = document.getElementById('links3Flex');


function openFooter1() {
    if (window.innerWidth <= 740) { // Verifica se a largura é de 800px ou mais
        linksFlex.style.display = 'flex';
        linksFlex.style.height = '200px';

        linksFlex2.style.display = 'none';
        linksFlex3.style.display = 'none';
    } 
}


function openFooter2() {
    if (window.innerWidth <= 740) { // Verifica se a largura é de 800px ou mais
        console.log('bora bill');
        linksFlex.style.display = 'none';
        linksFlex3.style.display = 'none';

        linksFlex2.style.display = 'flex';
        linksFlex2.style.height = '200px';
    }
}

function openFooter3() {
    if (window.innerWidth <= 740) { // Verifica se a largura é de 800px ou mais
        console.log('bora bill');
        linksFlex.style.display = 'none';
        linksFlex2.style.display = 'none';

        linksFlex3.style.display = 'flex';
        linksFlex3.style.height = '200px';
    }
}

// Listener para os botões
buttonOpen.addEventListener('click', openFooter1);
buttonOpen2.addEventListener('click', openFooter2);
buttonOpen3.addEventListener('click', openFooter3);


//Menu nav bar

// Selecting Elements
const menuHamburguer = document.querySelector('.menu-hamburguer');
const links = document.querySelector('.links');

// Toggle Menu on Hamburger Click
menuHamburguer.addEventListener('click', () => {
  links.classList.toggle('active');

  // Animation for Hamburger Icon (optional)
  menuHamburguer.classList.toggle('toggle');
});
