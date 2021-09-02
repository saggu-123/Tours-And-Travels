const form = document.querySelector(".login-form");
const login = document.querySelector(".login");
const closeform = document.querySelector("#close");
const menu = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

login.addEventListener("click" , function(){
    form.classList.add('active');
});
closeform.addEventListener("click" , function(){
    form.classList.remove('active');
});

menu.addEventListener("click" , function(){
    navbar.classList.toggle('show');
})

// slidebar 
let slides= document.getElementsByClassName("videos");
// const prevbtn = document.querySelector(".left-side");
// const nextbtn = document.querySelector(".right-slide");

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  
  slides[slideIndex-1].style.display = "block";
  
}
// gallery images
const modal = document.querySelector(".modal");


const img = document.querySelectorAll(".gallery-img");
const modalImg = document.querySelector(".modal-content");
 


img.forEach(element => {
  element.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  })
});


const closeImg = document.getElementsByClassName("closeImg")[0];
closeImg.addEventListener("click", function(){
    modal.style.display="none";
  })
// review
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
function initAccordion(accordionElem){
  
  //when panel is clicked, handlePanelClick is called.          

  function handlePanelClick(event){
      showPanel(event.currentTarget);
  }

//Hide currentPanel and show new panel.  
  
  function showPanel(panel){

     var expandedPanel = accordionElem.querySelector(".active");
     if (expandedPanel){
         expandedPanel.classList.remove("active");
     }

     panel.classList.add("active");

  }

  var allPanelElems = accordionElem.querySelectorAll(".panel");
  for (var i = 0, len = allPanelElems.length; i < len; i++){
       allPanelElems[i].addEventListener("click", handlePanelClick);
  }

  showPanel(allPanelElems[0])

}

initAccordion(document.getElementById("accordion"));
// Scroll to top button 

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}