import React, { useEffect, useState } from 'react'
import "../css/page4.css"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger)

export default function Page4({scale}) {

    const [flag , setFlag] = useState(false)

    gsap.config({
        force3D: true
      })

    // --------------naagin animation------------------ 

    useEffect(() => {

        gsap.to(".snake-1", {
            scrollTrigger: {
                trigger: ".fotf",
                start: "top 90%",
                end: "+=25px",
                scrub: 1
            },
            x: 110,
            rotateY: "360deg",
            opacity: 0,
            duration: 1
        })

        gsap.to(".snake-2", {
            scrollTrigger: {
                trigger: ".fotf",
                start: "top 90%",
                end: "+=25px",
                scrub: 1
            },
            x: -110,
            rotateY: "360deg",
            opacity: 0,
            duration: 1
        })

        gsap.to(".kaali-naagin", {
            scrollTrigger: {
                trigger: ".fotf",
                start: "top 90%",
                end: "+=25px",
                scrub: 1
            },
            backgroundColor: "black",
            duration: 1
        })

    }, [])

    // -----------------------------fotf last Animation----------------- 

    useEffect(() => {

        const tl1 = gsap.timeline()

        tl1.to(".char-1",
            {
                scrollTrigger: {
                    trigger: ".fotf",
                    start: "top 1%",
                    end: "top 1%",
                    scrub: 1,
                },
                left: "20%",
            });

        tl1.to(".char-1",
            {
                scrollTrigger: {
                    trigger: ".fotf",
                    start: "top 1%",
                    end: "top 1%",
                    scrub: 1,
                },
                top: "50%",
            }, 0);

        tl1.to(".char-2",
            {
                scrollTrigger: {
                    trigger: ".fotf",
                    start: "top 1%",
                    end: "top 1%",
                    scrub: 1,
                },
                left: "40%",
            }, 0);

        tl1.to(".char-2",
            {
                scrollTrigger: {
                    trigger: ".fotf",
                    start: "top 1%",
                    end: "top 1%",
                    scrub: 1,
                },
                top: "50%",
            }, 0);

        tl1.to(".char-3",
            {
                scrollTrigger: {
                    trigger: ".fotf",
                    start: "top 1%",
                    end: "top 1%",
                    scrub: 1,
                },
                left: "60%",
            }, 0)

        tl1.to(".char-3",
            {
                scrollTrigger: {
                    trigger: ".fotf",
                    start: "top 1%",
                    end: "top 1%",
                    scrub: 1,
                },
                top: "50%",
            }, 0)

        tl1.to(".char-4",
            {
                scrollTrigger: {
                    trigger: ".fotf",
                    start: "top 1%",
                    end: "top 1%",
                    scrub: 1,
                },
                left: "80%",
            }, 0)

        tl1.to(".char-4",
            {
                scrollTrigger: {
                    trigger: ".fotf",
                    start: "top 1%",
                    end: "top 1%",
                    scrub: 1,
                },
                top: "50%",
            }, 0)

    }, []);

        // --------------------setting state of flag--------------------- 

        useEffect(()=>{
           ScrollTrigger.create({
            trigger:".thanks",
            start:"top top",
            end:"bottom top",
            onLeave:()=>{
                setFlag(true)
            },
            onEnterBack:()=>{
                setFlag(false)
            }
           })
        },[])


    return (
        <>
            <div className="page-4 d-flex flex-column">
                <div className="thanks d-flex flex-column justify-content-evenly align-items-center">
                    <div className="thanks-top text-center">
                        Thank you Friends Of <br /> The Future!
                    </div>
                    <div className="thanks-bottom d-flex justify-content-center align-items-center position-relative">
                        <div className="snake-1">
                            <img loading="lazy" className='snake1-img' src="/IMG-20240130-WA0120.png" alt="" />
                        </div>
                        <div className="snake-2">
                            <img loading="lazy" className='snake2-img' src="/IMG-20240130-WA0124.png" alt="" />
                        </div>
                        <div className="kaali-naagin position-absolute d-flex justify-content-center align-items-center">
                            fotf
                        </div>
                    </div>
                </div>

                <div className='fotf position-relative d-flex flex-column justify-content-center align-items-center'>
                    <div className='char-1 char position-absolute d-flex justify-content-center align-items-center'>F</div>
                    <div className='char-2 char position-absolute d-flex justify-content-center align-items-center'>O</div>
                    <div className='char-3 char position-absolute d-flex justify-content-center align-items-center'>T</div>
                    <div className='char-4 char position-absolute d-flex justify-content-center align-items-center'>F</div>
                    <div className="fotf-bg position-absolute d-flex flex-column">
                        <div className="fotf-images d-flex flex-column justify-content-evenly align-items-center">
                            <div style={{animation:flag?"slide-top 8s linear infinite":"" }} className="fotf-top-img d-flex align-items-start">
                                <img loading="lazy" className='fotf-img' src="/ALIENS0152.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ELFOS1753.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/HUMANOS0080.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ALIENS0153.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ELFOS1754.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/HUMANOS0081.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ALIENS0154.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ELFOS1755.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/HUMANOS0082.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ALIENS0155.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ELFOS1756.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/HUMANOS0083.jpg" alt="" />
                            </div>
                            <div style={{animation:flag?"slide-bottom 8s linear infinite":"" }} className="fotf-bottom-img d-flex align-items-end">
                                <img loading="lazy" className='fotf-img' src="/ALIENS0156.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ELFOS1757.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/HUMANOS0093.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ALIENS0157.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ELFOS1758.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/HUMANOS0094.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ALIENS0158.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ELFOS1759.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/HUMANOS0095.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ALIENS0159.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/ELFOS1766.jpg" alt="" />
                                <img loading="lazy" className='fotf-img' src="/HUMANOS0096.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer px-5 d-flex justify-content-between align-items-center">
                    <div className="ft-left d-flex">
                        <div className="privacy d-flex d-flex justify-content-center align-items-center">
                            <div className="f-sq"></div>
                            {/* <Link className="privacy-text f-text" to="/privacy">Privacy Policy</Link> */}
                            <div className='f-text'>Privacy Policy</div>
                        </div>
                        <div className="term d-flex px-5 d-flex justify-content-center align-items-center">
                            <div className="f-sq"></div>
                            {/* <Link className="terms-text f-text" to="/terms" >Terms of use</Link> */}
                            <div className='f-text'>Terms of use</div>
                        </div>
                        <div className="legal d-flex d-flex justify-content-center align-items-center">
                            <div className="f-sq"></div>
                            {/* <Link className="legal-text f-text" to="/legal" >Legal liscence</Link> */}
                            <div className='f-text'>Legal liscence</div>
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