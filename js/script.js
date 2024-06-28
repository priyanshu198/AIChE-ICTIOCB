let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

// Our team Js
document.addEventListener('DOMContentLoaded', function() {
   const slider = document.querySelector('.team-slider');
   let isDown = false;
   let startX;
   let scrollLeft;
   let isDragging = false;

   slider.addEventListener('mousedown', (e) => {
       isDown = true;
       isDragging = false; // Reset the dragging flag
       slider.classList.add('active');
       startX = e.pageX - slider.offsetLeft;
       scrollLeft = slider.scrollLeft;
       slider.style.cursor = 'grabbing';
   });

   slider.addEventListener('mouseleave', () => {
       isDown = false;
       slider.classList.remove('active');
       slider.style.cursor = 'grab';
   });

   slider.addEventListener('mouseup', () => {
       isDown = false;
       slider.classList.remove('active');
       slider.style.cursor = 'grab';
   });

   slider.addEventListener('mousemove', (e) => {
       if (!isDown) return;
       e.preventDefault();
       const x = e.pageX - slider.offsetLeft;
       const walk = (x - startX) * 3; //scroll-fast
       if (Math.abs(walk) > 5) { // Only count as drag if moved more than 5px
           isDragging = true;
       }
       slider.scrollLeft = scrollLeft - walk;
   });
});

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});