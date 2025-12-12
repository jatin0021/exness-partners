import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PersonalInformation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50/50 min-h-full">
      <div className="w-full max-w-[500px]">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-[14px] text-gray-700 hover:text-gray-900 transition-colors mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={2.5} />
          Back
        </button>

        {/* Content Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 min-h-[200px]">
          <h1 className="text-[20px] font-bold text-gray-900 mb-8">Personal information</h1>
          
          <div className="flex flex-col">
            <span className="text-[12px] text-gray-400 font-normal mb-1">Email</span>
            <span className="text-[14px] text-gray-900 font-medium">r***@e***.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
