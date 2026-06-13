console.log("My portfolio website is working!");

const fills = document.querySelectorAll(".fill");
const skillsSection = document.querySelector("#skills");

let isVisible = false;

// animate to target
function fillSkills() {
  fills.forEach((fill) => {
    fill.style.width = fill.dataset.width;
  });
}

// reset to 0
function resetSkills() {
  fills.forEach((fill) => {
    fill.style.width = "0%";
  });
}

// scroll detection
window.addEventListener("scroll", () => {
  const rect = skillsSection.getBoundingClientRect();

  const inView = rect.top < window.innerHeight - 100 && rect.bottom > 150;

  // ENTERING skills section
  if (inView && !isVisible) {
    isVisible = true;
    fillSkills();
  }

  // LEAVING skills section
  if (!inView && isVisible) {
    isVisible = false;
    resetSkills();
  }
});
