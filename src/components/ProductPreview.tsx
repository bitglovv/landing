export default function ProductPreview() {
  const users = [
    { name: 'Alex Chen', status: 'online', color: 'bg-green-500' },
    { name: 'Sarah Miller', status: 'online', color: 'bg-emerald-500' },
    { name: 'Mike Johnson', status: 'away', color: 'bg-yellow-500' }
  ]

  const messages = [
    { user: 'Alex Chen', message: 'Just deployed the new feature!', time: '2:34 PM', avatar: 'AC' },
    { user: 'Sarah Miller', message: 'Amazing! The real-time sync is instant 🚀', time: '2:35 PM', avatar: 'SM' },
    { user: 'Mike Johnson', message: 'BitGlow makes this so easy', time: '2:36 PM', avatar: 'MJ' }
  ]

  return (
    <section className="py-20 md:py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">See It In Action</span>
          </h2>
          <p className="text-xl text-gray-400">Real-time communication that just works</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-white font-semibold">Live Chat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">{users.length} online</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-black/40 backdrop-blur-sm">
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Active Users</h4>
                <div className="flex flex-wrap gap-3">
                  {users.map((user, index) => (
                    <div key={index} className="glass-green px-4 py-2 rounded-full flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${user.color} animate-pulse`}></div>
                      <span className="text-sm text-white">{user.name}</span>
                      <span className="text-xs text-gray-400">({user.status})</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Messages</h4>
                {messages.map((msg, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-xs font-bold text-black flex-shrink-0">
                      {msg.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline space-x-2 mb-1">
                        <span className="text-sm font-semibold text-white">{msg.user}</span>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <div className="glass rounded-lg p-3">
                        <p className="text-sm text-gray-300">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="flex items-center space-x-2 pt-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs text-gray-500 italic">Someone is typing...</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/5 to-green-500/5 p-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <div className="flex-1 glass rounded-lg px-4 py-3">
                  <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="w-full bg-transparent text-white placeholder-gray-500 outline-none text-sm"
                    disabled
                  />
                </div>
                <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
