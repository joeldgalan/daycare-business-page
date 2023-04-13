const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("nav-links");

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("prev-arrow");
const nextButton = document.getElementById("next-arrow");

const blogContainer = document.getElementById("posts-container");
const seeMoreBtn = document.getElementById("expand-close-btn");

const navigationBtns = document.querySelectorAll(".manual-btn");
const radioBtns = document.querySelectorAll(".gal-radio");

// adds .active class to animate hamburger and show nav links.
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
})

// when a nav link is clicked in hamburger mode, this will close the nav menu.
document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
}))

// hides or expands blog posts section when Show More/Less button is clicked.
let isHidden = true;
function showMoreLess() {
  console.log(blogContainer.style.height);
  if (isHidden === true) {
    blogContainer.style.height = "100%";
    seeMoreBtn.textContent = "See Less"
    isHidden = false;
  } else if (isHidden === false) {
    blogContainer.style.height = "26rem";
    seeMoreBtn.textContent = "See More"
    isHidden = true;
  }
}

// nextSlide() and prevSlide() slide the review carousel panels when the arrow buttons are clicked.
function nextSlide() {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
}

function prevSlide() {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
}

// controls auto scroll on image gallery.
let counter = 1;
setInterval(function(){
  document.getElementById('gal-radio' + counter).checked = true
  counter++;
  if (counter > 4) {
    counter = 1;
  }
  var evt = new CustomEvent('input');
  radioBtns[0].dispatchEvent(evt);
  radioBtns[1].dispatchEvent(evt);
  radioBtns[2].dispatchEvent(evt);
  radioBtns[3].dispatchEvent(evt);
}, 5000);

// checks radio buttons and fills with color when they are checked/selected, transparent when not checked.
radioBtns.forEach(btn => {
  btn.addEventListener("input", () => {
    if (btn.checked === true) {
      if (btn.id === "gal-radio1") {
        navigationBtns[0].style.background = "var(--main-blue)";
        navigationBtns[1].style.background = "none";
        navigationBtns[2].style.background = "none";
        navigationBtns[3].style.background = "none";
      } else if (btn.id === "gal-radio2") {
        navigationBtns[0].style.background = "none";
        navigationBtns[1].style.background = "var(--main-blue)";
        navigationBtns[2].style.background = "none";
        navigationBtns[3].style.background = "none";
      } else if (btn.id === "gal-radio3") {
        navigationBtns[0].style.background = "none";
        navigationBtns[1].style.background = "none";
        navigationBtns[2].style.background = "var(--main-blue)";
        navigationBtns[3].style.background = "none";
      } else if (btn.id === "gal-radio4") {
        navigationBtns[0].style.background = "none";
        navigationBtns[1].style.background = "none";
        navigationBtns[2].style.background = "none";
        navigationBtns[3].style.background = "var(--main-blue)";
      }
    }
    console.log(btn.checked);
  });
});

// navClicked() & navClickReset() help control the nav bar disappearing after clicking on a link.
let navClicked = false;
function navClick() {
  navClicked = true;
}

function navClickReset() {
  navClicked = false;
} 

// hides nav bar on downscroll.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (hamburger.classList.contains("active") === false) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      navClicked = false;
    } else if (prevScrollpos < currentScrollPos && navClicked === false) {
      document.getElementById("navbar").style.top = "-60px";
    }
  }
  prevScrollpos = currentScrollPos;
}
