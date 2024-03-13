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
        </>
    )

}
