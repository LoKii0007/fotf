import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/page3.css"
import { Flip } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip)

export default function Page3() {

  const [flag, setFlag] = useState(false)
  const [rotation, setRotation] = useState(0)

  // -----------animation 1------------------------- 

  useEffect(() => {

    gsap.to(".hero-comp", {
      scrollTrigger: {
        trigger: ".page3-comp1",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: true
      },
      position: "fixed",
      right: 48,
      bottom: 0
    })

    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".page3-comp1",
        start: "bottom bottom",
        scrub: 1,
      },
      transformOrigin: "right bottom",
      width:"36vw",
    })
    gsap.to(".hero-comp", {
      scrollTrigger: {
        trigger: ".page3-comp1",
        start: "bottom bottom",
        scrub: 1,
      },
      right:"14vw"
    })
    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top 95%",
        end: "top 60%",
        scrub: 1,
      },
      transformOrigin: "bottom center",
      scale: 1.3  
    })

    gsap.to(".hero-img1", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top 60%",
        end: "top 10%",
        scrub: .5,
      },
      x: "33vw",
      y: 110
    })

    gsap.to(".hero-img2", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top 60%",
        end: "top 10%",
        scrub: .5,
      },
      x: "-33vw",
      y: 110
    })

  }, [])


  // ------------animation 2---------------

  useEffect(() => {
    gsap.to(".hero-11", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top 10%",
        end: "top top",
        scrub: .5,
      },
      x: 600,
      y: -50
    })
    gsap.to(".hero-21", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top 10%",
        end: "top top",
        scrub: .5,
      },
      x: -600,
      y: -50
    })

    gsap.to(".page3-comp3", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top 10%",
        end: "top top",
        scrub: 1,
      },
      y: -500,
      duration: 1,
    })

    gsap.to(".comp3-bg", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top top",
        end: "top top",
        scrub: 1,
        // markers:true
      },
      opacity: 1
    })

  }, [])

  // animation 3---------------------------

  useEffect(() => {
    
    gsap.to(".hero-1", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top -5%",
        end: "+=25px",
        scrub: 1,
      },
      x: 450,
    })
    gsap.to(".hero-2", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top -5%",
        end: "+=25px",
        scrub: 1,
      },
      x: -500,
    })
  }, [])

  // animation 4-----------------

  useEffect(() => {

    gsap.to(".comp3-bg", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top -10%",
        end: "top -80%",
        scrub: .5,
        // markers: true
      },
      y: "-100vh"
    })
  }, [])



  // ----------recurso rotation ----------------

  useEffect(() => {
    const rotate = setTimeout(() => {
      setRotation(360)
      setFlag(!flag)
    }, 2000)

    return () => clearTimeout(rotate)

  }, [flag])

  return (
    <>
      <div className="page-3 ">
        <div className="page3-comp1 d-flex position-relative justify-content-between align-items-center">

          <div className="page3-left">
            <img className='chadi' src="/chadi.png" alt="" />
          </div>

          <div className="page3-right pt-5 d-flex flex-column justify-content-between ">

            <div className="comp31-top pt-5 pe-5 d-flex flex-column">
              <div className="crystal-top d-flex justify-content-center align-items-center">
                <div className="crystal-text px-5">SERUM</div>
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

              <div className="crstal-text pt-5 justify-content-center align-items-start">
                There is a 4th role called the <br />
                Legendaries: only for 20 people, who <br />
                get a serum with it that get a mejastic <br />
                clothing onboard from the origins of FoF:
              </div>
            </div>

            <div className="comp31-bottom pe-5 d-flex justify-content-end align-items-end">
              <div className="hero-comp d-flex">
                <div className="hero-1">
                  <div className="hero-11">
                    <img className='hero-img1 hero' src="/fire.png" alt="" />
                  </div>
                </div>
                <div className="hero-2">
                  <div className="hero-21">
                    <img className='hero-img2 hero' src="/ice.png" alt="" />
                  </div>
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

        <div className="comp3-bg position-fixed d-flex flex-column justify-content-evenly align-items-center">
          <div className="circle-1 position-relative mt-5 d-flex justify-content-center align-items-center">
            <div className="ghoomta-text position-absolute text-center d-flex align-items-start">
            Coin launch (airdrop vs  presale)
            </div>
            <div className="circle-2 position-relative d-flex justify-content-center align-items-center">
              <div className="ghoomta-sq position-absolute">
              </div>
              <div className="circle-4 d-flex justify-content-center align-items-center">
                <div className="circle-3 d-flex position-relative flex-column justify-content-center align-items-center">
                  <div className="circle3-top d-flex justify-content-center align-items-center">
                    <div className="circle-top1 d-flex justify-content-center align-items-center">4</div>
                    <div className="circle-top2 d-flex justify-content-center align-items-center">1</div>
                  </div>
                  <div className="circle3-bottom d-flex justify-content-center align-items-center">
                    <div className="circle-bottom1 d-flex justify-content-center align-items-center text-center">3</div>
                    <div className="circle-bottom2 d-flex justify-content-center align-items-center text-center">2</div>
                  </div>
                  <div style={{ transform: `rotate(${rotation}deg)` }} className="recurso position-absolute">
                    <img className='recurso-img' src="/recurso.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="circ-bottom d-flex flex-column justify-content-center align-items-center">
            <div className="perks text-center">perks powered <br /> by spartacus</div>
            <div className="perks-logo">
              <img className='perks-img' src="/spartacus.png" alt="" />
            </div>
          </div>
        </div>

        <div className="circle-space"></div>

        <div className="roadmap d-flex flex-column justify-content-center align-items-center">
          <div className="roadmap-top p-5 text-center">
            ROADMAP
          </div>

          <div className="roadmap-bottom px-5 d-flex position-relative justify-content-center align-items-start">

            <div className="road position-absolute d-flex justify-content-start align-items-center">
              <div className="progress col-2 "></div>
            </div>

            <div className="road-1 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center">kick off</div>
              <div className="road-bottom text-center">We launch the Friends of the Future website and social media</div>
              <div className="sq-1 pro-sq sq position-absolute"></div>
            </div>
            <div className="road-2 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center">normies reveal</div>
              <div className="road-bottom text-center">We reveal Normies perks</div>
              <div className="sq-2 sq position-absolute"></div>
            </div>
            <div className="road-3 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center">goldies reveal</div>
              <div className="road-bottom text-center">We reveal Goldies perks</div>
              <div className="sq-3 sq position-absolute"></div>
            </div>
            <div className="road-4 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center">goldies reveal</div>
              <div className="road-bottom text-center">We reveal Platinum perks</div>
              <div className="sq-4 sq position-absolute"></div>
            </div>
            <div className="road-5 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center">legendaries reveal</div>
              <div className="road-bottom text-center">We reveal Legendaries perks</div>
              <div className="sq-5 sq position-absolute"></div>
            </div>
            <div className="road-6 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center">Minting time</div>
              <div className="road-bottom text-center">in favouritism for avatars</div>
              <div className="sq-6 sq position-absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
