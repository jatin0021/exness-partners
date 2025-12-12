import React, { useState } from 'react';
import { Filter, ArrowDown, ArrowUp, Inbox, UserCheck, X, ChevronDown, Calendar } from 'lucide-react';

const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg w-full max-w-[500px] max-h-[90vh] flex flex-col shadow-xl m-4">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-[24px] font-bold text-[#1d1d1d]">Filters</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          
          {/* Partner account name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">Partner account name</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="All" 
                readOnly
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 cursor-pointer group-hover:border-gray-400"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          {/* My partner account */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">My partner account</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="All" 
                readOnly
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 cursor-pointer group-hover:border-gray-400"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Partner code */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">Partner code</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="All" 
                readOnly
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 cursor-pointer group-hover:border-gray-400"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Country */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">Country</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="All" 
                readOnly
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 cursor-pointer group-hover:border-gray-400"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Client ID */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">Client ID</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="All" 
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 cursor-text group-hover:border-gray-400"
              />
              <div className="hidden group-hover:block absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Client account */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">Client account</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="All" 
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 cursor-text group-hover:border-gray-400"
              />
              <div className="hidden group-hover:block absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Client account type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">Client account type</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="All" 
                readOnly
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 cursor-pointer group-hover:border-gray-400"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">Platform</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="All" 
                readOnly
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 cursor-pointer group-hover:border-gray-400"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Account registration period */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">Account registration period</label>
            <div className="relative group">
              <input 
                type="text" 
                defaultValue="01 Jan, 2007 – 09 Dec, 2025" 
                readOnly
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer group-hover:border-gray-400"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Last trading period */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">Last trading period</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Start date - End date"
                readOnly
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 cursor-pointer group-hover:border-gray-400"
              />
               <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Comment */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#374151]">Comment</label>
            <div className="relative group">
              <input 
                type="text" 
                className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 cursor-text group-hover:border-gray-400"
              />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
           <button 
             onClick={onClose}
             className="px-6 py-2.5 bg-[#f3f4f6] text-[#374151] font-medium text-[14px] rounded-[4px] hover:bg-gray-200 transition-colors"
           >
             Clear filters
           </button>
           <button 
             onClick={onClose}
             className="px-6 py-2.5 bg-[#FFD900] text-black font-medium text-[14px] rounded-[4px] hover:bg-[#F5D000] transition-colors shadow-sm"
           >
             Apply
           </button>
        </div>
      </div>
    </div>
  );
};

const ClientAccounts = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-full bg-[#F7F9FA] px-6 py-6">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-[32px] font-bold text-[#1d1d1d]">Client accounts</h1>
        </div>

        {/* Metrics Cards Grid - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {/* Card 1: Level 1 Clients */}
          <div className="bg-white rounded-[4px] p-2 flex flex-col items-center justify-center shadow-sm border-none h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[24px] font-bold">0</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1">Level 1 Clients</span>
          </div>
          
          {/* Card 2: Clients' accounts */}
          <div className="bg-white rounded-[4px] p-2 flex flex-col items-center justify-center shadow-sm border-none h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[24px] font-bold">0</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1">Clients' accounts</span>
          </div>

          {/* Card 3: Volume (lots) */}
          <div className="bg-white rounded-[4px] p-2 flex flex-col items-center justify-center shadow-sm border-none h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[24px] font-bold">0</span>
                <span className="text-[16px] font-bold text-[#1d1d1d]">.0000</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1">Volume (lots)</span>
          </div>

          {/* Card 4: Volume (Mln. USD) */}
          <div className="bg-white rounded-[4px] p-2 flex flex-col items-center justify-center shadow-sm border-none h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[24px] font-bold">0</span>
                <span className="text-[16px] font-bold text-[#1d1d1d]">.0000</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1">Volume (Mln. USD)</span>
          </div>

          {/* Card 5: Profit (USD) */}
          <div className="bg-white rounded-[4px] p-2 flex flex-col items-center justify-center shadow-sm border-none h-[80px]">
             <div className="flex items-baseline text-[#1d1d1d]">
                <span className="text-[24px] font-bold">0</span>
                <span className="text-[16px] font-bold text-[#1d1d1d]">.00</span>
             </div>
             <span className="text-[12px] text-[#6b7280] mt-1">Profit (USD)</span>
          </div>
        </div>

        {/* Toolbar: Filters & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => setIsFilterOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#eaeff2] rounded-[4px] text-[14px] font-medium text-[#374151] hover:bg-gray-200 transition-colors"
                >
                    <Filter size={16} strokeWidth={2} className="text-[#6b7280]" />
                    Filters
                    <div className="flex items-center justify-center bg-[#546e7a] text-white text-[11px] font-bold h-5 w-5 rounded-full ml-1">
                    1
                    </div>
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-[#f3f4f6] rounded-[4px] text-[14px] font-medium text-[#374151] hover:bg-gray-200 transition-colors">
                    <UserCheck size={16} strokeWidth={2} className="text-[#6b7280]" />
                    Allocation check
                </button>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[14px]">
                <span className="text-[#1d1d1d]">Sort by:</span>
                <button className="text-[#3b82f6] font-medium hover:underline">Last trading date</button>
                </div>
                <div className="h-5 w-[1px] bg-[#e5e7eb]"></div>
                <button className="p-1 hover:bg-gray-100 rounded text-[#6b7280]">
                <ArrowDown size={18} strokeWidth={1.5} />
                </button>
            </div>
        </div>

        {/* Table Header Row */}
        <div className="w-full border-b border-[#e5e7eb] pb-3 mb-8">
            <div className="grid grid-cols-12 gap-4 text-[13px] font-bold text-[#1d1d1d]">
                <div className="col-span-2 flex items-center gap-1 cursor-pointer group hover:text-gray-600">
                    Client <br/> account
                    <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                </div>
                <div className="col-span-2 flex items-center justify-end gap-1 cursor-pointer group hover:text-gray-600 pr-8">
                    <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                    Profit
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center">
                    <span className="mb-1">Volume</span>
                    <div className="flex bg-[#eaeff2] rounded-full p-0.5">
                        <button className="px-3 py-0.5 bg-[#546e7a] text-white rounded-full text-[11px] hover:bg-[#455a64]">Mln. USD</button>
                        <button className="px-3 py-0.5 text-[#546e7a] rounded-full text-[11px] hover:bg-white/50">Lots</button>
                    </div>
                </div>
                <div className="col-span-1 flex items-center gap-1 cursor-pointer group hover:text-gray-600">
                    Client ID
                    <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                </div>
                <div className="col-span-1 flex items-center gap-1 cursor-pointer group hover:text-gray-600">
                    Partner <br/> code
                    <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                </div>
                <div className="col-span-2 flex items-center gap-1 cursor-pointer group hover:text-gray-600">
                   Comment
                   <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                </div>
                <div className="col-span-2 flex items-center justify-end gap-1 cursor-pointer group hover:text-gray-600">
                   Sign-up date
                   <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
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

        {/* Filter Modal */}
        <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        
      </div>
    </div>
  );
};

export default ClientAccounts;
