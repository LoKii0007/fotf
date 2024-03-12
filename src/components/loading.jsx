import React, { useEffect } from 'react'
import "../css/loading.css"
import gsap from 'gsap'

export default function Loading() {

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

    const video = document.querySelector('.loading-vid');

    window.addEventListener("load", function(){
      video.play()
      tl.play()
    })

  }, [])



  return (
    <>
      <div id='preloader' className="loading position-fixed d-flex flex-column justify-content-center align-items-center">
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
    </>
  )
}
