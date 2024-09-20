addEventListener("resize", () => {
  if (innerWidth < 768) {
    img.src = "assets/images/image-web-3-mobile.jpg";
  } else {
    img.src = "assets/images/image-web-3-desktop.jpg";
  }
  console.log(innerWidth);
});
const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("close");
const navMenu = document.querySelector(".navmenu");
const shadowSide = document.querySelector(".shadowside");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  shadowSide.classList.toggle("show");
});

closeButton.addEventListener("click", () => {
  navMenu.classList.remove("show");
  shadowSide.classList.remove("show");
});

shadowSide.addEventListener("click", () => {
  navMenu.classList.remove("show");
  shadowSide.classList.remove("show");
});
