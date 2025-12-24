import { useState } from 'react'

export default function HeroSearch({ onSearch, openModal }) {
  const [destination, setDestination] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests] = useState('1')

  const searchHotels = (e) => {
    e.preventDefault()
    onSearch(destination)
  }

  return (
    <section className="gradient-bg py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Hotel Discovery</h2>
          <p className="text-xl text-blue-100">Let our AI find your perfect stay with smart recommendations</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <form onSubmit={searchHotels} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <input 
                type="text" 
                placeholder="Where are you going?" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
              <input 
                type="date" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
              <input 
                type="date" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </form>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={searchHotels}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg"
            >
              <i className="fas fa-search mr-2"></i>Search Hotels
            </button>
            <button 
              onClick={() => openModal('ai-assistant-modal')}
              className="ai-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg ai-pulse"
            >
              <i className="fas fa-robot mr-2"></i>Ask AI Assistant
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
