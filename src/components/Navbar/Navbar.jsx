import React from 'react';
import { FaBell } from 'react-icons/fa';
import { Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleOpenPOS = () => {
    navigate('/sell/pos');
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
      <div className="text-lg font-semibold">Welcome Nadeesha,</div>
      <div className="flex items-center gap-4">
        <button 
          onClick={handleOpenPOS}
          className="flex items-center gap-2 px-4 py-2 bg-white text-teal-700 hover:bg-teal-50 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Monitor className="w-5 h-5" />
          Open POS
        </button>
        <button aria-label="download" className="p-2 bg-white/10 rounded hover:bg-white/20 transition-colors">⬇</button>
        <button aria-label="notifications" className="p-2 bg-white/10 rounded hover:bg-white/20 transition-colors"><FaBell /></button>
        <div className="w-8 h-8 bg-white/20 rounded-full" />
      </div>
    </header>
  );
}
