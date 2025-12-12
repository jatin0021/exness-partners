import React from 'react';
import { Filter, ArrowDown, ArrowUp, Inbox, ChevronDown } from 'lucide-react';

const Clients = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#F7F9FA] px-6 py-6">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-[32px] font-bold text-[#1d1d1d]">Clients</h1>
        </div>

        {/* Metrics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1: Clients */}
          <div className="bg-white rounded-lg p-2 flex flex-col items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#e5e7eb] h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-2xl font-bold tracking-tight">0</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1 font-normal">Clients</span>
          </div>
          
          {/* Card 2: Volume (lots) */}
          <div className="bg-white rounded-lg p-2 flex flex-col items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#e5e7eb] h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-2xl font-bold tracking-tight">0</span>
                <span className="text-lg font-bold text-[#9ca3af]">.0000</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1 font-normal">Volume (lots)</span>
          </div>

          {/* Card 3: Volume (Mln. USD) */}
          <div className="bg-white rounded-lg p-2 flex flex-col items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#e5e7eb] h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-2xl font-bold tracking-tight">0</span>
                <span className="text-lg font-bold text-[#9ca3af]">.0000</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1 font-normal">Volume (Mln. USD)</span>
          </div>

          {/* Card 4: Rewards */}
          <div className="bg-white rounded-lg p-2 flex flex-col items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#e5e7eb] h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-2xl font-bold tracking-tight">0</span>
                <span className="text-lg font-bold text-[#9ca3af]">.0000</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1 font-normal">Rewards</span>
          </div>
        </div>

        {/* Toolbar: Filters & Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] font-medium text-[#374151] hover:bg-gray-50 transition-colors shadow-sm">
            <Filter size={16} strokeWidth={2} className="text-[#6b7280]" />
            Filters
            <div className="flex items-center justify-center bg-[#e5e7eb] text-[#374151] text-[11px] font-bold h-5 w-5 rounded-full ml-1">
              1
            </div>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[14px]">
              <span className="text-[#6b7280]">Sort by:</span>
              <button className="text-[#111827] font-medium hover:opacity-80">Client ID</button>
            </div>
            <div className="h-5 w-[1px] bg-[#e5e7eb]"></div>
            <button className="p-1 hover:bg-gray-100 rounded text-[#6b7280]">
               <ArrowDown size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Table Header Row */}
        <div className="w-full border-b border-[#e5e7eb] pb-3 mb-8">
            <div className="grid grid-cols-12 gap-4 text-[13px] font-bold text-[#111827]">
                <div className="col-span-2 flex items-center gap-1 cursor-pointer group">
                    Client ID
                    <ArrowDown size={14} className="text-[#111827]" strokeWidth={2.5} />
                </div>
                <div className="col-span-2 flex items-center gap-1 cursor-pointer group">
                    Sign-up date
                    <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                </div>
                <div className="col-span-1 flex items-center gap-1 cursor-pointer group">
                    Status
                    {/* Placeholder for potential sort icon, currently hidden or light based on screenshot */}
                    <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af] opacity-50" strokeWidth={2.5} />
                </div>
                <div className="col-span-2 flex items-center">
                    Client progress
                </div>
                <div className="col-span-2 flex items-center gap-1 cursor-pointer group">
                   <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                   Rewards
                </div>
                <div className="col-span-1 flex items-center">
                   Comment
                </div>
                <div className="col-span-2 flex items-center justify-end gap-1 cursor-pointer group">
                   <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                   Rebates
                </div>
            </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center pt-16">
            <div className="w-16 h-16 bg-[#f3f4f6] rounded-xl flex items-center justify-center text-[#9ca3af] mb-4">
                <Inbox size={32} strokeWidth={1.5} />
            </div>
            <span className="text-[16px] text-[#111827] font-medium">No data</span>
        </div>
        
      </div>
    </div>
  );
};

export default Clients;
