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
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  allSections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
const text = [
  "a Developer",
  "a Full Stack Learner",
  "a Problem Solver",
  "a CSE Student",
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j--);
  } else {
    document.getElementById("typing").textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
window.addEventListener("DOMContentLoaded", () => {
  const text = "Suhas";
  const target = document.getElementById("name");

  if (!target) return;

  let i = 0;

  function typeOnce() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(typeOnce, 120);
    }
  }

  setTimeout(typeOnce, 500);
});
