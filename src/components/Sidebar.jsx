// import React from 'react';
// import { LayoutGrid, ChevronDown, Building2, Circle } from 'lucide-react';

// const Sidebar = () => {
//   return (
//     <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col sticky top-0 h-screen shrink-0">
//       <div className="p-5 mb-2 flex items-center gap-2">
//         <img className="h-10 w-auto object-contain" src="src/components/logo.png" alt="logo" />
//       </div>
//       <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
//         {['Dashboard', 'Leads', 'Booking', 'Client', 'Projects'].map((item) => (
//           <div key={item} className="flex items-center justify-between px-4 py-3 text-slate-500 font-bold text-[13px] hover:bg-slate-50 rounded-lg cursor-pointer group transition-colors">
//             <div className="flex items-center gap-3">
//               <LayoutGrid className="w-4 h-4 opacity-70 group-hover:text-blue-600" />
//               <span className="group-hover:text-slate-700">{item}</span>
//             </div>
//             <ChevronDown className="w-4 h-4 text-slate-300" />
//           </div>
//         ))}

//         <div className="bg-blue-600 text-white flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg shadow-blue-200/50 font-bold text-[13px] cursor-pointer my-3">
//           <Building2 className="w-4 h-4" /> Builder Projects
//         </div>

//         {['Properties', 'Add Leads', 'Inventory', 'Expenses', 'Employee', 'Tickets', 'Notes', 'Report', 'Settings'].map((item) => (
//           <div key={item} className="flex items-center justify-between px-4 py-3 text-slate-500 font-bold text-[13px] hover:bg-slate-50 rounded-lg cursor-pointer group transition-colors">
//             <div className="flex items-center gap-3">
//               <Circle className="w-2 h-2 opacity-40 group-hover:text-blue-600 group-hover:opacity-100" />
//               <span className="group-hover:text-slate-700">{item}</span>
//             </div>
//             <ChevronDown className="w-4 h-4 text-slate-300" />
//           </div>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
import React from 'react';
import { LayoutGrid, ChevronDown, Building2, Circle } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col sticky top-0 h-screen shrink-0">
      <div className="p-5 mb-2 flex items-center gap-2">
        <img className="h-10 w-auto object-contain" src="/src/components/logo.png" alt="logo" />
      </div>
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
        {['Dashboard', 'Leads', 'Booking', 'Client', 'Projects'].map((item) => (
          <div key={item} className="flex items-center justify-between px-4 py-3 text-slate-500 font-bold text-[13px] hover:bg-slate-50 rounded-lg cursor-pointer group transition-colors">
            <div className="flex items-center gap-3">
              <LayoutGrid className="w-4 h-4 opacity-70 group-hover:text-blue-600" />
              <span className="group-hover:text-slate-700">{item}</span>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-300" />
          </div>
        ))}
        <div className="bg-blue-600 text-white flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg shadow-blue-200/50 font-bold text-[13px] cursor-pointer my-3">
          <Building2 className="w-4 h-4" /> Builder Projects
        </div>
        {['Properties', 'Add Leads', 'Inventory', 'Expenses', 'Employee', 'Tickets', 'Notes', 'Report', 'Settings'].map((item) => (
          <div key={item} className="flex items-center justify-between px-4 py-3 text-slate-500 font-bold text-[13px] hover:bg-slate-50 rounded-lg cursor-pointer group transition-colors">
            <div className="flex items-center gap-3">
              <Circle className="w-2 h-2 opacity-40 group-hover:text-blue-600 group-hover:opacity-100" />
              <span className="group-hover:text-slate-700">{item}</span>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-300" />
          </div>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;