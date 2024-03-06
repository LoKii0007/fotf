import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Observer from 'gsap/Observer';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import "../css/page1.css"

export default function Page1() {

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(Observer)
    gsap.registerPlugin(ScrollToPlugin)


    // ----------comp1 animations--------

    useEffect(() => {
        gsap.to(".page1-bg", {
            scrollTrigger: {
                trigger: ".page1-comp2",
                start: "top bottom",
                end: "top top",
                scrub: 1
            },
            transformOrigin: "left bottom",
            transform: "scale(0.7)",
            left: "0%",
            duration: 1
        })
        gsap.to(".page1-front", {
            scrollTrigger: {
                trigger: ".page1-comp2",
                start: "top bottom",
                end: "top top",
                scrub: 1
            },
            x: "-100vw",
            position: "fixed",
            duration: 1
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
        // tl.to(".page1-comp2",{
        //     y:"-100%",
        //     duration:1
        // },0)
        // tl.to(".page1-comp3",{
        //     top:"40vh",
        //     opacity:1,
        //     duration:.5
        // },0)

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

        gsap.to(".web-1", {
            scrollTrigger: {
                trigger: ".webkit-1",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
            },
            width:"100%",
            transition: "all .5s linear"
        })
        gsap.to(".web-2", {
            scrollTrigger: {
                trigger: ".webkit-2",
                start: "top 60%%",
                end: "top 40%",
                scrub: 1,
            },
            width:"100%",
            transition: "all .5s linear"
        })
        gsap.to(".web-3", {
            scrollTrigger: {
                trigger: ".webkit-3",
                start: "top 40%",
                end: "top 20%",
                scrub: 1,
            },
            width:"100%",
            transition: "all .5s linear"
        })
        gsap.to(".web-4", {
            scrollTrigger: {
                trigger: ".webkit-3",
                start: "top 20%",
                end: "top top",
                scrub: 1,
            },
            width:"100%",
            transition: "all .5s linear"
        })

    }, [])

    return (
        <>
            <div className="page1 container d-flex flex-column align-items-center justify-content-center">
                <div className="page1-comp1 container position-relative">
                    <div className="page1-bg position-fixed">
                        <img className='alien1-img' src="/alien1.png" alt="" />
                    </div>
                    <div className="page1-front pt-5 d-flex justify-content-center align-items-start flex-column">
                        <div className="page1-line1 comp1-line ps-5">FRIENDS</div>
                        <div className="page1-line2 comp1-line"> OF <span className="webkit-the">THE</span> </div>
                        <div className="page1-line3 comp1-line ps-5">FUTURE</div>
                        <div className="join-btns ps-5 d-flex align-items-center justify-content-center">
                            <button style={{ backgroundImage: "url(discord.svg)" }} className='discord p-4 d-flex'>
                                <div className="text">JOIN OUR DISCORD</div>
                                <div className='discord-icon px-2'>
                                    <i class="fa-brands fa-discord"></i>
                                </div>
                            </button>
                            <div className="tedi-line">
                                <svg width="57" height="107" viewBox="0 0 57 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_bd_51_73)">
                                        <path d="M6.80564 0L6.80545 58.5L52.3055 103.5" stroke="#07CE02" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_bd_51_73" x="-13.6943" y="-20" width="86.3516" height="143.856" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                                <div className="text">ENTER WL</div>
                                <div className='discord-icon  px-2'>
                                    <i class="fa-brands fa-discord"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div id='page1-comp2' className="page1-comp2 container d-flex flex-column justify-content-evenly align-items-end">
                    <div className="comp2-top p-5 position-relative">
                        <div className="comp2-head pb-3">
                            FRIENDS OF THE FUTURE 01
                        </div>
                        <div className="comp2-text position-relative d-flex justify-content-center align-items-center">
                            This project tells the story of 4 friends that come together thanks to web 3.
                            Four friends that build their friendship thanks to becoming holders of the Utopia Avatars collection, and make his way to get this resources to create the future of web 3 vision under one slogan: created by community for community. <br /> <br />

                            Friends of the Future stands on the values of transparency, friendship and love for the technology; we love the internet and we build on it, this is just the beginning of a brilliant future together.
                            <div className="message position-absolute">
                                <svg width="114" height="96" viewBox="0 0 114 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M55.7528 73.7158L32.4688 93.8157V74.4727V73.4727H31.4688H1V1H113V73.4727H56.4062H56.0343L55.7528 73.7158Z" stroke="#07CE02" stroke-width="2" />
                                    <circle className='mc-1' cx="28" cy="33" r="12" fill="#07CE02" />
                                    <circle className='mc-2' cx="56" cy="33" r="12" fill="#07CE02" />
                                    <circle className='mc-3' cx="84" cy="33" r="12" fill="#07CE02" />
                                </svg>

                            </div>
                        </div>
                        <div className="comp2-text-bg position-absolute">
                            <svg viewBox="0 0 925 526" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_255_1308)">
                                    <path d="M912.854 180.456V36.7161L887.064 11H550M183.28 11H37.9292L12.1461 36.7161V374.816M890.857 40.4994L872.66 22.3426M872.66 22.3426H774.271M872.66 22.3426H592M880.239 469.07L859.387 489.868H604.203M879.738 488.739L911.585 456.968L912.287 201.072M907.545 474.865L882.77 499.575H741.713M34.1359 40.4994L52.34 22.3426M52.34 22.3426H215.38M52.34 22.3426H286M44.7538 484.495L65.6052 505.292H320.797M45.2614 504.164L13.4078 472.393L12.6462 394.991M17.455 490.289L42.2227 515H183.28M914 183.523H911.237V186.28H914V183.523ZM914 188.884H911.237V191.64H914V188.884ZM914 194.244H911.237V197H914V194.244ZM893.388 308.476H890.356V311.5H893.388V308.476ZM893.388 314.357H890.356V317.381H893.388V314.357ZM893.388 320.246H890.356V323.269H893.388V320.246ZM11 380.64H13.7633V377.883H11V380.64ZM11 386H13.7633V383.244H11V386ZM11 391.36H13.7633V388.604H11V391.36ZM31.6047 449.262H34.6364V446.238H31.6047V449.262ZM31.6047 455.143H34.6364V452.119H31.6047V455.143ZM31.6047 461.024H34.6364V458H31.6047V461.024Z" stroke="#07CE02" stroke-opacity="0.22" stroke-width="2" stroke-miterlimit="10" shape-rendering="crispEdges" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_255_1308" x="0" y="0" width="925" height="526" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_255_1308" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_255_1308" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

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

                <div className="page1-comp3 d-flex flex-column justify-content-center align-items-center">
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
                </div>

                {/* <div className="page1-comp4">
                </div> */}
            </div>
        </>
    )
}
