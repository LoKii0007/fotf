import React, { useEffect, useState } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
import "../css/page2.css"

gsap.registerPlugin(ScrollTrigger)

export default function Page2({ scale }) {

  gsap.config({
    force3D: true
  })

  const [flag, setFlag] = useState(false)
  const [shuffle, setShuffle] = useState(false)

  const animation = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']


  // useEffect(()=>{
  //   window.addEventListener("load", function(){
  //     console.log("loaded")
  //   })
  // }, [])

  // animation1-------------(green box rotation)-----------------------

  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top bottom",
        end: "top center",
        scrub: 1,
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
      .to(".box2-content , .box-2, .shuffle-top", {
        y: 0,
        duration: .5,
        opacity: 1
      }, 0)
      .to(".layers", {
        y: 0,
        duration: .5,
      }, 0)

    ScrollTrigger.create({
      trigger: ".box",
      start: "center center",
      end: "center 49%",
      scrub: 1,
      onEnter: () => {
        tl1.play()
        setShuffle(true)
      },
      onLeaveBack: () => {
        setShuffle(false)
      },
      onEnterBack:()=>{
        tl1.reverse()
        setShuffle(true)
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
      .to(".box-2", {
        transform: "rotateY(0deg)",
      })
    ScrollTrigger.create({
      trigger: ".shuffle-bottom",
      start: "20% center",
      end: "20% 49%",
      scrub: .8,
      onEnter: () => {
        tl2.play()
        setShuffle(false)
      },
      onLeaveBack: () => {
        setShuffle(true)
      },
      onEnterBack:()=>{
        tl2.reverse()
      }
    })
  }, [])

  // --------------animation4------------------(increasing size of black box)--------------------

  useEffect(() => {

    gsap.to(".box2-content", {
      scrollTrigger: {
        trigger: ".box-2",
        start: "top 30%",
        end: "top 30%",
        scrub: .5
      },
      scale: 1,
      duration: .8,
      opacity: 1,
      transformOrigin: "center center"
    }, 1)

    if (scale) {
      gsap.to(".box-2", {
        scrollTrigger: {
          trigger: ".box-2",
          start: "top 30%",
          end: "top 30%",
          scrub: .5,
        },
        transformOrigin: "top center",
        height: "80vh",
        width: "80vw",
        duration: .8,
      })

      const tl1 = gsap.timeline({
        paused: true,
      })

      tl1.to(".box-2", {
        height: "150vh",
        width: "150vw",
        paddingTop: "15vh",
        duration: .5,
        transformOrigin: "top center"
      })
      tl1.to(".page2-comp1", {
        height: "150vh",
        duration: .5,
        transformOrigin: "top center"
      }, 0)
      tl1.to(".box2-line1", {
        fontSize: "32px",
        lineHeight: "32px",
        duration: .5,
      }, 0)
      tl1.to(".box2-line2", {
        fontSize: "48px",
        lineHeight: "48px",
        duration: .5,
      }, 0)
      tl1.to(".box2-img", {
        height: "250px",
        duration: .5,
      }, 0)
      tl1.to(".page2-comp2", {
        height: 0,
        duration: .5,
      }, 0)
      ScrollTrigger.create({
        trigger: ".box-2",
        start: "top 20%",
        end: "top 20%",
        scrub: 0.1,
        onEnter: () => {
          tl1.play()
        },
        onEnterBack: () => {
          tl1.reverse()
        }
      })
    }
    else {

      gsap.to(".box-2", {
        scrollTrigger: {
          trigger: ".box-2",
          start: "top 30%",
          end: "top 30%",
          scrub: .5,
        },
        transformOrigin: "top center",
        height: "70vh",
        width: "100vw",
        duration: .8,
      })

      const tl2 = gsap.timeline({
        paused: true,
      })

      tl2.to(".box-2", {
        height: "150vh",
        paddingTop: "15vh",
        transformOrigin: "center center"
      })
        .to(".page2-comp1", {
          height: "150vh",
          transformOrigin: "top center"
        }, 0)
        .to(".page2-comp2", {
          height: 0,
        }, 0)

      ScrollTrigger.create({
        trigger: ".box-2",
        start: "top 20%",
        end: "top 20%",
        scrub: 0.1,
        // markers: true,
        onEnter: () => {
          tl2.play()
        },
        onEnterBack: () => {
          tl2.reverse()
        }
      })
    }

  }, [scale])

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
            <div className="shuffle-right p-5 d-flex justify-content-start align-items-start">
              <div className="shuffle-text1 pe-5 d-flex justify-content-center align-items-center">
                <div className="shuffle-sq p-1"></div>
                <div className='ps-3'>NFT COLLECTION</div>
              </div>
              <div className="shuffle-text2 pe-5">
                <span style={{ textDecoration: "underline" }}>Friends of the Future</span> <br /> avatars living in the Ethereum blockchain will have a unique private room full of surprises for the community. This is family, and we love to say it since the creation: by community for community.
              </div>
            </div>
          </div>
          <div className="shuffle-bottom position-relative d-flex flex-column justify-content-center align-items-center">

            <div className="layers position-absolute d-flex justify-content-center align-items-center">
              {
                animation.map((item, index) => (
                  <div key={index} style={{ animation: scale ? `${shuffle ? "layer"+item+"-anime 8s linear infinite" : "" }` : `${shuffle ? "layer"+item+"-anime-mob 8s linear infinite" : "" }` }} className={`layer-${item} position-absolute d-flex justify-content-between align-items-center`}>
                    <img style={{ animation: scale ? `${shuffle ? "layer"+item+"-img-anime 8s linear infinite" : "" }` : `${shuffle ? "layer"+item+"-img-anime-mob 8s linear infinite" : "" }` }} className={`lr${item}-img1`} src={`/HUMANOS0094.jpg`} alt="" />
                    <img style={{ animation: scale ? `${shuffle ? "layer"+item+"-img-anime 8s linear infinite" : "" }` : `${shuffle ? "layer"+item+"-img-anime-mob 8s linear infinite" : "" }` }} className={`lr${item}-img2`} src={`/HUMANOS0094.jpg`} alt="" />
                  </div>
                ))
              }
            </div >

    <div style={{ backgroundImage: "url(faltu.svg)" }} className="box-2 d-flex justify-content-center align-items-start">
      <div className="box2-content d-flex flex-column justify-content-evenly align-items-center">
        <div className="box2-top d-flex flex-column align-items-evenly justify-content-center">
          <div className="box2-line1 py-3 text-center">we are not here to take <br /> part, we are here to <br /> take over.</div>
          <div className="box2-line2 text-center">there a four <br /> major groups</div>
        </div>

        <div className="box2-bottom d-flex align-items-center justify-content-center">
          <div className="box2-bt-top d-flex align-items-center justify-content-center">
            <div className="box2-img1 px-2">
              <div className='d-flex'>
                <div className='img-sq'></div>
                <div className="img-text ps-2">normies 1800 spots</div>
              </div>
              <img className='box2-img' src="/55c2ee38400eef5224c3151b95d9d284.jpeg" alt="" />
            </div>
            <div className="box2-img2 px-2">
              <div className='d-flex'>
                <div className='img-sq'></div>
                <div className="img-text ps-2">platinums 487 spots</div>
              </div>
              <img className='box2-img' src="/alien1.png" alt="" />
            </div>
          </div>
          <div className="box2-bt-bottom d-flex align-items-center justify-content-center">
            <div className="box2-img3 px-2">
              <div className='d-flex'>
                <div className='img-sq'></div>
                <div className="img-text ps-2">goldies 1007 spots</div>
              </div>
              <img className='img3-img box2-img' src="/IMG-20240130-WA0119.png" alt="" />
            </div>
            <div className="box2-img4 px-2">
              <div className='d-flex'>
                <div className='img-sq'></div>
                <div className="img-text ps-2">legendary 20 spots</div>
              </div>
              <img className='box2-img' src="/IMG-20240130-WA0123.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

          </div >
        </div >

    <div className="page2-comp2">
    </div>

      </div >
    </>
  )
}
