import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardTabs = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 pt-1 border-b border-slate-100 flex items-center justify-between bg-white">
      <div className="flex gap-8 text-[14px] overflow-x-auto pb-0 hide-scrollbar">
        {['Overview', 'Basic Details', 'About Project', 'Amenities', 'Floor Plan', 'Nearby Locations', 'Media', 'Reviews'].map((tab, i) => {
            if(i==0) {
                 return (
            <div 
              key={tab} 
              className={`py-4 cursor-pointer relative whitespace-nowrap transition-colors block ${i === 0 ? 'text-blue-600 font-bold' : 'font-medium'}`}
            >
              {tab}
              {i === 0 && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-full"></div>}
            </div>
          );
            }
            else{
          const link = "/" + tab.toLowerCase().replace(/\s+/g, '-');
          return (
            <div 
              key={tab} 
              onClick={() => navigate(link)}
              className={`py-4 cursor-pointer relative whitespace-nowrap transition-colors block ${i === 0 ? 'text-blue-600 font-bold' : 'font-medium'}`}
            >
              {tab}
              {i === 0 && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-full"></div>}
            </div>
          );}
        })}
      </div>
      <div className="pl-4 h-full flex items-center py-2">
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center cursor-pointer hover:bg-slate-100">
          <ArrowRight className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default DashboardTabs;
