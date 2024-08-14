'use client';
import { UserContext } from '@/context/UserProvider';
import React, { useContext } from 'react';

const HeaderDashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="fixed top-0 bg-white/70 left-0 w-screen py-4 scroll-auto">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 flex items-center justify-center p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
            </svg>
          </div>
          <span>{user}</span>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 "
          >
            logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
