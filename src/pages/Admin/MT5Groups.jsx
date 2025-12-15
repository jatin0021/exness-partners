import React, { useState } from 'react';
import { tradingGroupsData } from './data/TradingGroupsData';

// --- Icons ---
const RefreshIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);

const ExportIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const SearchIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const RegenerateIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
);

const AddIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const EditIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
);

const MT5Groups = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredData = tradingGroupsData.filter(item => 
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                <style>
                    {`
                    .group-row:hover .edit-button {
                      opacity: 1 !important;
                    }
                    `}
                </style>

                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">MT5 Groups</h1>
                        <p className="text-sm sm:text-base text-gray-600">Manage groups synced from MT5 API with auto-generated names</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">
                            <span className="mr-2"><RegenerateIcon /></span>
                            Regenerate Names
                        </button>
                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-[#6242a5] to-[#8b6ec8] text-white hover:from-[#5a3a9a] hover:to-[#7d5fb8] focus:ring-[#6242a5] px-3 py-1.5 text-sm cursor-pointer ">
                            <span className="mr-2"><RefreshIcon /></span>
                            Sync Groups
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="space-y-4">
                            
                            {/* Filter Section */}
                            <div className="space-y-3">
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                                        <div className="relative flex-1 w-full">
                                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                <SearchIcon />
                                            </span>
                                            <input 
                                                placeholder="Search..." 
                                                className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                                                type="text" 
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-center gap-2 w-full sm:w-auto">
                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer flex-1 sm:flex-none">
                                                <span className="mr-2"><ExportIcon /></span>
                                                <span className="hidden sm:inline">Export</span>
                                                <span className="sm:hidden">Export</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100">
                                                    <div class="flex items-center gap-1">
                                                        <span class="text-xs sm:text-sm">Group ID</span><span class="text-xs">↕️</span>
                                                    </div>
                                                </th>
                                                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100">
                                                    <div class="flex items-center gap-1">
                                                        <span class="text-xs sm:text-sm">Group Name</span><span class="text-xs">↕️</span>
                                                    </div>
                                                </th>
                                                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                                                    <div class="flex items-center gap-1"><span class="text-xs sm:text-sm">Description</span></div>
                                                </th>
                                                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                                                    <div class="flex items-center gap-1"><span class="text-xs sm:text-sm">Structures</span></div>
                                                </th>
                                                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                                                    <div class="flex items-center gap-1"><span class="text-xs sm:text-sm">Actions</span></div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {filteredData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 text-left">
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0">
                                                            <span className="font-mono text-sm">{row.id}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0">
                                                            <div className="flex items-center justify-between group-row group">
                                                                <div>
                                                                    <div className="font-medium text-gray-900">{row.name}</div>
                                                                    <div className="text-xs text-gray-500">Click to edit</div>
                                                                </div>
                                                                <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-700 hover:bg-gray-100 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer edit-button opacity-0 transition-opacity">
                                                                    <span className="mr-2"><EditIcon /></span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0">
                                                            <span className="text-gray-600">{row.description}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0">
                                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                                {row.structures > 0 ? `${row.structures} structures` : '0 structures'}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0">
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-[#6242a5] to-[#8b6ec8] text-white hover:from-[#5a3a9a] hover:to-[#7d5fb8] focus:ring-[#6242a5] px-3 py-1.5 text-sm cursor-pointer ">
                                                                <span className="mr-2"><AddIcon /></span>
                                                                Add Commission
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-sm text-gray-700 pt-3 sm:pt-4 px-4 pb-3">
                                    <div className="text-center sm:text-left">Showing {filteredData.length} of {filteredData.length} results</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MT5Groups;
