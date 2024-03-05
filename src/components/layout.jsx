import React, { useState , useEffect } from 'react'
import "../css/layout.css"

export default function Layout() {

    const [bgUrl , setBgUrl] = useState("bg1")

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 600) {
            setBgUrl("bg3")
          } else {
            setBgUrl("bg1")
          }
        }
    
        handleResize()
        window.addEventListener("resize", handleResize)
    
        return () => {
          window.removeEventListener("resize", handleResize)
        }
      }, [])

    return (
        <>
            <div className="main-bg position-fixed">
              <img src="/main-bg.png" alt="" />
            </div>
            <div style={{ backgroundImage: `url(${bgUrl}.svg)` }} className="layout position-fixed">
                <div className="layout-top d-flex justify-content-center align-items-center">
                    <div className="layout-text d-flex justify-content-center align-items-center">
                      FOTF
                    </div>
                </div>
            </div>
        </>
    )

}
