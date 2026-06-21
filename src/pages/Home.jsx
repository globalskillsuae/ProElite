import Loader from '../components/Loader/Loader'
import FloatingButtons from '../components/FloatingButtons/FloatingButtons'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import TrustBar from '../components/TrustBar/TrustBar'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Companies from '../components/Companies/Companies'
import Certifications from '../components/Certifications/Certifications'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Technical from '../components/Technical/Technical'
import Process from '../components/Process/Process'
import Industries from '../components/Industries/Industries'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <div id="progress-bar"></div>
      <Loader />
      <FloatingButtons />
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Companies />
      <Certifications />
      <WhyChooseUs />
      <Technical />
      <Process />
      <Industries />
      <Contact />
      <Footer />
    </>
  )
}