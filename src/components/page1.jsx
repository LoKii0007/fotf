import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/page1.css"
import "../css/loading.css"


export default function Page1({ scale }) {

    gsap.registerPlugin(ScrollTrigger)

    // ----------comp1 animations--------

    useEffect(() => {
        gsap.to(".page1-bg", {
            scrollTrigger: {
                trigger: ".page1-comp2",
                start: "top bottom",
                end: "top top",
                scrub: 0.5
            },
            transformOrigin: "left bottom",
            transform: `${scale ? "scale(0.7)" : "scale(1)"}`,
            left: "0%"
        })

        gsap.to(".page1-bg2", {
            scrollTrigger: {
                trigger: ".page1-comp2",
                start: "top bottom",
                end: "top top",
                scrub: 0.5
            },
            left: "-1000px",
            top: "-500px",
            opacity: 0
        })
        gsap.to(".page1-front", {
            scrollTrigger: {
                trigger: ".page1-comp2",
                start: "top bottom",
                end: "top top",
                scrub: 1
            },
            x: "-100vw",
            position: "fixed"
        })
    }, [])


    //----------comp2-animations ----------

    useEffect(() => {

        const tl = gsap.timeline({
            paused: true
        })
        tl.to(".page1-bg", {
            x: "-25vw",
            opacity: 0,
            duration: 1
        })
        ScrollTrigger.create({
            trigger: ".page1-comp2",
            start: "top top",
            end: "top -100%",
            scrub: .5,
            onEnter: () => {
                tl.play()
            },
            onLeaveBack: () => {
                tl.reverse()
            }
        })
    }, [])

    // -------- comp3-animations-----------------

    useEffect(() => {
        if (scale) {
            gsap.to(".web-1", {
                scrollTrigger: {
                    trigger: ".webkit-1",
                    start: "top 80%",
                    end: "top 60%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-2", {
                scrollTrigger: {
                    trigger: ".webkit-1",
                    start: "top 60%%",
                    end: "top 40%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-3", {
                scrollTrigger: {
                    trigger: ".webkit-1",
                    start: "top 40%",
                    end: "top 20%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-4", {
                scrollTrigger: {
                    trigger: ".webkit-1",
                    start: "top 20%",
                    end: "top top",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
        } else {
            gsap.to(".web-mob-1", {
                scrollTrigger: {
                    trigger: ".webkit-mob-1",
                    start: "top 60%",
                    end: "top 50%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-mob-2", {
                scrollTrigger: {
                    trigger: ".webkit-mob-2",
                    start: "top 60%",
                    end: "top 50%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-mob-3", {
                scrollTrigger: {
                    trigger: ".webkit-mob-3",
                    start: "top 60%",
                    end: "top 50%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-mob-4", {
                scrollTrigger: {
                    trigger: ".webkit-mob-4",
                    start: "top 60%",
                    end: "top 50%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-mob-5", {
                scrollTrigger: {
                    trigger: ".webkit-mob-5",
                    start: "top 60%",
                    end: "top 50%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-mob-6", {
                scrollTrigger: {
                    trigger: ".webkit-mob-6",
                    start: "top 60%",
                    end: "top 50%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-mob-7", {
                scrollTrigger: {
                    trigger: ".webkit-mob-7",
                    start: "top 60%",
                    end: "top 50%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-mob-8", {
                scrollTrigger: {
                    trigger: ".webkit-mob-8",
                    start: "top 60%",
                    end: "top 50%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
            gsap.to(".web-mob-9", {
                scrollTrigger: {
                    trigger: ".webkit-mob-9",
                    start: "top 60%",
                    end: "top 50%",
                    scrub: 1,
                },
                width: "100%",
                transition: "all .5s linear"
            })
        }

    }, [scale])

    // ------------------------on load animation--------------------------------

    useEffect(() => {

        const tl = gsap.timeline({
          paused: true,
          onComplete:()=>{
            document.body.style.overflow = "auto"
          },
          onStart:()=>{
            document.body.style.overflow = "hidden"
          }
        })
    
        // -------------------loading 1-----------------
    
        tl.to(".loading-1", {
          opacity: 0,
          duration: 0.5,
          transition: "1s ease-in"
        }, 3)
    
    
        // -----------------------loading 2------------------
    
        tl.to(".outer-89", {
          duration: 0.5,
          opacity: 1
        }, 2)
        tl.to(".outer-89", {
          height: 300,
          width: 300,
          borderRadius: 150,
          duration: 0.7
        }, 2.5)
        tl.to(".gradient-svg", {
          height: 270,
          width: 270,
          borderRadius: 135,
          duration: 0.7
        }, 2.5)
    
    
        // -----------------------loading 3------------------
    
        tl.to(".text-89", {
          duration: 0.5,
          opacity: 0
        }, 4)
        tl.to(".text-100", {
          duration: 0.5,
          opacity: 1
        }, 4)
        tl.to(".outer-89", {
          height: 400,
          width: 400,
          borderRadius: 200,
          duration: 0.7
        }, 4)
        tl.to(".gradient-svg", {
          height: 350,
          width: 350,
          duration: 0.7
        }, 4)
    
    
        // -----------------------loading 4------------------
    
        tl.to(".loading", {
          scale: "5",
          duration: 1.5,
          opacity: 0
        }, 5.5)

        tl.to(".load-left", {
            x: "-50vw",
            duration: 0.8,
            ease: "circ.in",
            zIndex: "0"
        }, 5.5)
        tl.to(".load-right", {
            x: "50vw",
            duration: 0.8,
            ease: "circ.in",
            zIndex: "0"
        }, 5.5)

        tl.to(".webkit-the, .page1-line3", {
            x: 0,
            duration: 1
        }, 5.5)

        tl.to(".alien1-img", {
            duration: 1,
            right: "0%"
        }, 5.5)
    
        const video = document.querySelector('.loading-vid');
    
        window.addEventListener("load", function(){
          video.play()
          tl.play()
        })
    
      }, [])

    return (
        <>
            {/* <div id='preloader' className="loading position-fixed d-flex flex-column justify-content-center align-items-center">
                <div className='loading-video position-fixed d-flex justify-content-center align-items-center'>
                    <video className='loading-vid' muted src="/loading-vid.mp4"></video>
                </div>
                <div className="loading-1 d-flex justify-content-center align-items-center">
                    <div className="time-15-left d-flex justify-content-center align-items-center">
                        <div className="line-15">
                            <svg width="422" height="1" viewBox="0 0 422 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="422" y1="0.5" y2="0.5" stroke="url(#paint0_linear_255_3622)" />
                                <defs>
                                    <linearGradient id="paint0_linear_255_3622" x1="0" y1="0" x2="422" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#07CE02" stop-opacity="0" />
                                        <stop offset="0.525" stop-color="#07CE02" />
                                        <stop offset="1" stop-color="#07CE02" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="time-15-middle mx-5 d-flex justify-content-center align-items-center">
                        <div className="circle-15 d-flex justify-content-center align-items-center">15 </div>
                    </div>
                    <div className="time-15-right d-flex justify-content-center align-items-center">
                        <div className="line-15">
                            <svg width="422" height="1" viewBox="0 0 422 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="422" y1="0.5" y2="0.5" stroke="url(#paint0_linear_255_3622)" />
                                <defs>
                                    <linearGradient id="paint0_linear_255_3622" x1="0" y1="0" x2="422" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#07CE02" stop-opacity="0" />
                                        <stop offset="0.525" stop-color="#07CE02" />
                                        <stop offset="1" stop-color="#07CE02" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="loading-2 position-absolute d-flex justify-content-center align-items-center">
                    <div className="outer-89 position-relative d-flex justify-content-center align-items-center">
                        <div className="position-absolute tedi-line-89">
                            <svg width="132" height="206" viewBox="0 0 132 206" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128.301 0.810001C129.283 1.42438 130.261 2.04581 131.235 2.67424L0 206L128.301 0.810001Z" fill="url(#paint0_radial_255_3680)" />
                                <defs>
                                    <radialGradient id="paint0_radial_255_3680" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 206) rotate(90) scale(242)">
                                        <stop stop-color="#07CE02" stop-opacity="0" />
                                        <stop offset="0.64" stop-color="#07CE02" />
                                        <stop offset="1" stop-color="#07CE02" stop-opacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="inner-89 d-flex justify-content-center align-items-center">
                            <div className='position-absolute'>
                                <svg className='gradient-svg' viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M268.21 105.965C275.389 137.567 271.012 170.695 255.87 199.346C240.729 227.998 215.825 250.279 185.672 262.152C155.518 274.025 122.109 274.704 91.498 264.067C60.8867 253.429 35.0982 232.179 18.8047 204.166C2.51121 176.153 -3.20939 143.231 2.67937 111.364C8.56812 79.4965 25.6767 50.7926 50.9053 30.4527C76.1339 10.1127 107.814 -0.517856 140.205 0.487103C172.596 1.49206 203.556 14.066 227.475 35.9309L136 136L268.21 105.965Z" fill="url(#paint0_radial_255_3681)" />
                                    <defs>
                                        <radialGradient id="paint0_radial_255_3681" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(136 136) rotate(77.2009) scale(135.578)">
                                            <stop offset="0.765" stop-color="#07CE02" stop-opacity="0" />
                                            <stop offset="0.885" stop-color="#07CE02" />
                                            <stop offset="1" stop-color="#07CE02" stop-opacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='loading-text position-relative d-flex justify-content-center align-items-center'>
                                <div className='text-89'>89</div>
                                <div className='position-absolute text-100'>100</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="load-left position-fixed"></div>
            <div className="load-right position-fixed"></div> */}
            <div className="page1-bg2 position-fixed">
                <img className='moving-bg' src="/moving-bg.png" alt="" />
            </div>
            <div className="page1 container d-flex flex-column align-items-center justify-content-center">
                <div className="page1-comp1 container position-relative">
                    <div className="page1-bg position-fixed">
                        <img className='alien1-img' src="/alien1.png" alt="" />
                    </div>
                    <div className="page1-bg3 position-fixed">
                        {/* <img  className='moving-bg' src="/moving-bg2.svg" alt="" /> */}
                    </div>
                    <div className="page1-front pt-5 d-flex flex-column justify-content-center align-items-start">
                        <div className='whitelist-btn py-3 d-flex justify-content-center align-items-center'>
                            <button style={{ backgroundImage: "url(world.svg)" }} className='access-btn p-4 d-flex'>
                                <div className="b-text">ACCESS WHITELIST</div>
                                <div className='discord-icon  px-2'>
                                    <i className="fa-brands fa-discord"></i>
                                </div>
                            </button>
                        </div>
                        <div className="page1-lines d-flex flex-column justify-content-center align-items-center">
                            <div className="page1-line1 comp1-line ps-5">FRIENDS</div>
                            <div className="page1-line2 comp1-line d-flex">
                                <div className='webkit-of'>OF</div>
                                <div className='webkit-the'>THE</div>
                            </div>
                            <div className="page1-line3 comp1-line ps-5">FUTURE</div>
                        </div>
                        <div className="join-btns ps-5 d-flex align-items-center justify-content-center">
                            <button style={{ backgroundImage: "url(discord.svg)" }} className='discord p-4 d-flex'>
                                <div className="b-text">JOIN OUR DISCORD</div>
                                <div className='discord-icon px-2'>
                                    <i className="fa-brands fa-discord"></i>
                                </div>
                            </button>
                            <div className="tedi-line">
                                <svg width="57" height="107" viewBox="0 0 57 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_bd_51_73)">
                                        <path d="M6.80564 0L6.80545 58.5L52.3055 103.5" stroke="#07CE02" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_bd_51_73" x="-13.6943" y="-20" width="86.3516" height="143.856" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_51_73" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="3" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.61 0" />
                                            <feBlend mode="normal" in2="effect1_backgroundBlur_51_73" result="effect2_dropShadow_51_73" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_51_73" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <button style={{ backgroundImage: "url(world.svg)" }} className='world-btn p-4 d-flex'>
                                <div className="b-text">ENTER WL</div>
                                <div className='discord-icon  px-2'>
                                    <i className="fa-brands fa-discord"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div id='page1-comp2' className="page1-comp2 container d-flex flex-column justify-content-evenly align-items-end">
                    <div className="comp2-top p-5 position-relative d-flex flex-column justify-content-center align-items-center">
                        <div className="comp2-head pb-3">
                            FRIENDS OF THE FUTURE 01
                        </div>
                        <div className="comp2-text px-5 position-relative d-flex justify-content-center align-items-center">
                            <div className='scrollable'>
                                This project tells the story of 4 friends that come together thanks to web 3.
                                Four friends that build their friendship thanks to becoming holders of the Utopia Avatars collection, and make his way to get this resources to create the future of web 3 vision under one slogan: created by community for community. <br /> <br />
                                Friends of the Future stands on the values of transparency, friendship and love for the technology; we love the internet and we build on it, this is just the beginning of a brilliant future together.
                            </div>
                            <div className="message position-absolute">
                                <svg width="114" height="96" viewBox="0 0 114 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M55.7528 73.7158L32.4688 93.8157V74.4727V73.4727H31.4688H1V1H113V73.4727H56.4062H56.0343L55.7528 73.7158Z" stroke="#07CE02" strokeWidth="2" />
                                    <circle className='mc-1' cx="28" cy="33" r="12" fill="#07CE02" />
                                    <circle className='mc-2' cx="56" cy="33" r="12" fill="#07CE02" />
                                    <circle className='mc-3' cx="84" cy="33" r="12" fill="#07CE02" />
                                </svg>
                            </div>

                        </div>
                        <div className="comp2-text-bg position-absolute">
                            {scale ?
                                <svg viewBox="0 0 925 526" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_255_1308)">
                                        <path d="M912.854 180.456V36.7161L887.064 11H550M183.28 11H37.9292L12.1461 36.7161V374.816M890.857 40.4994L872.66 22.3426M872.66 22.3426H774.271M872.66 22.3426H592M880.239 469.07L859.387 489.868H604.203M879.738 488.739L911.585 456.968L912.287 201.072M907.545 474.865L882.77 499.575H741.713M34.1359 40.4994L52.34 22.3426M52.34 22.3426H215.38M52.34 22.3426H286M44.7538 484.495L65.6052 505.292H320.797M45.2614 504.164L13.4078 472.393L12.6462 394.991M17.455 490.289L42.2227 515H183.28M914 183.523H911.237V186.28H914V183.523ZM914 188.884H911.237V191.64H914V188.884ZM914 194.244H911.237V197H914V194.244ZM893.388 308.476H890.356V311.5H893.388V308.476ZM893.388 314.357H890.356V317.381H893.388V314.357ZM893.388 320.246H890.356V323.269H893.388V320.246ZM11 380.64H13.7633V377.883H11V380.64ZM11 386H13.7633V383.244H11V386ZM11 391.36H13.7633V388.604H11V391.36ZM31.6047 449.262H34.6364V446.238H31.6047V449.262ZM31.6047 455.143H34.6364V452.119H31.6047V455.143ZM31.6047 461.024H34.6364V458H31.6047V461.024Z" stroke="#07CE02" strokeOpacity="0.22" strokeWidth="2" strokeMiterlimit="10" shapeRendering="crispEdges" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_255_1308" x="0" y="0" width="925" height="526" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_255_1308" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_255_1308" result="shape" />
                                        </filter>
                                    </defs>
                                </svg> :
                                <svg width="335" height="435" viewBox="0 0 335 435" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_315_1920)">
                                        <path d="M322.117 118.677V36.7162L296.326 11L185.593 11M65.6051 11.0001H37.9288L12.1458 36.7162L12.1459 283.571M300.12 40.4994L281.923 22.3426L227.593 22.3426M289.502 377.825L268.65 398.622H185.593M289.001 397.493L320.848 365.723L321.55 139.293M316.808 383.619L292.033 408.33H227.593M34.1356 40.4995L52.3398 22.3426H106M44.7537 393.249L65.6052 414.047H119M45.2613 412.918L13.4076 381.147L12.646 303.746M17.4547 399.044L42.2226 423.754H87.7799M323.263 121.744H320.499V124.5H323.263V121.744ZM323.263 127.104H320.499V129.86H323.263V127.104ZM323.263 132.464H320.499V135.22H323.263V132.464ZM302.651 217.231H299.619V220.254H302.651V217.231ZM302.651 223.112H299.619V226.135H302.651V223.112ZM302.651 229H299.619V232.024H302.651V229ZM10.9998 289.394H13.7631V286.638H10.9998V289.394ZM10.9998 294.754H13.7631V291.998H10.9998V294.754ZM10.9998 300.114H13.7631V297.358H10.9998V300.114ZM31.6045 358.016H34.6361V354.992H31.6045V358.016ZM31.6045 363.897H34.6361V360.873H31.6045V363.897ZM31.6045 369.778H34.6361V366.754H31.6045V369.778Z" stroke="#07CE02" strokeOpacity="0.22" strokeWidth="2" strokeMiterlimit="10" shapeRendering="crispEdges" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_315_1920" x="0" y="0" width="334.263" height="434.754" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_315_1920" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_315_1920" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            }

                        </div>
                    </div>

                    <div className="comp2-bottom d-flex flex-column align-items-end">
                        <div className="community-top">
                            BY COMMUNITY
                        </div>
                        <div className="community-bottom">
                            FOR COMMUNITY
                        </div>
                    </div>

                </div>

                {scale ? <div className="page1-comp3 d-flex flex-column justify-content-center align-items-center">
                    <div className="sudo-1 position-relative">
                        <div className='webkit-1 text-center'>we are not here</div>
                        <div className='web-1 text-center position-absolute'>we are not here</div>
                    </div>
                    <div className="sudo-2 position-relative">
                        <div className='webkit-2 text-center'>to take part, we</div>
                        <div className='web-2 text-center position-absolute'>to take part, we</div>
                    </div>
                    <div className="sudo-3 position-relative">
                        <div className='webkit-3 text-center'>are here to</div>
                        <div className='web-3 text-center position-absolute'>are here to</div>
                    </div>
                    <div className="sudo-4 position-relative">
                        <div className='webkit-4 text-center'>take over.</div>
                        <div className='web-4 text-center position-absolute'>take over.</div>
                    </div>
                </div> :

                    <div className="page1-comp4 d-flex flex-column justify-content-center align-items-center">
                        <div className="sudo-mob-1 position-relative">
                            <div className='webkit-mob-1 text-center'>we are</div>
                            <div className='web-mob-1 mob text-center position-absolute'>we are</div>
                        </div>
                        <div className="sudo-mob-2 position-relative">
                            <div className='webkit-mob-2 text-center'>not</div>
                            <div className='web-mob-2 mob text-center position-absolute'>not</div>
                        </div>
                        <div className="sudo-mob-3 position-relative">
                            <div className='webkit-mob-3 text-center'>here to</div>
                            <div className='web-mob-3 mob text-center position-absolute'>here to</div>
                        </div>
                        <div className="sudo-mob-4 position-relative">
                            <div className='webkit-mob-4 text-center'>take</div>
                            <div className='web-mob-4 mob text-center position-absolute'>take</div>
                        </div>
                        <div className="sudo-mob-5 position-relative">
                            <div className='webkit-mob-5 text-center'>part, we</div>
                            <div className='web-mob-5 mob text-center position-absolute'>part, we</div>
                        </div>
                        <div className="sudo-mob-6 position-relative">
                            <div className='webkit-mob-6 text-center'>are</div>
                            <div className='web-mob-6 mob text-center position-absolute'>are</div>
                        </div>
                        <div className="sudo-mob-7 position-relative">
                            <div className='webkit-mob-7 text-center'>here to</div>
                            <div className='web-mob-7 mob text-center position-absolute'>here to</div>
                        </div>
                        <div className="sudo-mob-8 position-relative">
                            <div className='webkit-mob-8 text-center'>take</div>
                            <div className='web-mob-8 mob text-center position-absolute'>take over.</div>
                        </div>
                        <div className="sudo-mob-9 position-relative">
                            <div className='webkit-mob-9 text-center'>over.</div>
                            <div className='web-mob-9 mob text-center position-absolute'>over.</div>
                        </div>
                    </div>}
            </div>
        </>
    )
}
