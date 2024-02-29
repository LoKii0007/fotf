import React, { useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
import "../css/page2.css"

gsap.registerPlugin(ScrollTrigger)

export default function Page2() {


  // animation1-----------------------

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

  // animation2-----------

  useEffect(() => {

    const tl1 = gsap.timeline({
      paused: true
    })
    tl1.to(".box", {
      rotate: "45deg",
      transformOrigin: "center center",
      transform: "scale(40)",
      // height:"100vh",
      // width:"100vw",
      duration: .5,
    })
    tl1.to(".shuffle-bottom", {
      y:0,
      duration: .5,
    }, 0)
    tl1.to(".shuffle-top", {
      y:0,
      duration: .5,
    }, 0)
    ScrollTrigger.create({
      trigger: ".box",
      start: "center center",
      end: "center center",
      scrub: 1,
      onEnter:()=>{
        tl1.play()
      },
      onLeaveBack:()=>{
        tl1.reverse()
      }
    })

    // ---------black box svg animation ------------------

    gsap.to(".shuffle-top", {
      scrollTrigger: {
        trigger: ".shuffle-bottom",
        start: "center center",
        end: "center center",
        markers:true,
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
      transform: "rotateY(0deg)"
    })
    ScrollTrigger.create({
      trigger: ".shuffle-bottom",
      start: "center center",
      end: "center center",
      markers:true,
      scrub: .8,
      onEnter: () => {
        tl2.play()
      },
      onLeaveBack: () => {
        tl2.reverse()
      }
    })

    // let observer

    // const tl3 = gsap.timeline({
    //   paused: true
    // })
    // tl3.to(".box-2", {
    //   scaleX: 4,
    //   scaleY: 2,
    //   transformOrigin: "center center",
    // })
    // tl3.to(".box2-content", {
    //   transform: "scale(1)",
    //   transformOrigin: "top center",
    // }, 0)
    // ScrollTrigger.create({
    //   trigger: ".shuffle-bottom",
    //   start: "top 65%",
    //   end: "top 65%",
    //   scrub: 5,
    //   onEnter: () => {
    //     tl3.play()
    //   },
    //   onLeaveBack: () => {
    //     tl3.reverse()
    //   }
    // })

    // gsap.to(".box-2", {
    //   scrollTrigger: {
    //     trigger: ".box-2",
    //     start: "top 35%",
    //     end: "top 35%",
    //     scrub: .5
    //   },
    //   height: "100vh",
    //   width: "100vw",
    //   duration: 1
    // })

  }, [])

  return (
    <>
      <div className="page-2 d-flex flex-column align-items-center justify-content-center">
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
                <span style={{ textDecoration: "underline", fontWeight: "500" }}>Friends of the Future</span> <br /> avatars living in the Ethereum blockchain will have a unique private room full of surprises for the community. This is family, and we love to say it since the creation: by community for community.
              </div>
            </div>
          </div>
          <div className="shuffle-bottom position-relative d-flex flex-column justify-content-center align-items-center">
            <div className="layers position-relative d-flex justify-content-center align-items-center">
              <div className="layer-1 d-flex">
                <img className='lr1-img1' src="/ALIENS01.png" alt="" />
                <img className='lr1-img2' src="/ALIENS02.png" alt="" />
              </div>
              <div className="layer-2 position-absolute d-flex">
                <img className='lr2-img1' src="/ALIENS11.png" alt="" />
                <img className='lr2-img2' src="/ALIENS12.png" alt="" />
              </div>
              <div className="layer-3 position-absolute d-flex">
                <img className='lr3-img1' src="/ALIENS21.png" alt="" />
                <img className='lr3-img2' src="/ALIENS22.png" alt="" />
              </div>
              <div className="layer-4 position-absolute d-flex">
                <img className='lr4-img1' src="/ALIENS03.png" alt="" />
                <img className='lr4-img2' src="/ALIENS04.png" alt="" />
              </div>
            </div>
            <div className="box-2 position-absolute">
            </div>
            <div className="box2-content position-absolute d-flex flex-column justify-content-center align-items-center">
              <div className="box2-top d-flex flex-column align-items-center justify-content-center">
                <div className="box2-line1">we are not here to take <br /> part, we are here to <br /> take over.</div>
                <div className="box2-line2">there a four <br /> major groups</div>
              </div>

              <div className="box2-bottom d-flex align-items-center justify-content-center">
                <div className="box2-img1 px-2 d-flex flex-column">
                  <div className="img1-text img-text">normies 1800 spots</div>
                  <img className='img1-img box2-img' src="/IMG-20240130-WA0117.png" alt="" />
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

        <div className="page2-comp2">
        </div>

      </div>
    </>
  )
}
