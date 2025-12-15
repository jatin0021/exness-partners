import React from 'react';

const AdminPagePlaceholder = ({ title }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-600">This page is under construction.</p>
      </div>
    </div>
  );
};

export default AdminPagePlaceholder;
