import React, { useEffect, useState } from 'react'
import "../css/page4.css"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger)

export default function Page4({ scale }) {

    const [flag, setFlag] = useState(false)

    gsap.config({
        force3D: true
    })

    // --------------naagin animation------------------ 

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
        tl.to(".char", {
            fontSize: 100,
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
            start: "top 70%",
            end: "top 70%",
            onEnter: () => {
                tl.play()
            },
            onLeaveBack: () => {
                tl.reverse()
            }
        })

    })

    // -----------------------------fotf last Animation----------------- 

    useEffect(() => {

        const tl1 = gsap.timeline({
            paused: true
        })

        ScrollTrigger.create({
            trigger: ".fotf",
            start: "top center",
            end: "top center",
            scrub: 1,
            onEnter: () => {
                tl1.play()
                setFlag(true)
            },
            onLeaveBack: () => {
                tl1.reverse()
                setFlag(false)
            }
        })

        tl1.to(".char-1", {
            y:"30vh",
            x:"-30vw"
        });

        tl1.to(".char-2", {
            y:"10vh",
            x:"-10vw"
        }, 0);


        tl1.to(".char-3", {
            y:"-10vh",
            x:"10vw"
        }, 0)

        tl1.to(".char-4", {
            y:"-30vh",
            x:"30vw"
        }, 0)

        tl1.to(".fotf-bg", {
            y: 0
        }, 0)

    }, []);

    return (
        <>
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
                    <div className="fotf-bg position-absolute d-flex flex-column">
                        <div className="fotf-images d-flex flex-column justify-content-evenly align-items-center">
                            <div style={{ animation: flag ? "slide-top 8s linear infinite" : "" }} className="fotf-top-img d-flex align-items-start">
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
                            <div style={{ animation: flag ? "slide-bottom 8s linear infinite" : "" }} className="fotf-bottom-img d-flex align-items-end">
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
                </div>

                <div className='fotf'>
                </div>

                <div className="footer px-5 d-flex justify-content-between align-items-center">
                    <div className="ft-left d-flex">
                        <div className="privacy d-flex d-flex justify-content-center align-items-center">
                            <div className="f-sq"></div>
                            <Link className="privacy-text f-text" to="/privacy">Privacy Policy</Link>
                        </div>
                        <div className="term d-flex px-5 d-flex justify-content-center align-items-center">
                            <div className="f-sq"></div>
                            <Link className="terms-text f-text" to="/terms" >Terms of use</Link>
                        </div>
                        <div className="legal d-flex d-flex justify-content-center align-items-center">
                            <div className="f-sq"></div>
                            <Link className="legal-text f-text" to="/legal" >Legal liscence</Link>
                        </div>
                    </div>

                    <div className="ft-right d-flex justify-content-center align-items-center">
                        <div className="d-logo pe-2 f-logo">
                            <i className="fa-brands fa-discord"></i>
                        </div>
                        <div className="d-logo f-logo">
                            <i className="fa-brands fa-discord"></i>
                        </div>
                        <div className="t-logo f-logo">
                            <i className="fa-brands fa-x-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}