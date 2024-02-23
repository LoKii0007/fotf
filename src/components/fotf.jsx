import React, { useEffect } from 'react'
import "../css/fotf.css"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Fotf() {

    useEffect(() => {

        const tl1 = gsap.timeline()

        tl1.to(".char-1",
            {
                marginLeft: "20%",
            }, 1);
        tl1.to(".char-1",
            {
                top: "50%",
            }, 1.1);

        tl1.to(".char-2",
            {
                marginLeft: "40%",
            }, 1);
        tl1.to(".char-2",
            {
                top: "50%",
            }, 1.1);

        tl1.to(".char-3",
            {
                marginLeft: "60%",
            }, 1);
        tl1.to(".char-3",
            {
                top: "50%",
            }, 1.1);

        tl1.to(".char-4",
            {
                marginLeft: "80%",
            }, 1);
        tl1.to(".char-4",
            {
                top: "50%",
            }, 1.1);

    }, []);

    return (
        <>
            <div className='fotf position-relative'>
                <div className='char-1 char position-absolute'>F</div>
                <div className='char-2 char position-absolute'>O</div>
                <div className='char-3 char position-absolute'>T</div>
                <div className='char-4 char position-absolute'>F</div>
            </div>
        </>
    )
}