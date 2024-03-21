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

    function handleResize() {
      setScale(window.innerWidth > 600);
    }

    window.addEventListener("resize", handleResize);

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

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
