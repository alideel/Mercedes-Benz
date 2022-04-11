"use strict";
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const hasSubmenu = document.querySelectorAll(".has-submenu");

const toggleMenu = () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    // adds the menu (hamburger) icon
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    // adds the close (x) icon
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
};

// const toggleItem = () => {
//   console.log(this);
//   if (this.classList.contains("submenu-active")) {
//     this.classList.remove("submenu-active");
//   } else if (menu.querySelector(".submenu-active")) {
//     menu.querySelector(".submenu-active").classList.remove("submenu-active");
//     this.classList.add(".submenu-active");
//   } else {
//     this.classList.add("submenu-active");
//   }
// };

// this in arrow function is window

function toggleItem() {
  console.log(this);
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add(".submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

toggle.addEventListener("click", toggleMenu, false);
hasSubmenu.forEach((m) => {
  m.addEventListener("click", toggleItem, false);
});

const items = document.querySelectorAll(".item");

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}

/* Event listener */
document.addEventListener("click", closeSubmenu, false);
