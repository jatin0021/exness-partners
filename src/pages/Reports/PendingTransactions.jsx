import React from 'react';
import { Filter, ArrowDown, ArrowUp, Inbox, Info } from 'lucide-react';

const PendingTransactions = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#F7F9FA] px-6 py-6">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-[32px] font-bold text-[#1d1d1d]">Transactions pending payment</h1>
        </div>

        {/* Info Banner */}
        <div className="flex items-center gap-3 bg-[#e3f2fd] border border-[#bbdefb] rounded-[4px] px-4 py-3 mb-8 text-[#0d47a1]">
            <Info size={20} className="text-[#2196f3]" />
            <span className="text-[14px]">Reward for these transactions will be paid to you within 24 hours.</span>
        </div>

        {/* Metrics Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Volume (lots) */}
          <div className="bg-white rounded-[4px] p-2 flex flex-col items-center justify-center shadow-sm border-none h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[24px] font-bold">0.0000</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1">Volume (lots)</span>
          </div>

          {/* Card 2: Volume (Mln. USD) */}
          <div className="bg-white rounded-[4px] p-2 flex flex-col items-center justify-center shadow-sm border-none h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[24px] font-bold">0.0000</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1">Volume (Mln. USD)</span>
          </div>

          {/* Card 3: Pending transactions count */}
          <div className="bg-white rounded-[4px] p-2 flex flex-col items-center justify-center shadow-sm border-none h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[24px] font-bold">0</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1">Pending transactions count</span>
          </div>
        </div>

        {/* Toolbar: Filters & Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#f3f4f6] rounded-[4px] text-[14px] font-medium text-[#374151] hover:bg-gray-200 transition-colors">
                <Filter size={16} strokeWidth={2} className="text-[#6b7280]" />
                Filters
            </button>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[14px]">
                    <span className="text-[#1d1d1d]">Sort by:</span>
                    <button className="text-[#3b82f6] font-medium hover:underline">Pending transactions count</button>
                </div>
                <div className="h-5 w-[1px] bg-[#e5e7eb]"></div>
                <button className="p-1 hover:bg-gray-100 rounded text-[#6b7280]">
                    <ArrowDown size={18} strokeWidth={1.5} />
                </button>
            </div>
        </div>

        {/* Table Header Row */}
        <div className="w-full border-b border-[#e5e7eb] pb-3 mb-8">
            <div className="flex items-center justify-between text-[13px] font-bold text-[#1d1d1d]">
                <div className="w-1/4 flex items-center gap-1 cursor-pointer group hover:text-gray-600">
                    Client account
                    <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                </div>
                
                <div className="flex-1 flex items-center justify-center gap-1 cursor-pointer group hover:text-gray-600">
                    Pending transactions count
                    <ArrowDown size={14} className="text-[#1d1d1d]" strokeWidth={2.5} />
                </div>

                <div className="w-1/4 flex flex-col items-end">
                    <span className="mb-1 text-center w-[120px]">Volume</span>
                    <div className="flex bg-[#eaeff2] rounded-full p-0.5">
                        <button className="px-3 py-0.5 bg-[#546e7a] text-white rounded-full text-[11px] hover:bg-[#455a64] flex items-center gap-1">
                            <ArrowUp size={10} strokeWidth={3} className="opacity-50" />
                            Mln. USD
                        </button>
                        <button className="px-3 py-0.5 text-[#546e7a] rounded-full text-[11px] hover:bg-white/50">Lots</button>
                    </div>
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

export default PendingTransactions;
