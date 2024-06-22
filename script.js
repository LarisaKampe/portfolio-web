const menus = document.querySelector("nav ul");
const menusBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menusBtn.addEventListener("click", function () {
  menus.classList.add("display");
});

closeBtn.addEventListener("click", function () {
  menus.classList.remove("display");
});