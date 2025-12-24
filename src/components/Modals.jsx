export default function Modals({ showModal, closeModal }) {
  if (!showModal) return null

  return (
    <>
      {showModal === 'signin-modal' && (
        <div className="modal show">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Welcome Back</h3>
              <p className="text-gray-600">Sign in to your account</p>
            </div>
            <form className="space-y-4" id="signin-form">
              <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <input type="password" placeholder="Password *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Sign In
              </button>
            </form>
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}

      {showModal === 'signup-modal' && (
        <div className="modal show">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Create Account</h3>
              <p className="text-gray-600">Join TravelStay AI today</p>
            </div>
            <form className="space-y-4" id="signup-form">
              <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <input type="password" placeholder="Password *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <input type="password" placeholder="Confirm Password *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Create Account
              </button>
            </form>
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
