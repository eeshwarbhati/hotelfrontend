import { Navigate, Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import useFakeAuth from '../shared/useFakeAuth';

export default function PrivateLayout() {
  const { user } = useFakeAuth();
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="app-root">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
