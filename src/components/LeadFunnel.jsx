import React from 'react';

const FunnelCol = ({ label, fill, color }) => (
  <div className="flex-1 flex flex-col items-center min-w-[60px]">
    <span className="text-[12px] font-bold text-slate-700 mb-3 whitespace-nowrap">{label}</span>
    <div className="flex-1 w-full flex flex-col gap-1.5 h-48 lg:h-auto">
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`flex-1 w-full rounded-[2px] transition-all duration-300 ${i < fill ? color : 'bg-[#f1f5f9]'}`}></div>
      ))}
    </div>
  </div>
);

const LeadFunnel = () => {
  return (
    <div className="p-6 border-b border-slate-100">
      <h3 className="text-[16px] font-bold text-slate-800 mb-5">Lead Funnel Status</h3>
      <div className="bg-white border border-slate-100 rounded -20xl p-6 flex flex-wrap lg:flex-nowrap justify-between gap-4 h-auto lg:h-72">
        <FunnelCol label="New Leads" fill={10} color="bg-[#2196f3]" />
        <FunnelCol label="Contacted" fill={10} color="bg-[#01579b]" />
        <FunnelCol label="Site Visit" fill={6} color="bg-[#e69b00]" />
        <FunnelCol label="Negotiation" fill={9} color="bg-[#f2d024]" />
        <FunnelCol label="Booked" fill={5} color="bg-[#00a637]" />
        <FunnelCol label="Lost" fill={7} color="bg-[#f23c2d]" />
      </div>
    </div>
  );
};

export default LeadFunnel;