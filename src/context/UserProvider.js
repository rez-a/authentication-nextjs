'use client';
import { whoIAm } from '@/actions/auth/admin';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

import React from 'react';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const userData = await whoIAm();
      setUser(userData);
    };

    checkUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
