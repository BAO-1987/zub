import ScrollReveal from "scrollreveal";
ScrollReveal({
  reset: true,
});


ScrollReveal().reveal(".hero__title", {
  duration: 1000,
  distance: "20px",
  easing: "ease",
  delay: "200",
  origin: "top",
});

ScrollReveal().reveal(".text", {
  duration: 1200,
  distance: "20px",
  easing: "ease",
  delay: "100",
  origin: "top",
});

ScrollReveal().reveal(
  ".content, .reviews-slider, .news__item, .news-slider, .cad-cam__box, .implantation__box", {
    duration: 700,
    distance: "10%",
    easing: "ease",
    delay: "700",
    origin: "top",
  }
);

ScrollReveal().reveal(
  ".gallery__list> li", {
    duration: 500,
    distance: "10%",
    easing: "ease",
    delay: "100",
    origin: "top",
    interval: 450,
    opacity: 0,
  }
);

// ScrollReveal().reveal(
//   ".gallery-main__list> li", {
//     duration: 500,
//     distance: "10%",
//     easing: "ease",
//     delay: "100",
//     origin: "left",
//     interval: 450,
//     opacity: 1,
//   }
// );

// ScrollReveal().reveal(
//   ".gallery__list--main> li ", {
//     duration: 500,
//     distance: "10%",
//     easing: "ease",
//     delay: "100",
//     origin: "left",
//     interval: 450,
//     opacity: 1,
//   }
// );


ScrollReveal().reveal(
  ".services__more, .news__more, .reviews__more, .gallery__more, .slider-btn, .btn--second", {
    duration: 700,
    distance: "10%",
    easing: "ease",
    delay: "500",
    origin: "top",
  }
);

ScrollReveal().reveal(
  ".btn--show-more", {
    duration: 800,
    distance: "10%",
    easing: "ease",
    delay: "800",
    origin: "bottom",
    opacity: 1,
    mobile: false,
  }
);

ScrollReveal().reveal(".contacts__inner, .pagination", {
  duration: 700,
  distance: "10%",
  easing: "ease",
  delay: "500",
  origin: "top",
});

ScrollReveal().reveal(".tabs__nav> li> *", {
  duration: 500,
  distance: "10%",
  easing: "ease",
  delay: "100",
  origin: "left",
  interval: 200,
  opacity: 1,
  mobile: false,
});

ScrollReveal().reveal(".gallery-main__list> li", {
  duration: 600,
  distance: "10px",
  easing: "ease",
  delay: "100",
  origin: "left",
  interval: 100,
  opacity: 1,
  mobile: false,
});




ScrollReveal().reveal(".footer", {
  duration: 800,
  distance: "10%",
  easing: "ease",
  delay: "500",
  origin: "bottom",
});

ScrollReveal().reveal(".title", {
  duration: 500,
  distance: "20%",
  easing: "ease",
  delay: "100",
  origin: "top",
});

ScrollReveal().reveal(".dentures__title., title--second", {
  duration: 600,
  distance: "20%",
  easing: "ease",
  delay: "150",
  origin: "top",
});

ScrollReveal().reveal(
  ".advantages__list, .dentures__list, .services__list, .stages__list", {
    duration: 600,
    distance: "20px",
    easing: "ease",
    delay: "100",
    origin: "top",
  }
);