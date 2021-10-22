function initToggleMenu() {
  const toggleMenu = document.querySelector(".toggle__menu");
  if (!toggleMenu) return;

  toggleMenu.addEventListener("click", (e) => {
    const navMenu = document.querySelector(".nav__menu");
    if (navMenu) {
      // show nav menu
      navMenu.classList.toggle("show");
      // toggle icon between bars and times
      setIconToggleMenu();
    }
  });
}

function hideNavMenu() {
  // hide nav menu when clicking li element
  const navMenu = document.querySelector(".nav__menu");
  if (!navMenu) return;
  const toggleMenu = document.querySelector(".toggle__menu");
  if (!toggleMenu) return;

  navMenu.addEventListener("click", (e) => {
    e.target.parentElement.classList.remove("show");

    // toggle icon between bars and times
    setIconToggleMenu();
  });
  // hide nav menu when click outside nav menu
  window.addEventListener("click", (e) => {
    if (
      !navMenu.classList.contains(e.target) &&
      !e.target.matches(".toggle__menu")
    ) {
      navMenu.classList.remove("show");
    }
    // toggle icon between bars and times
    setIconToggleMenu();
  });
}

function setIconToggleMenu() {
  const toggleMenu = document.querySelector(".toggle__menu");
  const navMenu = document.querySelector(".nav__menu");
  toggleMenu.classList.remove("fa-bars", "fa-times");
  navMenu.classList.contains("show")
    ? toggleMenu.classList.add("fa-times")
    : toggleMenu.classList.add("fa-bars");
}

(() => {
  initToggleMenu();
  hideNavMenu();
})();
