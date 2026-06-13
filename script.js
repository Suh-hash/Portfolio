console.log("My portfolio website is working!");
const fills = document.querySelectorAll(".fill");

const skills = document.querySelector(".skills");

let started = false;

window.addEventListener("scroll", function () {
  const position = skills.getBoundingClientRect();

  if (position.top < 400 && !started) {
    fills.forEach((fill) => {
      fill.style.width = fill.dataset.width;
    });

    started = true;
  }
});
