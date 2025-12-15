import React from 'react';

// --- Icon Components ---
const SearchIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const FilterIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
);
const ExportIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);
const ViewIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const UnapproveIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
);

const IBProfiles = () => {
    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">

                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">IB Profiles</h1>
                        <p className="text-sm sm:text-base text-gray-600">Manage individual IB profiles and settings</p>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="space-y-4">
                            
                            {/* Actions Bar */}
                            <div className="space-y-3">
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                                        <div className="relative flex-1 w-full">
                                            <SearchIcon />
                                            <input placeholder="Search..." className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" type="text" />
                                        </div>
                                        <div className="flex items-center gap-2 w-full sm:w-auto">
                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer flex-1 sm:flex-none">
                                                <span className="mr-2"><FilterIcon /></span>
                                                <span className="hidden sm:inline">Filter</span>
                                                <span className="sm:hidden">Filters</span>
                                            </button>
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
                                                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"><div className="flex items-center gap-1"><span className="text-xs sm:text-sm">IB Partner</span><span className="text-xs">↕️</span></div></th>
                                                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"><div className="flex items-center gap-1"><span className="text-xs sm:text-sm">Status</span><span className="text-xs">↕️</span></div></th>
                                                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"><div className="flex items-center gap-1"><span className="text-xs sm:text-sm">Join Date</span><span className="text-xs">↕️</span></div></th>
                                                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"><div className="flex items-center gap-1"><span className="text-xs sm:text-sm">USD per Lot</span><span className="text-xs">↕️</span></div></th>
                                                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"><div className="flex items-center gap-1"><span className="text-xs sm:text-sm">Spread %</span><span className="text-xs">↕️</span></div></th>
                                                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "><div className="flex items-center gap-1"><span className="text-xs sm:text-sm">Actions</span></div></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div><div className="font-medium text-gray-900">Rasik Katoch</div><div className="text-sm text-gray-500">katochrasik795@gmail.com</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-3 py-1 text-sm "><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>approved</span></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div className="text-sm"><div>13/11/2025</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div className="text-sm"><div className="font-medium">$0</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div className="text-sm"><div className="font-medium">20%</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0">
                                                        <div className="flex items-center space-x-2">
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">
                                                                <span className="mr-2"><ViewIcon /></span>View
                                                            </button>
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-red-600 hover:text-red-700 hover:border-red-300">
                                                                <span className="mr-2"><UnapproveIcon /></span>Unapprove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div><div className="font-medium text-gray-900">Shruti Mudliar</div><div className="text-sm text-gray-500">shruti@zuperior.com</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-3 py-1 text-sm "><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>approved</span></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div className="text-sm"><div>14/11/2025</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div className="text-sm"><div className="font-medium">$0</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div className="text-sm"><div className="font-medium">20%</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0">
                                                        <div className="flex items-center space-x-2">
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">
                                                                <span className="mr-2"><ViewIcon /></span>View
                                                            </button>
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-red-600 hover:text-red-700 hover:border-red-300">
                                                                <span className="mr-2"><UnapproveIcon /></span>Unapprove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div><div className="font-medium text-gray-900">Parminder Singh</div><div className="text-sm text-gray-500">shera1355@gmail.com</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-3 py-1 text-sm "><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>approved</span></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div className="text-sm"><div>23/11/2025</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div className="text-sm"><div className="font-medium">$8</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0"><div className="text-sm"><div className="font-medium">8%</div></div></div>
                                                </td>
                                                <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                    <div className="text-sm text-gray-900 min-w-0">
                                                        <div className="flex items-center space-x-2">
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">
                                                                <span className="mr-2"><ViewIcon /></span>View
                                                            </button>
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-red-600 hover:text-red-700 hover:border-red-300">
                                                                <span className="mr-2"><UnapproveIcon /></span>Unapprove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Pagination */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-sm text-gray-700 pt-3 sm:pt-4">
                                <div className="text-center sm:text-left">Showing 3 of 3 results</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IBProfiles;
