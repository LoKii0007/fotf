import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/page1.css"

export default function Page1() {

    gsap.registerPlugin(ScrollTrigger)

    const tl1 = gsap.timeline()

    useEffect(() => {

        // tl1.to(".page1-bg",{
        //     scrollTrigger:{
        //         trigger:".page1-comp1",
        //         start:"top top",
        //         end:"top top",
        //         scrub:.6
        //     },
        //     duration:.8,
        //     right:"10%"
        // })

        gsap.to(".page1-front", {
            scrollTrigger: {
                trigger: ".page1-comp2",
                start: "top bottom",
                end: "top top",
                scrub: 0.5,
                // pin:true,
                // pinSpacing:true
            },
            x: "-140vh",
            position: "fixed",
        })

    }, [])

    useEffect(() => {
        gsap.to(".page1-bg", {
            scrollTrigger: {
                trigger: ".page1-comp3",
                start: "top bottom",
                end: "top top",
                scrub: 0.5,
            },
            x: "-150vh"
        })

        gsap.to(".webkit-2", {
            scrollTrigger: {
                trigger: ".page1-comp3",
                start: "top 20%",
                end:"top 20%",
                scrub: 0.5,
            },
            duration:1,
            color:"#07CE02",
            stroke:"none",
            // transition:".5s ease"
        })

        gsap.to(".webkit-4", {
            scrollTrigger: {
                trigger: ".page1-comp3",
                start: "bottom 60%",
                end:"bottom 60%",
                scrub: 0.5,
            },
            duration:1,
            color:"#07CE02",
            stroke:"none",
            // transition:".5s ease"
        })

    }, [])

    // ----responsive 

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.innerWidth < 601) {
                gsap.to(".page1-bg", {
                    scrollTrigger: {
                        trigger: ".page1-comp2",
                        start: "top 90%",
                        end: "top 90%",
                        scrub: 0.5,
                    },
                    transformOrigin: "left bottom",
                    left: "-20%"
                })
            }
            // else{
            //     gsap.to(".page1-bg", {
            //         scrollTrigger: {
            //             trigger: ".page1-comp2",
            //             start: "top bottom",
            //             end: "top top",
            //             scrub: 0.5,
            //         },
            //         transformOrigin: "left bottom",
            //         transform: "scale(0.7)",
            //         left: "0%"
            //     })
            // }
        });

        // return()=>{
        //     window.removeEventListener("scroll")
        // }

    },[])

    return (
        <>
            <div className="page1 position-relative">
                <div className="page1-comp1 position-relative">
                    <div className="page1-bg position-fixed">
                        <img className='alien1-img' src="/alien1.png" alt="" />
                    </div>
                    <div className="page1-front ps-5 d-flex justify-content-center align-items-start flex-column">
                        <div className="page1-line1 comp1-line ps-5">FRIENDS</div>
                        <div className="page1-line2 comp1-line"> OF <span className="webkit-the">THE</span> </div>
                        <div className="page1-line3 comp1-line ps-5">FUTURE</div>
                        <div className="join-btns ps-5 pt-3 d-flex">
                            <button className=' discord mx-1 d-flex'>
                                <div className="text">JOIN OUR DISCORD</div>
                                <div className='discord-icon'>
                                    <i class="fa-brands fa-discord"></i>
                                </div>
                            </button>
                            <button className='world-btn'> ENTER WL</button>
                        </div>
                    </div>
                </div>

                <div className="page1-comp2 d-flex flex-column justify-content-evenly align-items-end pe-5">
                    <div className="comp2-top pe-5">
                        <div className="comp2-head">
                            FRIENDS OF THE FUTURE 01
                        </div>
                        <div className="comp2-text">
                            This project tells the story of 4 friends that come together thanks to web 3.
                            Four friends that build their friendship thanks to becoming holders of the Utopia Avatars collection, and make his way to get this resources to create the future of web 3 vision under one slogan: created by community for community. <br />

                            Friends of the Future stands on the values of transparency, friendship and love for the technology; we love the internet and we build on it, this is just the beginning of a brilliant future together.
                        </div>
                    </div>
                    <div className="comp2-bottom pe-5 d-flex flex-column align-items-end">
                        <div className="community-top pe-5">
                            BY COMMUNITY
                        </div>
                        <div className="community-bottom pe-4">
                            FOR COMMUNITY
                        </div>
                    </div>
                </div>

                <div className="page1-comp3 d-flex justify-content-center align-items-center">
                    <div className="comp3-text flex-column d-flex justify-content-center align-items-center">
                        <div className='webkit-1 text-center'>we ar<span className='webkit-2'>e not here</span></div>
                        <div className='webkit-2 text-center'>to take part, we</div>
                        <div className='webkit-2 text-center'>are her<span className='webkit-4'>e to</span></div>
                        <div className='webkit-4 text-center'>take over.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
