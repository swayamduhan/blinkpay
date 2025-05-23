import { useGSAP } from '@gsap/react'
import './App.css'
import { HeroSection } from './components/HeroSection'
import WhySection from './components/WhySection'
import gsap from 'gsap'
import { useRef } from 'react'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

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
          <div className='h-[200vh]'></div>
        </div>
      </div>
    </div>
  )
}

export default App
