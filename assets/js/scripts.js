let eyeButton = document.querySelector("img.eye-icon");

eyeButton.addEventListener("click", () => {
  let input = eyeButton.previousElementSibling;

  input.type === "password"
    ? input.setAttribute("type", "text")
    : input.setAttribute("type", "password");
});

const navbar = document.querySelector("nav#navigation");
const navToggle = document.querySelector("button.hamburguer-menu");
const body = document.body;

navToggle.addEventListener("click", () => {
  const visibility = navbar.getAttribute("data-visible");

  if (visibility === "false") {
    navbar.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    body.classList.add("menu-active");
  }

  if (visibility === "true") {
    navbar.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-active");
  }
});
