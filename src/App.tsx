import ReactLenis from "lenis/react"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Services from "./sections/Services"
import ServiceSummary from "./sections/ServiceSummary"
import About from "./sections/About"
import Works from "./sections/Works"
import ContactSummary from "./sections/ContactSummary"
import Contact from "./sections/Contact"

const App = () => {
  return (
    <ReactLenis root className="relative w-screen  min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </ReactLenis>
  )
}
export default App