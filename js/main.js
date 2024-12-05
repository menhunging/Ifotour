$(document).ready(function () {
  if ($(".burger").length > 0) {
    let menu = $(".header-new-bottom");
    let burger = $(".burger");
    let burgerСlose = $(".btn-close");
    let body = $("body");

    burger.on("click", function () {
      if (menu.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.addClass("opened").slideDown();
        body.addClass("hidden");

        $(document).mouseup(function (e) {
          if (
            !menu.is(e.target) &&
            menu.has(e.target).length === 0 &&
            !burger.is(e.target)
          ) {
            closeMenu();
          }
        });
      }
    });

    burgerСlose.on("click", function () {
      closeMenu();
    });

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened").slideUp();
      body.removeClass("hidden");
      $(document).off("mouseup");
    }
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".faq").length > 0) {
    $(".faq-head").on("click", function () {
      $(this).toggleClass("opened").next(".faq-body").stop().slideToggle();
    });
  }

  if ($(".selectric").length > 0) {
    $(".selectric").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  if ($(".slider-hot").length > 0) {
    const swiper = new Swiper(".slider-hot", {
      slidesPerView: 4,
      spaceBetween: 16,
      watchSlidesProgress: true,
      loop: false,
      navigation: {
        prevEl: ".hot-deals .swiperBtnPrev",
        nextEl: ".hot-deals .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25,
          spaceBetween: 16,
        },
        390: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });
  }

  if ($(".slider-leisure").length > 0) {
    const swiper = new Swiper(".slider-leisure", {
      slidesPerView: 3,
      spaceBetween: 16,
      watchSlidesProgress: true,
      loop: false,
      navigation: {
        prevEl: ".leisure-format .swiperBtnPrev",
        nextEl: ".leisure-format .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 8,
        },
        390: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        480: {
          slidesPerView: 1.8,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
    });
  }

  if ($(".slider-attractions").length > 0) {
    const sliders = document.querySelectorAll(".slider-attractions");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let prev = $(slider).closest(".attractions").find(".swiperBtnPrev")[0];
        let next = $(slider).closest(".attractions").find(".swiperBtnNext")[0];

        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            spaceBetween: 16,
            watchSlidesProgress: true,
            loop: false,
            navigation: {
              prevEl: prev,
              nextEl: next,
            },
            on: {
              init: function (swiper) {},
              slideChange: function (swiper) {},
            },
            breakpoints: {
              0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              390: {
                slidesPerView: 2,
                spaceBetween: 18,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }
});
