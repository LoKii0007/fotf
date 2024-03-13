import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./components/layout"
import Terms from "./components/terms"
import Legal from "./components/legal"
import Privacy from "./components/privacy"
import Home from './screens/home'
import Loading from './components/loading'

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Loading />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/terms" element={<Terms />}></Route>
          <Route exact path="/privacy" element={<Privacy />}></Route>
          <Route exact path="/legal" element={<Legal />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
