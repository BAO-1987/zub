import Swiper, {
  Navigation,
} from 'swiper/bundle';

const reviewsSlider = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  // autoplay: {
  //   delay: 2000,
  // },


  a11y: {
    prevSlideMessage: 'Попередній слайд',
    nextSlideMessage: 'Наступний слайд',
  },

  navigation: {
    nextEl: ".reviews__next",
    prevEl: ".reviews__prev",
  },
});

const newsSlider = new Swiper(".news-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheelControl: true,
  keyboardControl: true,
  grabCursor: true,
  // autoplay: {
  //   delay: 2000,
  // },


  a11y: {
    prevSlideMessage: 'Попередній слайд',
    nextSlideMessage: 'Наступний слайд',
  },

  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev",
  },


  breakpoints: {

    350: {
      slidesPerView: 1.5,
    },

    576: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});