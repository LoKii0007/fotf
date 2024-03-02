import React, { useEffect } from 'react'
import "../css/page4.css"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Page4() {

    useEffect(() => {

        const tl1 = gsap.timeline()

        tl1.to(".char-1",
            {
                scrollTrigger: {
                    trigger: ".fotf",
                    start: "top 1%",
                    end: "top 1%",
                    scrub:1,
                },
                marginLeft: "20%",
            });

        tl1.to(".char-1",
            {
                scrollTrigger: {
                    trigger: ".fotf",
                    start: "top 1%",
                    end: "top 1%",
                    scrub:1,
                },
                top: "50%",
            }, 0);

        tl1.to(".char-2",
            {
                scrollTrigger:{
                    trigger:".fotf",
                    start:"top 1%",
                    end:"top 1%",
                    scrub:1,
                },
                marginLeft: "40%",
            }, 0);

        tl1.to(".char-2",
            {
                scrollTrigger:{
                    trigger:".fotf",
                    start:"top 1%",
                    end:"top 1%",
                    scrub:1,
                },
                top: "50%",
            }, 0);

        tl1.to(".char-3",
            {
                scrollTrigger:{
                    trigger:".fotf",
                    start:"top 1%",
                    end:"top 1%",
                    scrub:1,
                },
                marginLeft: "60%",
            }, 0)

        tl1.to(".char-3",
            {
                scrollTrigger:{
                    trigger:".fotf",
                    start:"top 1%",
                    end:"top 1%",
                    scrub:1,
                },
                top: "50%",
            }, 0)

        tl1.to(".char-4",
            {
                scrollTrigger:{
                    trigger:".fotf",
                    start:"top 1%",
                    end:"top 1%",
                    scrub:1,
                },
                marginLeft: "80%",
            }, 0)

        tl1.to(".char-4",
            {
                scrollTrigger:{
                    trigger:".fotf",
                    start:"top 1%",
                    end:"top 1%",
                    scrub:1,
                },
                top: "50%",
            }, 0)

    }, []);

    return (
        <>
            <div className="page-4">
              <div className="thanks d-flex flex-column justify-content-evenly align-items-center">
                 <div className="thanks-top text-center">
                 Thank you Friends Of <br /> The Future!
                 </div>
                 <div className="thanks-bottom">

                 </div>
              </div>
            <div className='fotf position-relative'>
                <div className='char-1 char position-absolute'>F</div>
                <div className='char-2 char position-absolute'>O</div>
                <div className='char-3 char position-absolute'>T</div>
                <div className='char-4 char position-absolute'>F</div>
                <div className="fotf-bg position-absolute d-flex flex-column">
                    <div className="images"></div>
                    <div className="footer d-flex">
                      <div className="foot-left">
                      <div className="privacy">
                        <div className="f-sq"></div>
                        <div className="privacy-text f-text">Privacy Policy</div>
                      </div>
                      <div className="terms">
                      <div className="f-sq"></div>
                        <div className="terms-text f-text">Terms of use</div>
                      </div>
                      <div className="legal">
                      <div className="f-sq"></div>
                        <div className="legal-text f-text">Legal liscence</div>
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
                </div>
            </div>
            </div>
        </>
    )
}