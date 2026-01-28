import React from 'react';
import { Building2, Check, X, IndianRupee } from 'lucide-react';

const SimpleStat = ({ label, val, Icon, bg, iconBg }) => (
  <div className={`${bg} p-5 rounded-xl border border-slate-50 flex items-center justify-between min-h-[90px]`}>
    <div className={`${iconBg} text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm`}>
      <Icon className="w-5 h-5" />
    </div>
    <div className="text-right flex flex-col items-end">
      <p className="text-2xl font-black text-slate-800 leading-none">{val}</p>
      <p className="text-[11px] font-bold text-slate-400 mt-1">{label}</p>
    </div>
  </div>
);

const BookingStatus = () => {
  return (
    <div className="p-6 border-b border-slate-100">
      <h3 className="text-[16px] font-bold text-slate-800 mb-5">Booking & Payment Status</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SimpleStat label="Total Booking" val="25" Icon={Building2} bg="bg-[#f2f8ff]" iconBg="bg-[#0055a5]" />
        <SimpleStat label="Confirmed Booking" val="18" Icon={Check} bg="bg-[#f3fff6]" iconBg="bg-[#00ad33]" />
        <SimpleStat label="Cancelled Booking" val="3" Icon={X} bg="bg-[#fff5f5]" iconBg="bg-[#ef4444]" />
        <SimpleStat label="Total Amount Received" val="90.3 Lakh" Icon={IndianRupee} bg="bg-[#f0ffff]" iconBg="bg-[#00bcd4]" />
        <SimpleStat label="Pending Amount" val="3.6 Cr" Icon={IndianRupee} bg="bg-[#fff9f2]" iconBg="bg-[#ff9800]" />
      </div>
    </div>
  );
};

export default BookingStatus;