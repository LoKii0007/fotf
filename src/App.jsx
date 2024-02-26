import { useEffect } from "react"
import Fotf from "./components/fotf"
import Layout from "./components/layout"
import Page1 from "./components/page1"
import Page2 from "./components/page2"
import Page3 from "./components/page3"

function App() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})

  },[])

  return (
    <>
      <Layout/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Fotf/>
    </>
  )
}

export default App
