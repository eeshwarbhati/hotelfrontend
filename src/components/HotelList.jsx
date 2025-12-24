export default function HotelList({ hotels, location }) {
  return (
    <div className="lg:w-3/4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">
          Premium Hotels in <span className="text-blue-600">{location}</span>
        </h3>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option>Sort by AI Recommended</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Star Rating</option>
            <option>Guest Rating</option>
          </select>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
            <i className="fas fa-robot mr-2"></i>AI Help
          </button>
        </div>
      </div>

      <div className="space-y-6" id="hotel-list">
        {hotels.slice(0, 8).map((hotel, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 card-hover border border-gray-100 hover:shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <img
                  src={
                    hotel.image ||
                    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'
                  }
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="lg:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-2xl font-bold text-gray-800">
                      {hotel.name}
                    </h4>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star ${
                              i < Math.floor(hotel.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          ></i>
                        ))}
                        <span className="ml-2 text-sm font-semibold text-gray-700">
                          ({hotel.rating})
                        </span>
                      </div>
                      <div>
                        <span className="text-3xl font-bold text-blue-600">
                          ₹{hotel.price?.toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-500 line-through ml-2">
                          ₹{hotel.originalPrice?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-lg">
                    {hotel.location}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities?.slice(0, 4).map((amenity, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg mb-4">
                    <span className="text-purple-800 font-medium text-sm flex items-center">
                      🤖 AI Pick: {hotel.aiRecommendation}
                    </span>
                  </div>
                </div>

                {/* bottom row */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">
                      {hotel.reviews?.toLocaleString()} reviews
                    </span>

                    {/* social icons row */}
                    <div className="mt-2 flex items-center space-x-3 text-lg">
                      {hotel.facebookUrl && (
                        <a
                          href={hotel.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                          title="Facebook"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      )}
                      {hotel.instagramUrl && (
                        <a
                          href={hotel.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:text-pink-600"
                          title="Instagram"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      )}
                      {hotel.websiteUrl && (
                        <a
                          href={hotel.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800"
                          title="Website"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fas fa-globe" />
                        </a>
                      )}
                    </div>
                  </div>

                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all flex items-center">
                    <i className="fas fa-bookmark mr-2"></i>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
