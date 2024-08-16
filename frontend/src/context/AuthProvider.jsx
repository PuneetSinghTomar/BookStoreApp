// import React, { createContext, useContext, useState } from 'react';

// // Create the AuthContext
// export const AuthContext = createContext();

// // AuthProvider component that provides the AuthContext to its children
// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem('Users');
// const [authUser, setAuthUser] = useState( initialAuthUser ? JSON.parse(initialAuthUser) : undefined);

//    return (
//             <AuthContext.Provider value={[ authUser, setAuthUser ]}>
//             {children}
//             </AuthContext.Provider>
//         );
// }

// // Custom hook to use the AuthContext
// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem('Users');
  const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined);

  

  return (

    <AuthContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);