let slideIndex = 0;
let slideTimer;

function showSlides() {
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dots");

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  slideTimer = setTimeout(showSlides, 4000); // Auto change every 4s
}

// Jump to specific slide
function currentSlide(n) {
  clearTimeout(slideTimer); // stop auto for a moment
  slideIndex = n - 1;       // adjust index so showSlides works
  showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(); // start slideshow
});
