export default function Header({ currentSection, showSection, openModal }) {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              <i className="fas fa-robot mr-2"></i>TravelStay AI
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              onClick={() => showSection('home')} 
              className={`text-gray-700 hover:text-blue-600 font-medium ${currentSection === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
            >
              Hotels
            </a>
            <a 
              href="#" 
              onClick={() => showSection('pnr-check')} 
              className={`text-gray-700 hover:text-blue-600 font-medium ${currentSection === 'pnr-check' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
            >
              PNR Check
            </a>
            <a 
              href="#" 
              onClick={() => showSection('train-status')} 
              className={`text-gray-700 hover:text-blue-600 font-medium ${currentSection === 'train-status' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
            >
              Train Status
            </a>
            <a 
              href="#" 
              onClick={() => showSection('hotel-registration')} 
              className={`text-gray-700 hover:text-blue-600 font-medium ${currentSection === 'hotel-registration' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
            >
              Register Hotel
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => openModal('signin-modal')}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </button>
            <button 
              onClick={() => openModal('signup-modal')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
