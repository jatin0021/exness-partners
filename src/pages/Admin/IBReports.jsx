import React, { useState } from 'react';
import { 
    LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
    ibReportsStats, topPerformersData, commissionBreakdownData, 
    commissionTrendsData, tradingVolumeTrendsData, ibStatusDistributionData, 
    clientGrowthData, withdrawalAnalysisData, rewardClaimsStatusData, 
    topPerformersByCommissionData
} from './data/IBReportsData';

// --- Icons ---
const RefreshIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);

const ExportIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const TimeIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const ViewIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

const StatCard = ({ value, label, subtext, valueClass = "text-gray-900" }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
        <div className="p-3 sm:p-4 lg:p-6">
            <div className="text-center">
                <p className={`text-3xl font-bold ${valueClass}`}>{value}</p>
                <p className="text-sm text-gray-600 mt-1">{label}</p>
                {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
            </div>
        </div>
    </div>
);

const SectionHeader = ({ title, icon: Icon }) => (
    <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
            <span className="text-gray-600"><Icon /></span>
            <h3 class="text-sm sm:text-base font-medium text-gray-900">{title}</h3>
        </div>
    </div>
);

const FilterSection = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-2">
                    <TimeIcon />
                    <span className="text-sm font-medium text-gray-700">Time Period:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {['Today', 'Last 7 Days'].map(period => (
                        <button key={period} className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">{period}</button>
                    ))}
                    <button className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors bg-purple-600 text-white">Last 30 Days</button>
                    {['Last 90 Days', 'This Month', 'This Year', 'Custom Range'].map(period => (
                        <button key={period} className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">{period}</button>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const IBReports = () => {
    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">IB Reports</h1>
                        <p className="text-sm text-gray-600 mt-1">Comprehensive analytics and insights for IB performance</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 disabled:opacity-50">
                            <RefreshIcon /> Refresh
                        </button>
                        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                            <ExportIcon /> Export All
                        </button>
                    </div>
                </div>

                <FilterSection />

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    <StatCard value={ibReportsStats.totalIBs.value} label="Total IBs" subtext={ibReportsStats.totalIBs.subtext} />
                    <StatCard value={ibReportsStats.totalCommission.value} label="Total Commission" subtext={ibReportsStats.totalCommission.subtext} valueClass="text-purple-600" />
                    <StatCard value={ibReportsStats.totalVolume.value} label="Total Volume" subtext={ibReportsStats.totalVolume.subtext} valueClass="text-green-600" />
                    <StatCard value={ibReportsStats.totalClients.value} label="Total Clients" subtext={ibReportsStats.totalClients.subtext} valueClass="text-blue-600" />
                    <StatCard value={ibReportsStats.pendingWithdrawals.value} label="Pending Withdrawals" subtext={ibReportsStats.pendingWithdrawals.subtext} valueClass="text-orange-600" />
                    <StatCard value={ibReportsStats.rewardClaims.value} label="Reward Claims" subtext={ibReportsStats.rewardClaims.subtext} valueClass="text-pink-600" />
                </div>

                {/* Top Performers Table */}
                <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <SectionHeader title="Top Performers" icon={() => (
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        )} />
                        <div className="p-3 sm:p-4 lg:p-6">
                            <div className="flex justify-end mb-4">
                                <button className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                    <ExportIcon /> Export
                                </button>
                            </div>
                            {/* Table Container */}
                            <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-200">
                                <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0 z-[1]">
                                        <tr>
                                            {['IB Name', 'Email', 'Status', 'Total Commission', 'Total Volume', 'Clients', 'Trades', 'Actions'].map((header, idx) => (
                                                <th key={idx} className="px-6 py-4 font-semibold text-gray-800 select-none whitespace-nowrap text-center border-r border-gray-200 last:border-r-0 cursor-pointer hover:bg-gray-200 transition-colors">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {topPerformersData.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.name}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.email}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                        {row.status}
                                                    </span>
                                                 </td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.totalCommission}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.totalVolume}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.clients}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.trades}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                    <button className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                                        <ViewIcon /> View
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
                </div>

                {/* Commission Breakdown Table */}
                <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <SectionHeader title="Commission Breakdown" icon={() => (
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        )} />
                        <div className="p-3 sm:p-4 lg:p-6">
                            <div className="flex justify-end mb-4">
                                <button className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                    <ExportIcon /> Export
                                </button>
                            </div>
                            {/* Table Container */}
                            <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-200">
                                <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0 z-[1]">
                                        <tr>
                                            {['IB Name', 'Email', 'Total Commission', 'Fixed Commission', 'Spread Commission', 'Actions'].map((header, idx) => (
                                                <th key={idx} className="px-6 py-4 font-semibold text-gray-800 select-none whitespace-nowrap text-center border-r border-gray-200 last:border-r-0 cursor-pointer hover:bg-gray-200 transition-colors">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {commissionBreakdownData.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.name}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.email}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.totalCommission}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.fixedCommission}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.spreadCommission}</td>
                                                 <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                    <button className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                                        <ViewIcon /> View
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
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {/* Commission Trends */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <SectionHeader title="Commission Trends" icon={() => (
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                        )} />
                        <div className="p-3 sm:p-4 lg:p-6">
                            <ResponsiveContainer width="100%" height={320}>
                                <LineChart data={commissionTrendsData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="total" name="Total Commission" stroke="#8B5CF6" />
                                    <Line type="monotone" dataKey="fixed" name="Fixed Commission" stroke="#16A34A" />
                                    <Line type="monotone" dataKey="spread" name="Spread Commission" stroke="#F59E0B" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Trading Volume Trends */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <SectionHeader title="Trading Volume Trends" icon={() => (
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        )} />
                        <div className="p-3 sm:p-4 lg:p-6">
                            <ResponsiveContainer width="100%" height={320}>
                                <AreaChart data={tradingVolumeTrendsData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Area type="monotone" dataKey="volume" name="Volume (USD)" stroke="#16A34A" fill="#16A34A" fillOpacity={0.6} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* IB Status Distribution */}
                     <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <SectionHeader title="IB Status Distribution" icon={() => (
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                        )} />
                        <div className="p-3 sm:p-4 lg:p-6">
                            <ResponsiveContainer width="100%" height={320}>
                                <PieChart>
                                    <Pie data={ibStatusDistributionData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                                        {ibStatusDistributionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                     {/* Client Growth */}
                     <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <SectionHeader title="Client Growth" icon={() => (
                             <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        )} />
                        <div className="p-3 sm:p-4 lg:p-6">
                            <ResponsiveContainer width="100%" height={320}>
                                <BarChart data={clientGrowthData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="newClients" name="New Clients" fill="#3B82F6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Withdrawal Analysis */}
                     <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <SectionHeader title="Withdrawal Analysis" icon={() => (
                             <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                        )} />
                        <div className="p-3 sm:p-4 lg:p-6">
                            <ResponsiveContainer width="100%" height={320}>
                                <BarChart data={withdrawalAnalysisData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="completed" name="Completed" fill="#3B82F6" />
                                    <Bar dataKey="paid" name="Paid" fill="#16A34A" />
                                    <Bar dataKey="pending" name="Pending" fill="#F59E0B" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Reward Claims Status */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <SectionHeader title="Reward Claims Status" icon={() => (
                             <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                        )} />
                        <div className="p-3 sm:p-4 lg:p-6">
                             <ResponsiveContainer width="100%" height={320}>
                                <PieChart>
                                    <Pie data={rewardClaimsStatusData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                                        {rewardClaimsStatusData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                 {/* Top Performers by Commission */}
                 <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <SectionHeader title="Top Performers by Commission" icon={() => (
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                    )} />
                    <div className="p-3 sm:p-4 lg:p-6">
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart layout="vertical" data={topPerformersByCommissionData} margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis type="category" dataKey="name" width={150}/>
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="commission" name="Total Commission" fill="#8B5CF6" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IBReports;
