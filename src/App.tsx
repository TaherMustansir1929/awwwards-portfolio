import ReactLenis from "lenis/react"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Services from "./sections/Services"
import ServiceSummary from "./sections/ServiceSummary"
import About from "./sections/About"

const App = () => {
  return (
    <ReactLenis root className="relative w-screen  min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
    </ReactLenis>
  )
}
export default App