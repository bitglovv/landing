export default function CTA() {
  return (
    <section className="py-20 md:py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-green-500/10 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-green rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Ready to Glow?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of developers building the future of real-time communication
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105">
                Get Started Free
              </button>
              <button className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/10 text-white font-semibold text-lg rounded-lg transition-all duration-300">
                View Pricing
              </button>
            </div>

            <p className="text-sm text-gray-400">
              No credit card required • Free tier available forever
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
