import React, { useState } from 'react';
import { commissionDistributionStats, ibDistributionData } from './data/CommissionDistributionData';

// --- Icons ---
const RefreshIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);

const ExportIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const SearchIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const TotalIcons = {
    ApprovedIBs: () => (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
    DirectClients: () => (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    ),
    SubIBs: () => (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-cyan-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
    ),
    IBBalance: () => (
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-orange-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    )
};

const ViewIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

const EditIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);

const SendIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);


const StatCard = ({ label, value, icon: Icon, bgClass }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
        <div className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{label}</p>
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                </div>
                <div className={`w-12 h-12 ${bgClass} rounded-full flex items-center justify-center`}>
                    <Icon />
                </div>
            </div>
        </div>
    </div>
);

const CommissionDistribution = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">IB Commission Distribution</h1>
                        <p className="text-sm sm:text-base text-gray-600">Advanced IB Commission Management and Distribution System</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard label="Total Approved IBs" value={commissionDistributionStats.totalApprovedIBs} icon={TotalIcons.ApprovedIBs} bgClass="bg-blue-100" />
                    <StatCard label="Total Direct Clients" value={commissionDistributionStats.totalDirectClients} icon={TotalIcons.DirectClients} bgClass="bg-green-100" />
                    <StatCard label="Total Sub-IBs" value={commissionDistributionStats.totalSubIBs} icon={TotalIcons.SubIBs} bgClass="bg-cyan-100" />
                    <StatCard label="Total IB Balance" value={commissionDistributionStats.totalIBBalance} icon={TotalIcons.IBBalance} bgClass="bg-orange-100" />
                </div>

                {/* Top Filters */}
                 <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <SearchIcon />
                                </span>
                                <input 
                                    placeholder="Search by name or email" 
                                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                                    type="text" 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white">
                                <option value="all">All Rates</option>
                                <option value="8">PIP 8.00</option>
                                <option value="0">PIP 0.00</option>
                            </select>
                            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white">
                                <option value="approved_at">Approval Date</option>
                                <option value="name">Name</option>
                                <option value="email">Email</option>
                                <option value="rate">Rate</option>
                            </select>
                            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                                <RefreshIcon />
                                Refresh
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="space-y-4">
                             <div className="px-1"><h2 className="text-lg font-semibold text-gray-900">IB Commission Distribution</h2></div>
                             
                            {/* Table Filters */}
                             <div className="rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-gray-200">
                                <div className="flex flex-col lg:flex-row gap-4 items-center">
                                    <div className="flex-1 w-full lg:w-auto">
                                        <input placeholder="Search by name or email..." className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="text" />
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex gap-2">
                                            <input className="rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="date" />
                                            <input className="rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="date" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="relative">
                                            <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 h-[44px] hover:bg-gray-50 transition-all font-medium flex items-center gap-2" title="Export data">
                                                <ExportIcon />
                                                Export
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                                                {['Sr No.', 'IB Details', 'IB Rate', 'Direct Clients', 'Sub-IBs', 'Total Referrals', 'Total Balance', 'Total Commission', 'Fixed Commission', 'Spread Share Commission', 'Actions'].map((header, idx) => (
                                                    <th key={idx} className="px-6 py-4 font-semibold text-gray-800 select-none whitespace-nowrap text-center border-r border-gray-200 last:border-r-0 cursor-pointer hover:bg-gray-200 transition-colors">
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {ibDistributionData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.serial}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                        <div className="text-sm">
                                                            <div className="font-medium text-gray-900">{row.name}</div>
                                                            <div className="text-gray-500">{row.email}</div>
                                                            <div className="text-xs text-gray-400">Approved: {row.approvedDate}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{row.ibRate}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium bg-green-100 text-green-800">{row.directClients}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{row.subIBs}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{row.totalReferrals}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.totalBalance}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                        <span className={`font-semibold ${row.totalCommission !== '$0.00' ? 'text-purple-600' : 'text-purple-600'}`}>{row.totalCommission}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.fixedCommission}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.spreadShareCommission}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                        <div className="flex items-center gap-2">
                                                            <button className="text-gray-900 hover:text-blue-600 transition-colors" title="View"><ViewIcon /></button>
                                                            <button className="text-green-600 hover:text-green-700 transition-colors" title="Edit"><EditIcon /></button>
                                                            <button className="text-orange-600 hover:text-orange-700 transition-colors" title="Send"><SendIcon /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
                                    <div className="text-sm text-gray-700 font-medium">Showing 1-3 of 3</div>
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

export default CommissionDistribution;
