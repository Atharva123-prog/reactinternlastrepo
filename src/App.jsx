// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


// import BuilderLayout from './BuilderLayout';
// import BasicDetails from './pages/BasicDetails';  


// import Overview from './pages/Overview';


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
      
//         <Route path="/" element={<BuilderLayout />}>
          
        
//           <Route index element={<Overview />} />
          
         
//           <Route path="overview" element={<Navigate to="/" replace />} /> 
//           <Route path="basic-details" element={<BasicDetails />} />
          
   
//           <Route path="about-project" element={<div className="p-10">About Project Content</div>} />
//           <Route path="amenities" element={<div className="p-10">Amenities Content</div>} />
//           <Route path="floor-plan" element={<div className="p-10">Floor Plan Content</div>} />
//           <Route path="nearby-locations" element={<div className="p-10">Nearby Locations Content</div>} />
//           <Route path="media" element={<div className="p-10">Media Content</div>} />
//           <Route path="reviews" element={<div className="p-10">Reviews Content</div>} />
          
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BuilderLayout from './BuilderLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Only one main route. Internal switching is handled by BuilderLayout state. */}
        <Route path="/" element={<BuilderLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;