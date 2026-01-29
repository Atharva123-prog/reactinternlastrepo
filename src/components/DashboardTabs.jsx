import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const tabs = [
  { name: 'Overview', path: '.' }, 
  { name: 'Basic Details', path: 'basic-details' },
  { name: 'About Project', path: 'about-project' },
  { name: 'Amenities', path: 'amenities' },
  { name: 'Floor Plan', path: 'floor-plan' },
  { name: 'Nearby Locations', path: 'nearby-locations' },
  { name: 'Media', path: 'media' },
  { name: 'Reviews', path: 'reviews' }
];

const DashboardTabs = () => {
  return (
    <div className="px-6 pt-1 border-b border-slate-100 flex items-center justify-between bg-white">
      <div className="flex gap-8 text-[14px] overflow-x-auto pb-0 hide-scrollbar">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            end={tab.path === '.'} 
            className={({ isActive }) =>
              `py-4 cursor-pointer relative whitespace-nowrap transition-colors block ${
                isActive ? 'text-blue-600 ' : '  hover:text-slate-800'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {tab.name}
                {isActive && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-full"></div>}
              </>
            )}
          </NavLink>
        ))}
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