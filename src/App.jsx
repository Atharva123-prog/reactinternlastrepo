
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts & Pages
import DashboardLayout from './layouts/DashboardLayout';
import BuilderLayout from './BuilderLayout';
import Client from './pages/Client'; 
import AllClient from './pages/AllClient'; 
import ClientDetails from './pages/ClientDetails'; 

// Here is the missing DummyPage! This prevents the blank screen crash.
const DummyPage = ({ title }) => (
  <div className="flex items-center justify-center h-full min-h-[600px] bg-white rounded-xl border border-slate-200 shadow-sm m-6">
    <div className="text-center space-y-3">
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      <p className="text-slate-500">This page is under construction...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          
          <Route index element={<Navigate to="/projects" replace />} />
          <Route path="projects" element={<BuilderLayout />} />
          
          <Route path="client" element={<Client />} />               
          <Route path="client/all" element={<AllClient />} />        
          
          {/* Your new dynamic route for the eye button */}
          <Route path="client/details/:id" element={<ClientDetails />} />
          
          {/* Dummy routes for everything else */}
          <Route path="dashboard" element={<DummyPage title="Dashboard" />} />
          <Route path="leads" element={<DummyPage title="Leads" />} />
          <Route path="booking" element={<DummyPage title="Booking" />} />
          <Route path="inventory" element={<DummyPage title="Inventory" />} />
          <Route path="expenses" element={<DummyPage title="Expenses" />} />
          <Route path="employee" element={<DummyPage title="Employee" />} />
          <Route path="tickets" element={<DummyPage title="Tickets" />} />
          <Route path="notes" element={<DummyPage title="Notes" />} />
          <Route path="report" element={<DummyPage title="Report" />} />
          <Route path="settings" element={<DummyPage title="Settings" />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;