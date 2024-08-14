import UserProvider from '@/context/UserProvider';
import React from 'react';

const Providers = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
