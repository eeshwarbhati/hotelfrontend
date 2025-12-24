export default function PNRCheck() {
  const checkFlightPNR = () => {
    // Indian flight PNR logic
    alert('Checking Indian flight PNR...')
  }

  const checkTrainPNR = () => {
    // Indian train PNR (IRCTC style)
    alert('Checking Indian train PNR...')
  }

  return (
    <div id="pnr-check-section" className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">PNR Status Check</h2>
          <p className="text-gray-600">Check your flight and train PNR status instantly</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Flight PNR */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-plane text-blue-600 mr-3"></i>Flight PNR Check
            </h3>
            <div className="space-y-4">
              <input type="text" placeholder="Enter Flight PNR" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" id="flight-pnr" />
              <button onClick={checkFlightPNR} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <i className="fas fa-search mr-2"></i>Check Status
              </button>
            </div>
            <div id="flight-pnr-result" className="mt-4"></div>
          </div>
          
          {/* Train PNR */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-train text-green-600 mr-3"></i>Train PNR Check (IRCTC)
            </h3>
            <div className="space-y-4">
              <input type="text" placeholder="Enter Train PNR" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" id="train-pnr" />
              <button onClick={checkTrainPNR} className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                <i className="fas fa-search mr-2"></i>Check Status
              </button>
            </div>
            <div id="train-pnr-result" className="mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
