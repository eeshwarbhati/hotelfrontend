import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import HeroSearch from './components/HeroSearch'
import Filters from './components/Filters'
import HotelList from './components/HotelList'
import PNRCheck from './components/PNRCheck'
import TrainStatus from './components/TrainStatus'
import HotelRegistration from './components/HotelRegistration'
import Modals from './components/Modals'
import Footer from './components/Footer'
import { hotels } from './data/hotels'
import AIChat from './components/AIChat'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [filteredHotels, setFilteredHotels] = useState([])
  const [searchLocation, setSearchLocation] = useState('Mumbai')
  const [showResults, setShowResults] = useState(false)
  const [filters, setFilters] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [showModal, setShowModal] = useState(null)
  const [aiChatVisible, setAiChatVisible] = useState(false)
  const [aiMessages, setAiMessages] = useState([])

  useEffect(() => {
    setFilteredHotels(hotels)
  }, [])

  const showSection = (section) => {
    setCurrentSection(section)
    setShowResults(false)
    setShowModal(null)
  }

  const searchHotels = (destination) => {
    setSearchLocation(destination || 'Mumbai')
    setShowResults(true)
  }

  const toggleAIChat = () => setAiChatVisible(!aiChatVisible)

  const openModal = (modal) => setShowModal(modal)
  const closeModal = () => setShowModal(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentSection={currentSection}
        showSection={showSection}
        isLoggedIn={isLoggedIn}
        openModal={openModal}
      />
      
      {currentSection === 'home' && (
        <>
          <HeroSearch onSearch={searchHotels} openModal={openModal} toggleAIChat={toggleAIChat} />
          {showResults && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="results-section">
              <div className="flex flex-col lg:flex-row gap-8">
                <Filters filters={filters} />
                <HotelList hotels={filteredHotels} location={searchLocation} />
              </div>
            </section>
          )}
        </>
      )}

      {currentSection === 'pnr-check' && <PNRCheck />}
      {currentSection === 'train-status' && <TrainStatus />}
      {currentSection === 'hotel-registration' && <HotelRegistration />}

      <Footer />
      <Modals showModal={showModal} closeModal={closeModal} />
      {aiChatVisible && <AIChat messages={aiMessages} onClose={toggleAIChat} />}
    </div>
  )
}

export default App
