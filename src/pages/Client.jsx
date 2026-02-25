import React from 'react';
import { Building2, Eye } from 'lucide-react';

/* --- Helper: Reusable Stat Card (Unchanged) --- */
const StatCard = ({ value, label, colorKey }) => {
  const colors = {
    blue: { bg: 'bg-[#f4f7fe]', iconBox: 'bg-[#155ebb]' },
    yellow: { bg: 'bg-[#fdfcf3]', iconBox: 'bg-[#e5c02b]' },
    orange: { bg: 'bg-[#fef8f3]', iconBox: 'bg-[#f08c3e]' },
    red: { bg: 'bg-[#fef5f4]', iconBox: 'bg-[#ee7641]' },
  };
  
  const theme = colors[colorKey] || colors.blue;

  return (
    <div className={`rounded-xl p-5 flex items-center justify-between shadow-sm border border-slate-100 ${theme.bg}`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shrink-0 ${theme.iconBox}`}>
        <Building2 className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <div className="text-right">
        <div className="text-[28px] font-semibold text-black leading-none mb-1.5">{value}</div>
        <div className="text-[12px] font-medium text-slate-500">{label}</div>
      </div>
    </div>
  );
};

/* --- Helper: Reusable Table Cells (Unchanged) --- */
const Td = ({ children }) => (
  <td className="border border-slate-200 px-4 py-3 text-[13px] text-slate-700 text-center font-medium">
    {children}
  </td>
);

const Th = ({ children }) => (
  <th className="border border-slate-200 px-4 py-3 text-[13px] font-semibold text-black text-center bg-[#f4f5f7]">
    {children}
  </th>
);

/* --- Main Client Component --- */
const Client = () => {
  const tableRows = Array(5).fill(null);

  return (
    // 1. Outer wrapper for margins and max-width relative to the gray background
    <div className="p-6 mx-auto w-full max-w-[1600px] font-inter">
      
      {/* 2. THE NEW WHITE CONTAINER TAB */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-8">
        
        {/* --- All content is now inside this white box --- */}

        {/* 1. Client Dashboard Section */}
        <section>
          <h2 className="text-[16px] font-bold text-black mb-4">Client Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="10" label="Total Clients" colorKey="blue" />
            <StatCard value="2,530" label="Booked Properties" colorKey="yellow" />
            <StatCard value="1,520" label="Fully Paid Clients" colorKey="orange" />
            <StatCard value="135" label="Pending Payments Client" colorKey="red" />
          </div>
        </section>

        {/* 2. Pending Action Alerts Section */}
        <section>
          <h2 className="text-[16px] font-bold text-black mb-4">Pending Action Alerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="2,569" label="Agreement pending" colorKey="blue" />
            <StatCard value="1,520" label="Payment overdue" colorKey="yellow" />
            <StatCard value="135" label="Loan In Process" colorKey="orange" />
            <StatCard value="135" label="Loan Approved" colorKey="red" />
          </div>
        </section>

        {/* 3. Actionable Client Table */}
        <section>
          <h2 className="text-[16px] font-bold text-black mb-4">Actionable Client</h2>
          {/* Removed extra bg-white/shadow here since the parent container has it now */}
          <div className="overflow-x-auto rounded-lg border-t border-l border-slate-200">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr>
                  <Th>Client Name</Th>
                  <Th>Project Name</Th>
                  <Th>Unit</Th>
                  <Th>Configuration</Th>
                  <Th>Amount Paid</Th>
                  <Th>Current Status</Th>
                  <Th>Action</Th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((_, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <Td>Rahul Singh</Td>
                    <Td>Twin Chalet</Td>
                    <Td>A-107</Td>
                    <Td>2BHK</Td>
                    <Td>₹ 80,000</Td>
                    <Td>Agreement Pending</Td>
                    <Td>
                      <button className="bg-[#3b82f6] hover:bg-blue-600 transition-colors p-1.5 rounded-full text-white inline-flex items-center justify-center">
                        <Eye className="w-[14px] h-[14px]" strokeWidth={2} />
                      </button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Payment Precision Section */}
        <section>
          <h2 className="text-[16px] font-bold text-black mb-4">Payment Precision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="₹12.4 Cr" label="Total Property Value" colorKey="blue" />
            <StatCard value="₹8.9 Cr" label="Amount Received" colorKey="yellow" />
            <StatCard value="₹3.5 Cr" label="Pending Amount" colorKey="orange" />
          </div>
        </section>

        {/* 5. Upcoming Installments Table */}
        <section>
          <h2 className="text-[16px] font-bold text-black mb-4">Upcoming Installments</h2>
          {/* Removed extra bg-white/shadow here */}
          <div className="overflow-x-auto rounded-lg border-t border-l border-slate-200">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr>
                  <Th>Client Name</Th>
                  <Th>Project Name</Th>
                  <Th>Unit</Th>
                  <Th>Installment</Th>
                  <Th>Amount</Th>
                  <Th>Due Date</Th>
                  <Th>Action</Th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((_, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <Td>Rahul Singh</Td>
                    <Td>Twin Chalet</Td>
                    <Td>A-107</Td>
                    <Td>2nd Installment</Td>
                    <Td>₹ 80,000</Td>
                    <Td>Agreement Pending</Td>
                    <Td>
                      <button className="bg-[#3b82f6] hover:bg-blue-600 transition-colors p-1.5 rounded-full text-white inline-flex items-center justify-center">
                        <Eye className="w-[14px] h-[14px]" strokeWidth={2} />
                      </button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div> {/* End of white container */}
    </div>
  );
};

export default Client;