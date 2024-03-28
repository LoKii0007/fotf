import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/pr.css"

export default function Pr() {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{

        gsap.to(".b-top, .b-bottom",{
            scrollTrigger:{
                trigger:".b-2",
                start:"top top",
                end:"+=10px",
                scrub: true
            },
            y:-100
        })

        ScrollTrigger.create({
            trigger:".b-2",
            start:"bottom 90%",
            end:"bottom 90%",
            scrub: true,
            onEnter:()=>{
                tl1.play()
            },
            onLeaveBack:()=>{
                tl1.reverse()
            }
        })

        const tl1 = gsap.timeline({
            paused: true
        })

        tl1.to(".b-image",{
            rotateY:"90deg"
        })
        .to(".shuf-black",{
            rotateY:"0deg"
        })

        const tl2 = gsap.timeline({
            paused: true
        })

        ScrollTrigger.create({
            trigger:".b-2",
            start:"bottom center",
            end:"bottom center",
            scrub: true,
            onEnter:()=>{
                tl2.play()
            },
            onLeaveBack:()=>{
                tl2.reverse()
            }
        })

        tl2.to(".shuf-black",{
            scale: 1
        })

        const tl3 = gsap.timeline({
            paused: true
        })

        ScrollTrigger.create({
            trigger:".b-2",
            start:"bottom 30%",
            end:"bottom 30%",
            scrub: true,
            onEnter:()=>{
                tl3.play()
            },
            onLeaveBack:()=>{
                tl3.reverse()
            }
        })

        tl3.to(".shuf-black",{
            width:"150vw",
            height:"150vh",
        })
        tl3.to(".b-bottom",{
            top:"0%"
        },0)

        gsap.to(".shuff-black",{
            scrollTrigger:{
                trigger:".b-4",
                start:"top bottom",
                end:"top top",
                scrub: true,
                markers: true
            },
            y:"-100vh"
        })
        
    },[])
  return (
    <>
      <div className="home">
        <div className="b-1"></div>
        <div className="b-2 position-relative d-flex flex-column justify-content-between align-items-center">
            <div className="hara position-absolute"></div>
            <div className="b-top position-fixed"></div>
            <div className="b-bottom position-fixed d-flex flex-column justify-content-between align-items-center">
                <div className="shuf position-absolute">
                    <div className="b-image position-absolute"></div>
                </div>
                <div style={{ backgroundImage: "url(faltu.svg)" }} className="shuf-black"></div>
            </div>
        </div>
        <div className="b-3"></div>
        <div className="b-4"></div>
      </div>
    </>
  )
}
