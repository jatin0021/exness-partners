import React from 'react';
import { Info } from 'lucide-react';

const Approve = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#F7F9FA] px-6 py-6">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-[32px] font-bold text-[#1d1d1d]">Rebates</h1>
          <a href="https://ex.guide/3VTJYtZ" target="_blank" rel="noopener noreferrer" className="text-[#1d1d1d] hover:text-blue-600 transition-colors">
            <Info size={24} strokeWidth={2} />
          </a>
        </div>

        {/* Content Card */}
        <div className="w-full bg-white rounded-[4px] border border-[#d1d5db] flex flex-col items-center justify-center py-12 px-4 shadow-sm text-center">
            <h3 className="text-[20px] font-bold text-[#1d1d1d] mb-1">Attract clients</h3>
            <span className="text-[16px] text-[#1d1d1d]">
                Bring your first referred client to get a reward from their trades and set a rebate for them.
            </span>
        </div>
      </div>
    </div>
  );
};

export default Approve;
