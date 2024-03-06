import { useEffect } from "react"
import Layout from "./components/layout"
import Page1 from "./components/page1"
import Page2 from "./components/page2"
import Page3 from "./components/page3"
import Page4 from "./components/page4"
import Terms from "./components/terms"

function App() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})

  },[])

  // let stylesheet = document.styleSheets[2];

  // fetch(stylesheet.href)
  //   .then(response => response.text())
  //   .then(response => {
  //       const st = document.createElement('style');
  //       st.textContent = response;
  //       document.body.append(st);
  //   });


  return (
    <>
      <Layout/>
      {/* <Terms/> */}
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
    </>
  )
}

export default App
