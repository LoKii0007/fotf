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
            <div style={{ backgroundImage: `url(${bgUrl}.svg)` }} className="layout position-fixed">
                <div className="layout-top text-center">
                    FOTF
                </div>
            </div>
        </>
    )

}
