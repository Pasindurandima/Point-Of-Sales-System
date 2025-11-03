import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gradient-to-r from-teal-600 to-teal-400 min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
