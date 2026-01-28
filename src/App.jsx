import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Builder from "./builder";    

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Builder />} />
        
       
        <Route path="/overview" element={<div className="p-10 text-2xl font-bold">Overview Page</div>} />
        <Route path="/basic-details" element={<div className="p-10 text-2xl font-bold">Basic Details Page</div>} />
        <Route path="/about-project" element={<div className="p-10 text-2xl font-bold">About Project Page</div>} />
        <Route path="/amenities" element={<div className="p-10 text-2xl font-bold">Amenities Page</div>} />
        <Route path="/floor-plan" element={<div className="p-10 text-2xl font-bold">Floor Plan Page</div>} />
        <Route path="/nearby-locations" element={<div className="p-10 text-2xl font-bold">Nearby Locations Page</div>} />
        <Route path="/media" element={<div className="p-10 text-2xl font-bold">Media Page</div>} />
        <Route path="/reviews" element={<div className="p-10 text-2xl font-bold">Reviews Page</div>} />
        <Route path="/brochure-preview" element={<div className="p-10 text-2xl font-bold">Brochure Preview PDF</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;