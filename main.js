const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener("click", ()=>{
    primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true)
    
    primaryNav.toggleAttribute("data-visible")
    navToggle.toggleAttribute("data-opened")
    document.querySelector("header").toggleAttribute("data-opened")
    
})

// const slider = new A11YSlider(document.querySelector('.slider'), {
//     adaptiveHeight: false,
//     dots: true,
//     responsive: {
//         960: {
//           dots: false
//         }
//       }
//   });


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3
    }
  }
});