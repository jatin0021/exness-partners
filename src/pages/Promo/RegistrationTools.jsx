import React, { useState } from 'react';
import { 
  ChevronDown, 
  Copy, 
  MoreVertical, 
  ArrowDown, 
  ArrowUp, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  Info,
  ExternalLink,
  Filter,
  Inbox,
  X
} from 'lucide-react';

const RegistrationTools = () => {
  const [activeTab, setActiveTab] = useState('partner_codes');
  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false);

  const tabs = [
    { id: 'partner_codes', label: 'Partner codes' },
    { id: 'links', label: 'Links' },
    { id: 'campaigns', label: 'Campaigns' }
  ];

  const data = [
    {
      id: 1,
      account: '-',
      code: '4xeij4lc8j',
      link: 'https://one.fincrmonelink.com/a/4xeij4lc8j'
    }
  ];

  return (
    <div className="flex flex-col w-full h-full bg-[#F7F9FA] px-6 py-6 font-sans">
       <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[32px] text-[#1d1d1d] mb-2">Registration tools</h1>
          <p className="text-[#6b7280] text-[15px]">You can configure your codes, links and campaigns binding here.</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-[14px] font-medium transition-colors relative uppercase tracking-wide ${
                  activeTab === tab.id 
                    ? 'text-[#1976d2] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1976d2]' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>



        {/* Links Content */}
        {activeTab === 'links' && (
          <div className="w-full space-y-8">
            <p className="text-[14px] text-gray-700">You can now generate links for your campaigns by specifying your preferred language and selecting which high-converting page to direct your referrals to.</p>

            {/* Partner Code Section */}
            <section>
              <h2 className="text-[18px] text-[#1d1d1d] mb-2 flex items-center gap-2">
                Partner code 
                <Info size={16} className="text-gray-400" />
              </h2>
              <p className="text-[14px] text-gray-600 mb-6 leading-relaxed max-w-[800px]">
                Partner code can be shared with clients. Clients can input it during registration process. On the <a href="https://my.fincrm.com/accounts/sign-up" target="_blank" rel="noreferrer" className="text-[#1976d2] hover:underline">registration page</a> client needs to click on a checkbox "I'm registering under partner" and input code.
              </p>
              
              <div className="border border-gray-200 rounded p-6 bg-white shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                         <label className="text-[12px] text-gray-500 mb-1 block">Domain</label>
                         <div className="relative">
                            <select className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded text-[14px] text-gray-900 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
                                <option>one.fincrmonelink.com</option>
                            </select>
                            <ChevronDown size={16} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                         </div>
                    </div>
                    
                    <div>
                         <p className="text-[13px] text-gray-500 mb-3">Can be used only for client registering on FINCRM website</p>
                         <div className="flex items-end justify-between border-b border-gray-200 pb-2">
                            <div>
                                <p className="text-[14px] font-bold text-gray-900 mb-1">Partner code</p>
                                <p className="text-[20px] font-bold text-[#1d1d1d]">4xeij4lc8j</p>
                            </div>
                            <button className="flex items-center gap-1.5 text-[13px] text-[#1d1d1d] font-medium hover:bg-gray-50 px-3 py-1.5 rounded transition bg-transparent uppercase tracking-wide">
                                <Copy size={16} />
                                COPY
                            </button>
                         </div>
                    </div>
                  </div>
              </div>
            </section>

             {/* Web Link Section */}
             <section>
              <h2 className="text-[18px] text-[#1d1d1d] mb-4">Web link</h2>
              
              <div className="border border-gray-200 rounded p-6 bg-white shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="grid grid-cols-2 gap-4">
                         <div>
                            <label className="text-[12px] text-gray-500 mb-1 block">Target page</label>
                             <div className="relative">
                                <select className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded text-[14px] text-gray-900 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
                                    <option value="main_page">Main page</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                             </div>
                         </div>
                         <div>
                            <label className="text-[12px] text-gray-500 mb-1 block">Language</label>
                             <div className="relative">
                                <select className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded text-[14px] text-gray-900 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
                                    <option value="en">English</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                             </div>
                         </div>
                    </div>
                    
                    <div>
                         <p className="text-[13px] text-gray-500 mb-3">This link can be used in all countries</p>
                         <div className="flex items-end justify-between border-b border-gray-200 pb-2">
                            <div className="w-full overflow-hidden mr-4">
                                <p className="text-[14px] font-bold text-gray-900 mb-1">Main web link</p>
                                <p className="text-[16px] text-[#1d1d1d] truncate">https://one.fincrmonelink.com/a/4xeij4lc8j</p>
                            </div>
                            <button className="flex items-center gap-1.5 text-[13px] text-[#1d1d1d] font-medium hover:bg-gray-50 px-3 py-1.5 rounded transition bg-transparent shrink-0 uppercase tracking-wide">
                                <Copy size={16} />
                                COPY
                            </button>
                         </div>
                    </div>
                  </div>
              </div>
            </section>

             {/* Mobile Link Section */}
             <section>
              <h2 className="text-[18px] text-[#1d1d1d] mb-4">Mobile link</h2>
              
              <div className="border border-gray-200 rounded p-6 bg-white shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                         <label className="text-[12px] text-gray-500 mb-1 block">Mobile OS</label>
                         <div className="relative">
                            <select className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded text-[14px] text-gray-900 appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
                                <option>All</option>
                            </select>
                             <ChevronDown size={16} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                         </div>
                    </div>
                    
                    <div>
                         <p className="text-[13px] text-gray-500 mb-3">This link can be used in all countries except: <span className="font-bold text-gray-900">China</span></p>
                         <div className="flex items-end justify-between border-b border-gray-200 pb-2">
                             <div className="w-full overflow-hidden mr-4">
                                <p className="text-[14px] font-bold text-gray-900 mb-1">Mobile link</p>
                                <p className="text-[16px] text-[#1d1d1d] truncate">https://one.fincrmonelink.com/a/4xeij4lc8j?platform=mobile</p>
                            </div>
                            <button className="flex items-center gap-1.5 text-[13px] text-[#1d1d1d] font-medium hover:bg-gray-50 px-3 py-1.5 rounded transition bg-transparent shrink-0 uppercase tracking-wide">
                                <Copy size={16} />
                                COPY
                            </button>
                         </div>
                    </div>
                  </div>
              </div>
            </section>
          </div>

        )}

        {/* Campaigns Content */}
        {activeTab === 'campaigns' && (
          <div className="w-full">
            <div className="flex items-center gap-4 mb-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded text-[14px] text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                 <Filter size={16} /> Filters
              </button>
              <button 
                onClick={() => setIsCreateCampaignOpen(true)}
                className="px-4 py-2 bg-[#1976d2] text-white rounded text-[14px] font-medium hover:bg-[#1565c0] transition-colors shadow-sm"
              >
                Create new campaign
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center py-20 px-4 bg-white border border-gray-200 rounded min-h-[400px]">
                <div className="mb-4 text-gray-300">
                    <Inbox size={48} strokeWidth={1} />
                </div>
                <span className="text-[16px] text-gray-500 font-normal">No data</span>
            </div>
          </div>
        )}

        {/* Content Area - Only show if Partner Codes tab is active */}
        {activeTab === 'partner_codes' && (
        <div className="w-full">
          {/* Top Sort Control */}
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-gray-500">Sort by:</span>
              <button className="flex items-center gap-1 text-[13px] text-[#1d1d1d] hover:bg-gray-100 px-2 py-1 rounded transition-colors">
                Partner account
              </button>
              <div className="h-4 w-[1px] bg-gray-300 mx-2"></div>
               <button className="flex items-center justify-center p-1 hover:bg-gray-100 rounded text-gray-500">
                  <ArrowDown size={16} />
               </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_1.5fr_3fr_auto] border-b border-gray-200 bg-white">
              <div className="px-4 py-3 flex items-center gap-1 cursor-pointer hover:bg-gray-50 group">
                <span className="text-[13px] font-bold text-[#1d1d1d]">Partner account</span>
                <ArrowDown size={16} className="text-[#1d1d1d]" strokeWidth={2} />
              </div>
              <div className="px-4 py-3 flex items-center gap-1 cursor-pointer hover:bg-gray-50 group">
                <span className="text-[13px] font-bold text-[#1d1d1d]">Partner code</span>
                <ArrowUp size={16} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
              </div>
              <div className="px-4 py-3 flex items-center gap-1 cursor-pointer hover:bg-gray-50 group">
                <span className="text-[13px] font-bold text-[#1d1d1d]">Partner link</span>
                 <ArrowUp size={16} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
              </div>
              <div className="w-12"></div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-100">
              {data.map((row) => (
                <div key={row.id} className="grid grid-cols-[1fr_1.5fr_3fr_auto] hover:bg-gray-50 transition-colors items-center">
                  <div className="px-4 py-3 text-[14px] text-gray-900">
                    {row.account}
                  </div>
                  
                  <div className="px-4 py-3 flex items-center gap-3">
                    <span className="text-[14px] text-gray-900">{row.code}</span>
                    <button className="p-1.5 rounded border border-gray-300 text-gray-500 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700 transition-all bg-transparent" title="Copy">
                      <Copy size={14} />
                    </button>
                  </div>

                  <div className="px-4 py-3 flex items-center gap-3">
                    <a href={row.link} className="text-[14px] text-gray-900 hover:underline truncate max-w-[400px]" target="_blank" rel="noreferrer">
                      {row.link}
                    </a>
                     <button className="p-1.5 rounded border border-gray-300 text-gray-500 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700 transition-all bg-transparent" title="Copy">
                      <Copy size={14} />
                    </button>
                  </div>

                  <div className="px-4 py-3 flex justify-end">
                    <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-4 px-4 py-3 border-t border-gray-200">
              <div className="flex items-center gap-2 text-[12px] text-gray-600">
                <span>Items per page</span>
                <div className="flex items-center gap-6 cursor-pointer">
                  <span className="text-gray-900 text-[13px] border-b border-transparent hover:bg-gray-100 px-1 rounded transition-colors">10 <ChevronDown size={14} className="inline ml-1" /></span>
                </div>
              </div>
              
              <div className="text-[12px] text-gray-600">
                1–1 of 1
              </div>

              <div className="flex items-center gap-1">
                <button className="p-1 text-gray-300 cursor-not-allowed hover:bg-transparent">
                  <ChevronsLeft size={20} />
                </button>
                <button className="p-1 text-gray-300 cursor-not-allowed hover:bg-transparent">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-1 text-gray-300 cursor-not-allowed hover:bg-transparent">
                  <ChevronRight size={20} />
                </button>
                <button className="p-1 text-gray-300 cursor-not-allowed hover:bg-transparent">
                  <ChevronsRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        )}


      {/* Create Campaign Modal */}
      {isCreateCampaignOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg w-full max-w-[480px] shadow-xl animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5">
              <h2 className="text-[20px] text-[#1d1d1d]">Create campaigns</h2>
              <button 
                onClick={() => setIsCreateCampaignOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 pb-6">
               <div className="space-y-5">
                  {/* Title Field */}
                  <div className="space-y-1.5">
                    <label className="block text-[14px] text-gray-700">Title</label>
                    <input 
                      type="text" 
                      className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-[4px] text-[14px] text-gray-900 focus:outline-none focus:border-[#1976d2] focus:ring-1 focus:ring-[#1976d2] transition-all"
                    />
                  </div>

                  {/* Partner Code Field */}
                  <div className="space-y-1.5">
                    <label className="block text-[14px] text-gray-700">Partner code</label>
                    <div className="relative">
                      <select className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-[4px] text-[14px] text-gray-900 appearance-none focus:outline-none focus:border-[#1976d2] focus:ring-1 focus:ring-[#1976d2] cursor-pointer">
                        <option>4xeij4lc8j</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
               </div>

               {/* Actions */}
               <div className="flex items-center justify-end gap-3 mt-8">
                  <button 
                    onClick={() => setIsCreateCampaignOpen(false)}
                    className="px-4 py-2 bg-[#F3F4F6] text-gray-700 rounded-[4px] text-[14px] font-medium hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-[#FFD700] text-black rounded-[4px] text-[14px] font-medium hover:bg-[#FCD100] transition-colors min-w-[80px]">
                    Save
                  </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default RegistrationTools;
