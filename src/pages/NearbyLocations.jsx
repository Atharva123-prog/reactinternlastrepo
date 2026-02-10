import React from 'react';
import { 
  Hospital, 
  GraduationCap, 
  TrainFront, 
  Plane, 
  ShoppingBag, 
  BusFront, 
  Train 
} from 'lucide-react';

const LocationItem = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-4">
   
    <div className="w-[42px] h-[42px] rounded-full bg-[#e0f2fe] flex items-center justify-center shrink-0">
      
      <Icon className="w-5 h-5 text-[#0284c7] stroke-[1.5]" />
    </div>
    
    
    <span className="text-[15px] font-medium text-black font-inter whitespace-nowrap">
      {label}
    </span>
  </div>
);

const NearbyLocations = () => {

  const locationsList = [
    // Row 1
    { icon: Hospital, label: "Venkateshwar Hospital - 2 mins" },
    { icon: Hospital, label: "City Hospital – 7 mins" },
    
    // Row 2
    { icon: GraduationCap, label: "Central Public School – 5 mins" },
    { icon: ShoppingBag, label: "Local Market – 2 mins" },
    
    // Row 3
    { icon: TrainFront, label: "Railway Station – 15 mins" },
    { icon: BusFront, label: "Bus Stand – 3 mins" },
    
    // Row 4
    { icon: Plane, label: "Airport – 25–30 mins" },
    { icon: Train, label: "Metro Station – 10 mins" },

    { icon: Hospital, label: "Venkateshwar Hospital - 2 mins" },
    { icon: Hospital, label: "City Hospital – 7 mins" },
    { icon: GraduationCap, label: "Central Public School – 5 mins" },
    { icon: ShoppingBag, label: "Local Market – 2 mins" },
    { icon: TrainFront, label: "Railway Station – 15 mins" },
    { icon: BusFront, label: "Bus Stand – 3 mins" },
    { icon: Plane, label: "Airport – 25–30 mins" },
    { icon: Train, label: "Metro Station – 10 mins" },
  ];

  return (
   
    <div className="p-8 pb-20 bg-white min-h-screen font-inter">
      <h3 className="text-[16px] font-bold text-black mb-6">Nearby Locations</h3>
      
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12 max-w-4xl">
        {locationsList.map((item, index) => (
          <LocationItem key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default NearbyLocations;