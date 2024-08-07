// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     setIsAuthenticated(!!token);
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('authToken', token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem('authToken');
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




// 

// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   // Check token on component mount
//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       setIsAuthenticated(true);
//       // Assuming role is stored in localStorage for simplicity
//       const role = localStorage.getItem('userRole');
//       setIsAdmin(role === 'admin');
//     }
//   }, []);

//   // Login function to set token and role
//   const login = (token, role) => {
//     localStorage.setItem('authToken', token);
//     localStorage.setItem('userRole', role);
//     setIsAuthenticated(true);
//     setIsAdmin(role === 'admin');
//   };

//   // Logout function to clear token and role
//   const logout = () => {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('userRole');
//     setIsAuthenticated(false);
//     setIsAdmin(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem('authToken'));
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('userRole') === 'admin');

  useEffect(() => {
    console.log('AuthProvider mounted');
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole');
    if (token) {
      setIsAuthenticated(true);
      if (role === 'admin') {
        setIsAdmin(true);
      }
    }
  }, []);

  const login = (token, role) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userRole', role);
    setIsAuthenticated(true);
    setIsAdmin(role === 'admin');
    console.log('User logged in', { isAuthenticated: true, isAdmin: role === 'admin' });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setIsAdmin(false);
    console.log('User logged out');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

