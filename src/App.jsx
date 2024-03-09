import { useLayoutEffect, useState } from "react"
import Layout from "./components/layout"
import Page1 from "./components/page1"
import Page2 from "./components/page2"
import Page3 from "./components/page3"
import Page4 from "./components/page4"
import Terms from "./components/terms"

function App() {
  const [scale , setScale] = useState(window.innerWidth > 600);

  useLayoutEffect(() => {
    function handleResize() {
      setScale(window.innerWidth > 600);
    }
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <Layout/>
      {/* <Terms/> */}
      <Page1 scale={scale}/>
      <Page2 scale={scale}/>
      <Page3 scale={scale}/>
      <Page4 scale={scale}/>
    </>
  )
}

export default App
