import React from 'react';
import { Star } from 'lucide-react';

export const StatBox = ({ label, val, icon: Icon, iconBg, cardBg }) => (
  <div className={`${cardBg} p-5 rounded-xl border border-slate-50 flex items-center justify-between min-h-[100px] transition-transform hover:-translate-y-1 duration-300`}>
    <div className={`${iconBg} text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md shadow-blue-900/5`}><Icon className="w-6 h-6" /></div>
    <div className="text-right flex flex-col items-end"><p className="text-3xl font-black text-slate-900 leading-none tracking-tight">{val}</p><p className="text-[12px] font-bold text-slate-500 mt-2">{label}</p></div>
  </div>
);

export const FunnelCol = ({ label, fill, color }) => (
  <div className="flex-1 flex flex-col items-center min-w-[60px]">
    <span className="text-[12px] font-bold text-slate-700 mb-3 whitespace-nowrap">{label}</span>
    <div className="flex-1 w-full flex flex-col gap-1.5 h-48 lg:h-auto">{[...Array(10)].map((_, i) => (<div key={i} className={`flex-1 w-full rounded-[2px] transition-all duration-300 ${i < fill ? color : 'bg-[#f1f5f9]'}`}></div>))}</div>
  </div>
);

export const TowerCard = ({ name, btnText, bgClass, btnClass, floors, bhk2, bhk3, bhk4 }) => (
  <div className={`${bgClass} p-5 rounded-xl`}>
    <div className="flex justify-between items-center mb-5"><h4 className="font-bold text-slate-900 text-[16px]">{name}</h4><button className={`text-[12px] px-3 py-1.5 rounded-[4px] font-medium transition-all ${btnClass}`}>{btnText}</button></div>
    <div className="space-y-2.5">
      <div className="flex justify-between items-center text-[14px]"><span className="text-[#64748b] font-medium">Total Floors:</span><span className="text-[#1e293b] font-bold">{floors}</span></div>
      <div className="flex justify-between items-center text-[14px]"><span className="text-[#64748b] font-medium">2 BHK:</span><span className="text-[#1e293b] font-bold">{bhk2}</span></div>
      <div className="flex justify-between items-center text-[14px]"><span className="text-[#64748b] font-medium">3 BHK:</span><span className="text-[#1e293b] font-bold">{bhk3}</span></div>
      <div className="flex justify-between items-center text-[14px]"><span className="text-[#64748b] font-medium">4 BHK:</span><span className="text-[#1e293b] font-bold">{bhk4}</span></div>
    </div>
  </div>
);

export const SimpleStat = ({ label, val, Icon, bg, iconBg }) => (
  <div className={`${bg} p-5 rounded-xl border border-slate-50 flex items-center justify-between min-h-[90px]`}>
    <div className={`${iconBg} text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm`}><Icon className="w-5 h-5" /></div>
    <div className="text-right flex flex-col items-end"><p className="text-2xl font-black text-slate-800 leading-none">{val}</p><p className="text-[11px] font-bold text-slate-400 mt-1">{label}</p></div>
  </div>
);

export const RatingCircle = ({ label, Icon, percent }) => {
    const radius = 28; const circumference = 2 * Math.PI * radius; const offset = circumference - (percent / 100) * circumference;
    return (
        <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="absolute w-full h-full rotate-[-90deg] overflow-visible"><circle cx="32" cy="32" r={radius} stroke="#e2e8f0" strokeWidth="5" fill="transparent" /><circle cx="32" cy="32" r={radius} stroke="#3b82f6" strokeWidth="5" fill="transparent" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" /></svg><Icon className="text-blue-500 w-6 h-6 z-10" />
            </div>
            <div><p className="text-[15px] font-black text-slate-800 leading-none">4.0 out of 5</p><p className="text-[13px] font-bold text-blue-500 mt-1">{label}</p></div>
        </div>
    );
};

export const ReviewCard = ({ name }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden group">
    <div><h4 className="text-[15px] font-black text-red-500">{name}</h4><div className="flex items-center gap-2 mt-1.5"><span className="text-[12px] font-bold text-slate-700">Overall Rating:</span><div className="flex text-amber-400"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div></div></div>
    <p className="text-[12px] font-medium text-slate-500 leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
    <div className="flex gap-3 pt-2"><button className="flex-1 py-2 bg-[#2196f3] text-white text-[12px] font-bold rounded-lg transition-all hover:bg-blue-600 shadow-sm shadow-blue-200">Approve</button><button className="flex-1 py-2 border border-red-500 text-red-500 text-[12px] font-bold rounded-lg transition-all hover:bg-red-50">Reject</button></div>
  </div>
);