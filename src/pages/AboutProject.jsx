import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SparkleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black shrink-0 mt-0.5">
    <path d="M12 2L13.8 8.2H20L15 12L16.8 18.2L12 14.4L7.2 18.2L9 12L4 8.2H10.2L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SpecRow = ({ label, value }) => (
  <div className="flex items-start py-1.5 text-[14px] font-inter">
    <div className="w-[220px] shrink-0 text-slate-700 font-normal leading-[17px]">
      {label}
    </div>
    <div className="flex-1 text-black font-medium leading-[17px]">
      {value}
    </div>
  </div>
);

const AboutProject = () => {
  const [specExpanded, setSpecExpanded] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  return (
    <div className="p-8 space-y-8 bg-white min-h-screen font-inter">
      
      {/* 1. KEY FEATURES SECTION */}
      <div className="bg-[#fffdf2] border border-black/5 rounded-[10px] p-6">
        <h3 className="text-[15px] font-bold text-black mb-4 leading-[18px]">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          {[
            "Low Density Project", "All Accessories are branded/Trusted",
            "Hi-street Commercial", "Group Housing Maintenance by Reputed Agency",
            "Earthquake Resistant Structure", "Well Maintained Gated Society with 3 Tier Security",
            "Hi End Luxury Finish", "Lab Tested Material used in construction",
            "Parking for All", "Every Unit with Widest Balconies",
            "24×7 Treated Water Supply", "Ramps Comfortable for Physically challenged And Sr. Citizens"
          ].map((feature, index) => (
            <div key={index} className="flex gap-3 items-start text-[14px] text-black">
              <SparkleIcon /> <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. PROPERTY SPECIFICATION SECTION */}
      <div>
        <h3 className="text-[15px] font-bold text-black mb-3 px-1">Property Specification:</h3>
        <div className="border border-black/5 rounded-[10px] p-6 bg-white shadow-sm overflow-hidden">
          <div className="space-y-0.5">
            <SpecRow label="Flooring Type" value="Vitrified Tiles" />
            <SpecRow label="Wall Finishing:" value="Plastic Emulsion Paint with Smooth Finish" />
            <SpecRow label="Kitchen Type:" value="Modular Kitchen with Granite Countertop" />
            <SpecRow label="Bathroom Fittings:" value="Jaquar / Hindware Fittings (Premium Quality)" />
            <SpecRow label="Windows & Doors:" value="UPVC Sliding Windows & Hardwood Frame Doors" />
            <SpecRow label="Electrical Fittings:" value="Concealed Wiring, Modular Switches, Inverter Provision" />
            <SpecRow label="Water Source:" value="24×7 Municipal Water Supply + Borewell Backup" />
            <SpecRow label="Balcony Flooring" value="Vitrified Tiles" />
            <SpecRow label="Bathroom Flooring" value="Plastic Emulsion Paint with Smooth Finish" />
            <SpecRow label="Ceiling Finish" value="Modular Kitchen with Granite Countertop" />
            <SpecRow label="Power Backup" value="Jaquar / Hindware Fittings (Premium Quality)" />
            <SpecRow label="Lift Facility" value="UPVC Sliding Windows & Hardwood Frame Doors" />
            <SpecRow label="Security System" value="Concealed Wiring, Modular Switches, Inverter Provision" />
            <SpecRow label="Fire Safety" value="24×7 Municipal Water Supply + Borewell Backup" />
            
            
            <div className={`transition-all duration-300 ${specExpanded ? 'mt-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            
              {specExpanded && <div className="py-2 text-slate-400 text-[13px] italic"></div>}
            </div>
          </div>

          <button 
            onClick={() => setSpecExpanded(!specExpanded)}
            className="flex items-center gap-1 text-[#005897] text-[15px] font-normal mt-5 hover:underline transition-all"
          >
            {specExpanded ? 'View Less' : 'View More'} 
            {specExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

     
      <div>
        <h3 className="text-[15px] font-bold text-black mb-3 px-1">About Project</h3>
        <div className="border border-black/5 rounded-[10px] p-6 bg-white relative">
          <div className="space-y-4 text-[14px] text-black font-normal leading-[1.6] text-justify">
            <p>
              Introducing a thoughtfully planned residential community designed to offer a modern lifestyle with comfort, 
              convenience, and security. Spread across a beautifully landscaped campus, the project features well-designed homes, 
              premium amenities, and excellent connectivity to key locations.
            </p>
            <p>
              Crafted with high-quality construction standards and smart architectural planning, each home is designed to ensure 
              maximum space utilization, abundant natural light, and proper ventilation.
            </p>
            <p>
              The project offers wide open spaces, landscaped green zones, and well-planned internal roads, creating a peaceful 
              and healthy living environment. A range of lifestyle amenities such as a clubhouse, landscaped gardens, children’s
              play area, and dedicated recreational spaces enhance the overall living experience for residents of all age groups.
            </p>
            <p>
              Safety and convenience are given top priority with 24×7 security surveillance, controlled access entry, well-lit common areas, dedicated 
              parking facilities, power backup for common areas, and a reliable water supply system. The project is
            </p>

           
            <div className={`transition-all duration-300 ${aboutExpanded ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
             
            </div>
          </div>

        
          <button 
            onClick={() => setAboutExpanded(!aboutExpanded)}
            className="flex items-center gap-1 text-[#005897] text-[15px] font-normal mt-2 hover:underline transition-all"
          >
            View More
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default AboutProject;