import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/page3.css"

gsap.registerPlugin(ScrollTrigger)

export default function Page3() {

  useEffect(() => {

    gsap.to(".hero-comp", {
      scrollTrigger: {
        trigger: ".page3-comp1",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: true
      },
      position: "fixed",
      right: "0%",
      bottom: "0%"
    })

    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".page3-comp1",
        start: "bottom bottom",
        scrub: 1,
      },
      transformOrigin: "right bottom",
      // width: "100vw",
      height: "100vh"
    })

    gsap.to(".hero-img1", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top 80%",
        end: "top 30%",
        scrub: .5,
      },
      x: "+=600px",
      y: "+=200"
    })
    gsap.to(".hero-img2", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top 80%",
        end: "top 30%",
        scrub: .5,
      },
      x: "-=600",
      y: "+=200"
    })


    gsap.to(".hero-img1", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top 10%",
        end: "top top",
        scrub: 1,
      },
      x: "-=70%",
      y: "-=100px"
    })
    gsap.to(".hero-img2", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top 10%",
        end: "top top",
        scrub: 1,
      },
      x: "+=70%",
      y: "-=100px"
    })


    gsap.to(".page3-comp3", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top -5%",
        end: "top -5%",
        scrub: 1,
      },
      y: -500
    })
    gsap.to(".comp3-bg", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top -5%",
        end: "top -5%",
        scrub: 1,
        // markers:true
      },
      opacity: 1
    })

    gsap.to(".comp3-bg", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top -10%",
        end: "top -40%",
        scrub: .5,
        // markers: true
      },
      y: "-100vh"
    })

  }, [])

  return (
    <>
      <div className="page-3 ">
        <div className="page3-comp1 ps-5 d-flex position-relative justify-content-between align-items-center">

          <div className="page3-left">
            <img className='chadi' src="/chadi.png" alt="" />
          </div>

          <div className="page3-right d-flex flex-column justify-content-between ">

            <div className="comp31-top pt-5 pe-5 d-flex flex-column">
              <div className="crystal-top d-flex justify-content-center align-items-center">
                <div className="crstal-text px-5">SERUM</div>
                <div className="sound px-5">
                  <img className='sound-img' src="/world.png" alt="" />
                </div>
              </div>

              <div className="crystal-bottom pb-5 d-flex justify-content-center align-items-center">
                <div className="crystal">
                  <img className='crystal-img' src="/crystal.png" alt="" />
                </div>
                <div className="world d-flex align-items-start">
                  <img className='world-img' src="/wave.png" alt="" />
                </div>
              </div>

              <div className="crystal-text pt-5 justify-content-center align-items-start">
                There is a 4th role called the <br />
                Legendaries: only for 20 people, who <br />
                get a serum with it that get a mejastic <br />
                clothing onboard from the origins of FoF:
              </div>
            </div>

            <div className="comp31-bottom d-flex justify-content-end align-items-end">
              <div className="hero-comp d-flex">
                <div className="hero-1">
                  <img className='hero-img1 hero' src="/fire.png" alt="" />
                </div>
                <div className="hero-2">
                  <img className='hero-img2 hero' src="/ice.png" alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div style={{ height: "100vh" }} className="page3-comp2"> </div>

        <div className="page3-comp3 d-flex flex-column position-relative">
          <div className="page3-comp3-text text-center">
            legendary <br />20 spots
          </div>
        </div>

        <div className="comp3-bg position-fixed d-flex justify-content-center align-items-center">
          <div className="circle-1 d-flex justify-content-center align-items-center">
            <div className="circle-2 d-flex justify-content-center align-items-center">
              <div className="circle-3 d-flex flex-column justify-content-center align-items-center">
                <div className="circle3-top d-flex justify-content-center align-items-center">
                  <div className="circle-top1 text-center">1</div>
                  <div className="circle-top2 text-center">2</div>
                </div>
                <div className="circle3-bottom d-flex justify-content-center align-items-center">
                  <div className="circle-bottom1 text-center">3</div>
                  <div className="circle-bottom2 text-center">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-space"></div>

        <div className="roadmap d-flex flex-column justify-content-center align-items-center">
          <div className="roadmap-top p-5 text-center">
            ROADMAP
          </div>

          <div className="roadmap-bottom px-5 d-flex position-relative justify-content-evenly align-items-start">

            <div className="road position-absolute d-flex justify-content-start align-items-center">
              <div className="progress col-2 "></div>
            </div>

            <div className="pro-sq position-absolute d-flex justify-content-evenly align-items-center">
              <div className="sq-1 sq col-2"></div>
              <div className="sq-2 sq col-2"></div>
              <div className="sq-3 sq col-2"></div>
              <div className="sq-4 sq col-2"></div>
              <div className="sq-5 sq col-2"></div>
              <div className="sq-6 sq col-2"></div>
            </div>

            <div className="road-1 col-2 p-5 d-flex flex-column text-center">
              <div className="road-top">kick off</div>
              <div className="road-bottom">We launch the Friends of the Future website and social media</div>
            </div>
            <div className="road-2 col-2 p-5 d-flex flex-column text-center">
              <div className="road-top">normies reveal</div>
              <div className="road-bottom">We reveal Normies perks</div>
            </div>
            <div className="road-3 col-2 p-5 d-flex flex-column text-center">
              <div className="road-top">goldies reveal</div>
              <div className="road-bottom">We reveal Goldies perks</div>
            </div>
            <div className="road-4 col-2 p-5 d-flex flex-column text-center">
              <div className="road-top">goldies reveal</div>
              <div className="road-bottom">We reveal Platinum perks</div>
            </div>
            <div className="road-5 col-2 p-5 d-flex flex-column text-center">
              <div className="road-top">legendaries reveal</div>
              <div className="road-bottom">We reveal Legendaries perks</div>
            </div>
            <div className="road-6 col-2 p-5 d-flex flex-column text-center">
              <div className="road-top">Minting time</div>
              <div className="road-bottom">in favouritism
                for avatars</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
