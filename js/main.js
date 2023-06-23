import SmoothScroll from './smoothScroll.js'

(function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let scrollPosition = 0

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)

  function init() {
    let testClass = new SmoothScroll({
      target: document,
      speed: 40,
      smooth: 16
    })
  }

  const burger = document.querySelector('.nav-toggle')
  const closeNav = document.querySelector('.close-nav')
  const navigation = document.querySelector('.navigation')
  if (burger && closeNav) {
    burger.addEventListener('click', () => {
      navigation.classList.add('open')
      navigation.classList.toggle('hidden')
    })
    closeNav.addEventListener('click', () => {
      navigation.classList.remove('open')
      navigation.classList.toggle('hidden')
    })
  }

  if(document.querySelector('.event-space-swiper')) {
     new Swiper(".event-space-swiper", {
      slidesPerView: screen.width < 1028 ? '1.15' : '3.4',
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  }



  // add animations to lines
  let animatedLines = document.querySelectorAll(".inbetween-line");
  activeLineDrawingIfVisible()

  function activeLineDrawingIfVisible() {
    for (let i = 0; i < animatedLines.length; i++) {
      let animatedLine = animatedLines[i];

      if (isFullyVisible(animatedLine)) {
        animatedLine.classList.add("animated-line");
      }
    }
  }
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      window.addEventListener('scroll', activeLineDrawingIfVisible);
    }, 10)
  })
  function isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
  }
  

  window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    let screenHeight = window.innerHeight
    const header = document.querySelector('.site-header')

    if (scroll > (screenHeight - 110)) {
      header.classList.add('scrolled')
    }
    else {
      header.classList.remove('scrolled')
    }
  })
  
  if (window.location.hash == '#contact-form-cta' && document.getElementById('contact-form-cta')) {
    const contactSection = document.getElementById('contact-form-cta')
    const dims = contactSection.getBoundingClientRect();

      
    setTimeout(() => {
      window.scrollTo(window.scrollX, dims.top - 120);
    }, 1000)

    setTimeout(() => {
      document.body.addEventListener('onload', init())
    }, 2500)

  }
  else {
    document.body.addEventListener('onload', init())

  }

  

  window.onload = () => {
    window.scrollTo(0, 0);
  }
})()