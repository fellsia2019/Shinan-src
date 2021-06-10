const header = document.querySelector("[data-js='header']"),
      header_burger = document.querySelector("[data-js='toggle-header-menu']"),
      header_height =  header.offsetHeight,
      wrapper = document.getElementById("wrapper");

// Header toggle menu
const header_menu = {
  toggle(e) {
    header.classList.toggle("header--active");
    body.classList.toggle("lock")
  }
}
header_burger.addEventListener("click", header_menu.toggle);

// Fixed header after scroll
window.addEventListener('scroll', function(e) {
  if (window.pageYOffset > header_height) {
    wrapper.classList.add("fixed-header")
  } else {
    wrapper.classList.remove("fixed-header")
  }
})
