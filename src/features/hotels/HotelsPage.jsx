import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import hotelsApi from '../../api/hotelsApi';
import HotelCard from '../../components/hotel/HotelCard';
import HotelSearchForm from '../../components/hotel/HotelSearchForm';
import HotelFilters from '../../components/hotel/HotelFilters';

export default function HotelsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const city = searchParams.get('city') || '';

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const res = await hotelsApi.list(city);
        setHotels(res.data);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, [city]);

  const handleSearch = (values) => {
    const params = {};
    if (values.city) params.city = values.city;
    setSearchParams(params);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <HotelSearchForm initialCity={city} onSearch={handleSearch} />
      <div className="mt-6 flex gap-6">
        <div className="w-72 hidden lg:block">
          <HotelFilters />
        </div>
        <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading && <p>Loading hotels…</p>}
          {!loading &&
            hotels.map((h) => (
              <HotelCard
                key={h._id}
                hotel={h}
                onClick={() => navigate(`/hotels/${h._id}`)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
