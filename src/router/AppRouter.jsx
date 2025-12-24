import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import AdminLayout from '../layouts/AdminLayout';

import HotelsPage from '../features/hotels/HotelsPage';
import HotelDetailsPage from '../features/hotels/HotelDetailsPage';

import LoginPage from '../features/auth/LoginPage';
import SignupPage from '../features/auth/SignupPage';

import MyBookingsPage from '../features/bookings/MyBookingsPage';
import BookingSuccessPage from '../features/bookings/BookingSuccessPage';
import BookingFailurePage from '../features/bookings/BookingFailurePage';

import AdminRegistrationsPage from '../features/admin/AdminRegistrationsPage';
import AdminHotelsPage from '../features/admin/AdminHotelsPage';

import HotelDashboardPage from '../features/owner/HotelDashboardPage';

export default function AppRouter() {
  return (
    <Routes>
      {/* Public layout – header/footer same, routes different */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HotelsPage />} />
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />

        {/* Flights / trains ke liye future pages yahin add karo */}
        {/* <Route path="/flights" element={<FlightsPage />} /> */}
        {/* <Route path="/trains" element={<TrainsPage />} /> */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/booking/success" element={<BookingSuccessPage />} />
        <Route path="/booking/failure" element={<BookingFailurePage />} />
      </Route>

      {/* Private (logged‑in user) */}
      <Route element={<PrivateLayout />}>
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        {/* future: /profile, /wallet, etc. */}
      </Route>

      {/* Hotel‑owner dashboard */}
      <Route element={<PrivateLayout />}>
        <Route path="/owner/dashboard" element={<HotelDashboardPage />} />
      </Route>

      {/* Admin section */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/registrations" element={<AdminRegistrationsPage />} />
        <Route path="/admin/hotels" element={<AdminHotelsPage />} />
      </Route>
    </Routes>
  );
}
