import React from 'react';
import { Outlet } from 'react-router-dom';
import { Eye } from 'lucide-react';

// Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProjectProfileCard from './components/ProjectProfileCard';
import DashboardTabs from './components/DashboardTabs';

const BuilderLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#f1f5f9] font-sans text-slate-900 selection:bg-blue-100">
    
      <Sidebar />

    
      <main className="flex-1 flex flex-col min-w-0">
      
        <Header />

        <div className="p-8 space-y-6 max-w-[1600px] mx-auto w-full">
         
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] font-black text-slate-800 tracking-tight">Project Details</h1>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-[12px] font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 shadow-md shadow-blue-200">
              <Eye className="w-4 h-4" /> View Report
            </button>
          </div>

          <div className="grid grid-cols-12 gap-6 items-start">
            
           
            <ProjectProfileCard />

          
            <div className="col-span-12 xl:col-span-9 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              
             
              <DashboardTabs />

           
              <Outlet />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuilderLayout;