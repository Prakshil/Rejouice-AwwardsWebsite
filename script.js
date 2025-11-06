function locomotiveScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier: 0.7,        // ← Increase scroll speed (default: 1)
  lerp: 0.03,            // ← Lower = smoother but slower (default: 0.1, range: 0.01-0.2)
  smartphone: {
    smooth: true,
    multiplier: 1.2
  },
  tablet: {
    smooth: true,
    multiplier: 1.3
  }
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
locomotiveScrollTrigger();


function Cursoranimation() {
  // helper to bind a cursor element to a container with the same behavior
  function bindCursor(containerSel, cursorSelCandidates) {
    const container = document.querySelector(containerSel);
    if (!container) return;


    const candidates = Array.isArray(cursorSelCandidates)
      ? cursorSelCandidates
      : [cursorSelCandidates];
    let cur = null;
    for (const sel of candidates) {
      cur = document.querySelector(sel);
      if (cur) break;
    }
    if (!cur) return;

    container.addEventListener('mousemove', function (e) {
      gsap.to(cur, {
        left: e.clientX + 'px',
        top: e.clientY + 'px',
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    container.addEventListener('mouseenter', function () {
      gsap.to(cur, { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out' });
    });
    container.addEventListener('mouseleave', function () {
      gsap.to(cur, { scale: 0, opacity: 0, duration: 0.2, ease: 'power2.out' });
    });
  }

  // Apply the cursor behavior ONLY to Page 1
  bindCursor('#page1', ['#page1 .cursor']);
}

Cursoranimation();


function page2Animation(){
    
    gsap.from("#page2 h1", {
        y: 80,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 75%",
            once: true,
        }
    });
}
page2Animation();



function sliderAnimation(){
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });
}


setTimeout(() => {
    sliderAnimation();
}, 500);



function menuAnim(){
  const menuBtn = document.querySelector('.page1 .inner-content nav #menu')
  const menu = document.querySelector('.page1 .menu')
  const closeBtn = document.querySelector('.page1 .menu .menu-header #close')
  const video = document.querySelector('.page1 .menu .menu-sec .vid video')
  const playReel = document.querySelector('.page1 .menu .menu-sec .vid .play')
  const smallLinks = document.querySelector('.page1 .menu .small-links')
  const Links = document.querySelectorAll('.page1 .menu .menu-sec .links h3 , .page1 .menu .menu-sec .links button')
  const border = document.querySelector('.page1 .menu .menu-border') 


menuBtn.addEventListener('click',() => {
  menu.classList.add('active')
  menu.style.transition = `height .5s ease`
  
  gsap.from(video,{
    scale:.1,
    duration:1
  })
  gsap.from(playReel,{
    y:-100,
    duration:1.1
  })
  gsap.from(smallLinks,{
    x:200,
    duration:2,
    delay:-.4
  })
  gsap.from(Links,{
    y:100,
    duration:.7,
    stagger:.1
  })
  gsap.to(border,{
   width:95+"vw",
   duration:1.5,
   delay:-.1
  })

})
closeBtn.addEventListener('click',() => {
  menu.classList.remove('active') 
})

}
function swiper(){
  var swiper = new Swiper(".page8 .mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    speed: 8000,
    freeMode: false,
    grabCursor: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    breakpoints: {
      320: {
        spaceBetween: 15
      },
      768: {
        spaceBetween: 20
      },
      1024: {
        spaceBetween: 30
      }
    }
  });
}
swiper();

var tl = gsap.timeline()

tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.2
})
tl.to("#loader h3",{
  x:-40,
  opacity:0,
  duration:1,
  stagger:-0.2
})
tl.to("#loader",{
  opacity:0,
  display:"none",
})
tl.from("#page1-text span",{
  y:100,
  opacity:0,
  stagger:0.1
})