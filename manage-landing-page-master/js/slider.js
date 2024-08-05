let swiper = new Swiper('.mySwiper', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   lazyPreloadPrevNext: 3,
   loop: true,
   breakpoints: {
      0: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      600: {
         slidesPerView: 2,
         slidesPerGroup: 1,
      },

      1024: {
         slidesPerView: 3,
         slidesPerGroup: 1,
      },
   },
});
