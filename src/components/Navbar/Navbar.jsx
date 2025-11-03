import React from 'react';
import { FaBell } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
      <div className="text-lg font-semibold">Welcome Nadeesha,</div>
      <div className="flex items-center gap-4">
        <button aria-label="download" className="p-2 bg-white/10 rounded">⬇</button>
        <button aria-label="notifications" className="p-2 bg-white/10 rounded"><FaBell /></button>
        <div className="w-8 h-8 bg-white/20 rounded-full" />
      </div>
    </header>
  );
}
