import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg shadow-emerald-500/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
            </div>
            <span className="text-xl md:text-2xl font-bold gradient-text">BitGlow</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Features
            </a>
            <a href="#docs" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Docs
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Pricing
            </a>
          </div>

          <div className="flex items-center space-x-3 md:space-x-4">
            <button className="px-4 py-2 text-sm md:text-base text-gray-300 hover:text-white transition-colors">
              Login
            </button>
            <button className="px-4 md:px-6 py-2 text-sm md:text-base bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
