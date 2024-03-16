import React, { useEffect, useState } from "react"
import Page1 from "../components/page1";
import Page2 from "../components/page2"
import LocomotiveScroll from 'locomotive-scroll';

export default function Home({ bgUrl }) {
  const [scale, setScale] = useState(window.innerWidth > 600);

  useEffect(() => {
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector('[data-scroll-container]'),
    //   smooth: true,
    //   multiplier:0.4
    // });

    function handleResize() {
      setScale(window.innerWidth > 600);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // scroll.destroy()
    }
  }, [])

  return (
    <>
      <div id="preloader" data-scroll-container>
          <Page1 scale={scale} bgUrl={bgUrl} />
          <Page2 scale={scale} bgUrl={bgUrl} />
      </div>
    </>
  )
}
