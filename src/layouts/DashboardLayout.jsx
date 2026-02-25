// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';

// const DashboardLayout = () => {
//   return (
//     <div className="flex min-h-screen bg-[#f1f5f9] font-sans text-slate-900 selection:bg-blue-100">
//       {/* Sidebar stays fixed on the left */}
//       <Sidebar />
      
//       <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
//         {/* Header stays at the top */}
//         <Header />
        
//         {/* This Outlet is the magical container where your pages will appear */}
//         <div className="p-8">
//           <Outlet /> 
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'; 

const DashboardLayout = () => {
  return (
    // The exact background color from your screenshot
    <div className="flex h-screen w-full bg-[#f4f7fa] font-inter overflow-hidden">
      
      {/* Sidebar stays pinned to the left */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Header stays pinned to the top */}
        <Header />
        
        {/* Outlet area where pages scroll inside */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet /> 
        </main>
        
      </div>
    </div>
  );
};

export default DashboardLayout;