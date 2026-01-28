import React from 'react';
import { Building2, TrendingUp, ArrowRight, Heart } from 'lucide-react';

const StatBox = ({ label, val, icon: Icon, iconBg, cardBg }) => (
  <div className={`${cardBg} p-5 rounded-xl border border-slate-50 flex items-center justify-between min-h-[100px] transition-transform hover:-translate-y-1 duration-300`}>
    <div className={`${iconBg} text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md shadow-blue-900/5`}>
      <Icon className="w-6 h-6" />
    </div>
    <div className="text-right flex flex-col items-end">
      <p className="text-3xl font-black text-slate-900 leading-none tracking-tight">{val}</p>
      <p className="text-[12px] font-bold text-slate-500 mt-2">{label}</p>
    </div>
  </div>
);

const DashboardStats = () => {
  return (
    <div className="p-6 border-b border-slate-100 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <StatBox label="Total Units" val="255" icon={Building2} iconBg="bg-[#0055a5]" cardBg="bg-[#f0f7ff]" />
        <StatBox label="Available Units" val="120" icon={Building2} iconBg="bg-[#fbbd05]" cardBg="bg-[#fffdf2]" />
        <StatBox label="Sold Units" val="135" icon={Building2} iconBg="bg-[#00ad33]" cardBg="bg-[#f3fff6]" />
        <StatBox label="Total Sales Value" val="2.3 Cr" icon={TrendingUp} iconBg="bg-[#ef4444]" cardBg="bg-[#fff5f5]" />
        <StatBox label="Conversion Rate" val="15%" icon={ArrowRight} iconBg="bg-[#f000b8]" cardBg="bg-[#fff1fd]" />
        <StatBox label="Project Health" val="Average" icon={Heart} iconBg="bg-[#9c27b0]" cardBg="bg-[#fbf4ff]" />
      </div>
    </div>
  );
};

export default DashboardStats;