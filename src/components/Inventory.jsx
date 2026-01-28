import React from 'react';
import { ChevronRight } from 'lucide-react';

const TowerCard = ({ name, btnText, bgClass, btnClass, floors, bhk2, bhk3, bhk4 }) => (
  <div className={`${bgClass} p-5 rounded-xl`}>
    <div className="flex justify-between items-center mb-5">
      <h4 className="font-bold text-slate-900 text-[16px]">{name}</h4>
      <button className={`text-[12px] px-3 py-1.5 rounded-[4px] font-medium transition-all ${btnClass}`}>{btnText}</button>
    </div>
    <div className="space-y-2.5">
      <div className="flex justify-between items-center text-[14px]"><span className="text-[#64748b] font-medium">Total Floors:</span><span className="text-[#1e293b] font-bold">{floors}</span></div>
      <div className="flex justify-between items-center text-[14px]"><span className="text-[#64748b] font-medium">2 BHK:</span><span className="text-[#1e293b] font-bold">{bhk2}</span></div>
      <div className="flex justify-between items-center text-[14px]"><span className="text-[#64748b] font-medium">3 BHK:</span><span className="text-[#1e293b] font-bold">{bhk3}</span></div>
      <div className="flex justify-between items-center text-[14px]"><span className="text-[#64748b] font-medium">4 BHK:</span><span className="text-[#1e293b] font-bold">{bhk4}</span></div>
    </div>
  </div>
);

const Inventory = () => {
  return (
    <div className="p-6 border-b border-slate-100">
      <h3 className="text-[16px] font-bold text-slate-800 mb-5">Inventory Snapshot</h3>
      <div className="bg-white border border-slate-100 rounded-2xl p-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <TowerCard name="Tower A" btnText="See Price" bgClass="bg-[#effcf5]" btnClass="bg-[#2196f3] text-white hover:bg-blue-600" floors="15" bhk2="25" bhk3="36" bhk4="Sold" />
          <TowerCard name="Tower B" btnText="Availability" bgClass="bg-[#fff5f5]" btnClass="bg-white text-[#2196f3] border border-[#2196f3] hover:bg-blue-50" floors="20" bhk2="25 Lakh" bhk3="30 Lakh" bhk4="50 Lakh" />
          <TowerCard name="Tower C" btnText="See Price" bgClass="bg-[#f0f9ff]" btnClass="bg-[#2196f3] text-white hover:bg-blue-600" floors="16" bhk2="25" bhk3="36" bhk4="Sold" />
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg shadow-slate-200 cursor-pointer z-10 hover:scale-105 transition-transform">
          <ChevronRight className="text-slate-400 w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Inventory;