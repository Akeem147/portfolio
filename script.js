const header = document.querySelector("header");
const navList = document.querySelector(".nav-list");
const menuBtn = document.getElementById("menu-icon");
// const li = document.getElementsByTagName("li");
// console.log(li);

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 120);
});

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

window.onscroll = () => {
  menuBtn.classList.remove("menu-icon");
  navList.classList.remove("active");
};
