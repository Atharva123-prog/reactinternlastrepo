
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Columns, X, RefreshCw, Search, Calendar, Eye } from 'lucide-react';

const AllClient = () => {
  const navigate = useNavigate();

  // Added unique IDs and some dynamic organization names to show the dynamic feature
  const tableData = [
    { id: 1, name: "Rahul Singh", phone: "+91 7896541230", project: "Twin Chalet", group: "VIP", label: "Referral", amount: "₹ 1.36 Cr", received: "₹ 12.5 Lakh", organization: "SpriteEra IT Solutions Pvt. Ltd." },
    { id: 2, name: "Amit Kumar", phone: "+91 9876543210", project: "Lucky Homes", group: "Standard", label: "Organic", amount: "₹ 85 Lakh", received: "₹ 10 Lakh", organization: "TechNova Systems" },
    { id: 3, name: "Priya Sharma", phone: "+91 8765432109", project: "Twin Chalet", group: "VIP", label: "Referral", amount: "₹ 1.5 Cr", received: "₹ 20 Lakh", organization: "Sharma Enterprises" },
    // Fill the rest to maintain the 10 rows look
    ...Array(7).fill({ id: 4, name: "Rahul Singh", phone: "+91 7896541230", project: "Twin Chalet", group: "VIP", label: "Referral", amount: "₹ 1.36 Cr", received: "₹ 12.5 Lakh", organization: "Default Corp" })
  ];

  const handleViewClient = (client) => {
    // Navigate to the details page and pass the client data dynamically
    navigate(`/client/details/${client.id}`, { state: { clientData: client } });
  };

  return (
    <div className="p-6 mx-auto w-full max-w-[1600px] font-inter">
      <div className="bg-white rounded-[10px] border border-slate-200 shadow-sm p-6">
        
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[18px] font-bold text-slate-800 tracking-tight">All Client</h2>
          <button className="bg-[#238EEB] hover:bg-[#1b7acb] transition-colors text-white text-[13px] font-medium px-4 py-2 rounded-md">
            Add New Client
          </button>
        </div>

        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-4 text-[13px] text-slate-600">
          <div className="flex items-center gap-3">
            <button className="border border-slate-200 p-1.5 rounded hover:bg-slate-50 transition-colors"><Columns className="w-[18px] h-[18px] text-slate-500" strokeWidth={1.5} /></button>
            <button className="border border-slate-200 px-4 py-1.5 rounded hover:bg-slate-50 transition-colors font-medium">Filter</button>
            <button className="border border-slate-200 px-3 py-1.5 rounded-full flex items-center gap-2 hover:bg-slate-50 transition-colors text-slate-700 font-medium">
              Newly Launch <X className="w-3.5 h-3.5 text-slate-400" strokeWidth={2} />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-black transition-colors"><RefreshCw className="w-[16px] h-[16px] text-slate-500" strokeWidth={1.5} /></button>
            <button className="hover:text-black transition-colors">Excel</button>
            <button className="hover:text-black transition-colors">Print</button>
            <div className="relative flex items-center">
              <input type="text" placeholder="Search" className="border border-slate-200 rounded-md pl-3 pr-8 py-1.5 outline-none focus:border-[#238EEB] w-[180px] text-[13px] transition-colors placeholder:text-slate-400" />
              <Search className="w-4 h-4 text-slate-400 absolute right-2.5" strokeWidth={1.5} />
            </div>
            <div className="border border-slate-200 rounded-md px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors text-slate-500">
              <span>11 Mar, 25 - 20 Apr,26</span>
              <Calendar className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-y border-slate-200">
                <th className="py-4 px-4 text-[13px] font-bold text-slate-800 text-center">Name</th>
                <th className="py-4 px-4 text-[13px] font-bold text-slate-800 text-center">Phone No.</th>
                <th className="py-4 px-4 text-[13px] font-bold text-slate-800 text-center">Project</th>
                <th className="py-4 px-4 text-[13px] font-bold text-slate-800 text-center">Client Groups</th>
                <th className="py-4 px-4 text-[13px] font-bold text-slate-800 text-center">Labels</th>
                <th className="py-4 px-4 text-[13px] font-bold text-slate-800 text-center">Amount</th>
                <th className="py-4 px-4 text-[13px] font-bold text-slate-800 text-center">Received Amount</th>
                <th className="py-4 px-4 text-[13px] font-bold text-slate-800 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-4 text-[13px] font-medium text-slate-700 text-center">{row.name}</td>
                  <td className="py-3.5 px-4 text-[13px] font-medium text-slate-700 text-center">{row.phone}</td>
                  <td className="py-3.5 px-4 text-[13px] font-medium text-slate-700 text-center">{row.project}</td>
                  <td className="py-3.5 px-4 text-[13px] font-medium text-slate-700 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${row.group === 'VIP' ? 'bg-slate-700' : 'bg-slate-400'}`}></span>
                      {row.group}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-[13px] text-center">
                    <span className="bg-[#10C5D7] text-white px-4 py-[3px] rounded-[4px] text-[12px] font-medium">{row.label}</span>
                  </td>
                  <td className="py-3.5 px-4 text-[13px] font-medium text-slate-700 text-center">{row.amount}</td>
                  <td className="py-3.5 px-4 text-[13px] font-medium text-slate-700 text-center">{row.received}</td>
                  <td className="py-3.5 px-4 text-center">
                    {/* The magical eye button that triggers the dynamic navigation */}
                    <button 
                      onClick={() => handleViewClient(row)}
                      className="bg-[#238EEB] hover:bg-[#1b7acb] transition-colors p-[5px] rounded-full text-white inline-flex items-center justify-center shadow-sm"
                    >
                      <Eye className="w-[14px] h-[14px]" strokeWidth={2} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllClient;