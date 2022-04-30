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
    // back to top
        document.addEventListener('alpine:init', () => {
            Alpine.data('topBtn', () => ({
                scrolltoTop() {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }
            }));
        });

        const topBtn = document.getElementById("topButton");
        window.onscroll = () => {
            (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ?
            topBtn.classList.remove("hidden"): topBtn.classList.add("hidden");

        }
    // * Swiper
    const swiper = new Swiper('#product', {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 1000,
      },
      navigation: {
        nextEl: '.bp1',
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