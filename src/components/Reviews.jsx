import React from 'react';
import { Wrench, Home, Settings, Star } from 'lucide-react';

const RatingCircle = ({ label, Icon, percent }) => {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex items-center gap-5">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg className="absolute w-full h-full rotate-[-90deg] overflow-visible">
          <circle cx="32" cy="32" r={radius} stroke="#e2e8f0" strokeWidth="5" fill="transparent" />
          <circle cx="32" cy="32" r={radius} stroke="#3b82f6" strokeWidth="5" fill="transparent" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <Icon className="text-blue-500 w-6 h-6 z-10" />
      </div>
      <div>
        <p className="text-[15px] font-black text-slate-800 leading-none">4.0 out of 5</p>
        <p className="text-[13px] font-bold text-blue-500 mt-1">{label}</p>
      </div>
    </div>
  );
};

const ReviewCard = ({ name }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden group">
    <div>
      <h4 className="text-[15px] font-black text-red-500">{name}</h4>
      <div className="flex items-center gap-2 mt-1.5">
        <span className="text-[12px] font-bold">Overall Rating:</span>
        <div className="flex text-amber-400">
          {[...Array(4)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
        </div>
      </div>
    </div>
    <p className="text-[12px] font-bold">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
    
    <div className="flex gap-3 pt-2">
      <button className="flex-1 py-2 bg-[#2196f3] text-white text-[12px] font-bold rounded-lg transition-all hover:bg-blue-600 shadow-sm shadow-blue-200">Approve</button>
      <button className="flex-1 py-2 border border-red-500 text-red-500 text-[12px] font-bold rounded-lg transition-all hover:bg-red-50">Reject</button>
    </div>
  </div>
);

const Reviews = () => {
  return (
    <div className="p-6">
      <h3 className="text-[16px] font-bold text-slate-800 mb-5">Ratings & Reviews</h3>
      <div className="bg-white border border-slate-100 rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 px-4">
          <RatingCircle label="Construction" Icon={Wrench} percent={80} />
          <RatingCircle label="Connectivity" Icon={Home} percent={80} />
          <RatingCircle label="Management" Icon={Settings} percent={80} />
        </div>
        <div className="space-y-4 relative">
          <p className="text-[14px] font-bold text-slate-800">Pending Reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ReviewCard name="Atul Kumar Patel" />
            <ReviewCard name="Atul Kumar Patel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
