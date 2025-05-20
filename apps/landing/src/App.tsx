import './App.css'
import { HeroSection } from './components/HeroSection'
import WhySection from './components/WhySection'

function App() {

  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-[2000px] overflow-hidden w-full h-full'>
        <HeroSection />
        <WhySection />
      </div>
    </div>
  )
}

export default App
