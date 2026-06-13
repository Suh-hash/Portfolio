console.log("My portfolio website is working!");

// Select elements
const fills = document.querySelectorAll(".fill");
const skills = document.querySelector(".skills");

let started = false;

// Animate when skills section comes into view
function animateSkills() {
  const position = skills.getBoundingClientRect();

  if (position.top < window.innerHeight - 100 && !started) {
    fills.forEach((fill) => {
      fill.style.width = fill.dataset.width;
    });

    started = true;
  }
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
