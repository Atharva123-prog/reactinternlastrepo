import React from 'react';
import { Building2, IndianRupee, PieChart, Scan, MapPin, Phone, FileText, Download, Heart, IdCard, Calendar, Layers, Copy } from 'lucide-react';

const ProjectProfileCard = () => {
  const handleMapClick = () => {
    const address = "Jalpura, Near Ace City, Sector -1, Noida Extension, G.B. Nagar, (UP.)";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <div className="col-span-12 xl:col-span-3">
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      
        <div className="flex gap-3 mb-5">
          <div className="w-[60px] h-[60px] border border-slate-200 rounded-lg flex items-center justify-center p-1 bg-white shrink-0">
            <img src="src/components/luckyhomes.png" alt="logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-[16px] font-bold text-[#1e293b] leading-tight">Lucky Homes</h2>
            <p className="text-[12px] leading-snug mt-1">Experience Ultra Luxury Living in Noida Extension</p>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-start">
            <div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><Building2 className="w-4 h-4" strokeWidth={1.5} /><span>Builder:</span></div>
            <span className="text-[#0256a1] text-[12px] font-medium cursor-pointer hover:underline">SR Developer Group</span>
          </div>
          <div className="flex items-center">
            <div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><IndianRupee className="w-4 h-4" strokeWidth={1.5} /><span>Price:</span></div>
            <span className="text-[#ef4444] text-[14px] font-bold">₹1.19 Cr-₹2.76 Cr</span>
          </div>
          <div className="flex items-center">
            <div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><PieChart className="w-4 h-4" strokeWidth={1.5} /><span>Type:</span></div>
            <span className="text-[#0f172a] text-[13px] font-medium">2, 3 & 4 BHK Flat</span>
          </div>
          <div className="flex items-center">
            <div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><Scan className="w-4 h-4" strokeWidth={1.5} /><span>Area:</span></div>
            <span className="text-[#0f172a] text-[13px] font-medium">1030 - 2200 sq. Ft.</span>
          </div>
          <div className="flex items-start pt-0.5">
            <div className="w-[130px] shrink-0 flex items-start gap-2 text-[#64748b] text-[13px] pt-0.5"><MapPin className="w-4 h-4" strokeWidth={1.5} /><span>Location:</span></div>
            <div className="flex-1">
              <p className="text-[#0f172a] text-[13px] font-medium leading-snug">Jalpura, Near Ace City, Sector -1, Noida Extension, G.B. Nagar, (UP.)</p>
              <button onClick={handleMapClick} className="bg-[#2196f3] hover:bg-blue-600 text-white text-[11px] px-3 py-1.5 rounded-[4px] mt-2 font-medium transition-colors">See on Map</button>
            </div>
          </div>
          <div className="flex items-center pt-1.5">
            <div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><Phone className="w-4 h-4" strokeWidth={1.5} /><span>Contact No:</span></div>
            <span className="text-[#0f172a] text-[13px] font-medium">+91 7984563210</span>
          </div>
          <div className="flex items-center">
            <div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><FileText className="w-4 h-4" strokeWidth={1.5} /><span>Brochure:</span></div>
            <a href="/brochure-preview" className="flex items-center gap-1 text-[#0f172a] text-[13px] hover:text-blue-600 transition-colors group"><span>brochure.pdf</span><Download className="w-3.5 h-3.5 text-[#64748b] group-hover:text-blue-600" /></a>
          </div>
          <div className="flex items-center">
            <div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><Heart className="w-4 h-4" strokeWidth={1.5} /><span>Project Health:</span></div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div><span className="text-[#22c55e] text-[13px] font-bold">Good</span></div>
          </div>
          <div className="flex items-start">
            <div className="w-[130px] shrink-0 flex items-start gap-2 text-[#64748b] text-[13px] pt-1"><IdCard className="w-4 h-4" strokeWidth={1.5} /><span>Assign Team:</span></div>
            <ul className="text-[#0f172a] text-[13px] font-medium space-y-0.5 list-disc pl-4 marker:text-black"><li>Manish Kumar</li><li>Ashutosh Singh</li><li>Atul Verma</li></ul>
          </div>
        </div>

      
        <div className="mt-4 pt-4 border-t border-slate-200 space-y-2.5">
          <div className="flex items-center"><div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><Calendar className="w-4 h-4" strokeWidth={1.5} /><span>Pos. Year:</span></div><span className="text-[#0f172a] text-[13px] font-medium">June, 2029</span></div>
          <div className="flex items-center"><div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><Building2 className="w-4 h-4" strokeWidth={1.5} /><span>No. of Tower:</span></div><span className="text-[#0f172a] text-[13px] font-medium">5</span></div>
          <div className="flex items-center"><div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><Layers className="w-4 h-4" strokeWidth={1.5} /><span>Available Unit:</span></div><span className="text-[#0f172a] text-[13px] font-medium">155</span></div>
          <div className="flex items-center"><div className="w-[130px] shrink-0 flex items-center gap-2 text-[#64748b] text-[13px]"><Copy className="w-4 h-4" strokeWidth={1.5} /><span>Total Unit:</span></div><span className="text-[#0f172a] text-[13px] font-medium">280</span></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProfileCard;
