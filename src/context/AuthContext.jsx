import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // This state is new - it will help trigger a refetch
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get('/api/user/me');
        setUser(res.data.user);
        setIsAuthenticated(true);
      } catch (err) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [isAuthenticated]); // <-- This now runs when isAuthenticated changes

  const signup = async (name, email, password) => {
    await api.post('/api/auth/signup', { name, email, password });
  };

  const login = async (email, password) => {
    // This function's ONLY job is to perform the login request.
    await api.post('/api/auth/login', { email, password });
    // After success, we update our trigger state.
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await api.post('/api/auth/logout');
    } catch (err) {
      console.error('Logout failed:', err);
    } finally {
      // Always clear state on logout
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const forgotPassword = async (email) => {
    return api.post('/api/auth/forgot-password', { email });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, signup, login, logout, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



// import { createContext, useContext, useState, useEffect } from 'react';
// import api from '../services/api';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

 
//   const signup = async (name, email, password) => {
//     await api.post('/api/auth/signup', { name, email, password });
//   };

//   const login = async (email, password) => {
//     await api.post('/api/auth/login', { email, password });
//     const res = await api.get('api/user/me');
//     setUser(res.data.user);
//   };

//    useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const res = await api.get('/api/user/me');
//         setUser(res.data.user);
//       } catch (err) {
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     checkAuth();
//   }, []);


//  const logout = async () => {
//   try {
//     await api.post('/api/auth/logout');
//     setUser(null);
//   } catch (err) {
//     console.error('Logout failed:', err);
//   }
// };

// const forgotPassword = async (email) => {
//     return api.post('/api/auth/forgot-password', { email });
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, signup, login, logout, forgotPassword }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


