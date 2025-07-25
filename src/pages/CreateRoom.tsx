import React, { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { useNavigate } from 'react-router-dom'

const CreateRoom: React.FC = () => {
  const navigate = useNavigate()
  const [roomName, setRoomName] = useState('')
  const [hostName, setHostName] = useState('')
  const [expiry, setExpiry] = useState('2h')
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const expiryOptions = [
    { label: '2 hours', value: '2h' },
    { label: '1 day', value: '1d' },
    { label: '7 days', value: '7d' },
    { label: '1 year', value: '1y' },
  ]

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate room creation (replace with actual API call)
    setTimeout(() => {
      const roomId = Math.random().toString(36).substr(2, 9)
      const roomNameParam = roomName || 'Untitled Room'
      const hostNameParam = hostName || 'Anonymous Host'
      navigate(`/labroom/${roomId}?roomName=${encodeURIComponent(roomNameParam)}&hostName=${encodeURIComponent(hostNameParam)}`)
      setIsLoading(false)
    }, 1000)
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-cyan-900/20 to-blue-900/20">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-6">
        <div className={`w-full max-w-lg mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Modern Glass Card Design */}
          <div className="relative">
            {/* Animated Background Blobs */}
            <div className="absolute -top-2 -left-2 w-12 h-12 md:w-16 md:h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-2 -right-2 w-16 h-16 md:w-20 md:h-20 bg-emerald-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Main Card Container */}
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-xl md:rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
              {/* Top Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400" />
              
              <div className="p-4 md:p-6">
                {/* Header */}
                <div className="text-center mb-4 md:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl md:rounded-2xl mb-3 md:mb-4 border border-cyan-400/30">
                    <span className="text-xl md:text-2xl">🚀</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                    Create Room
                  </h1>
                  <p className="text-gray-300 text-sm md:text-base">Set up your collaborative workspace</p>
                </div>

                {/* Form */}
                <form onSubmit={handleCreateRoom} className="space-y-4 md:space-y-5">
                  {/* Form Grid - Stack on mobile */}
                  <div className="grid grid-cols-1 gap-4">
                    {/* Room Name */}
                    <div className="space-y-2">
                      <Label htmlFor="roomName" className="text-cyan-300 font-bold text-sm flex items-center gap-2">
                        <span className="text-base md:text-lg">📝</span>
                        Room Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="roomName"
                          type="text"
                          placeholder="Enter room name..."
                          value={roomName}
                          onChange={(e) => setRoomName(e.target.value)}
                          className="w-full bg-black/20 backdrop-blur-sm border-2 border-cyan-400/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/30 rounded-lg py-3 px-4 text-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-black/30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-emerald-400/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    {/* Host Name */}
                    <div className="space-y-2">
                      <Label htmlFor="hostName" className="text-emerald-300 font-bold text-sm flex items-center gap-2">
                        <span className="text-base md:text-lg">👤</span>
                        Host Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="hostName"
                          type="text"
                          placeholder="Your name..."
                          value={hostName}
                          onChange={(e) => setHostName(e.target.value)}
                          className="w-full bg-black/20 backdrop-blur-sm border-2 border-emerald-400/30 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-emerald-400/30 rounded-lg py-3 px-4 text-sm transition-all duration-300 hover:border-emerald-400/50 hover:bg-black/30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Room Expiry - Full Width */}
                  <div className="space-y-2">
                    <Label htmlFor="expiry" className="text-blue-300 font-bold text-sm flex items-center gap-2">
                      <span className="text-base md:text-lg">⏰</span>
                      Room Expiry
                    </Label>
                    <div className="relative">
                      <select
                        id="expiry"
                        className="w-full rounded-lg border-2 border-blue-400/30 bg-black/20 backdrop-blur-sm text-white py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all duration-300 hover:border-blue-400/50 hover:bg-black/30"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                      >
                        {expiryOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-gray-900">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 pt-4">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="group relative w-full py-4 text-lg font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 text-black rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            Creating Room...
                          </>
                        ) : (
                          <>
                            <span>🎉</span>
                            Create Room
                          </>
                        )}
                      </span>
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={handleBackToHome}
                      className="group w-full py-3 text-base font-bold border-2 border-cyan-400/50 text-cyan-300 bg-black/10 backdrop-blur-sm hover:bg-cyan-400/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>←</span>
                        Back to Home
                      </span>
                    </Button>
                  </div>
                </form>

                {/* Info Section */}
                <div className="mt-6 p-4 bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-cyan-400/20">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl animate-bounce">✨</div>
                    <div>
                      <h3 className="text-cyan-300 font-bold text-base mb-2">What you'll get:</h3>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="text-cyan-400">•</span>
                          Real-time collaborative editing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">•</span>
                          Instant team chat
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          Secure file sharing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-purple-400">•</span>
                          Live cursor tracking
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </div>
  )
}

export default CreateRoom
