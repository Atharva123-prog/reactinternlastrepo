import React from 'react';

const BasicDetails = () => {
  return (
    <div className="p-10">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Basic Details Configuration</h2>
      <div className="bg-slate-50 p-10 rounded-xl border border-dashed border-slate-300 text-center text-slate-500">
        <p>This is where the Basic Details form or data will go.</p>
        <p className="text-sm mt-2">Notice the URL changed to <strong>/basic-details</strong> but the Sidebar and Header did not refresh.</p>
      </div>
    </div>
  );
};

export default BasicDetails;
