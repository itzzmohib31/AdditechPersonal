import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
import MainGif from '../assets/images/main.gif';
import { HeroSection } from '@/components/herosection';
import services from '@/components/services';
import Services from '@/components/services';
import Visions from '@/components/visions';
import Sponsors from '@/components/sponsors';
import Homepage from './home';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
      <Navigation></Navigation>
     <Homepage></Homepage>
    </main>
  )
}
