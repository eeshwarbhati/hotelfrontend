export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fas fa-robot mr-2"></i>TravelStay AI
            </h3>
            <p className="text-gray-300">Your AI-powered travel companion for seamless hotel bookings and travel assistance.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Hotel Booking</a></li>
              <li><a href="#" className="hover:text-white">PNR Check</a></li>
              <li><a href="#" className="hover:text-white">Train Status</a></li>
              <li><a href="#" className="hover:text-white">AI Assistant</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Partner Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook text-xl"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin text-xl"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 TravelStay AI. All rights reserved. Powered by Advanced AI Technology.</p>
        </div>
      </div>
    </footer>
  )
}
