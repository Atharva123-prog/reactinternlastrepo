import React, { useState } from 'react';

const Media = () => {
  const [activeTab, setActiveTab] = useState('Photos');

  // Placeholder image resembling the skyscrapers in your screenshot
  const placeholderImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop";

  // Create an array of 16 items to match the 4x4 grid in the image
  const mediaItems = Array(16).fill(placeholderImage);

  return (
    // Added pb-20 for consistent bottom spacing
    <div className="p-8 pb-20 bg-white min-h-screen font-inter text-slate-900">
      
      {/* Header Section: Tabs on Left, Button on Right */}
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
        // 4 Columns, tight gap (gap-4)
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
        // Empty state for Videos
        <div className="py-20 text-center text-slate-500 italic">
          No videos available.
        </div>
      )}

    </div>
  );
};

export default Media;