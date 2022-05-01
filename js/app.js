tailwind.config = {
      theme: {
        screens: {
          'se': '375px',
          'xs': '414px',
          'sm': '768px',
          'md': '992px',
          'ld': '1024px',
          'lg': '1366px',
          'xl': '1920px',
        },
        extend: {
          colors: {
            textblue: '#2E0E7C',
            darkblue: '#080B1A',
            deepblue: '#080B1A',
            lightblue: '#01003A',
            deepred: '#9E1533',
            lightred: '#E01E49',
            instruction: "#F2F2F2",
            parther: '#DCDCDC',
            buttonhover: '#EF443F',
            fontred: '#FF3631',
            charyred: '#E01E49',
            lightgreen: '#4CD2AD',
            linecolor: '#4c4c4c',
            timecolor: '#9C9C9C',
          },
        },
        fontFamily: {
          'sans': ['Prompt', 'sans-serif'],
          'beatstreet': ['beatstreet', 'sans-serif']
        },
      }
}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
    // * Swiper
    const swiper = new Swiper('#product', {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.bn1',
        prevEl: '.bn2',
        clickable: true,
      },
      breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        },
    });

gsap.set(".g1", {
  x: "-100"
});

gsap.set(".g2", {
  x: "-100"
});

gsap.set(".g3", {
  x: "-100"
});

gsap.set(".g4", {
  x: "-100"
});

const control1 = gsap.to(".g1", {
  paused: true,
  x: "+=100"
});

const control2 = gsap.to(".g2", {
  paused: true,
  x: "+=100"
});

const control3 = gsap.to(".g3", {
  paused: true,
  x: "+=100"
});

const control4 = gsap.to(".g4", {
  paused: true,
  x: "+=100"
});

document.querySelector(".bt1").addEventListener("click", function () {
  control1.play(0);
});

document.querySelector(".bt2").addEventListener("click", function () {
  control2.play(0);
});

document.querySelector(".bt3").addEventListener("click", function () {
  control3.play(0);
});

document.querySelector(".bt4").addEventListener("click", function () {
  control4.play(0);
});
