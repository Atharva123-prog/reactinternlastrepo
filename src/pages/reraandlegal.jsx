import React from 'react';
import { Download } from 'lucide-react';

/* --- Helper Component for Data Rows with Tight Spacing --- */
const LegalRow = ({ label, value, isGreen, isLink }) => (
  // Fixed label width, tight py-1 spacing, precise font sizes and colors
  <div className="grid grid-cols-[180px_1fr] gap-x-4 py-1 items-start text-[14px] leading-[20px]">
    <div className="text-slate-500 font-normal">{label}</div>
    <div className={`font-medium flex items-center gap-2 ${isGreen ? 'text-[#00a300]' : 'text-slate-900'}`}>
      <span className="truncate">{value}</span>
      {/* Tiny gray download icon for links */}
      {isLink && <Download className="w-3.5 h-3.5 text-slate-400 shrink-0 cursor-pointer" />}
    </div>
  </div>
);

const ReraAndLegal = () => {
  return (
    // Added pb-20 for bottom spacing as requested previously
    <div className="p-8 pb-20 bg-white min-h-screen font-inter text-slate-900">
      <h3 className="text-[16px] font-bold mb-6">Legal Compliance & Approvals</h3>

      {/* --- Section 1: RERA Registration --- */}
      <div className="mb-8">
        {/* Tight spacing below sub-header */}
        <h4 className="text-[15px] font-bold mb-2">RERA Registration</h4>
        
        {/* Card: Thin gray border, rounded corners, tight padding (p-5) */}
        <div className="border border-slate-200 rounded-[8px] p-5 bg-white">
          {/* Grid: Tight vertical gap (gap-y-1) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-1">
            
            {/* Left Column */}
            <div>
              <LegalRow label="Approval Status:" value="Approved" isGreen />
              <LegalRow label="RERA Approval Date:" value="20 Nov 2025" />
              <LegalRow label="RERA Authority Name:" value="RERA Authority" />
            </div>

            {/* Right Column */}
            <div>
              <LegalRow label="RERA Reg. No.:" value="GGM/955/687/2025/58" />
              <LegalRow label="RERA Expiry Date" value="18 Aug 2099" />
              <LegalRow label="RERA Certificate:" value="RERA_Certificate.png" isLink />
            </div>
          </div>
          
          {/* Remark Row: Tight margin top */}
          <div className="mt-1">
             <LegalRow label="Remark:" value="when you land on a sample web page or open an email template and see." />
          </div>
        </div>
      </div>

      {/* --- Section 2: Land & Ownership Details --- */}
      <div>
        <h4 className="text-[15px] font-bold mb-2">Land & Ownership Details</h4>
        
        {/* Card: Thin gray border, rounded corners, tight padding (p-5) */}
        <div className="border border-slate-200 rounded-[8px] p-5 bg-white">
          {/* Grid: Tight vertical gap (gap-y-1) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-1">
            
            {/* Left Column */}
            <div>
              <LegalRow label="Land Title Status:" value="Clear" isGreen />
              <LegalRow label="Type of Ownership:" value="Freehold" />
              <LegalRow label="Land Title Document:" value="EC_Certificate.png" isLink />
            </div>

            {/* Right Column */}
            <div>
              <LegalRow label="Land Owner Name:" value="Mr. Shri Dhar Naydu" />
              <LegalRow label="Encumbrance Certificate (EC) Status" value="Available" />
              <LegalRow label="EC Document:" value="EC_Certificate.png" isLink />
            </div>
          </div>

          {/* Remark Row: Tight margin top */}
          <div className="mt-1">
             <LegalRow label="Remark:" value="when you land on a sample web page or open an email template and see." />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReraAndLegal;