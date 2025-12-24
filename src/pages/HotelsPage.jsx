const hotels = [
  {
    id: '1',
    name: 'The Taj Mahal Palace',
    location: 'Colaba, Mumbai',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    facebookUrl: 'https://facebook.com/tajhotels',
    instagramUrl: 'https://instagram.com/tajhotels',
    websiteUrl: 'https://www.tajhotels.com/',
  },
  {
    id: '2',
    name: 'ITC Rajputana',
    location: 'Jaipur, Rajasthan',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    facebookUrl: 'https://facebook.com/itchotels',
    instagramUrl: 'https://instagram.com/itchotels',
    websiteUrl: 'https://www.itchotels.com/',
  },
];

export default function HotelsPage() {
  return (
    <section className="page">
      <h1>Hotels</h1>

      <div
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          marginTop: '1rem',
        }}
      >
        {hotels.map((h) => (
          <div
            key={h.id}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '0.75rem',
              background: 'white',
            }}
          >
            {h.image && (
              <img
                src={h.image}
                alt={h.name}
                style={{
                  width: '100%',
                  height: '160px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
              />
            )}

            <h3 style={{ marginTop: '0.5rem', fontWeight: 600 }}>{h.name}</h3>
            <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>{h.location}</p>
            <p style={{ color: '#ea580c', fontWeight: 600 }}>
              ₹{h.price.toLocaleString()}{' '}
              <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>/ night</span>
            </p>

            {/* Social icons row */}
            <div
              style={{
                marginTop: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                fontSize: '1.1rem',
              }}
            >
              {h.facebookUrl && (
                <a
                  href={h.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#3b82f6' }}
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              )}

              {h.instagramUrl && (
                <a
                  href={h.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ec4899' }}
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              )}

              {h.websiteUrl && (
                <a
                  href={h.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#4b5563' }}
                  title="Website"
                >
                  <i className="fas fa-globe"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
