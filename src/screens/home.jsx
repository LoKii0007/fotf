import React, { useEffect, useState } from "react"
import Page1 from "../components/page1";
import Page2 from "../components/page2"
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export default function Home({ bgUrl }) {
  const [scale, setScale] = useState(window.innerWidth > 600);
  gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {

    const animationContainer = document.querySelector('.animated-title');
        const textData = animationContainer.getAttribute('aria-label');

        function splitWords() {
            const splitedText = textData.split(' ');

            splitedText.join('& &').split('&').forEach(function (e) {
                const span = document.createElement('span');
                span.classList.add('animated-word');
                span.setAttribute('data-text', e);
                animationContainer.appendChild(span);
            });
            splitLetters();
        }

        function splitLetters() {
            const animatedWords = document.querySelectorAll('.animated-word');
            animatedWords.forEach(function (e, i) {
                e.getAttribute('data-text').split('').forEach(function (f, j) {
                    f = f === ' ' ? '&#32;' : f;
                    const span = document.createElement('span');
                    span.classList.add('animated-element');
                    span.setAttribute('aria-hidden', 'true');
                    span.innerHTML = f;
                    e.appendChild(span);
                });
                animate(e, i);
            });
        }

        function animate(e, i) {
            const wordCount = e.getAttribute('data-text').length;
            e.style.opacity = 1;
            e.classList.add('animate');
        }

        splitWords();

    function handleResize() {
      setScale(window.innerWidth > 800);
    }

    handleResize()

    window.addEventListener("resize", handleResize);

    // const lenis = new Lenis()

    // lenis.on('scroll', (e) => {
    // })

    // lenis.on('scroll', ScrollTrigger.update)

    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000)
    // })

    // gsap.ticker.lagSmoothing(0)

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <>
      <Page1 scale={scale} bgUrl={bgUrl} />
      <Page2 scale={scale} bgUrl={bgUrl} />
    </>
  )
}
