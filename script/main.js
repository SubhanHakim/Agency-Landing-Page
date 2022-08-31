const menuNav = document.getElementById("menuNav");
const openMenu = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
openMenu.addEventListener("click", () => {
  menuNav.classList.add("active");
});

closeNav.addEventListener("click", () => {
  menuNav.classList.remove("active");
});

const userContainers = document.querySelectorAll(".user-container");
const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".prev-btn");

userContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
