import React from 'react';

// --- Icons ---
const SearchIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const RefreshIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);
const ExportIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);
const ChevronDownIcon = () => (
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);

const TradersProfile = () => {
    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Traders Profile</h1>
                        <p className="text-gray-600">All CRM-referred traders from ib_referrals</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                            <SearchIcon />
                            <input className="ml-2 outline-none text-sm" placeholder="Search email, referrer name, code" defaultValue="" />
                        </div>
                        <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center gap-2 text-sm font-medium">
                            <RefreshIcon /> Refresh
                        </button>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="space-y-4">
                            <div className="px-1">
                                <h2 className="text-lg font-semibold text-gray-900">Traders</h2>
                            </div>
                            
                            {/* Controls Bar */}
                            <div className="rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-gray-200">
                                <div className="flex flex-col lg:flex-row gap-4 items-center">
                                    <div className="flex-1 w-full lg:w-auto">
                                        <input placeholder="Search..." className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" defaultValue="" />
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex gap-2">
                                            <input className="rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="date" defaultValue="" />
                                            <input className="rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="date" defaultValue="" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="relative">
                                            <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 h-[44px] hover:bg-gray-50 transition-all font-medium flex items-center gap-2" title="Export data">
                                                <ExportIcon />
                                                Export
                                                <ChevronDownIcon />
                                            </button>
                                        </div>
                                        <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 h-[44px] hover:bg-gray-50 transition-all font-medium">Clear Dates</button>
                                        <button className="rounded-lg bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 h-[44px] shadow-md hover:shadow-lg transition-all font-medium">Reset All</button>
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-200">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm">
                                        <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0 z-[1]">
                                            <tr>
                                                {['Trader Name', 'Trader Email', 'Contact', 'Referred By', 'Referral Code', 'Source', 'Created At'].map((header) => (
                                                    <th key={header} className="px-6 py-4 font-semibold text-gray-800 select-none whitespace-nowrap text-center border-r border-gray-200 last:border-r-0 cursor-pointer hover:bg-gray-200 transition-colors">
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">Rasik katoch</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">katochrasik795@gmail.com</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">917897897897</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">Rasik Katoch</span>
                                                        <span className="text-xs text-gray-600">katochrasik795@gmail.com</span>
                                                        <span className="text-xs text-gray-600">917897897897</span>
                                                        <span className="text-xs text-gray-500 font-mono">Code: ROMAN123</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0"><span className="font-mono text-purple-600">ROMAN123</span></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">crm</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">10/12/2025, 12:59:40</td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">Parminder Singh</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">mitow20350@httpsu.com</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">0544791143</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">Parminder Singh</span>
                                                        <span className="text-xs text-gray-600">shera1355@gmail.com</span>
                                                        <span className="text-xs text-gray-600">971544791143</span>
                                                        <span className="text-xs text-gray-500 font-mono">Code: SHERA</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0"><span className="font-mono text-purple-600">SHERA</span></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">admin</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">05/12/2025, 19:15:31</td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">Akhilesh Lakhanpal</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">akhileshlakhanpal660@gmail.com</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">918219323660</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">Rasik Katoch</span>
                                                        <span className="text-xs text-gray-600">katochrasik795@gmail.com</span>
                                                        <span className="text-xs text-gray-600">917897897897</span>
                                                        <span className="text-xs text-gray-500 font-mono">Code: ROMAN123</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0"><span className="font-mono text-purple-600">ROMAN123</span></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">admin</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">02/12/2025, 05:11:21</td>
                                            </tr>
                                            {/* Row 4 */}
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">Nikhil Tak</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">nikhil.tak@boomingbulls.com</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">971545285245</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">Parminder Singh</span>
                                                        <span className="text-xs text-gray-600">shera1355@gmail.com</span>
                                                        <span className="text-xs text-gray-600">971544791143</span>
                                                        <span className="text-xs text-gray-500 font-mono">Code: SHERA</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0"><span className="font-mono text-purple-600">SHERA</span></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">crm</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">23/11/2025, 18:16:10</td>
                                            </tr>
                                            {/* Row 5 */}
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">Yash Ajgaonkar</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">yashvajgaonkar@gmail.com</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">971545208679</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">Parminder Singh</span>
                                                        <span className="text-xs text-gray-600">shera1355@gmail.com</span>
                                                        <span className="text-xs text-gray-600">971544791143</span>
                                                        <span className="text-xs text-gray-500 font-mono">Code: SHERA</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0"><span className="font-mono text-purple-600">SHERA</span></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">crm</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">23/11/2025, 18:07:55</td>
                                            </tr>
                                            {/* Row 6 */}
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">Aman Ag</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">trading@boomingbulls.com</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">971547865609</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">Parminder Singh</span>
                                                        <span className="text-xs text-gray-600">shera1355@gmail.com</span>
                                                        <span className="text-xs text-gray-600">971544791143</span>
                                                        <span className="text-xs text-gray-500 font-mono">Code: SHERA</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0"><span className="font-mono text-purple-600">SHERA</span></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">crm</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">23/11/2025, 18:03:26</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                {/* Pagination */}
                                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
                                    <div className="text-sm text-gray-700 font-medium">Showing 1-11 of 11</div>
                                    <div className="flex gap-2">
                                        <button disabled className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all">« First</button>
                                        <button disabled className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all">‹ Prev</button>
                                        <span className="rounded-lg border border-gray-300 bg-purple-600 text-white px-4 py-2 text-sm font-medium">1</span>
                                        <button disabled className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all">Next ›</button>
                                        <button disabled className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all">Last »</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradersProfile;
