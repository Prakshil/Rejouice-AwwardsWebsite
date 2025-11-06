function locomotiveScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
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

    // accept either class name (.cursor or legacy .crsr)
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

/**
 * Split the bottom text of Page 7 into word spans for stagger animations
 * Returns an array of created span elements.
 */
function splitPage7BtmText(selector = ".page7 .page7-bottom .btm-text h2") {
  const created = [];
  document.querySelectorAll(selector).forEach((el) => {
    if (!el || el.dataset.split === "true") return;

    const text = (el.textContent || "").trim();
    if (!text) return;

    // Split words and rebuild with span wrappers
    const words = text.split(/\s+/);
    el.innerHTML = words
      .map((w, i) => `<span class="btm-word">${w}${i < words.length - 1 ? "&nbsp;" : ""}</span>`)
      .join("");

    el.dataset.split = "true";
    // ensure clipping for vertical motion
    el.style.overflow = el.style.overflow || "hidden";

    created.push(...el.querySelectorAll(".btm-word"));
  });
  return created;
}

/**
 * Stagger animation for Page 7 bottom text (runs once on scroll into view)
 */


// Animate Page 7 top headings and the border line
(function page7TopAnim(){
  // Headings slide-up
  gsap.from('.page7 .page7-top .top-text h3', {
    y: 60,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.page7',
      scroller: '#main',
      start: 'top 85%',
      once: true,
      opacity:1,
    }
  });

  // Divider grows from 0 to full width
  gsap.to('.page7 .page7-top-border', {
    width: '94%',
    duration: 1.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.page7 .page7-top-border',
      scroller: '#main',
      start: 'top 85%',
      once: true,
      opacity:1,
    }
  });
})();