import React, { useState } from 'react';

// --- Icons Components ---
const AddIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const SearchIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const FilterIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
);
const ViewIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const TotalIBsIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const PendingRequestsIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const TotalCommissionsIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const TotalReferralsIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
const ApprovedIBsIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const TotalVolumeIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
const TotalTradesIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;

const StatCard = ({ label, value, subtext, icon: Icon, bgClass }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="p-3 sm:p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{label}</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{subtext}</p>
        </div>
        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${bgClass} rounded-full flex items-center justify-center flex-shrink-0 ml-2`}>
          <Icon />
        </div>
      </div>
    </div>
  </div>
);

const IBOverview = () => {
    const [statusFilter, setStatusFilter] = useState('all');

    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">IB Overview</h1>
                        <p className="text-sm sm:text-base text-gray-600">Manage all Introducing Brokers</p>
                    </div>
                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-[#6242a5] to-[#8b6ec8] text-white hover:from-[#5a3a9a] hover:to-[#7d5fb8] focus:ring-[#6242a5] px-3 py-1.5 text-sm cursor-pointer">
                        <span className="mr-2"><AddIcon /></span>
                        <span className="hidden sm:inline">Add New IB</span>
                        <span className="sm:hidden">Add IB</span>
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                    <StatCard label="Total IBs" value="3" subtext="3 approved | 1 pending" icon={TotalIBsIcon} bgClass="bg-blue-100" />
                    <StatCard label="Pending Requests" value="1" subtext="Awaiting approval" icon={PendingRequestsIcon} bgClass="bg-orange-100" />
                    <StatCard label="Total Commissions" value="$0.00" subtext="From 0.00 lots" icon={TotalCommissionsIcon} bgClass="bg-green-100" />
                    <StatCard label="Total Referrals" value="0" subtext="Network growth" icon={TotalReferralsIcon} bgClass="bg-purple-100" />
                    <StatCard label="Approved IBs" value="3" subtext="Active partners" icon={ApprovedIBsIcon} bgClass="bg-emerald-100" />
                    <StatCard label="Total Volume (Lots)" value="0.0" subtext="All IB trading" icon={TotalVolumeIcon} bgClass="bg-indigo-100" />
                    <StatCard label="Total Trades" value="0" subtext="All IB activity" icon={TotalTradesIcon} bgClass="bg-cyan-100" />
                </div>

                {/* Filters Row */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                                <div className="flex-1 w-full sm:w-auto">
                                    <div className="relative w-full">
                                        <SearchIcon />
                                        <input 
                                            placeholder="Search IBs..." 
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                                            type="text" 
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
                                    <select 
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full sm:w-auto"
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                    >
                                        <option value="all">All Status</option>
                                        <option value="active">Active</option>
                                        <option value="pending">Pending</option>
                                        <option value="suspended">Suspended</option>
                                    </select>
                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer w-full sm:w-auto">
                                        <span className="mr-2"><FilterIcon /></span>
                                        <span className="hidden sm:inline">More Filters</span>
                                        <span className="sm:hidden">Filters</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tables Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            {['IB Name', 'Status', 'Join Date', 'Approved Date', 'USD / Lot', 'Spread %', 'Clients', 'Volume'].map((header) => (
                                                <th key={header} className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100">
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-xs sm:text-sm">{header}</span>
                                                        <span className="text-xs">↕️</span>
                                                    </div>
                                                </th>
                                            ))}
                                            <th className="px-3 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-20 sm:w-auto">
                                                <span className="text-xs sm:text-sm">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {/* Row 1 */}
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                <div className="text-sm text-gray-900 min-w-0">
                                                    <div>
                                                        <div className="font-medium text-gray-900">Rasik Katoch</div>
                                                        <div className="text-sm text-gray-500">katochrasik795@gmail.com</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                <div className="text-sm text-gray-900 min-w-0">
                                                    <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-3 py-1 text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>approved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">13/11/2025</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">06/12/2025</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">$0.00</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">20.00%</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">0</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">$0.00</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-sm font-medium w-20 sm:w-auto">
                                                <div className="flex items-center justify-end gap-1 sm:gap-2">
                                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-700 hover:bg-gray-100 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-blue-600 hover:text-blue-700 p-1" title="View">
                                                        <span className="mr-2"><ViewIcon /></span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                <div className="text-sm text-gray-900 min-w-0">
                                                    <div>
                                                        <div className="font-medium text-gray-900">Shruti Mudliar</div>
                                                        <div className="text-sm text-gray-500">shruti@zuperior.com</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                <div className="text-sm text-gray-900 min-w-0">
                                                    <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-3 py-1 text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>approved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">14/11/2025</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">02/12/2025</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">$0.00</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">20.00%</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">0</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">$0.00</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-sm font-medium w-20 sm:w-auto">
                                                <div className="flex items-center justify-end gap-1 sm:gap-2">
                                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-700 hover:bg-gray-100 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-blue-600 hover:text-blue-700 p-1" title="View">
                                                        <span className="mr-2"><ViewIcon /></span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 3 */}
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                <div className="text-sm text-gray-900 min-w-0">
                                                    <div>
                                                        <div className="font-medium text-gray-900">Parminder Singh</div>
                                                        <div className="text-sm text-gray-500">shera1355@gmail.com</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                <div className="text-sm text-gray-900 min-w-0">
                                                    <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-3 py-1 text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>approved
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">23/11/2025</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">23/11/2025</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">$8.00</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">8.00%</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">0</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4"><div className="text-sm text-gray-900 min-w-0">$0.00</div></td>
                                            <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-sm font-medium w-20 sm:w-auto">
                                                <div className="flex items-center justify-end gap-1 sm:gap-2">
                                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-700 hover:bg-gray-100 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-blue-600 hover:text-blue-700 p-1" title="View">
                                                        <span className="mr-2"><ViewIcon /></span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-sm text-gray-700 pt-3 sm:pt-4">
                            <div className="text-center sm:text-left">Showing 3 of 3 results</div>
                        </div>
                    </div>
                </div>

                {/* System Summary */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="space-y-6">
                            <div className="border-b border-gray-200 pb-4">
                                <h2 className="text-lg sm:text-xl font-bold text-gray-900">System Summary</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">IB Statistics</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Total IBs:</span><span className="text-sm font-semibold text-gray-900">3</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Approved:</span><span class="text-sm font-semibold text-gray-900">3</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Pending:</span><span className="text-sm font-semibold text-gray-900">1</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Approval Rate:</span><span className="text-sm font-semibold text-gray-900">100.0%</span></div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide">Trading Statistics</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Total Volume:</span><span className="text-sm font-semibold text-gray-900">0.00 lots</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Total Trades:</span><span className="text-sm font-semibold text-gray-900">0</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Avg Volume/Trade:</span><span className="text-sm font-semibold text-gray-900">0.00 lots</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Total Referrals:</span><span className="text-sm font-semibold text-gray-900">0</span></div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Commission Statistics</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Total Commission:</span><span className="text-sm font-semibold text-gray-900">$0.00</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Avg Commission/Lot:</span><span className="text-sm font-semibold text-gray-900">$0.00</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Commission/Trade:</span><span className="text-sm font-semibold text-gray-900">$0.00</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Network Growth:</span><span className="text-sm font-semibold text-gray-900">0 referrals</span></div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">Performance Metrics</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Active IBs:</span><span className="text-sm font-semibold text-gray-900">3</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Volume per IB:</span><span className="text-sm font-semibold text-gray-900">0.00 lots</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Commission per IB:</span><span className="text-sm font-semibold text-gray-900">$0.00</span></div>
                                        <div className="flex justify-between items-center"><span className="text-sm text-gray-600">Referrals per IB:</span><span className="text-sm font-semibold text-gray-900">0.0</span></div>
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

export default IBOverview;
