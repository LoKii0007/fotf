import LocomotiveScroll from "locomotive-scroll";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function locomotive(){

    const pageContainer = document.querySelector("[data-scroll-container]");
  
    const scroll = new LocomotiveScroll({
      el: pageContainer,
      smooth: true,
    });
  
    scroll.on(pageContainer, ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy(pageContainer, {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });
  
    /* anims */
  
    function animateFrom(elem, direction) {
      direction = direction || 1;
  
      var x = 0,
        y = direction * 100;
      if (elem.classList.contains("gsap_reveal--fromLeft")) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains("gsap_reveal--fromRight")) {
        x = 100;
        y = 0;
      }
  
      elem.style.transform = "translate(" + x + "px, " + y + "px)";
      elem.style.opacity = "0";
  
      gsap.fromTo(elem, {
        x: x,
        y: y,
        autoAlpha: 0
      }, {
        duration: 2,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      });
  
    }
  
    function hide(elem) {
      gsap.set(elem, {
        autoAlpha: 0
      });
    }
  
    gsap.utils.toArray(".gsap_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      ScrollTrigger.create({
        trigger: elem,
        scroller: "[data-scroll-container]",
        onEnter: function() {
          animateFrom(elem)
        },
        onEnterBack: function() {
          animateFrom(elem, -1)
        },
        once: true,
      });
    });
  
  
    /* anims end */
  
    window.addEventListener("load", function(event) {
      ScrollTrigger.refresh();
    });
  
  
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();
  
  }