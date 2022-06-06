const button = document.querySelector(".nav-button img");
const nav = document.querySelector(".nav");
let content = document.querySelector(".footer-title h2 span");
button.addEventListener("click", () => {
  nav.classList.toggle("open")
    ? (button.src = "img/NAV CLOSE.svg")
    : (button.src = "img/NAV.svg");
});
document
  .querySelector(".footer-button button")
  .addEventListener("click", () => {
    document.querySelectorAll(`.footer-social img`).forEach((element) => {
      element.classList.add("animate");
      content.textContent = "You can send me a message heer!";
      content.classList.add("contentAnimation");
    });
  });

