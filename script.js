const navbar = document.querySelector(".navbar");
const menuContainer = document.querySelector(".menu-type");
const menuTypes = document.querySelectorAll(".type-image-wrapper");
const menuImages = document.querySelectorAll(".menu-card img");

menuTypes.forEach((menuType, idx) => {
  menuType.addEventListener("click", () => {
    addActive(menuType, idx);
  });
});

const addActive = (el, index) => {
  el.classList.add("active");
  menuTypes.forEach((menuType, idx) => {
    if (idx !== index) {
      menuType.classList.remove("active");
    }
  });

  menuImages.forEach((menuImage) => {
    menuImage.src = el.childNodes[1].src
  })
};

window.onscroll = () => {
  if (window.scrollY >= 10) {
    navbar.classList.add("navbar-active");
  } else {
    navbar.classList.remove("navbar-active");
  }
};
