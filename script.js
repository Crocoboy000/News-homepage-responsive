addEventListener("resize", () => {
  if (innerWidth < 768) {
    img.src = "assets/images/image-web-3-mobile.jpg";
  } else {
    img.src = "assets/images/image-web-3-desktop.jpg";
  }
  console.log(innerWidth);
});
