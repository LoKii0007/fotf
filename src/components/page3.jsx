import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/page3.css"

gsap.registerPlugin(ScrollTrigger)

export default function Page3() {

useEffect(()=>{

  gsap.to(".hero",{
    scrollTrigger:{
      trigger:".page3-comp1",
      start:"bottom bottom",
      scrub:1,
    },
    transformOrigin:"right bottom",
    height:"80vh",
    x:"-10%",
  })



}, [])

  return (
    <>
      <div className="page-3 position-relative">
        <div className="page3-comp1 px-5 d-flex position-relative justify-content-center align-items-center">
            <div className="page3-left">
              <img className='chadi' src="IMG-20240130-WA0117.png" alt="" />
            </div>
            <div className="page3-right d-flex flex-column justify-content-center">
              <div className="crystal-top d-flex">
                <div className="crstal-text">SERUM</div>
                <div className="sound">
                  <img className='sound-img' src="/world.png" alt="" />
                </div>
              </div>
              <div className="crystal-bottom d-flex">
                <div className="crystal">
                  <img className='crystal-img' src="/crystal.png" alt="" />
                </div>
                <div className="world">
                  <img className='world-img' src="/wave.png" alt="" />
                </div>
              </div>
              <div className="crystal-text">
              There is a 4th role called the Legendaries: only for 20 people, who get a serum with it that get a mejastic clothing onboard from the origins of FoF:
              </div>
            </div>
        </div>

        <div className="page3-comp2 position-absolute d-flex">
           <div className="hero-1">
            <img className='hero-img1 hero' src="/IMG-20240130-WA0123.png" alt="" />
           </div>
           <div className="hero-2">
            <img className='hero-img2 hero' src="/IMG-20240130-WA0122.png" alt="" />
           </div>
        </div>

        <div className="page3-comp3 d-flex text-center">
          <div className="page3-comp3-text">
          legendary <br />20 spots
          </div>

          <div className="comp3-bg">
            
          </div>
        </div>
      </div>
    </>
  )
}
