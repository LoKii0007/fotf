import React, { useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
import "../css/page2.css"

gsap.registerPlugin(ScrollTrigger)

export default function Page2() {

  useEffect(() => {

    const tl1 = gsap.timeline()

    tl1.to(".box", {
      scrollTrigger: {
        trigger: ".page2-comp2",
        start: "top bottom",
        end: "top center",
        scrub: .8
      },
      rotate: "-45deg",
    })

    tl1.to(".box", {
      scrollTrigger: {
        trigger: ".page2-comp2",
        start: "top 10%",
        end: "top 10%",
        scrub: .8
      },
      rotate: "0deg",
      // width: "100vw",
      // height: "100vh",
      transform: "scale(40)",
      duration: .5,
    })


    gsap.to(".page2-comp2", {
      scrollTrigger: {
        trigger: ".page2-comp2",
        start: "top top",
        end: "top top",
        scrub: .8
      },
      backgroundColor: "#07CE02"
    })


    //-------------shuffle animation

    gsap.to(".shuffle-bottom", {
      scrollTrigger: {
        trigger: ".box",
        start: "top 20%",
        end: "top 20%",
        scrub: .8
      },
      y: 0
    })

    gsap.to(".shuffle-top", {
      scrollTrigger: {
        trigger: ".shuffle-top",
        start: "top 20%",
        end: "top 20%",
        scrub: .8
      },
      y: "-50vh"
    })

    // ---------black box animation 

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
      trigger: ".shuffle-top",
      start: "top 20%",
      end: "top 20%",
      scrub: .8,
      onEnter: () => {
        tl2.play()
        ScrollTrigger.update()
      },
      onLeaveBack: () => {
        tl2.reverse()
      }
    })

    gsap.to(".box-2", {
      scrollTrigger: {
        trigger: ".box-2",
        start: "top 60%",
        end: "top 60%",
        scrub: .5
      },
      // transform: "scale(2)",
      scale:2,
      height:"fit-content",
      width:"fit-content",
      duration: .5
    })

    gsap.to(".box2-bottom", {
      scrollTrigger: {
        trigger: ".box-2",
        start: "top 50%",
        end: "top 50%",
        scrub: .5
      },
      transform:"scale(1)",
      // transformOrigin:"top center",
      duration: .5
    })

  }, [])

  return (
    <>
      <div className="page-2 pt-5">

        <div className="page2-comp2 mt-5 position-relative d-flex flex-column justify-content-evenly align-items-center">

          <div className="box position-absolute">
          </div>

          <div className="shuffle-top d-flex justify-content-center align-items-center">
            <div className="shuffle-left px-5 col-6 d-flex justify-content-start align-items-center">
              3,314 unique digital collectibles.
            </div>
            <div className="shuffle-right col-6 px-5 d-flex justify-content-start align-items-center">
              <div className="shuffle-text1 px-5">
                nft collection
              </div>
              <div className="shuffle-text2 pe-5">
                Friends of the Future avatars living in the Ethereum blockchain will have a unique private room full of surprises for the community. This is family, and we love to say it since the creation: by community for community.
              </div>
            </div>
          </div>

          <div className="shuffle-bottom position-relative d-flex flex-column justify-content-center align-items-center">
            <div className="layers position-relative d-flex justify-content-center align-items-center">
              <div className="layer-1 position-absolute d-flex">
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

            <div className="box-2 position-absolute d-flex justify-content-center align-items-center">
              <div className="box2-top box2-content d-flex flex-column align-items-center justify-content-center">
                 <div className="box2-line1">we are not here to take part, we are here to take over.</div>
                 <div className="box2-line2">there a four major groups</div>
              </div>
              <div className="box2-bottom box2-content d-flex">
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


      </div>
    </>
  )
}
