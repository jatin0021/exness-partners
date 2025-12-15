import React from 'react';
import { ibWithdrawalsData } from './data/IBWithdrawalsData';

// --- Icons ---
const ExportIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const RefreshIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);

const SearchIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const SortIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400 opacity-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>
);

const PrevIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
);

const NextIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

// Stat Card Icons
const TotalWithdrawalsIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);

const PendingIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const ApprovedIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

const RejectedIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
);

const TotalAmountIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
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

const IBWithdrawals = () => {
    const tableData = ibWithdrawalsData;

    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">IB Withdrawals</h1>
                        <p className="text-sm sm:text-base text-gray-600">Manage IB withdrawal requests</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">
                            <span className="mr-2"><ExportIcon /></span>
                            Export
                        </button>
                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-[#6242a5] to-[#8b6ec8] text-white hover:from-[#5a3a9a] hover:to-[#7d5fb8] focus:ring-[#6242a5] px-3 py-1.5 text-sm cursor-pointer ">
                            <span className="mr-2"><RefreshIcon /></span>
                            Refresh
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <StatCard label="Total Withdrawals" value="8" icon={TotalWithdrawalsIcon} bgClass="bg-blue-100" />
                    <StatCard label="Pending" value="1" icon={PendingIcon} bgClass="bg-yellow-100" valueClass="text-yellow-600" />
                    <StatCard label="Approved" value="7" icon={ApprovedIcon} bgClass="bg-green-100" valueClass="text-green-600" />
                    <StatCard label="Rejected" value="0" icon={RejectedIcon} bgClass="bg-red-100" valueClass="text-red-600" />
                    <StatCard label="Total Amount" value="$1042.00" icon={TotalAmountIcon} bgClass="bg-purple-100" />
                </div>

                {/* Filters */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white">
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </select>
                            <div className="relative flex-1 w-full sm:max-w-md">
                                <SearchIcon />
                                <input placeholder="Search by IB name or ID..." className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500" type="text" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Withdrawal Requests (8 total)</h2>
                        </div>
                        <div className="space-y-4 ">
                            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                                <div className="flex items-center gap-2 w-full sm:w-auto">
                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer flex-1 sm:flex-none">
                                        <span className="mr-2"><ExportIcon /></span>
                                        <span className="hidden sm:inline">Export</span>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>ID</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>IB Name</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>Amount</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>Payment Method</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>Requested Date</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>Status</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ">
                                                    <div className="flex items-center gap-2"><span>Transaction ID</span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ">
                                                    <div className="flex items-center gap-2"><span>Actions</span></div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {tableData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="font-mono text-sm text-gray-900">{row.id}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="font-medium text-gray-900">{row.ibName}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="text-sm font-medium text-green-600">{row.amount}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{row.paymentMethod}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="text-sm text-gray-700">{row.date}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900">
                                                            {row.status === 'approved' ? (
                                                                <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-3 py-1 text-sm "><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>approved</span>
                                                            ) : row.status === 'pending' ? (
                                                                <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-yellow-100 text-yellow-800 px-3 py-1 text-sm "><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>pending</span>
                                                            ) : (
                                                                <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-red-100 text-red-800 px-3 py-1 text-sm "><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>rejected</span>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className={`text-sm ${row.transactionId === '-' ? 'text-gray-400' : 'font-mono text-gray-700'}`}>{row.transactionId}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {row.status === 'pending' && (
                                                                <div className="flex items-center gap-2">
                                                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 px-3 py-1.5 text-sm cursor-pointer ">Approve</button>
                                                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 px-3 py-1.5 text-sm cursor-pointer ">Reject</button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            {/* Pagination */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                                <div className="text-sm text-gray-700">Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">8</span> results</div>
                                <div className="flex items-center gap-2">
                                    <button disabled="" className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1">
                                        <PrevIcon />
                                        <span className="hidden sm:inline">Previous</span>
                                    </button>
                                    <div className="flex items-center gap-1">
                                        <button className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors bg-blue-600 text-white">1</button>
                                    </div>
                                    <button disabled="" className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1">
                                        <span className="hidden sm:inline">Next</span>
                                        <NextIcon />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IBWithdrawals;
