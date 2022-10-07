const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener("click", ()=>{
    primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true)
    primaryNav.toggleAttribute("data-visible")
    document.querySelector("header").toggleAttribute("data-opened")
    
})

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    responsive: {
        960: {
          dots: false
        }
      }
  });