// import { useState } from 'react';

// // sirf layout verify ke liye simple in-memory auth
// const fakeUserStore = { current: null };

// export default function useFakeAuth() {
//   const [user, setUser] = useState(fakeUserStore.current);

//   const loginAsDemoUser = () => {
//     const u = { name: 'Demo User', role: 'user' };
//     fakeUserStore.current = u;
//     setUser(u);
//   };

//   const loginAsAdmin = () => {
//     const u = { name: 'Admin', role: 'admin' };
//     fakeUserStore.current = u;
//     setUser(u);
//   };

//   const logout = () => {
//     fakeUserStore.current = null;
//     setUser(null);
//   };

//   return { user, loginAsDemoUser, loginAsAdmin, logout };
// }
