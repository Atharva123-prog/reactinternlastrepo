import React from 'react';
import { Search, Plus, Bell, Clock } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex-1"></div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-5 text-slate-400">
          <Search className="w-5 h-5 cursor-pointer hover:text-slate-600" />
          <Plus className="w-6 h-6 cursor-pointer hover:text-slate-600 bg-slate-100 rounded-full p-1" />
          <Bell className="w-5 h-5 cursor-pointer hover:text-slate-600" />
          <Clock className="w-5 h-5 cursor-pointer hover:text-slate-600" />
        </div>
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/src/components/harshit.jpg" className="w-9 h-9 rounded-full border border-slate-200 object-cover" alt="user" />
          <span className="text-sm font-black text-slate-700">Harshit</span>
        </div>
      </div>
    </header>
  );
};
export default Header;