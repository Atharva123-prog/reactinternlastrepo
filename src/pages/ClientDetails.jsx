import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Building2, User, Phone, Briefcase, FileText, Calendar, 
  MapPin, Globe, CheckCircle2, Tag, Mail, Users, MoreHorizontal, Plus,
  Clock, Menu, Eye, Bell, Check, ClipboardList, MoreVertical, Layers, RefreshCw
} from 'lucide-react';

// ✅ IMPORT YOUR LOCAL IMAGE HERE
import harshitImg from '../components/harshit.jpg';

const ClientDetails = () => {
  const location = useLocation();
  
  // Safe fallback data just in case nothing was passed
  const clientData = location.state?.clientData || {
    name: "Ajay Verma",
    phone: "+91 7896541230",
    project: "Twin Chalet",
    organization: "SpriteEra IT Solutions Pvt. Ltd.",
    group: "VIP",
    label: "Referral"
  };

  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Projects', 'Payment History', 'Activity', 'Documents'];

  // Bulletproof string splitters
  const safeOrgName = clientData?.organization?.split(' ')[0] || 'Company';
  const safeFirstName = clientData?.name?.split(' ')[0]?.toLowerCase() || 'user';
  const safeInitial = clientData?.name?.charAt(0) || 'A';

  return (
    <div className="p-6 mx-auto w-full max-w-[1600px] font-inter">
      
      {/* 1. Header Section */}
      <div className="flex justify-between items-center mb-6 px-2">
        <div className="flex items-center gap-3">
          <Briefcase className="w-5 h-5 text-slate-400" />
          <h1 className="text-[20px] font-semibold text-slate-800 tracking-tight">
            {clientData.organization || 'Company Name'}
          </h1>
        </div>
        <button className="bg-[#238EEB] hover:bg-[#1b7acb] transition-colors text-white text-[13px] font-medium px-4 py-2 rounded-md shadow-sm">
          Lead Details
        </button>
      </div>

      {/* 2. Custom Tabs */}
      <div className="flex gap-8 border-b border-slate-200 mb-6 px-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-[14px] font-medium transition-colors relative ${
              activeTab === tab ? 'text-slate-800' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-600 rounded-t-md"></div>
            )}
          </button>
        ))}
      </div>

      {/* 3. Main Content Area */}
      {activeTab === 'Overview' ? (
        <div className="grid grid-cols-12 gap-6">
          
        
          {/* --- LEFT COLUMN (Overview Data) --- */}
          <div className="col-span-12 xl:col-span-8 space-y-6">
            
            {/* 1. Contacts Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-[15px]">
                  <Users className="w-[18px] h-[18px]" strokeWidth={2.5} /> Contacts
                </div>
                <button className="text-[#238EEB] text-[13px] font-medium flex items-center gap-1 hover:text-blue-700 transition-colors">
                  <Plus className="w-4 h-4" /> Add
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#64748b] flex items-center justify-center text-white font-semibold">
                      {safeInitial}
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-slate-800">{clientData.name || 'Ajay Singh'}</div>
                      <div className="text-[12px] text-slate-500 mt-0.5">Owner, {safeOrgName} IT Solutions</div>
                    </div>
                  </div>
                  <div className="text-[13px] text-slate-600 space-y-1.5">
                    <div className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-slate-400" /> {safeFirstName}@spriteera.com</div>
                    <div className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-slate-400" /> {clientData.phone || '+917896541230'}</div>
                  </div>
                </div>

                <div className="flex justify-between items-start pt-6 border-t border-slate-100">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#64748b] flex items-center justify-center text-white font-semibold">H</div>
                    <div>
                      <div className="text-[14px] font-semibold text-slate-800">Harshit Kaushal</div>
                      <div className="text-[12px] text-slate-500 mt-0.5">Owner, {safeOrgName} IT Solutions</div>
                    </div>
                  </div>
                  <div className="text-[13px] text-slate-600 space-y-1.5">
                    <div className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-slate-400" /> harshitkaushal@spriteera.com</div>
                    <div className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-slate-400" /> +917896541230</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Register Project/Property Card */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden relative shadow-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#FFC107]"></div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-[15px] mb-6">
                  <Building2 className="w-[18px] h-[18px]" strokeWidth={2.5} /> Register Project/Property
                </div>
                <div className="grid grid-cols-4 gap-y-6 gap-x-4 mb-6">
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Project Name</div>
                    <div className="text-[13px] font-semibold text-[#238EEB]">{clientData.project || 'Twin Chalet'}</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Tower</div>
                    <div className="text-[13px] font-semibold text-slate-800">Tower A</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Floor</div>
                    <div className="text-[13px] font-semibold text-slate-800">3</div>
                  </div>
                  <div></div>
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Unit No.</div>
                    <div className="text-[13px] font-semibold text-slate-800">A-109</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Unit Type</div>
                    <div className="text-[13px] font-semibold text-slate-800">2 BHK</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Carpet Area</div>
                    <div className="text-[13px] font-semibold text-slate-800">596 Sq.ft.</div>
                  </div>
                </div>
                <button className="bg-[#238EEB] hover:bg-[#1b7acb] text-white text-[12px] font-medium px-4 py-2 rounded-md transition-colors">See Details</button>
              </div>
            </div>

            {/* 3. Booking Details Card */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden relative shadow-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#28A745]"></div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-[15px] mb-6">
                  <FileText className="w-[18px] h-[18px]" strokeWidth={2.5} /> Booking Details
                </div>
                <div className="grid grid-cols-3 gap-y-6 gap-x-4 mb-6">
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Booking Date</div>
                    <div className="text-[13px] font-semibold text-slate-800">11 Oct 2025</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Booking Amount</div>
                    <div className="text-[13px] font-semibold text-slate-800">₹ 1.2 Cr</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Payment Mode</div>
                    <div className="text-[13px] font-semibold text-slate-800">Cash</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Receipt No.</div>
                    <div className="text-[13px] font-semibold text-slate-800">NA</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Sales Person</div>
                    <div className="flex items-center gap-2">

                      <img src={harshitImg} alt="avatar" className="w-5 h-5 rounded-full object-cover" />
                      <span className="text-[13px] font-semibold text-slate-800">Harshit</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1">Booking Source</div>
                    <div className="text-[13px] font-semibold text-slate-800">Online</div>
                  </div>
                </div>
                <button className="bg-[#238EEB] hover:bg-[#1b7acb] text-white text-[12px] font-medium px-4 py-2 rounded-md transition-colors">See Details</button>
              </div>
            </div>

            {/* 4. Financial Summary Card */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden relative shadow-sm">
               <div className="absolute top-0 left-0 w-full h-1 bg-[#238EEB]"></div>
               <div className="p-5">
                 <div className="flex items-center gap-2 text-slate-800 font-semibold text-[15px] mb-6">
                  <Briefcase className="w-[18px] h-[18px]" strokeWidth={2.5} /> Financial Summary
                </div>
                <div className="grid grid-cols-3 gap-y-6 gap-x-4 mb-2">
                  <div><div className="text-[12px] text-slate-500 mb-1">Total Property Value</div><div className="text-[13px] font-semibold text-slate-800">₹ 2.3 Cr</div></div>
                  <div><div className="text-[12px] text-slate-500 mb-1">Discount Given</div><div className="text-[13px] font-semibold text-slate-800">20%</div></div>
                  <div><div className="text-[12px] text-slate-500 mb-1">Final Deal Value</div><div className="text-[13px] font-semibold text-slate-800">₹ 1.9 Cr</div></div>
                  <div><div className="text-[12px] text-slate-500 mb-1">GST Amount</div><div className="text-[13px] font-semibold text-slate-800">18%</div></div>
                  <div><div className="text-[12px] text-slate-500 mb-1">Total Payable</div><div className="text-[13px] font-semibold text-slate-800">₹ 2.2 Cr</div></div>
                  <div><div className="text-[12px] text-slate-500 mb-1">Amount Received</div><div className="text-[13px] font-semibold text-slate-800">₹ 1.0 Cr</div></div>
                  <div><div className="text-[12px] text-slate-500 mb-1">Pending Amount</div><div className="text-[13px] font-semibold text-slate-800">₹ 90 Lakhs</div></div>
                </div>
               </div>
            </div>

            {/* 5. Payment Schedule (Installments) Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-[15px]">
                  <Clock className="w-[18px] h-[18px]" strokeWidth={2.5} /> payment Schedule (Installments)
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-[#238EEB] text-[13px] font-medium flex items-center gap-1 hover:text-blue-700 transition-colors">
                    <Plus className="w-4 h-4" /> Add
                  </button>
                  <button className="bg-[#238EEB] hover:bg-[#1b7acb] text-white text-[12px] font-medium px-4 py-1.5 rounded-md transition-colors">See All</button>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-4 border-b border-slate-200 pb-3 mb-3 text-[13px] font-bold text-slate-800">
                <div>Installment</div>
                <div>Amount</div>
                <div>Due Date</div>
                <div>Status</div>
                <div className="flex justify-center"><Menu className="w-4 h-4 text-slate-500"/></div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-5 gap-4 items-center text-[13px]">
                  <div className="font-medium text-slate-700">Booking</div>
                  <div className="font-semibold text-slate-800">₹50L</div>
                  <div className="text-slate-700">Paid</div>
                  <div className="font-semibold text-[#28A745]">Success</div>
                  <div className="flex justify-center"><button className="bg-[#f0f7ff] text-[#238EEB] p-1.5 rounded-full"><Eye className="w-4 h-4"/></button></div>
                </div>
                <div className="grid grid-cols-5 gap-4 items-center text-[13px]">
                  <div className="font-medium text-slate-700">1st Slab</div>
                  <div className="font-semibold text-slate-800">₹50L</div>
                  <div className="text-slate-700">15 Feb</div>
                  <div className="font-semibold text-[#FF8C00]">Pending</div>
                  <div className="flex justify-center"><button className="bg-[#f0f7ff] text-[#238EEB] p-1.5 rounded-full"><Eye className="w-4 h-4"/></button></div>
                </div>
                <div className="grid grid-cols-5 gap-4 items-center text-[13px]">
                  <div className="font-medium text-slate-700">2nd Slab</div>
                  <div className="font-semibold text-slate-800">₹50L</div>
                  <div className="text-slate-700">15 Feb</div>
                  <div className="font-semibold text-[#FF8C00]">Pending</div>
                  <div className="flex justify-center"><button className="bg-[#f0f7ff] text-[#238EEB] p-1.5 rounded-full"><Eye className="w-4 h-4"/></button></div>
                </div>
                <div className="grid grid-cols-5 gap-4 items-center text-[13px]">
                  <div className="font-medium text-slate-700">3rd Slab</div>
                  <div className="font-semibold text-slate-800">₹30L</div>
                  <div className="text-slate-700">15 Feb</div>
                  <div className="font-semibold text-[#FF8C00]">Pending</div>
                  <div className="flex justify-center"><button className="bg-[#f0f7ff] text-[#238EEB] p-1.5 rounded-full"><Eye className="w-4 h-4"/></button></div>
                </div>
                <div className="grid grid-cols-5 gap-4 items-center text-[13px]">
                  <div className="font-medium text-slate-700">Final</div>
                  <div className="font-semibold text-slate-800">₹10L</div>
                  <div className="text-slate-700">15 Feb</div>
                  <div className="font-semibold text-[#FF8C00]">Pending</div>
                  <div className="flex justify-center"><button className="bg-[#f0f7ff] text-[#238EEB] p-1.5 rounded-full"><Eye className="w-4 h-4"/></button></div>
                </div>
              </div>
            </div>

            {/* 6. Timeline Activity Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-[15px]">
                  <Clock className="w-[18px] h-[18px]" strokeWidth={2.5} /> Timeline Activity
                </div>
                <button className="bg-[#238EEB] hover:bg-[#1b7acb] text-white text-[12px] font-medium px-4 py-1.5 rounded-md transition-colors">See All</button>
              </div>
              
              <div className="pl-2 space-y-6 relative before:absolute before:inset-0 before:ml-[17px] before:w-[2px] before:bg-slate-200">
                <div className="relative flex gap-4">
                  <div className="w-6 h-6 bg-[#28A745] rounded-full flex items-center justify-center shrink-0 z-10 outline outline-4 outline-white">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <div className="flex-1 flex justify-between items-start pt-0.5">
                    <div>
                      <div className="text-[14px] font-semibold text-slate-800">Payment Done</div>
                      <div className="text-[13px] text-slate-500 mt-1">2nd Shift Payment Done</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[13px] font-semibold text-slate-800">15 Dec 2025 | 12:30 PM</div>
                      <div className="text-[13px] font-semibold text-[#238EEB] mt-1">By: Dristi Singh</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex gap-4">
                  <div className="w-6 h-6 bg-[#28A745] rounded-full flex items-center justify-center shrink-0 z-10 outline outline-4 outline-white">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <div className="flex-1 flex justify-between items-start pt-0.5">
                    <div>
                      <div className="text-[14px] font-semibold text-slate-800">New Document Uploaded</div>
                      <div className="text-[13px] text-slate-500 mt-1">Aadhar Card Document has been uploaded</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[13px] font-semibold text-slate-800">10 Dec 2025 | 12:30 PM</div>
                      <div className="text-[13px] font-semibold text-[#238EEB] mt-1">By: Rahul Sharma</div>
                    </div>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="w-6 h-6 bg-[#28A745] rounded-full flex items-center justify-center shrink-0 z-10 outline outline-4 outline-white">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <div className="flex-1 flex justify-between items-start pt-0.5">
                    <div>
                      <div className="text-[14px] font-semibold text-slate-800">Payment Done</div>
                      <div className="text-[13px] text-slate-500 mt-1">Booking Amount Done</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[13px] font-semibold text-slate-800">10 Dec 2025 | 12:30 PM</div>
                      <div className="text-[13px] font-semibold text-[#238EEB] mt-1">By: Rahul Sharma</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


        
          {/* --- RIGHT COLUMN (Side Widgets) --- */}
        
          <div className="col-span-12 xl:col-span-4 space-y-6">
            
            {/* 1. Client Info Widget */}
            <div className="bg-[#fafbfd] border border-slate-200 rounded-lg p-5">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-[15px]">
                  <Briefcase className="w-[18px] h-[18px]" strokeWidth={2.5} /> Client Info
                </div>
                <button className="p-1 border border-slate-200 rounded-full bg-white hover:bg-slate-50 transition-colors shadow-sm">
                  <MoreHorizontal className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Info List */}
              <div className="space-y-4">
                <div className="flex gap-3"><User className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">Name</div><div className="text-[13px] font-semibold text-slate-800">{clientData.name || 'Ajay Verma'}</div></div></div>
                <div className="flex gap-3"><Phone className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">Mobile No.</div><div className="text-[13px] font-semibold text-slate-800">{clientData.phone || '+91 7896541230'}</div></div></div>
                <div className="flex gap-3"><Building2 className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">Organization</div><div className="text-[13px] font-semibold text-slate-800">{clientData.organization || 'SpriteEra IT Solutions Pvt. Ltd.'}</div></div></div>
                <div className="flex gap-3"><Users className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">PAN Number</div><div className="text-[13px] font-semibold text-slate-800">ATYH876HY</div></div></div>
                <div className="flex gap-3"><User className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">Aadhar Number</div><div className="text-[13px] font-semibold text-slate-800">876998651273</div></div></div>
                <div className="flex gap-3"><Briefcase className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">Occupation</div><div className="text-[13px] font-semibold text-slate-800">Business Man</div></div></div>
                <div className="flex gap-3"><Users className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">Marital Status</div><div className="text-[13px] font-semibold text-slate-800">Married</div></div></div>
                <div className="flex gap-3"><Calendar className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">Date of Birth</div><div className="text-[13px] font-semibold text-slate-800">16 April 1990</div></div></div>
                
                <div className="flex gap-3">
                  <CheckCircle2 className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2} />
                  <div>
                    <div className="text-[12px] text-slate-500">Client Group</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
                      <span className="text-[13px] font-semibold text-slate-800">{clientData.group || 'VIP'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Tag className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2} />
                  <div>
                    <div className="text-[12px] text-slate-500 mb-1.5">Label</div>
                    <span className="bg-[#10C5D7] text-white px-2.5 py-1 rounded-[4px] text-[11px] font-semibold">{clientData.label || 'Referral'}</span>
                  </div>
                </div>

                <div className="flex gap-3"><MapPin className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">Address</div><div className="text-[13px] font-semibold text-slate-800 leading-snug">84697 Lurline Track Lake Benton,<br/>Massachusetts, Iceland</div></div></div>
                <div className="flex gap-3"><Globe className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">Website</div><div className="text-[13px] font-semibold text-[#238EEB]">www.spriteera.com</div></div></div>
                <div className="flex gap-3"><FileText className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">VAT Number:</div><div className="text-[13px] font-semibold text-slate-800">ABCIJEUY98794B</div></div></div>
                <div className="flex gap-3"><FileText className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">GST Number:</div><div className="text-[13px] font-semibold text-slate-800">KIUH85464JLIOH</div></div></div>
                <div className="flex gap-3"><Calendar className="w-[18px] h-[18px] text-slate-400 mt-0.5" strokeWidth={2}/><div><div className="text-[12px] text-slate-500">Created At:</div><div className="text-[13px] font-semibold text-slate-800">21 Jan 2026, 8:35 AM</div></div></div>
              </div>
            </div>

            {/* 2. Notes Widget */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-800 font-semibold text-[15px] mb-3">
                <ClipboardList className="w-[18px] h-[18px]" strokeWidth={2.5} /> Notes
              </div>
              <div className="h-[1px] w-full bg-slate-100 mb-4"></div>
              
              <button className="text-[#238EEB] text-[13px] font-medium flex items-center gap-1 mb-5 hover:text-blue-700 transition-colors">
                <Plus className="w-4 h-4" /> Add Notes
              </button>

              <div className="flex flex-col">
                {[
                  { badge: 'Important', badgeColor: 'bg-[#238EEB]', id: 1 },
                  { badge: 'Help', badgeColor: 'bg-[#00B050]', id: 2 },
                  { badge: 'Help', badgeColor: 'bg-[#00B050]', id: 3 },
                  { badge: 'Help', badgeColor: 'bg-[#00B050]', id: 4 }
                ].map((note) => (
                  <div key={note.id} className="flex gap-3 py-4 border-b border-slate-100 last:border-0 last:pb-0 first:pt-0">
                  
                    <img src={harshitImg} alt="user" className="w-8 h-8 rounded-full shrink-0 object-cover mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-0.5">
                        <div className="flex items-center gap-1.5 truncate pr-2">
                          <div className="w-1.5 h-1.5 bg-[#DC3545] rounded-full shrink-0 mt-0.5"></div>
                          <span className="text-[13.5px] font-semibold text-slate-800 truncate">Interested, follow-up tomorrow</span>
                        </div>
                        <button className="text-slate-400 hover:text-slate-600 border border-slate-200 rounded-full p-[3px] shrink-0 transition-colors">
                          <MoreVertical className="w-[14px] h-[14px]" strokeWidth={2} />
                        </button>
                      </div>
                      <div className="text-[12.5px] text-slate-500 leading-snug mb-2 truncate">
                        Client concerned about resale of the nue doc...
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[11.5px] font-medium text-slate-400">Tue, 27 Jan 26, 1:00 PM</span>
                        <span className={`${note.badgeColor} text-white px-2 py-[2px] rounded-[4px] text-[10px] font-semibold tracking-wide`}>
                          {note.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Reminders Widget */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-800 font-semibold text-[15px] mb-3">
                <Bell className="w-[18px] h-[18px]" strokeWidth={2.5} /> Reminders (Private)
              </div>
              <div className="h-[1px] w-full bg-slate-100 mb-4"></div>
              
              <button className="text-[#238EEB] text-[13px] font-medium flex items-center gap-1 mb-5 hover:text-blue-700 transition-colors">
                <Plus className="w-4 h-4" /> Add Reminder
              </button>

              <div className="space-y-4">
                {[
                  { color: 'text-[#238EEB]', date: 'Today, 1:00 PM', hasSync: false, isRed: true, id: 1 },
                  { color: 'text-[#238EEB]', date: 'Today, 1:00 PM', hasSync: true, isRed: true, id: 2 },
                  { color: 'text-[#238EEB]', date: 'Tue, 27 Jan 26, 1:00 PM', hasSync: true, isRed: false, id: 3 },
                  { color: 'text-[#238EEB]', date: 'Tue, 27 Jan 26, 1:00 PM', hasSync: true, isRed: false, id: 4 }
                ].map((rem) => (
                  <div key={rem.id} className="relative flex justify-between items-start pl-3">
                    {rem.isRed && (
                      <div className="absolute left-0 top-0.5 bottom-0.5 w-[3px] bg-[#DC3545] rounded-full"></div>
                    )}
                    <div className="flex gap-3">
                      <Layers className="w-[18px] h-[18px] text-slate-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <div className={`text-[13px] font-medium ${rem.color}`}>
                          Call to Client for sale purpose
                        </div>
                        <div className="text-[11.5px] font-medium text-slate-400 flex items-center gap-1 mt-0.5">
                          {rem.hasSync && <RefreshCw className="w-[11px] h-[11px]" strokeWidth={2.5} />} {rem.date}
                        </div>
                      </div>
                    </div>
                    {rem.id <= 2 && (
                      <button className="w-[18px] h-[18px] rounded-full border border-[#238EEB] flex items-center justify-center text-[#238EEB] hover:bg-blue-50 transition-colors mt-0.5">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="py-20 text-center text-slate-500 border border-slate-200 rounded-lg bg-white shadow-sm">
          <h3 className="text-xl font-semibold text-slate-700 mb-2">{activeTab} Content</h3>
          <p>This is where the {activeTab.toLowerCase()} data for {clientData.name || 'this client'} will go.</p>
        </div>
      )}
    </div>
  );
};

export default ClientDetails;