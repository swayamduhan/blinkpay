import { useGSAP } from '@gsap/react'
import './App.css'
import { HeroSection } from './components/HeroSection'
import WhySection from './components/WhySection'
import gsap from 'gsap'
import { useRef } from 'react'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import FAQSection from './components/FAQSection'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

function App() {
  const smootherRef = useRef<ScrollSmoother>(null)
  useGSAP(() => {
    
  })
  return (
    <div id='smooth-content'>
      <div className='flex flex-col items-center'>
        <div className='max-w-[2000px] overflow-hidden w-full h-full'>
          <HeroSection />
          <WhySection />
          <GetStarted />
          <FAQSection />
          <Footer />
        </div>
      </div>
      <div className='fixed inset-0 z-10 pointer-events-none bg-[url(./assets/008.webp)] mix-blend-multiply opacity-100 bg-repeat bg-[length:1000px_1000px]'></div>
    </div>
  )
}

export default App
