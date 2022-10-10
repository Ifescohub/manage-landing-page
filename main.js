const navToggle = document.querySelector(".mobile-nav-toggle");


// FORMATTING NAVIGATION BAR 
navToggle.addEventListener("click", ()=>{
    document.querySelector(".primary-nav").toggleAttribute("data-visible");
    document.querySelector("header").toggleAttribute("data-opened");
    navToggle.toggleAttribute("data-opened");
})


// FORMATTING SLIDER 
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


// FORMATTING FORM INPUT 

document.forms["form"].onsubmit = (e)=>{
    e.preventDefault();
  let inputValue = document.form.email.value;
  let errorEl = document.form.querySelector(".error-message");
  if (!inputValue.length){
    errorEl.textContent = "Please enter an email"
  }else {
    form.submit();
  }

}

