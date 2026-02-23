// Dark mode toggle
document.getElementById("darkModeToggle").onclick = function () {
  document.body.classList.toggle("light");
};

// Back to top
const topBtn = document.getElementById("topBtn");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Scroll reveal
const revealElements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
