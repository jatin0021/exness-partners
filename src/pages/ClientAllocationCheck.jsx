import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ClientAllocationCheck = () => {
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 min-h-[400px]">
          <h1 className="text-[20px] font-bold text-gray-900 mb-4">Client allocation check</h1>
          
          <p className="text-[14px] text-gray-600 leading-relaxed mb-8">
            Here you can check if a client is allocated to you under your partner link. To verify a client, please input their email address and click Continue.
          </p>

          <div className="mb-8">
            <label className="block text-[12px] text-gray-600 mb-2">Client email</label>
            <input 
              type="email" 
              className="w-full h-12 px-4 rounded border border-gray-300 focus:border-blue-500 focus:outline-none text-[14px]"
            />
          </div>

          <button className="w-full h-12 rounded bg-[#ffdd2d] hover:bg-[#ffcd2d] text-black font-medium transition-colors text-[16px]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientAllocationCheck;
