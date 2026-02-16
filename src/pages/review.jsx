import React, { useRef } from 'react';
import { Star, CheckCircle2, MoreVertical, ChevronRight } from 'lucide-react';


const StarRating = () => (
  <div className="flex gap-[2px]">
    {[1, 2, 3, 4].map((_, i) => (
      <Star key={i} className="w-[14px] h-[14px] fill-[#FFC107] text-[#FFC107]" />
    ))}
    <Star className="w-[14px] h-[14px] text-gray-300 fill-gray-100" />
  </div>
);


const PendingReviewCard = () => (
  <div className="w-[360px] h-[240px] border border-slate-200 rounded-[12px] p-5 bg-white shrink-0 flex flex-col justify-between shadow-sm">
    <div>
      <h4 className="text-[16px] font-bold text-[#FF4444] mb-1">Atul Kumar Patel</h4>
      
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[14px] font-semibold text-black">Overall Rating:</span>
        <StarRating />
      </div>

      <p className="text-[13px] text-slate-500 leading-[1.5] line-clamp-3">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
      </p>
    </div>

    <div className="flex gap-3 mt-2">
      <button className="flex-1 bg-[#238EEB] hover:bg-[#1b7acb] text-white text-[14px] font-medium py-[8px] rounded-[6px] transition-colors">
        Approve
      </button>
      <button className="flex-1 border border-[#FF4444] text-[#FF4444] bg-white hover:bg-red-50 text-[14px] font-medium py-[8px] rounded-[6px] transition-colors">
        Reject
      </button>
    </div>
  </div>
);


const ApprovedReviewCard = () => (
  <div className="h-[200px] border border-slate-200 rounded-[12px] p-5 bg-white relative flex flex-col shadow-sm">
    {/* Header with Name, Badge, and Menu */}
    <div className="flex justify-between items-start mb-1">
      <div className="flex items-center gap-2">
        <h4 className="text-[16px] font-bold text-[#FF4444]">Atul Kumar Patel</h4>
        <CheckCircle2 className="w-[16px] h-[16px] text-[#00C853] fill-[#E8F5E9]" />
      </div>
      <button className="text-gray-400 hover:text-black p-1">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>

    <div className="flex items-center gap-2 mb-3">
      <span className="text-[14px] font-semibold text-black">Overall Rating:</span>
      <StarRating />
    </div>

    <p className="text-[13px] text-slate-500 leading-[1.5] line-clamp-4">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
    </p>
  </div>
);

const Reviews = () => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-8 pb-20 bg-white min-h-screen font-inter text-slate-900">
      
     
      <div className="mb-12 relative">
        <h3 className="text-[16px] font-bold text-black mb-5">Pending Reviews</h3>
        
       
        <div className="relative group">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          
            {[...Array(12)].map((_, index) => (
              <PendingReviewCard key={index} />
            ))}
          </div>

         
          <button 
            onClick={scrollRight}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all text-[#238EEB]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

     
      <div>
        <h3 className="text-[16px] font-bold text-black mb-5">Approved Reviews</h3>
        
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <ApprovedReviewCard key={index} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Reviews;