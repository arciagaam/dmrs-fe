import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
