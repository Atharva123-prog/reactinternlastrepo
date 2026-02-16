import React, { useState } from 'react';
import { Eye } from 'lucide-react';


import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProjectProfileCard from './components/ProjectProfileCard';
import Tabs from './components/Tabs';

import Overview from './pages/Overview';
import BasicDetails from './pages/BasicDetails';
import AboutProject from './pages/AboutProject';
import Amenities from './pages/Amenities';
import NearbyLocations from './pages/NearbyLocations'; 
import FloorPlan from './pages/floorplan';
import FAQ from './pages/faq';
import ReraAndLegal from './pages/reraandlegal';
import Media from './pages/media';
import Reviews from './pages/review';
const Placeholder = ({ title }) => (
  <div className="p-10 text-slate-500 text-center border border-dashed border-slate-300 rounded-xl m-6">
    {title} Content Coming Soon...
  </div>
);

const BuilderLayout = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabList = [
    { id: "overview", label: "Overview" },                 // 0
    { id: "basic-details", label: "Basic Details" },       // 1
    { id: "about-project", label: "About Project" },       // 2
    { id: "amenities", label: "Amenities" },               // 3
    { id: "floor-plan", label: "Floor Plan" },             // 4
    { id: "nearby-locations", label: "Nearby Locations" }, // 5
    { id: "media", label: "Media" },                       // 6
    { id: "reviews", label: "Reviews" },                   // 7
    { id: "rera-legal", label: "RERA and legal" },         // 8
    { id: "faq", label: "FAQ" },                           // 9
  ];

  
  const componentsList = [
    <Overview key="0" />,                                  
    <BasicDetails key="1" />,                              
    <AboutProject key="2" />,                              
    <Amenities key="3" />,                                 
    <FloorPlan key="4" />,            
    <NearbyLocations key="5" />,                           
    <Media key="6" />,                 
    <Reviews key="7" />,               
    <ReraAndLegal key="8"  />,        
    <FAQ key="9" />,                   
  ];

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
           
            <div className="col-span-12 xl:col-span-3 sticky top-24">
              <ProjectProfileCard />
            </div>

          
            <div className="col-span-12 xl:col-span-9 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              
              <Tabs
                tabs={tabList}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                className="px-6"
              >
             
                {componentsList}
              </Tabs>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuilderLayout;
