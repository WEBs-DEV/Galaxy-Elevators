// Aos initialization for animation on loading

  AOS.init(
    {
      offset: 100
    }
  );


// SwiperJs js initialization for home banner
   var swiper = new Swiper(".bannerSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// SwiperJs js initialization for Our clients slider
  var swiper = new Swiper(".OurClientsSlider", {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });