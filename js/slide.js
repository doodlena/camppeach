let slideIndex = 0;
let slideTimer;

function showSlides() {
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dot");

  // Only run if slideshow elements exist
  if (slides.length === 0 || dots.length === 0) {
    return;
  }

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
  
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("active");
  }

  slideTimer = setTimeout(showSlides, 4000); // Auto change every 4s
}

// Jump to specific slide
function currentSlide(n) {
  let slides = document.querySelectorAll(".slides");
  if (slides.length === 0) return; // Exit if no slideshow
  
  clearTimeout(slideTimer); // stop auto for a moment
  slideIndex = n - 1;       // adjust index so showSlides works
  showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
  // Only start slideshow if elements exist
  let slides = document.querySelectorAll(".slides");
  if (slides.length > 0) {
    showSlides(); // start slideshow
  }
});
