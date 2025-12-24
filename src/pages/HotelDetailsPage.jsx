import { useParams } from 'react-router-dom';

export default function HotelDetailsPage() {
  const { id } = useParams();
  return (
    <section className="page">
      <h1>Hotel Details (Public)</h1>
      <p>Hotel ID: {id}</p>
    </section>
  );
}
