let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "block" : "none";
  });

  dots.forEach((dot, i) => {
    dot.className = dot.className.replace(" active", "");
    if (i === slideIndex) {
      dot.className += " active";
    }
  });
}

function plusSlides(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n - 1));
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
  setInterval(() => plusSlides(1), 3000); // Change slide every 3 seconds
});
