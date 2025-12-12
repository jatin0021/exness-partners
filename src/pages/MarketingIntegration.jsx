import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MarketingIntegration = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50/50 min-h-full">
      <div className="w-full max-w-[580px]">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-[14px] text-gray-700 hover:text-gray-900 transition-colors mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={2.5} />
          Back
        </button>

        {/* Content Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 min-h-[300px]">
          <h1 className="text-[20px] font-bold text-gray-900 mb-2">My postbacks</h1>
          
          <p className="text-[14px] text-gray-600 leading-relaxed mb-4 max-w-[480px]">
            You haven't created any postback URLs yet. Go to the Create Postbacks section to generate your first URL.
          </p>

          <a href="#" className="inline-flex items-center text-[#2563eb] text-[14px] font-normal hover:underline mb-8">
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <div>
            <button className="bg-[#ffdd2d] hover:bg-[#ffcd2d] text-black font-medium text-[14px] px-6 py-3 rounded-md transition-colors w-full sm:w-auto min-w-[200px]">
              Create postbacks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingIntegration;
