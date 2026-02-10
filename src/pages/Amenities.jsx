import React from 'react';
import { 
  ShieldCheck, 
  Cctv, 
  Baby, 
  Trees, 
  Waves, 
  CarFront, 
  ArrowUpFromLine, 
  Flame 
} from 'lucide-react';


const AmenityItem = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3">
   
    <div className="w-[42px] h-[42px] rounded-full bg-[#e0f2fe] flex items-center justify-center shrink-0">
   
      <Icon className="w-5 h-5 text-[#0284c7] stroke-[1.5]" />
    </div>
    
   
    <span className="text-[15px] font-medium text-black font-inter whitespace-nowrap">
      {label}
    </span>
  </div>
);

const Amenities = () => {

  const amenitiesList = [
    // Row 1
    { icon: ShieldCheck, label: "Security" },
    { icon: Baby, label: "Kids Play Area" },
    { icon: Trees, label: "Garden / Park" },
    { icon: ArrowUpFromLine, label: "Lift" },

    // Row 2
    { icon: Cctv, label: "CCTV" },
    { icon: Waves, label: "Swimming Pool" },
    { icon: CarFront, label: "Parking" },
    { icon: Flame, label: "Fire Safety" },

    
    { icon: ShieldCheck, label: "Security" },
    { icon: Baby, label: "Kids Play Area" },
    { icon: Trees, label: "Garden / Park" },
    { icon: ArrowUpFromLine, label: "Lift" },

    { icon: Cctv, label: "CCTV" },
    { icon: Waves, label: "Swimming Pool" },
    { icon: CarFront, label: "Parking" },
    { icon: Flame, label: "Fire Safety" },

    { icon: ShieldCheck, label: "Security" },
    { icon: Baby, label: "Kids Play Area" },
    { icon: Trees, label: "Garden / Park" },
    { icon: ArrowUpFromLine, label: "Lift" },

    { icon: Cctv, label: "CCTV" },
    { icon: Waves, label: "Swimming Pool" },
    { icon: CarFront, label: "Parking" },
    { icon: Flame, label: "Fire Safety" },

    { icon: ShieldCheck, label: "Security" },
    { icon: Baby, label: "Kids Play Area" },
    { icon: Trees, label: "Garden / Park" },
    { icon: ArrowUpFromLine, label: "Lift" },

    { icon: Cctv, label: "CCTV" },
    { icon: Waves, label: "Swimming Pool" },
    { icon: CarFront, label: "Parking" },
    { icon: Flame, label: "Fire Safety" },
  ];

  return (
    
    <div className="p-8 pb-20 bg-white min-h-screen font-inter">
      <h3 className="text-[16px] font-bold text-black mb-6">Amenities</h3>
      
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
        {amenitiesList.map((item, index) => (
          <AmenityItem key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Amenities;