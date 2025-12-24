// import { Link, useNavigate } from 'react-router-dom';
// import useFakeAuth from './useFakeAuth';

// export default function Header() {
//   const { user, loginAsDemoUser, loginAsAdmin, logout } = useFakeAuth();
//   const navigate = useNavigate();

//   return (
//     <header className="header">
//       <div className="header-inner">
//         <div className="logo" onClick={() => navigate('/')}>
//           TravelStay
//         </div>

//         <nav className="nav-links">
//           <Link to="/">Hotels</Link>
//           <Link to="/my-bookings">My Bookings</Link>
//           <Link to="/owner/dashboard">Hotel Dashboard</Link>
//           <Link to="/admin/registrations">Admin</Link>
//         </nav>

//         <div className="auth-area">
//           {!user ? (
//             <>
//               <button onClick={loginAsDemoUser}>Demo User</button>
//               <button onClick={loginAsAdmin}>Demo Admin</button>
//             </>
//           ) : (
//             <>
//               <span className="user-chip">
//                 user: {user.name}
//               </span>
//               <button onClick={logout}>Logout</button>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }
