import React from 'react';
import { Download } from 'lucide-react';

const DetailRow = ({ label, value, valueClass = "text-slate-900", isFile = false, isUser = false, isLink = false, onLinkClick }) => (

  <div className="flex items-start text-[13px] leading-6 py-1">
    

    <div className="w-[200px] shrink-0 text-slate-500 font-normal">
      {label}
    </div>
    

    <div className={`flex-1 font-medium ${valueClass}`}>
      {isFile ? (
        <div className="flex items-center gap-2 cursor-pointer group w-fit">
          <span className="underline decoration-slate-300 underline-offset-2 group-hover:text-blue-600 transition-colors">
            {value}
          </span>
          <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
        </div>
      ) : isUser ? (
        <div className="flex items-center gap-2">
          <img 
            src="src/components/harshit.jpg" 
            alt="user" 
            className="w-5 h-5 rounded-full object-cover border border-slate-200"
          />
          <span>{value}</span>
        </div>
      ) : isLink ? (
       
        <span 
          onClick={onLinkClick} 
          className="text-[#2563eb] cursor-pointer hover:underline"
        >
          {value}
        </span>
      ) : (
        value
      )}
    </div>
  </div>
);


const SubHeader = ({ title }) => (
  <div className="text-[13px] font-bold text-slate-900 mt-3 mb-1">
    {title}
  </div>
);

const DetailSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-[14px] font-bold text-slate-900 mb-2">{title}</h3>
    <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm space-y-0.5">
      {children}
    </div>
  </div>
);

const BasicDetails = () => {
  
 
  const openMap = () => {
    const address = "Jalpura, Near Ace City, Sector -1, Noida Extension, G.B. Nagar, (UP.)";
    window.open(`https://www.google.com/maps?q=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <div className="p-8 pb-20 bg-white">
  
      <DetailSection title="Basic Details:">
        <DetailRow label="Project Name:" value="Lucky Homes" />
        <DetailRow label="Sub Project Name:" value="Experience Ultra Luxury Living in Noida Extension" />
        <DetailRow label="Project Type:" value="Residential" />
        <DetailRow label="Project Category:" value="Apartment/Flat" />
        <DetailRow label="Project Status:" value="Under Construction" valueClass="text-[#f97316]" />
        <DetailRow label="Home Loan:" value="Available" valueClass="text-[#22c55e]" />
        <DetailRow label="EMI:" value="Available" valueClass="text-[#22c55e]" />
        <DetailRow label="Contact Details:" value="+91 7894563210" />
        <DetailRow label="Brochure:" value="brochure.pdf" isFile={true} />
        <DetailRow label="Created At:" value="20 June, 2025" />
        <DetailRow label="Created By:" value="Manish Kumar" isUser={true} />
      </DetailSection>

      <DetailSection title="Area Details:">
        <DetailRow label="Total Plot Area:" value="10,000 sq.ft." />
        <DetailRow label="Total Construction Area:" value="7,000 sq.ft." />
        <DetailRow label="Remaining Open Area:" value="3,000 sq.ft." />
        <DetailRow label="Possession Year:" value="June, 2029" />
        <DetailRow label="Launch Date:" value="NA" />
        <DetailRow label="No of Towers:" value="5" />
        <DetailRow label="Total Unit:" value="280" />
      </DetailSection>

      <DetailSection title="Location Details:">
        <DetailRow label="City:" value="Noida" />
        <DetailRow label="Locality:" value="Jalpura, Near Ace City" />
        <DetailRow label="Address:" value="Jalpura, Near Ace City, Sector -1, Noida Extension, G.B. Nagar, (UP.)" />
        <DetailRow label="Landmark:" value="Near MX Care Hospital" />
        <DetailRow label="Pincode:" value="112256" />
   
        <DetailRow label="Map:" value="See Location" isLink={true} onLinkClick={openMap} />
      </DetailSection>

  
      <DetailSection title="Pricing Breakdown:">
        <DetailRow label="Starting Price:" value="₹1.19 Cr" />
        <DetailRow label="Price Range:" value="₹1.19 Cr - ₹2.76 Cr" />
        <DetailRow label="Negotiable" value="Yes" valueClass="text-[#22c55e]" />
        
        <SubHeader title="Additional Applicable Charges:" />
        
        <DetailRow label="GST Filing:" value="₹ 50,000" />
        <DetailRow label="Registration Charges:" value="₹ 2.5 Lakh" />
      </DetailSection>

      <DetailSection title="Assign People">
        <DetailRow label="Person 1:" value="Manish Kumar" isUser={true} />
        <DetailRow label="Person 2:" value="Manish Kumar" isUser={true} />
        <DetailRow label="Person 3:" value="Manish Kumar" isUser={true} />
        <DetailRow label="Person 4:" value="Manish Kumar" isUser={true} />
      </DetailSection>

      <DetailSection title="Builder Information:">
        <DetailRow label="Name:" value="Ramakant Pandit" />
        <DetailRow label="Company Name:" value="SR Developers & Group" />
        <DetailRow label="Phone No:" value="+91 9874563210" />
        <DetailRow label="Email:" value="ramakantbuilder@gmail.com" />
        <DetailRow label="Address:" value="B 170, Block B, Sector 51, Noida, Uttar Pradesh 201301, India" />
        <DetailRow 
          label="Description" 
          value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" 
          valueClass="text-slate-800 text-[13px] leading-relaxed text-justify"
        />
      </DetailSection>

    </div>
  );
};

export default BasicDetails;