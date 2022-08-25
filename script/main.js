const menuNav = document.getElementById("menuNav");
const openMenu = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
openMenu.addEventListener("click", () => {
  menuNav.classList.add("active");
});

closeNav.addEventListener("click", () => {
  menuNav.classList.remove("active");
});
