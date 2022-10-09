const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=>{
    document.querySelector(".primary-nav").toggleAttribute("data-visible");
    document.querySelector("header").toggleAttribute("data-opened");
    navToggle.toggleAttribute("data-opened");
})



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
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
    },
    1300: {
      slidesPerView: 4
    }
  }
});

if($(".slider .slide").length == 1) {
  $('.swiper-wrapper').addClass( "disabled" );
  $('.swiper-pagination').addClass( "disabled" );
}