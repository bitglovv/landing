import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TechHighlights from './components/TechHighlights'
import ProductPreview from './components/ProductPreview'
import WhyBitGlow from './components/WhyBitGlow'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <TechHighlights />
        <ProductPreview />
        <WhyBitGlow />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
