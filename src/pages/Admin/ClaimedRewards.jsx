import React, { useState } from 'react';
import { claimedRewardsStats, claimedRewardsData } from './data/ClaimedRewardsData';

// --- Icons ---
const ExportCSVIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const RefreshIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);

const ViewIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

const StatCard = ({ value, label, valueClass = "text-gray-900" }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
        <div className="p-3 sm:p-4 lg:p-6">
            <div className="text-center">
                <p className={`text-3xl font-bold ${valueClass}`}>{value}</p>
                <p className="text-sm text-gray-600 mt-1">{label}</p>
            </div>
        </div>
    </div>
);

const ClaimedRewards = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Claimed Rewards</h1>
                        <p className="text-gray-600 mt-1">Manage and track all reward claims</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                            <ExportCSVIcon />
                            Export CSV
                        </button>
                        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                            <RefreshIcon />
                            Refresh
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <StatCard value={claimedRewardsStats.totalClaims} label="Total Claims" />
                        <StatCard value={claimedRewardsStats.pending} label="Pending" valueClass="text-yellow-600" />
                        <StatCard value={claimedRewardsStats.approved} label="Approved" valueClass="text-green-600" />
                        <StatCard value={claimedRewardsStats.fulfilled} label="Fulfilled" valueClass="text-blue-600" />
                    </div>
                </div>

                {/* Filters */}
                <div className="rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-gray-200">
                    <div className="flex flex-col lg:flex-row gap-4 items-center">
                        <div className="flex-1 w-full lg:w-auto">
                            <input 
                                placeholder="Search claims..." 
                                className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <select className="rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] min-w-[120px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                                <option value="">All Status</option>
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="fulfilled">Fulfilled</option>
                                <option value="rejected">Rejected</option>
                            </select>
                            <div className="flex gap-2">
                                <input className="rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="date" />
                                <input className="rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="date" />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="relative">
                                <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 h-[44px] hover:bg-gray-50 transition-all font-medium flex items-center gap-2" title="Export data">
                                    <ExportCSVIcon />
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
                                    {['Claim ID', 'IB Name', 'Reward', 'Claimant', 'Address', 'Status', 'Volume (MLN)', 'Claimed Date', 'Actions'].map((header, idx) => (
                                        <th key={idx} className={`px-6 py-4 font-semibold text-gray-800 select-none whitespace-nowrap text-center border-r border-gray-200 last:border-r-0 ${header !== 'Address' && header !== 'Actions' ? 'cursor-pointer hover:bg-gray-200 transition-colors' : ''}`}>
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {claimedRewardsData.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                            <div>
                                                <p className="font-medium text-gray-900">{row.ibName}</p>
                                                <p className="text-xs text-gray-500">{row.ibEmail}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                            <div>
                                                <p className="font-medium text-gray-900">{row.rewardName}</p>
                                                <p className="text-xs text-gray-500">{row.rewardVolume}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                            <div>
                                                <p className="font-medium text-gray-900">{row.claimantName}</p>
                                                <p className="text-xs text-gray-500">{row.claimantEmail}</p>
                                                <p className="text-xs text-gray-500">{row.claimantPhone}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                            <span className="text-sm text-gray-600">{row.address}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                            <span className={`inline-flex items-center font-medium rounded-full px-2.5 py-1 text-sm ${
                                                row.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                                row.status === 'Fulfilled' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                                            }`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.volume}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.claimedDate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                            <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm flex items-center gap-1">
                                                <ViewIcon />
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
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
    );
};

export default ClaimedRewards;
