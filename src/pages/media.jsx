import React, { useState } from 'react';

const Media = () => {
  const [activeTab, setActiveTab] = useState('Photos');


  const placeholderImage = "src/pages/build.jpg"; 

  
  const mediaItems = Array(16).fill(placeholderImage);

  return (
  
    <div className="p-8 pb-20 bg-white min-h-screen font-inter text-slate-900">
      
    
      <div className="flex justify-between items-center mb-6">
        
        {/* Tabs: Photos | Videos */}
        <div className="flex gap-6 text-[16px]">
          <button 
            onClick={() => setActiveTab('Photos')}
            className={`font-bold transition-colors ${
              activeTab === 'Photos' ? 'text-[#238EEB]' : 'text-black'
            }`}
          >
            Photos
          </button>
          <button 
            onClick={() => setActiveTab('Videos')}
            className={`font-medium transition-colors ${
              activeTab === 'Videos' ? 'text-[#238EEB]' : 'text-black'
            }`}
          >
            Videos
          </button>
        </div>

        {/* Add Photo Button */}
        <button className="bg-[#238EEB] hover:bg-[#1a7bc7] text-white text-[14px] font-medium px-4 py-2 rounded-[6px] transition-colors">
          Add Photo
        </button>
      </div>

      {/* Grid Section */}
      {activeTab === 'Photos' ? (
       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaItems.map((imgSrc, index) => (
            <div key={index} className="aspect-[4/3] w-full overflow-hidden rounded-[8px]">
              <img 
                src={imgSrc} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      ) : (
       
        <div className="py-20 text-center text-slate-500 italic">
          No videos available.
        </div>
      )}

    </div>
  );
};

export default Media;