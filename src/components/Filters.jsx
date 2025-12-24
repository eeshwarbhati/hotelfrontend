export default function Filters({ filters, onFiltersChange, onClear }) {
  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-md sticky top-24">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold flex items-center">
            <i className="fas fa-filter mr-2 text-blue-600"></i>Smart Filters
          </h3>
        </div>
        
        <div className="scrollable-filters p-6">
          {/* AI Recommendations */}
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <h4 className="font-medium mb-3 text-purple-800 flex items-center">
              <i className="fas fa-magic mr-2"></i>AI Recommendations
            </h4>
            <div className="space-y-2">
              <button className="w-full text-left p-2 bg-white rounded border hover:bg-purple-50 text-sm flex items-center">
                <i className="fas fa-star text-yellow-500 mr-2"></i>Best Value for Money
              </button>
              <button className="w-full text-left p-2 bg-white rounded border hover:bg-purple-50 text-sm flex items-center">
                <i className="fas fa-heart text-red-500 mr-2"></i>Most Romantic
              </button>
              <button className="w-full text-left p-2 bg-white rounded border hover:bg-purple-50 text-sm flex items-center">
                <i className="fas fa-briefcase text-blue-500 mr-2"></i>Business Friendly
              </button>
              <button className="w-full text-left p-2 bg-white rounded border hover:bg-purple-50 text-sm flex items-center">
                <i className="fas fa-users text-green-500 mr-2"></i>Family Friendly
              </button>
              <button className="w-full text-left p-2 bg-white rounded border hover:bg-purple-50 text-sm flex items-center">
                <i className="fas fa-crown text-purple-500 mr-2"></i>Luxury Experience
              </button>
            </div>
          </div>

          {/* Star Rating */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Star Rating</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-2">5 Star Luxury</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-yellow-400">★★★★</span>
                <span className="ml-2">4 Star Premium</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-yellow-400">★★★</span>
                <span className="ml-2">3 Star Comfort</span>
              </label>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Price Range per night</h4>
            <div className="space-y-2">
              <label className="flex items-center"><input type="checkbox" className="mr-2" />Under ₹5,000</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" />₹5,000 - ₹10,000</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" />₹10,000 - ₹20,000</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" />₹20,000 - ₹30,000</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" />Above ₹30,000</label>
            </div>
            <div className="mt-3">
              <input type="range" min="0" max="50000" value="25000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>₹50,000</span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Amenities</h4>
            <div className="space-y-2 text-sm">
              <label className="flex items-center"><input type="checkbox" className="mr-2" /><i className="fas fa-wifi text-blue-500 mr-2"></i>Free WiFi</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" /><i className="fas fa-swimming-pool text-blue-500 mr-2"></i>Swimming Pool</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" /><i className="fas fa-dumbbell text-blue-500 mr-2"></i>Fitness Center</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" /><i className="fas fa-spa text-pink-500 mr-2"></i>Spa Wellness</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" /><i className="fas fa-utensils text-orange-500 mr-2"></i>Restaurant</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" /><i className="fas fa-car text-gray-500 mr-2"></i>Free Parking</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" /><i className="fas fa-concierge-bell text-purple-500 mr-2"></i>Room Service</label>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t">
            <button onClick={onClear} className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
              <i className="fas fa-eraser mr-2"></i>Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
