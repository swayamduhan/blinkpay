import './App.css'
import { HeroSection } from './components/HeroSection'
import WhySection from './components/WhySection'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import FAQSection from './components/FAQSection'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin)

function App() {
  return (
    <div id='smooth-content'>
      <div className='flex flex-col items-center'>
        <div className='max-w-[2000px] overflow-hidden w-full h-full'>
          <div className='bg-pastel-100 relative z-[1]'>
            <HeroSection />
            <WhySection />
            <GetStarted />
            <FAQSection />
          </div>
          <Footer />
        </div>
      </div>
      <div className='fixed inset-0 z-10 pointer-events-none bg-[url(./assets/008.webp)] mix-blend-multiply opacity-100 bg-repeat bg-[length:1000px_1000px]'></div>
    </div>
  )
}

export default App
