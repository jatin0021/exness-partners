import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from 'recharts';
import { 
  statsData, 
  withdrawalsByStatusData, 
  monthlyTrendsData, 
  topUsersData, 
  withdrawalsByUserData, 
  allWithdrawalsData 
} from './data/WithdrawalHistoryData';

// --- Icons ---
const RefreshIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);

const ExportIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const CalendarIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const FilterIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
);

// Stat Card Icons (Reusing from previous page or similar)
const TotalWithdrawalsIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);

const TotalAmountIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

const PendingIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const CompletedIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

const SearchIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);


const StatCard = ({ label, value, icon: Icon, bgClass, valueClass = "text-gray-900" }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
        <div className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{label}</p>
                    <p className={`text-2xl font-bold ${valueClass}`}>{value}</p>
                </div>
                <div className={`w-12 h-12 ${bgClass} rounded-full flex items-center justify-center`}>
                    <Icon />
                </div>
            </div>
        </div>
    </div>
);

const WithdrawalHistory = () => {
    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Withdrawal History Reports</h1>
                        <p className="text-gray-600 mt-1">Comprehensive withdrawal analytics and reporting</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-4 py-2 text-sm cursor-pointer ">
                            <span className="mr-2"><RefreshIcon /></span>
                            Refresh
                        </button>
                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-[#6242a5] to-[#8b6ec8] text-white hover:from-[#5a3a9a] hover:to-[#7d5fb8] focus:ring-[#6242a5] px-4 py-2 text-sm cursor-pointer ">
                            <span className="mr-2"><ExportIcon /></span>
                            Export
                        </button>
                    </div>
                </div>

                {/* Global Filter */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2">
                                <CalendarIcon />
                                <label className="text-sm font-medium text-gray-700">From:</label>
                                <input className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500" type="date" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-700">To:</label>
                                <input className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500" type="date" />
                            </div>
                            <div className="flex items-center gap-2">
                                <FilterIcon />
                                <label className="text-sm font-medium text-gray-700">Status:</label>
                                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                                    <option value="all">All Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="paid">Paid</option>
                                    <option value="completed">Completed</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard label="Total Withdrawals" value={statsData.totalWithdrawals} icon={TotalWithdrawalsIcon} bgClass="bg-blue-100" />
                    <StatCard label="Total Amount" value={statsData.totalAmount} icon={TotalAmountIcon} bgClass="bg-green-100" valueClass="text-green-600" />
                    <StatCard label="Pending" value={statsData.pending} icon={PendingIcon} bgClass="bg-yellow-100" valueClass="text-yellow-600" />
                    <StatCard label="Completed" value={statsData.completed} icon={CompletedIcon} bgClass="bg-purple-100" valueClass="text-purple-600" />
                </div>

                {/* Charts Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Pie Chart */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                        <div className="p-3 sm:p-4 lg:p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Withdrawals by Status</h3>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={withdrawalsByStatusData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {withdrawalsByStatusData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Bar Chart 1 */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                        <div className="p-3 sm:p-4 lg:p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Withdrawal Trends</h3>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={monthlyTrendsData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <RechartsTooltip />
                                        <Legend />
                                        <Bar dataKey="amount" fill="#8B5CF6" name="Amount ($)" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Row 2 - Full Width */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 10 Users by Withdrawal Amount</h3>
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart layout="vertical" data={topUsersData}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                    <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" width={150} />
                                    <RechartsTooltip />
                                    <Legend />
                                    <Bar dataKey="amount" fill="#10B981" name="Total Amount ($)" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Table 1: Withdrawals by User */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Withdrawals by User</h3>
                        
                        {/* Table Controls */}
                        <div className="space-y-4">
                            <div className="rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-gray-200">
                                <div className="flex flex-col lg:flex-row gap-4 items-center">
                                    <div className="flex-1 w-full lg:w-auto">
                                        <input placeholder="Search by user name..." className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="text" />
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
                                                {['IB Name', 'Total Requests', 'Total Amount', 'Pending', 'Approved', 'Paid', 'Completed', 'Rejected'].map((header) => (
                                                    <th key={header} className="px-6 py-4 font-semibold text-gray-800 select-none whitespace-nowrap text-center border-r border-gray-200 last:border-r-0 cursor-pointer hover:bg-gray-200 transition-colors">
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {withdrawalsByUserData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.ibName}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.totalRequests}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.totalAmount}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.pending}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.approved}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.paid}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.completed}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.rejected}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {/* Pagination */}
                                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
                                    <div className="text-sm text-gray-700 font-medium">Showing 1-2 of 2</div>
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

                {/* Table 2: All Withdrawals */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">All Withdrawals</h3>
                         
                         {/* Table Controls */}
                        <div className="space-y-4">
                            <div className="rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-gray-200">
                                <div className="flex flex-col lg:flex-row gap-4 items-center">
                                    <div className="flex-1 w-full lg:w-auto">
                                        <input placeholder="Search withdrawals..." className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 h-[44px] outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="text" />
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
                                                {['ID', 'IB Name', 'Amount', 'Payment Method', 'Status', 'Transaction ID', 'Request Date', 'Last Updated'].map((header) => (
                                                    <th key={header} className="px-6 py-4 font-semibold text-gray-800 select-none whitespace-nowrap text-center border-r border-gray-200 last:border-r-0 cursor-pointer hover:bg-gray-200 transition-colors">
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {allWithdrawalsData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.ibName}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.amount}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.paymentMethod}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                            row.status === 'APPROVED' ? 'bg-green-100 text-green-700' : 
                                                            row.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                                        }`}>
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">
                                                        <span className={`text-xs ${row.transactionId === '-' ? 'text-gray-400' : 'font-mono text-gray-700'}`}>{row.transactionId}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.requestDate}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100 last:border-r-0">{row.lastUpdated}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {/* Pagination */}
                                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
                                    <div className="text-sm text-gray-700 font-medium">Showing 1-8 of 8</div>
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

export default WithdrawalHistory;
