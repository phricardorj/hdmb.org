const btnMobile = document.querySelector("#btn-mobile");

const toggleMenu = (event) => {
  if (event.type === "touchstart") event.preventDefault();
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
  const active = menu.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  else event.currentTarget.setAttribute("aria-label", "Abrir Menu");
};

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

const navbar = document.querySelector(".navbar");
let lastScrollTop;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-120px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});
