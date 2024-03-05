import React, { useEffect, useState } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
import Observer from 'gsap/Observer'
import "../css/page2.css"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Observer)

export default function Page2() {

  const [count1, setCount2] = useState(0)


  // animation1-------------(green box rotation)-----------------------

  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top bottom",
        end: "top center",
        scrub: 1
      },
      rotate: "-45deg",
    })
  }, [])


  // animation2-----------(green box scaling and aliginig shuffle)-------------------

  useEffect(() => {

    const tl1 = gsap.timeline({
      paused: true
    })
    tl1.to(".box", {
      rotate: "45deg",
      transformOrigin: "center center",
      transform: "scale(40)",
      duration: .5,
    })
    tl1.to(".box2-content , .box-2, .shuffle-top", {
      y: 0,
      duration: .5,
      opacity:1
    }, 0)
    tl1.to(".layers", {
      y: 0,
      duration: .5,
    }, 0)
    ScrollTrigger.create({
      trigger: ".box",
      start: "center center",
      end: "center center",
      scrub: 1,
      onEnter: () => {
        tl1.play()
      },
      onLeaveBack: () => {
        tl1.reverse()
      }
    })

  }, [])


  // ---------animation 3 ------------------(black box rotating)------------------

  useEffect(() => {
    gsap.to(".shuffle-left , .shuffle-right", {
      scrollTrigger: {
        trigger: ".shuffle-bottom",
        start: "20% center",
        end: "20% center",
        // markers:true,
        scrub: .8
      },
      y: "-300px"
    })
    const tl2 = gsap.timeline({
      paused: true,
      onComplete: () => {
        ScrollTrigger.update()
      }
    })
    tl2.to(".layers", {
      rotateY: "90deg"
    })
    tl2.to(".box-2", {
      transform: "rotateY(0deg)",
    })
    ScrollTrigger.create({
      trigger: ".shuffle-bottom",
      start: "20% center",
      end: "20% center",
      // markers:true,
      scrub: .8,
      onEnter: () => {
        tl2.play()
      },
      onLeaveBack: () => {
        tl2.reverse()
      }
    })
  }, [])

  // --------------animation4------------------(increasing size of black box)--------------------

  useEffect(() => {

    // const tl = gsap.timeline
    gsap.to(".box-2", {
      scrollTrigger:{
        trigger:".box-2",
        start:"top 30%",
        end:"top 30%",
        // markers:true ,
        scrub:.5,
      },
      transformOrigin:"top center",
      height:"60vh",
      width:"70vw",
      duration:.8
    })
    gsap.to(".box2-content", {
      scrollTrigger:{
        trigger:".box-2",
        start:"top 30%",
        end:"top 30%",
        scrub:.5
      },
      scale:1,
      duration:.8,
      opacity:1,
      transformOrigin:"center center"
    }, 1)

    const tl1 = gsap.timeline({
      paused: true,
    })

    tl1.to(".box-2", {
      height:"150vh",
      width:"100vw",
      paddingTop:"15vh",
      duration: .5,
      transformOrigin: "top center"
    })
    tl1.to(".page2-comp1", {
      height: "150vh",
      duration: .5,
      transformOrigin: "top center"
    }, 0)
    tl1.to(".box2-line1", {
      fontSize:"32px",
      lineHeight:"32px",
      duration: .5,
    }, 0)
    tl1.to(".box2-line2", {
      fontSize:"48px",
      lineHeight:"48px",
      duration: .5,
    }, 0)
    tl1.to(".box2-img", {
      height:"250px",
      duration: .5,
    }, 0)
    tl1.to(".page2-comp2", {
      height: 0,
      duration: .5,
    }, 0)
    ScrollTrigger.create({
      trigger:".box-2",
      start:"top 20%",
      end:"top 20%",
      scrub: 0.1,
      // markers:true,
      onEnter: () => {
        tl1.play()
      },
      onLeaveBack: () => {
        tl1.reverse()
      }
    })
  }, [])

  // ------------animation 5------------ (card suffle )---------------------

  useEffect(()=>{
      
  }, [])

  return (
    <>
      <div className="page-2">
        <div className="page2-comp1 d-flex flex-column align-items-center justify-content-evenly position-relative">
          <div className="box position-absolute">
          </div>
          <div className="shuffle-top container d-flex justify-content-center align-items-center">
            <div className="shuffle-left px-5 col-6 d-flex justify-content-start align-items-center">
              3,314 unique digital <br /> collectibles.
            </div>
            <div className="shuffle-right col-6 px-5 d-flex justify-content-start align-items-center">
              <div className="shuffle-text1 px-5">
                NFT COLLECTION
              </div>
              <div className="shuffle-text2 pe-5">
                <span style={{ textDecoration: "underline" }}>Friends of the Future</span> <br /> avatars living in the Ethereum blockchain will have a unique private room full of surprises for the community. This is family, and we love to say it since the creation: by community for community.
              </div>
            </div>
          </div>
          <div className="shuffle-bottom position-relative d-flex flex-column justify-content-center align-items-center">

            <div className="layers position-absolute d-flex justify-content-center align-items-center">

              <div className="layer-1 position-absolute d-flex justify-content-between align-items-center ">
                <img className='lr1-img1' src="/1.png" alt="" />
                <img className='lr1-img2' src="/2.png" alt="" />
              </div>
              <div className="layer-2 position-absolute d-flex justify-content-between align-items-center">
                <img className='lr2-img1' src="/3.png" alt="" />
                <img className='lr2-img2' src="/4.png" alt="" />
              </div>
              <div className="layer-3 position-absolute d-flex justify-content-between align-items-center">
                <img className='lr3-img1' src="/5.png" alt="" />
                <img className='lr3-img2' src="/6.png" alt="" />
              </div>
              <div className="layer-4 position-absolute d-flex justify-content-between align-items-center">
                <img className='lr4-img1' src="/7.png" alt="" />
                <img className='lr4-img2' src="/8.png" alt="" />
              </div>
              <div className="layer-5 position-abolute d-flex justify-content-between align-items-center">
                <img className='lr5-img1' src="/10-1.png" alt="" />
                <img className='lr5-img2' src="/10.png" alt="" />
              </div>
              {/* <div className="layer-6 d-flex position-abolute justify-content-between align-items-center">
                <img className='lr6-img1' src="/11-1.png" alt="" />
                <img className='lr6-img2' src="/11.png" alt="" />
              </div>
              <div className="layer-7 d-flex position-abolute justify-content-between align-items-center">
                <img className='lr7-img1' src="/12-1.png" alt="" />
                <img className='lr7-img2' src="/12.png" alt="" />
              </div>
              <div className="layer-8 d-flex position-abolute justify-content-between align-items-center">
                <img className='lr8-img1' src="/13-1.png" alt="" />
                <img className='lr18img2' src="/13.png" alt="" />
              </div>
              <div className="layer-9 d-flex position-abolute justify-content-between align-items-center">
                <img className='lr9-img1' src="/14-1.png" alt="" />
                <img className='lr9-img2' src="/14.png" alt="" />
              </div>
              <div className="layer-10 d-flex position-abolute justify-content-between align-items-center">
                <img className='lr10-img1' src="/15-1.png" alt="" />
                <img className='lr10-img2' src="/15.png" alt="" />
              </div>
              <div className="layer-11 d-flex position-abolute justify-content-between align-items-center">
                <img className='lr11-img1' src="/16-1.png" alt="" />
                <img className='lr11-img2' src="/16(1).png" alt="" />
              </div> */}
            </div>

            <div style={{ backgroundImage: "/faltu.svg" }} className="box-2 d-flex justify-content-center align-items-start">
              <div className="box2-content d-flex flex-column justify-content-evenly align-items-center">
              <div className="box2-top d-flex flex-column align-items-evenly justify-content-center">
                <div className="box2-line1 py-3 text-center">we are not here to take <br /> part, we are here to <br /> take over.</div>
                <div className="box2-line2 text-center">there a four <br /> major groups</div>
              </div>

              <div className="box2-bottom d-flex align-items-center justify-content-center">
                <div className="box2-img1 px-2 d-flex flex-column">
                  <div className="img1-text img-text">normies 1800 spots</div>
                  <img className='img1-img box2-img' src="/55c2ee38400eef5224c3151b95d9d284.jpeg" alt="" />
                </div>
                <div className="box2-img2 px-2">
                  <div className="img2-text img-text">platinums 487 spots</div>
                  <img className='img2-img box2-img' src="/alien1.png" alt="" />
                </div>
                <div className="box2-img3 px-2">
                  <div className="img3-text img-text">goldies 1007 spots</div>
                  <img className='img3-img box2-img' src="/IMG-20240130-WA0119.png" alt="" />
                </div>
                <div className="box2-img4 px-2">
                  <div className="img4-text img-text">legendary 20 spots</div>
                  <img className='img4-img box2-img' src="/IMG-20240130-WA0123.png" alt="" />
                </div>
              </div>
              </div>
            </div>

          </div>
        </div>

        <div className="page2-comp2">
        </div>

      </div>
    </>
  )
}
