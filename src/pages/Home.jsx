import Hero from '../components/home/Hero'
import ClientStrip from '../components/home/ClientStrip'
import ServicesOverview from '../components/home/ServicesOverview'
import WhyUs from '../components/home/WhyUs'
import Process from '../components/home/Process'
import TechStack from '../components/home/TechStack'
import Testimonials from '../components/home/Testimonials'
import CtaBand from '../components/home/CtaBand'

export default function Home() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <ServicesOverview />
      <WhyUs />
      <Process />
      <TechStack />
      <Testimonials />
      <CtaBand />
    </>
  )
}
