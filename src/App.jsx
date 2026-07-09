import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Services from './pages/services/Services'
import WebDevelopment from './pages/services/WebDevelopment'
import CmsDevelopment from './pages/services/CmsDevelopment'
import Seo from './pages/services/Seo'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/web-development" element={<WebDevelopment />} />
        <Route path="services/cms-development" element={<CmsDevelopment />} />
        <Route path="services/seo" element={<Seo />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
