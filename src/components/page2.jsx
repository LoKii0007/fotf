import React, { useEffect, useState } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'
import "../css/page2.css"
import "../css/page3.css"
import "../css/page4.css"


gsap.registerPlugin(ScrollTrigger)

export default function Page2({ scale, bgUrl }) {

  const [flag, setFlag] = useState(false)
  const [shuffle, setShuffle] = useState(false)

  const animation = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  useEffect(() => {

    function handleResize() {
      setFlag(window.innerWidth > 800);
    }

    handleResize()

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])


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
      .to("#layout-svg", {
        stroke: "black"
      }, 0)
      .to("#layout-text", {
        fill: "black"
      }, 0)
      .to(".world-svg", {
        fill: "black"
      }, 0)
      .to(".access-btn-pc", {
        color: "black"
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
      onEnterBack: () => {
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
      onEnterBack: () => {
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

    if (flag) {
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
      })
      gsap.to("#layout-text", {
        scrollTrigger: {
          trigger: ".box-2",
          start: "top 30%",
          end: "top 30%",
          scrub: .5,
        },
        fill: "#07CE02"
      })
      gsap.to(".world-svg", {
        scrollTrigger: {
          trigger: ".box-2",
          start: "top 30%",
          end: "top 30%",
          scrub: .5,
        },
        fill: "#07CE02",
      })
      gsap.to(".access-btn-pc", {
        scrollTrigger: {
          trigger: ".box-2",
          start: "top 30%",
          end: "top 30%",
          scrub: .5,
        },
        color:"07CE02"
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
        .to("#layout-svg", {
          stroke: "#07CE02"
        }, 0)
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
      tl1.to(".box", {
        backgroundColor: "transparent"
      })
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
        .to("#layout-svg", {
          stroke: "#07CE02"
        }, 0)
        .to("#layout-text", {
          fill: "#07CE02"
        }, 0)
        .to(".world-svg", {
          fill: "#07CE02"
        }, 0)
        .to(".access-btn-pc", {
          color: "#07CE02"
        }, 0)
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
        onEnter: () => {
          tl2.play()
        },
        onEnterBack: () => {
          tl2.reverse()
        }
      })
    }

  }, [flag])


  //----------------------------- page3------------------------------ 

  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHovered3, setIsHovered3] = useState(false)
  const [isHovered4, setIsHovered4] = useState(false)

  // -----------animation 1------------------------- 

  useEffect(() => {

    if (scale) {
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

  useEffect(() => {
    if (!scale) {
      gsap.to(".hero-comp", {
        scrollTrigger: {
          trigger: ".page3-comp1",
          start: "bottom bottom",
          end: "bottom bottom",
          scrub: true
        },
        position: "fixed",
        x: "100px",
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
        width: 300,
        x: 0
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
    ScrollTrigger.create({
      trigger: ".page3-comp3",
      start: "top 10%",
      end: "top top",
      scrub: 1,
      onEnter: () => {
        tl2.play()
      },
      onLeaveBack: () => {
        tl2.reverse()
      }

    })

    const tl2 = gsap.timeline({
      paused: true
    })

    tl2.to(".page3-comp3-text", {
      y: -500,
      duration: 1,
    })
    tl2.to(".hero-11", {
      x: 600,
      y: -50
    }, 0)
    tl2.to(".hero-21", {
      x: -600,
      y: -50
    }, 0)

    gsap.to(".comp3-bg", {
      scrollTrigger: {
        trigger: ".page3-comp3",
        start: "top top",
        end: "top top",
        scrub: 1,
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


  // ---------------------------page 4-----------------------------------

  const [flag4, setFlag4] = useState(false)

  useEffect(() => {

    gsap.to(".snake1-img", {
      scrollTrigger: {
        trigger: ".thanks-bottom",
        start: "center bottom",
        end: "+=25px",
        scrub: 0.5
      },
      rotateZ: "0deg",
      rotateX: "0deg"
    })
    gsap.to(".snake2-img", {
      scrollTrigger: {
        trigger: ".thanks-bottom",
        start: "center 100%",
        end: "+=25px",
        scrub: 0.5
      },
      rotateZ: "0deg",
      rotateX: "0deg"
    })


    gsap.to(".snake-1", {
      scrollTrigger: {
        trigger: ".thanks-bottom",
        start: "center 55%",
        end: "center center",
        scrub: 1
      },
      x: 110,
      rotateY: "360deg",
      opacity: 0,
    })

    gsap.to(".snake-2", {
      scrollTrigger: {
        trigger: ".thanks-bottom",
        start: "center 55%",
        end: "center center",
        scrub: 1
      },
      x: -110,
      rotateY: "360deg",
      opacity: 0,
    })
    gsap.to(".thanks-top", {
      scrollTrigger: {
        trigger: ".thanks-bottom",
        start: "center 55%",
        end: "center center",
        scrub: 1
      },
      y: -200
    })

    gsap.to(".char, .kala-gola", {
      scrollTrigger: {
        trigger: ".thanks-bottom",
        start: "center 55%",
        end: "center 55%",
        scrub: 1
      },
      opacity: 1
    })

  }, [])

  // --------------------initial fotf animation--------------------- 

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true
    })
    tl.to(".kala-gola", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0
    })
    tl.to(".layout", {
      y: "-100vh"
    }, 0)
    tl.to(".access-btn-pc", {
      y: "-50vh"
    }, 0)
    tl.to(".char", {
      fontSize: `${scale ? "100px" : "50px"}`,
      rotateY: "0deg"
    }, 0)
    tl.to(".char-1", {
      top: "20%",
      left: "50%"
    }, 0)
    tl.to(".char-2", {
      top: "40%",
      left: "50%"
    }, 0)
    tl.to(".char-3", {
      top: "60%",
      left: "50%"
    }, 0)
    tl.to(".char-4", {
      top: "80%",
      left: "50%"
    }, 0)

    ScrollTrigger.create({
      trigger: ".fotf",
      start: "top 50%",
      end: "top 50%",
      onEnter: () => {
        tl.play()
      },
      onLeaveBack: () => {
        tl.reverse()
      }
    })

  }, [scale])

  // -----------------------------fotf last Animation----------------- 

  useEffect(() => {

    const tl1 = gsap.timeline({
      paused: true
    })

    ScrollTrigger.create({
      trigger: ".fotf",
      start: "top top",
      end: "top top",
      scrub: 1,
      onEnter: () => {
        tl1.play()
        setFlag4(true)
      },
      onLeaveBack: () => {
        tl1.reverse()
        setFlag4(false)
      }
    })

    tl1.to(".char-1", {
      y: "30vh",
      x: "-30vw"
    });

    tl1.to(".char-2", {
      y: "10vh",
      x: "-10vw"
    }, 0);


    tl1.to(".char-3", {
      y: "-10vh",
      x: "10vw"
    }, 0)

    tl1.to(".char-4", {
      y: "-30vh",
      x: "30vw"
    }, 0)

    tl1.to(".fotf-images", {
      y: 0
    }, 0)

  }, []);

  return (
    <>

      <button className='access-btn position-fixed access-btn-pc d-flex justify-content-center align-items-center'>
        <div className='position-absolute at-btn d-flex justify-content-center align-items-center'>
          <div className="b-text b-text-access">ACCESS WHITELIST</div>
          <div className='discord-icon px-2'>
            <i className="fa-brands fa-discord"></i>
          </div>
        </div>
        <svg className='position-absolute' width="281" height="73" viewBox="0 0 281 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_b_255_1210)">
            <path className="world-svg" d="M0 0H244L280.5 36.3214V72.6427L36.3214 72.6427L0 36.3213V0Z" fill="#07CE02" fill-opacity="0.26" />
          </g>
          <defs>
            <filter id="filter0_b_255_1210" x="-20" y="-20" width="320.5" height="112.643" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_255_1210" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_255_1210" result="shape" />
            </filter>
          </defs>
        </svg>
    
      </button>

      <div className="page-2">
        <div className="page2-comp1 d-flex flex-column align-items-center justify-content-evenly position-relative">
          <div className="box position-absolute">
          </div>
          <div className="shuffle-top container d-flex justify-content-center align-items-center">
            <div aria-label='3,314 unique digital collectibles.' className="shuffle-left animated-title px-5 col-6 d-flex justify-content-start align-items-center">
              3,314 unique digital <br /> collectibles.
            </div>
            <div className="shuffle-right p-5 d-flex justify-content-start align-items-start">
              <div className="shuffle-text1 pe-5 d-flex justify-content-center align-items-center">
                <div className="shuffle-sq p-1"></div>
                <div className='ps-3 animated-title'>NFT COLLECTION</div>
              </div>
              <div aria-label='Friends of the Future avatars living in the Ethereum blockchain will have a unique private room full of surprises for the community. This is family, and we love to say it since the creation: by community for community.' className="shuffle-text2 pe-5 animated-title">
                <span style={{ textDecoration: "underline" }}>Friends of the Future</span> <br /> avatars living in the Ethereum blockchain will have a unique private room full of surprises for the community. This is family, and we love to say it since the creation: by community for community.
              </div>
            </div>
          </div>
          <div className="shuffle-bottom position-relative d-flex flex-column justify-content-center align-items-center">

            <div className="layers position-absolute d-flex justify-content-center align-items-center">
              {
                animation.slice(0, 5).map((item, index) => (
                  <div key={index} style={{ animation: flag ? `${shuffle ? "layer" + item + "-anime 5s linear 0.7s infinite" : ""}` : `${shuffle ? "layer" + item + "-anime-mob 5s linear 0.7s infinite" : ""}` }} className={`layer-${item} position-absolute d-flex justify-content-between align-items-center`}>
                    <img style={{ animation: flag ? `${shuffle ? "layer" + item + "-img-anime 5s linear 0.7s infinite" : ""}` : `${shuffle ? "layer" + item + "-img-anime-mob 5s linear 0.7s infinite" : ""}` }} className={`lr${item}-img1`} src={`/${item}.png`} alt="" />
                    <img style={{ animation: flag ? `${shuffle ? "layer" + item + "-img-anime 5s linear 0.7s infinite" : ""}` : `${shuffle ? "layer" + item + "-img-anime-mob 5s linear 0.7s infinite" : ""}` }} className={`lr${item}-img2`} src={`/${item}-1.png`} alt="" />
                  </div>
                ))
              }
              {
                animation.slice(5, 9).map((item, index) => (
                  <div key={index} style={{ animation: flag ? `${shuffle ? "layer" + item + "-anime 5s linear 0.7s infinite" : ""}` : `${shuffle ? "layer" + item + "-anime-mob 5s linear 0.7s infinite" : ""}` }} className={`layer-${item} position-absolute d-flex justify-content-between align-items-center`}>
                    <img style={{ animation: flag ? `${shuffle ? "layer" + item + "-img-anime 5s linear 0.7s infinite" : ""}` : `${shuffle ? "layer" + item + "-img-anime-mob 5s linear 0.7s infinite" : ""}` }} className={`lr${item}-img1`} src={`/${4 - index}.png`} alt="" />
                    <img style={{ animation: flag ? `${shuffle ? "layer" + item + "-img-anime 5s linear 0.7s infinite" : ""}` : `${shuffle ? "layer" + item + "-img-anime-mob 5s linear 0.7s infinite" : ""}` }} className={`lr${item}-img2`} src={`/${4 - index}-1.png`} alt="" />
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
                      <img className='box2-img' src="/e4a9ff7d2fdaba15e53568f502a93fb3.jpeg" alt="" />
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

      <div className="page-3 overflow-hidden">
        <div className="page3-comp1 d-flex position-relative justify-content-between align-items-center">

          <div className="page3-left position-relative">
            <div className="chadi ">
              <img className='chadi-img' src="/chadi.png" alt="" />
            </div>
            <div className="stick position-absolute">
              <img className='stick-img' src="/staff.png" alt="" />
            </div>
          </div>

          <div className="page3-right pt-5 d-flex flex-column justify-content-start ">

            <div className="crystal-top pt-5 pe-5 d-flex justify-content-evenly align-items-center">
              <div className="crystal-text d-flex ps-5">
                <div className='img-sq mx-2'></div>
                <div className='serum'>SERUM</div>
              </div>
              <div className="sound pe-5">
                <img className='sound-img' src="/world.png" alt="" />
              </div>
            </div>

            <div className="crystal-bottom pb-5 d-flex justify-content-evenly align-items-center">
              <div className="crystal d-flex justify-content-center">
                <video loop autoPlay muted className='crystal-img pe-2' src="/stone.mp4"></video>
              </div>
              <div className="world d-flex align-items-start">
                <img className='world-img ps-2' src="/wave.png" alt="" />
              </div>
            </div>

            <div aria-label='There is a 4th role called the
              Legendaries: only for 20 people, who
              get a serum with it that get a mejastic
              clothing onboard from the origins of FoF:' className="crstal-text animated-title px-5 m-5 d-flex justify-content-center align-items-start">
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

        <div style={{ height: "100vh" }} className="page3-comp2"> </div>

        <div className="page3-comp3 position-relative d-flex flex-column position-relative">
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
              <img className='recurso-img' src="/recurso.png" alt="" />
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
              <img className='perks-img' src="/spartacus.png" alt="" />
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
              <div aria-label='kick off' className="road-top text-center animated-title mt-5">kick off</div>
              <div aria-label='We launch the Friends of the Future website and social media' className="road-bottom text-center animated-title">We launch the Friends of the Future website and social media</div>
              <div className="sq-1 sq position-absolute"></div>
              {/* <div className="stop-pro position-absolute"></div> */}
            </div>
            <div className="road-2 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div aria-label='normies reveal' className="road-top text-center animated-title">normies reveal</div>
              <div aria-label='We reveal Normies perks' className="road-bottom text-center animated-title mb-5">We reveal Normies perks</div>
              <div className="sq-2 sq position-absolute"></div>
            </div>
            <div className="road-3 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div aria-label='goldies reveal' className="road-top text-center mt-5 animated-title">goldies reveal</div>
              <div aria-label='We reveal Goldies perks' className="road-bottom text-center animated-title">We reveal Goldies perks</div>
              <div className="sq-3 sq position-absolute"></div>
            </div>
            <div className="road-4 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div aria-label='goldies reveal' className="road-top text-center animated-title">goldies reveal</div>
              <div aria-label='We reveal Platinum perks' className="road-bottom text-center animated-title mb-5">We reveal Platinum perks</div>
              <div className="sq-4 sq position-absolute"></div>
            </div>
            <div className="road-5 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div aria-label='legendaries reveal' className="road-top text-center mt-5 animated-title">legendaries reveal</div>
              <div aria-label='We reveal Legendaries perks' className="road-bottom text-center animated-title">We reveal Legendaries perks</div>
              <div className="sq-5 sq position-absolute"></div>
            </div>
            <div className="road-6 rd col-2 p-5 d-flex flex-column position-relative justify-content-center align-items-center">
              <div aria-label='Minting time' className="road-top text-center animated-title">Minting time</div>
              <div aria-label='in favouritism for avatars' className="road-bottom text-center mb-5 animated-title">in favouritism for avatars</div>
              <div className="sq-6 sq position-absolute"></div>
            </div>
          </div>
        </div>
      </div>


      <div className="page-4 d-flex flex-column">
        <div className="thanks d-flex flex-column justify-content-evenly align-items-center">
          <div className="thanks-top text-center">
            Thank you Friends Of <br /> The Future!
          </div>
          <div className="thanks-bottom d-flex justify-content-center align-items-center">
            <div className="snake-1">
              <img className='snake1-img' src="/IMG-20240130-WA0120.png" alt="" />
            </div>
            <div className="snake-2">
              <img className='snake2-img' src="/snake-2.png" alt="" />
            </div>
          </div>
        </div>

        <div className='char-1 char position-fixed d-flex justify-content-center align-items-center'>F</div>
        <div className='char-2 char position-fixed d-flex justify-content-center align-items-center'>O</div>
        <div className='char-3 char position-fixed d-flex justify-content-center align-items-center'>T</div>
        <div className='char-4 char position-fixed d-flex justify-content-center align-items-center'>F</div>

        <div className="kala-fotf position-fixed d-flex justify-content-center align-items-center">
          <div className="kala-gola"></div>
          <div className="fotf-images position-absolute d-flex flex-column justify-content-center align-items-center">
            <div style={{ animation: flag4 ? "slide-top 8s linear 0.7s infinite" : "" }} className="fotf-top-img d-flex align-items-start">
              <img className='fotf-img' src="/ALIENS0152.jpg" alt="" />
              <img className='fotf-img' src="/ELFOS1753.jpg" alt="" />
              <img className='fotf-img' src="/HUMANOS0080.jpg" alt="" />
              <img className='fotf-img' src="/ALIENS0153.jpg" alt="" />
              <img className='fotf-img' src="/ELFOS1754.jpg" alt="" />
              <img className='fotf-img' src="/HUMANOS0081.jpg" alt="" />
              <img className='fotf-img' src="/ALIENS0154.jpg" alt="" />
              <img className='fotf-img' src="/ELFOS1755.jpg" alt="" />
              <img className='fotf-img' src="/HUMANOS0082.jpg" alt="" />
              <img className='fotf-img' src="/ALIENS0155.jpg" alt="" />
              <img className='fotf-img' src="/ELFOS1756.jpg" alt="" />
              <img className='fotf-img' src="/HUMANOS0083.jpg" alt="" />
            </div>
            <div style={{ animation: flag4 ? "slide-bottom 8s linear 0.7s infinite" : "" }} className="fotf-bottom-img d-flex align-items-end">
              <img className='fotf-img' src="/ALIENS0156.jpg" alt="" />
              <img className='fotf-img' src="/ELFOS1757.jpg" alt="" />
              <img className='fotf-img' src="/HUMANOS0093.jpg" alt="" />
              <img className='fotf-img' src="/ALIENS0157.jpg" alt="" />
              <img className='fotf-img' src="/ELFOS1758.jpg" alt="" />
              <img className='fotf-img' src="/HUMANOS0094.jpg" alt="" />
              <img className='fotf-img' src="/ALIENS0158.jpg" alt="" />
              <img className='fotf-img' src="/ELFOS1759.jpg" alt="" />
              <img className='fotf-img' src="/HUMANOS0095.jpg" alt="" />
              <img className='fotf-img' src="/ALIENS0159.jpg" alt="" />
              <img className='fotf-img' src="/ELFOS1766.jpg" alt="" />
              <img className='fotf-img' src="/HUMANOS0096.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className='fotf'>
        </div>

        <div className="footer px-5 d-flex justify-content-between align-items-center">
          <div className="ft-left d-flex">
            <div className="privacy d-flex d-flex justify-content-center align-items-center">
              <div className="f-sq"></div>
              <Link target='blank' className="privacy-text f-text" to="/privacy">Privacy Policy</Link>
            </div>
            <div className="term d-flex px-5 d-flex justify-content-center align-items-center">
              <div className="f-sq"></div>
              <Link target='blank' className="terms-text f-text" to="/terms" >Terms of use</Link>
            </div>
            <div className="legal d-flex d-flex justify-content-center align-items-center">
              <div className="f-sq"></div>
              <Link target='blank' className="legal-text f-text" to="/legal" >Legal liscence</Link>
            </div>
          </div>

          <div className="ft-right px-2 d-flex justify-content-center align-items-center">
            <div className="d-logo f-logo mx-2 d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-discord"></i>
            </div>
            <div className="d-logo f-logo mx-2 d-flex justify-content-center align-items-center">
              <svg className='twitter' width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.18935 4.88256H5.63116L12.8035 15.1419H14.3617L7.18935 4.88256Z" fill="#07CE02" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10C20 15.5227 15.5227 20 10 20C4.47734 20 0 15.5227 0 10ZM15.3757 4.11886L11.0948 9.09503L15.7505 15.8709H12.3263L9.19098 11.308L5.26563 15.8709H4.25114L8.74058 10.6526L4.25114 4.11886H7.67533L10.6441 8.43961L14.3612 4.11886H15.3757Z" fill="#07CE02" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div id='#layout' className="layout d-flex justify-content-center align-items-center">
        {bgUrl}
      </div>

    </>
  )
}
