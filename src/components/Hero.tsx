export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-green-500/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 glass-green px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-sm text-emerald-300 font-medium">v1.0 is live</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8">
            <span className="gradient-text">Connect in Real-Time.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 md:mb-12 max-w-3xl mx-auto">
            Zero-latency messaging built for modern apps
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20">
            <button className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105">
              Join Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass hover:glass-green text-white font-semibold text-lg rounded-lg transition-all duration-300">
              Read Docs
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl flex items-center px-6 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="text-xs text-gray-500 ml-4">app.ts</span>
            </div>
            
            <pre className="mt-8 text-left overflow-x-auto">
              <code className="text-sm md:text-base leading-relaxed">
                <span className="text-purple-400">import</span> <span className="text-gray-300">{'{'}</span> <span className="text-blue-400">BitGlow</span> <span className="text-gray-300">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@bitglow/sdk'</span><span className="text-gray-300">;</span>
                {'\n\n'}
                <span className="text-purple-400">const</span> <span className="text-blue-300">client</span> <span className="text-gray-300">=</span> <span className="text-purple-400">new</span> <span className="text-yellow-300">BitGlow</span><span className="text-gray-300">({'{'}</span>
                {'\n  '}
                <span className="text-blue-300">apiKey</span><span className="text-gray-300">:</span> <span className="text-blue-300">process</span><span className="text-gray-300">.</span><span className="text-blue-300">env</span><span className="text-gray-300">.</span><span className="text-blue-300">BITGLOW_KEY</span>
                {'\n'}<span className="text-gray-300">{'}'});</span>
                {'\n\n'}
                <span className="text-gray-500">// Connect and listen</span>
                {'\n'}
                <span className="text-purple-400">await</span> <span className="text-blue-300">client</span><span className="text-gray-300">.</span><span className="text-yellow-300">connect</span><span className="text-gray-300">();</span>
                {'\n'}
                <span className="text-blue-300">client</span><span className="text-gray-300">.</span><span className="text-yellow-300">on</span><span className="text-gray-300">(</span><span className="text-green-400">'message'</span><span className="text-gray-300">,</span> <span className="text-gray-300">(</span><span className="text-orange-300">data</span><span className="text-gray-300">)</span> <span className="text-purple-400">=&gt;</span> <span className="text-gray-300">{'{'}</span>
                {'\n  '}
                <span className="text-blue-300">console</span><span className="text-gray-300">.</span><span className="text-yellow-300">log</span><span className="text-gray-300">(</span><span className="text-green-400">'Real-time:'</span><span className="text-gray-300">,</span> <span className="text-orange-300">data</span><span className="text-gray-300">);</span>
                {'\n'}<span className="text-gray-300">{'}'});</span>
              </code>
            </pre>

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-xs text-emerald-400 hover:text-emerald-300 px-3 py-1 glass-green rounded">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
