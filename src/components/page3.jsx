import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/page3.css"

gsap.registerPlugin(ScrollTrigger)

export default function Page3({scale}) {

  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHovered3, setIsHovered3] = useState(false)
  const [isHovered4, setIsHovered4] = useState(false)

  // -----------animation 1------------------------- 

  useEffect(() => {

    if(scale){
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
        width: "36vw",
      })
      gsap.to(".hero-comp", {
        scrollTrigger: {
          trigger: ".page3-comp1",
          start: "bottom bottom",
          scrub: 1,
        },
        right: "14vw"
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
    }

  }, [])

  useEffect(()=>{
    if(!scale){
      gsap.to(".hero-comp", {
        scrollTrigger: {
          trigger: ".page3-comp1",
          start: "bottom bottom",
          end: "bottom bottom",
          scrub: true
        },
        position: "fixed",
        x:"100px",
        bottom: 0
      })
      gsap.to(".hero", {
        scrollTrigger: {
          trigger: ".page3-comp1",
          start: "bottom bottom",
          scrub: 1,
        },
        transformOrigin: "right bottom",
        // height:300,
        width:300,
        x:0
      })
      gsap.to(".hero-comp", {
        scrollTrigger: {
          trigger: ".page3-comp1",
          start: "bottom bottom",
          scrub: 1,
        },
        right: "14vw"
      })
    }
  }, [scale])


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

    gsap.to(".recurso", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top top",
        end: "top top",
        scrub: 1,
      },
      animation:"rotate 3s ease-in-out infinite"
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

  // ----------roadmap progress ----------------

  useEffect(() => {
    gsap.to(".progress", {
      scrollTrigger: {
        trigger: ".road",
        start: "top bottom",
        end: "top 80%",
        scrub: 0.4,
      },
      width: "12vw"
    })
  }, [])


  return (
    <>
      <div className="page-3 overflow-hidden">
        <div className="page3-comp1 d-flex position-relative justify-content-between align-items-center">

          <div className="page3-left position-relative">
            <div className="chadi ">
              <img  className='chadi-img' src="/chadi.png" alt="" />
            </div>
            <div className="stick position-absolute">
              <img  className='stick-img' src="/staff.png" alt="" />
            </div>
          </div>

          <div className="page3-right d-flex flex-column justify-content-start ">

              <div className="crystal-top pt-5 d-flex justify-content-center align-items-center">
                <div className="crystal-text d-flex px-5">
                  <div className='img-sq mx-2'></div>
                  <div className=''>SERUM</div>
                  </div>
                <div className="sound px-5">
                  <img  className='sound-img' src="/world.png" alt="" />
                </div>
              </div>

              <div className="crystal-bottom pb-5 d-flex justify-content-center align-items-center">
                <div className="crystal">
                  <img  className='crystal-img' src="/crystal.png" alt="" />
                </div>
                <div className="world d-flex align-items-start">
                  <img  className='world-img' src="/wave.png" alt="" />
                </div>
              </div>

              <div className="crstal-text px-5 m-5 d-flex justify-content-center align-items-start">
                There is a 4th role called the 
                Legendaries: only for 20 people, who 
                get a serum with it that get a mejastic
                clothing onboard from the origins of FoF:
              </div>

          </div>

          <div className="comp31-bottom position-absolute d-flex justify-content-end align-items-end">
              <div className="hero-comp d-flex">
                <div className="hero-1">
                  <div className="hero-11">
                    <img  className='hero-img1 hero' src="/fire.png" alt="" />
                  </div>
                </div>
                <div className="hero-2">
                  <div className="hero-21">
                    <img  className='hero-img2 hero' src="/ice.png" alt="" />
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
            <div style={{ opacity: isHovered1 ? 1 : 0 }} className="ghoomta-text1 position-absolute text-center d-flex justify-content-center align-items-center">
              Coin launch (airdrop vs  presale)
            </div>
            <div style={{ opacity: isHovered2 ? 1 : 0 }} className="ghoomta-text2 position-absolute text-center d-flex justify-content-center align-items-center">
              Access to the Spartacus private room
            </div>
            <div style={{ opacity: isHovered3 ? 1 : 0 }} className="ghoomta-text3 position-absolute text-center d-flex justify-content-center align-items-center">
              Welcome Bonus
            </div>
            <div style={{ opacity: isHovered4 ? 1 : 0 }} className="ghoomta-text4 position-absolute text-center d-flex justify-content-center align-items-center">
              Multiplier from the deposit
            </div>
            <div className="recurso position-absolute">
              <img  className='recurso-img' src="/recurso.png" alt="" />
            </div>
            <div className="circle-2 position-relative d-flex justify-content-center align-items-center">
              <div style={{ opacity: isHovered1 ? 1 : 0 }} className="ghoomta-sq ghoomta-sq1 position-absolute">
              </div>
              <div style={{ opacity: isHovered2 ? 2 : 0 }} className="ghoomta-sq ghoomta-sq2 position-absolute">
              </div>
              <div style={{ opacity: isHovered3 ? 3 : 0 }} className="ghoomta-sq ghoomta-sq3 position-absolute">
              </div>
              <div style={{ opacity: isHovered4 ? 4 : 0 }} className="ghoomta-sq ghoomta-sq4 position-absolute">
              </div>
              <div className="circle-4 d-flex justify-content-center align-items-center">
                <div className="circle-3 d-flex flex-column justify-content-center align-items-center">
                  <div className="circle3-top d-flex justify-content-center align-items-center">
                    <div onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} className="circle-top1 d-flex justify-content-center align-items-center">4</div>
                    <div onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} className="circle-top2 d-flex justify-content-center align-items-center">1</div>
                  </div>
                  <div className="circle3-bottom d-flex justify-content-center align-items-center">
                    <div onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} className="circle-bottom1 d-flex justify-content-center align-items-center text-center">3</div>
                    <div onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className="circle-bottom2 d-flex justify-content-center align-items-center text-center">2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="circ-bottom pt-4 d-flex flex-column justify-content-center align-items-center">
            <div className="perks text-center">perks powered <br /> by spartacus</div>
            <div className="perks-logo">
              <img  className='perks-img' src="/spartacus.png" alt="" />
            </div>
          </div>
        </div>

        <div className="circle-space"></div>

        <div className="roadmap d-flex flex-column justify-content-center align-items-center">
          <div className="roadmap-top py-5 text-center">
            ROADMAP
          </div>

          <div className="roadmap-bottom px-5 d-flex position-relative justify-content-center align-items-start">

            <div className="road position-absolute d-flex justify-content-start align-items-center">
              <div className="progress"></div>
            </div>

            <div className="road-1 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center mt-5">kick off</div>
              <div className="road-bottom text-center">We launch the Friends of the Future website and social media</div>
              <div className="sq-1 sq position-absolute"></div>
              {/* <div className="stop-pro position-absolute"></div> */}
            </div>
            <div className="road-2 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center">normies reveal</div>
              <div className="road-bottom text-center mb-5">We reveal Normies perks</div>
              <div className="sq-2 sq position-absolute"></div>
            </div>
            <div className="road-3 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center mt-5">goldies reveal</div>
              <div className="road-bottom text-center">We reveal Goldies perks</div>
              <div className="sq-3 sq position-absolute"></div>
            </div>
            <div className="road-4 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center">goldies reveal</div>
              <div className="road-bottom text-center mb-5">We reveal Platinum perks</div>
              <div className="sq-4 sq position-absolute"></div>
            </div>
            <div className="road-5 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center mt-5">legendaries reveal</div>
              <div className="road-bottom text-center">We reveal Legendaries perks</div>
              <div className="sq-5 sq position-absolute"></div>
            </div>
            <div className="road-6 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div className="road-top text-center">Minting time</div>
              <div className="road-bottom text-center mb-5">in favouritism for avatars</div>
              <div className="sq-6 sq position-absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
