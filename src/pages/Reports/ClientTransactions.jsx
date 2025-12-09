import React from 'react';
import { Filter, ArrowDown, ArrowUp, Inbox } from 'lucide-react';

const ClientTransactions = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#F7F9FA] px-6 py-6">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-[32px] font-bold text-[#1d1d1d]">Client transactions</h1>
        </div>

        {/* Metrics Cards Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1: Profit (USD) */}
          <div className="bg-white rounded-[4px] p-6 flex flex-col items-center justify-center shadow-sm border-none min-h-[120px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[28px] font-bold">0.00</span>
             </div>
             <span className="text-[13px] text-[#6b7280] mt-1">Profit (USD)</span>
          </div>
          
          {/* Card 2: Volume (lots) */}
          <div className="bg-white rounded-[4px] p-6 flex flex-col items-center justify-center shadow-sm border-none min-h-[120px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[28px] font-bold">0.0000</span>
             </div>
             <span className="text-[13px] text-[#6b7280] mt-1">Volume (lots)</span>
          </div>

          {/* Card 3: Volume (Mln. USD) */}
          <div className="bg-white rounded-[4px] p-6 flex flex-col items-center justify-center shadow-sm border-none min-h-[120px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[28px] font-bold">0.0000</span>
             </div>
             <span className="text-[13px] text-[#6b7280] mt-1">Volume (Mln. USD)</span>
          </div>

          {/* Card 4: Transactions */}
          <div className="bg-white rounded-[4px] p-6 flex flex-col items-center justify-center shadow-sm border-none min-h-[120px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[28px] font-bold">0</span>
             </div>
             <span className="text-[13px] text-[#6b7280] mt-1">Transactions</span>
          </div>
        </div>

        {/* Toolbar: Filters & Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#eaeff2] rounded-[4px] text-[14px] font-medium text-[#374151] hover:bg-gray-200 transition-colors">
                <Filter size={16} strokeWidth={2} className="text-[#6b7280]" />
                Filters
                <div className="flex items-center justify-center bg-[#546e7a] text-white text-[11px] font-bold h-5 w-5 rounded-full ml-1">
                1
                </div>
            </button>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[14px]">
                <span className="text-[#1d1d1d]">Sort by:</span>
                <button className="text-[#3b82f6] font-medium hover:underline">Date</button>
                </div>
                <div className="h-5 w-[1px] bg-[#e5e7eb]"></div>
                <button className="p-1 hover:bg-gray-100 rounded text-[#6b7280]">
                <ArrowDown size={18} strokeWidth={1.5} />
                </button>
            </div>
        </div>

        {/* Table Header Row */}
        <div className="w-full border-b border-[#e5e7eb] pb-3 mb-8">
            <div className="grid grid-cols-12 gap-x-4 text-[13px] font-bold text-[#1d1d1d]">
                <div className="col-span-2 flex items-center gap-1 cursor-pointer group hover:text-gray-600">
                    Client <br/> account
                    <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                </div>
                <div className="col-span-2 flex items-end pb-1 gap-1 cursor-pointer group hover:text-gray-600">
                    Date
                    <ArrowDown size={14} className="text-[#1d1d1d]" strokeWidth={2.5} />
                </div>
                <div className="col-span-2 flex items-end pb-1 gap-1 cursor-pointer group hover:text-gray-600">
                    Instrument
                    <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                </div>
                <div className="col-span-2 flex items-center justify-end pb-1 gap-1 cursor-pointer group hover:text-gray-600 pr-8">
                    Spread
                    <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center">
                    <span className="mb-1">Volume</span>
                    <div className="flex bg-[#eaeff2] rounded-full p-0.5">
                        <button className="px-3 py-0.5 bg-[#546e7a] text-white rounded-full text-[11px] hover:bg-[#455a64]">Mln. USD</button>
                        <button className="px-3 py-0.5 text-[#546e7a] rounded-full text-[11px] hover:bg-white/50">Lots</button>
                    </div>
                </div>
                <div className="col-span-2 flex items-center justify-end pb-1 gap-1 cursor-pointer group hover:text-gray-600">
                   <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                   Profit
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

export default ClientTransactions;