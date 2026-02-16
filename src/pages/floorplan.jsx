import React, { useState } from 'react';

// --- Helper Component for Data Rows ---
// Matches the exact alignment: Label (Gray) | Value (Black, Medium)
const DetailRow = ({ label, value }) => (
  <div className="flex items-start py-[3px] text-[14px] font-inter">
    <div className="w-[180px] shrink-0 text-[#4E5E6A] font-normal">
      {label}
    </div>
    <div className="text-black font-medium">
      {value}
    </div>
  </div>
);

const FloorPlan = () => {
  const [activeTab, setActiveTab] = useState('2 BHK');

  return (
    <div className="p-8 bg-white min-h-screen font-inter">
      
      {/* 1. Main Header */}
      <h2 className="text-[18px] font-bold text-black mb-4">Floor Plan and Units</h2>

      {/* 2. Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {['2 BHK', '3 BHK', '4 BHK'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-[14px] font-medium transition-colors relative top-[1px] ${
              activeTab === tab
                ? 'text-[#238EEB] border-b-2 border-[#238EEB]' // Active Blue
                : 'text-slate-600 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. Content Area */}
      {activeTab === '2 BHK' && (
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT COLUMN: Text Details */}
          <div className="flex-1">
            {/* Sub Header */}
            <h3 className="text-[16px] font-bold text-black mb-1">2 BHK Floor Plan</h3>
            
            {/* Price */}
            <p className="text-[16px] font-bold text-[#EB3223] mb-6">
              Price: ₹ 86.1 Lac - ₹ 1.17 Cr
            </p>

            {/* Basic Details Section */}
            <div className="mb-6">
              <h4 className="text-[14px] font-bold text-black mb-3">Basic Details</h4>
              <div className="space-y-1">
                <DetailRow label="Carpet Area:" value="780 Sq.ft. - 850 Sq.ft." />
                <DetailRow label="Area:" value="1070 Sq.ft. - 1100 Sq. ft." />
                <DetailRow label="Bedrooms:" value="2" />
                <DetailRow label="Bathrooms:" value="2" />
                <DetailRow label="Balconies:" value="1" />
                <DetailRow label="Kitchen Type:" value="Open Kitchen with Utility" />
              </div>
            </div>

            {/* Area Dimension Section */}
            <div>
              <h4 className="text-[14px] font-bold text-black mb-3">Area Dimension</h4>
              <div className="space-y-1">
                <DetailRow label="Single Bedrooms:" value="8 × 9 sq.ft" />
                <DetailRow label="Bedroom with attached" value="8 × 9 sq.ft" />
                <DetailRow label="Bathroom:" value="8 × 9 sq.ft" />
                <DetailRow label="Roof:" value="8 × 9 sq.ft" />
                <DetailRow label="Kitchen:" value="8 × 9 sq.ft" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="w-full lg:w-[450px] shrink-0">
            {/* Image Container: Rounded, Border, Padding */}
            <div className="border border-gray-200 rounded-[10px] p-2 bg-white shadow-[0_0_4px_rgba(0,0,0,0.05)]">
              {/* PLACEHOLDER IMAGE: Use your actual image source here */}
              <img
                src="src/pages/house.png" 
                alt="2 BHK Floor Plan"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
            {/* Caption */}
            <p className="text-center text-[#4E5E6A] text-[13px] italic mt-2 font-normal">
              2 BHK Floor map
            </p>
          </div>
          
        </div>
      )}

      {/* Empty States for other tabs */}
      {activeTab !== '2 BHK' && (
        <div className="py-20 text-center text-slate-400 italic">
          Content for {activeTab} coming soon...
        </div>
      )}

    </div>
  );
};

export default FloorPlan;