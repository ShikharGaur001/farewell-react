import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(() => {
    const savedIsUser = localStorage.getItem('isUser');
    return savedIsUser ? JSON.parse(savedIsUser) : false;
  });

  useEffect(() => {
    localStorage.setItem('isUser', JSON.stringify(isUser));
  }, [isUser]);

  return (
    <GlobalContext.Provider value={{ isUser, setIsUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
