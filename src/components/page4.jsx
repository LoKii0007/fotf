import React, { useEffect, useRef } from 'react'
import "../css/page4.css"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from 'gsap/all';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Observer)

export default function Page4() {

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
                top: "40%",
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
                top: "40%",
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
                top: "40%",
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
                top: "40%",
            }, 0)

    }, []);

    return (
        <>
            <div className="page-4">
                <div className="thanks d-flex flex-column justify-content-evenly align-items-center">
                    <div className="thanks-top text-center">
                        Thank you Friends Of <br /> The Future!
                    </div>
                    <div className="thanks-bottom d-flex justify-content-center align-items-center position-relative">
                        <div className="snake-1">
                            <img className='snake1-img' src="/IMG-20240130-WA0120.png" alt="" />
                        </div>
                        <div className="snake-2">
                            <img className='snake2-img' src="/IMG-20240130-WA0124.png" alt="" />
                        </div>
                        <div className="kaali-naagin position-absolute d-flex justify-content-center align-items-center">
                            fotf
                        </div>
                    </div>
                </div>

                <div className='fotf position-relative d-flex flex-column justify-content-center align-items-center'>
                    <div className='char-1 char position-absolute '>F</div>
                    <div className='char-2 char position-absolute '>O</div>
                    <div className='char-3 char position-absolute '>T</div>
                    <div className='char-4 char position-absolute '>F</div>
                    {/* <div className="fotf-bg position-absolute d-flex flex-column">
                        <div className="images"></div>
                        <div className="footer d-flex">
                            <div className="foot-left">
                                <div className="privacy">
                                    <div className="f-sq"></div>
                                    <Link className="privacy-text f-text" to="/privacy">Privacy Policy</Link>
                                </div>
                                <div className="terms">
                                    <div className="f-sq"></div>
                                    <Link className="terms-text f-text" to="/terms" >Terms of use</Link>
                                </div>
                                <div className="legal">
                                    <div className="f-sq"></div>
                                    <Link className="legal-text f-text" to="/legal" >Legal liscence</Link>
                                </div>
                            </div>
                            <div className="foot-right">
                                <div className="d-logo f-logo">
                                    <i class="fa-brands fa-discord"></i>
                                </div>
                                <div className="t-logo f-logo">
                                    <i class="fa-brands fa-x-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}