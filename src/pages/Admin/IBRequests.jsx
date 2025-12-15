import React, { useState } from 'react';

// --- Icons Components ---
const TotalRequestsIcon = () => (
   <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const PendingIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);
const ApprovedIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const RejectedIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const BannedIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
);
const SearchIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const FilterIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
);
const ExportIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);
const SortIcon = () => (
 <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400 opacity-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>
);
const ViewIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const ApproveIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const RejectIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const BanIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
);
const ChevronLeftIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
);
const ChevronRightIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

const StatCard = ({ label, value, icon: Icon, bgClass, textClass = "text-gray-900" }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between h-full">
                <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{label}</p>
                    <p className={`text-xl sm:text-2xl font-bold ${textClass} mt-0.5 sm:mt-1`}>{value}</p>
                </div>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${bgClass} rounded-full flex items-center justify-center flex-shrink-0 ml-3`}>
                    <Icon />
                </div>
            </div>
        </div>
    </div>
);

const IBRequests = () => {
    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">IB Requests</h1>
                        <p className="text-sm sm:text-base text-gray-600">Manage IB applications and requests</p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
                        <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                            <option value="banned">Banned</option>
                        </select>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                    <StatCard label="Total Requests" value="4" icon={TotalRequestsIcon} bgClass="bg-blue-100" />
                    <StatCard label="Pending" value="1" icon={PendingIcon} bgClass="bg-orange-100" textClass="text-orange-600" />
                    <StatCard label="Approved" value="3" icon={ApprovedIcon} bgClass="bg-green-100" textClass="text-green-600" />
                    <StatCard label="Rejected" value="0" icon={RejectedIcon} bgClass="bg-red-100" textClass="text-red-600" />
                    <StatCard label="Banned" value="0" icon={BannedIcon} bgClass="bg-gray-100" textClass="text-gray-600" />
                </div>

                {/* Pending Requests Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Pending Requests</h2>
                            <p className="text-sm text-gray-600">IB applications awaiting approval</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                                <div className="relative flex-1 w-full sm:max-w-md">
                                    <SearchIcon />
                                    <input placeholder="Search..." className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="text" />
                                </div>
                                <div className="flex items-center gap-2 w-full sm:w-auto">
                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer flex-1 sm:flex-none">
                                        <span className="mr-2"><FilterIcon /></span>
                                        <span className="hidden sm:inline">Filter</span>
                                    </button>
                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer flex-1 sm:flex-none">
                                        <span className="mr-2"><ExportIcon /></span>
                                        <span className="hidden sm:inline">Export</span>
                                    </button>
                                </div>
                            </div>

                            {/* Pending Table */}
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                {['APPLICANT', 'IB TYPE', 'SUBMITTED', 'REFERRED BY', 'COMMISSION', 'ACTIONS'].map((header, idx) => (
                                                    <th key={idx} className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                        <div className="flex items-center gap-2">
                                                            <span>{header}</span>
                                                            {(header === 'APPLICANT' || header === 'SUBMITTED') && <span className="flex-shrink-0"><SortIcon /></span>}
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div><div className="font-medium text-gray-900">Parminder Singh</div><div className="text-sm text-gray-500">parminder@zuperior.com</div></div></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><span className="text-sm font-medium text-gray-400 italic">Pending Assignment</span></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div className="text-sm"><div className="font-medium text-gray-900">11/13/2025</div><div className="text-gray-500">17:53:49</div></div></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><span className="text-gray-400">-</span></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div className="text-sm"><div className="font-medium text-gray-900">$0.00/lot</div><div className="text-gray-500">20.00% spread</div></div></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        <div className="flex items-center gap-2">
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300">
                                                                <span className="mr-2"><ViewIcon /></span>View
                                                            </button>
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 px-3 py-1.5 text-sm cursor-pointer">
                                                                <span className="mr-2"><ApproveIcon /></span>Approve
                                                            </button>
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 px-3 py-1.5 text-sm cursor-pointer">
                                                                <span className="mr-2"><RejectIcon /></span>Reject
                                                            </button>
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 px-3 py-1.5 text-sm cursor-pointer">
                                                                <span className="mr-2"><BanIcon /></span>Ban
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            {/* Pagination Pending */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                                <div className="text-sm text-gray-700">Showing <span className="font-medium">0</span> to <span className="font-medium">1</span> of <span className="font-medium">1</span> results</div>
                                <div className="flex items-center gap-2">
                                    <button disabled="" className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"><ChevronLeftIcon /><span className="hidden sm:inline">Previous</span></button>
                                    <div className="flex items-center gap-1"><button className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors bg-blue-600 text-white">1</button></div>
                                    <button disabled="" className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"><span className="hidden sm:inline">Next</span><ChevronRightIcon /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Approved Requests Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Approved Requests</h2>
                            <p className="text-sm text-gray-600">Approved IB partners</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                                <div className="relative flex-1 w-full sm:max-w-md">
                                    <SearchIcon />
                                    <input placeholder="Search..." className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" type="text" />
                                </div>
                                <div className="flex items-center gap-2 w-full sm:w-auto">
                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer flex-1 sm:flex-none">
                                        <span className="mr-2"><FilterIcon /></span>
                                        <span className="hidden sm:inline">Filter</span>
                                    </button>
                                    <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer flex-1 sm:flex-none">
                                        <span className="mr-2"><ExportIcon /></span>
                                        <span className="hidden sm:inline">Export</span>
                                    </button>
                                </div>
                            </div>

                             {/* Approved Table */}
                             <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                {['APPLICANT', 'IB TYPE', 'SUBMITTED', 'REFERRED BY', 'COMMISSION', 'ACTIONS'].map((header, idx) => (
                                                    <th key={idx} className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                        <div className="flex items-center gap-2">
                                                            <span>{header}</span>
                                                            {(header === 'APPLICANT' || header === 'SUBMITTED') && <span className="flex-shrink-0"><SortIcon /></span>}
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {/* Row 1 */}
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div><div className="font-medium text-gray-900">Parminder Singh</div><div className="text-sm text-gray-500">shera1355@gmail.com</div></div></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                        <div className="flex flex-col gap-1">
                                                            <span className="inline-block px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-md">Common Partner</span>
                                                            <span className="inline-block px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-md">Bronze</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div className="text-sm"><div className="font-medium text-gray-900">11/23/2025</div><div className="text-gray-500">17:56:30</div></div></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><span className="text-gray-400">-</span></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div className="text-sm"><div className="font-medium text-gray-900">$8.00/lot</div><div className="text-gray-500">8.00% spread</div></div></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        <div className="flex items-center gap-2">
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300">
                                                                <span className="mr-2"><ViewIcon /></span>View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* Row 2 */}
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div><div className="font-medium text-gray-900">Shruti Mudliar</div><div className="text-sm text-gray-500">shruti@zuperior.com</div></div></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                        <div className="flex flex-col gap-1">
                                                            <span className="inline-block px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-md">Gold</span>
                                                            <span className="inline-block px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-md">Bronze Partner</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div className="text-sm"><div className="font-medium text-gray-900">11/14/2025</div><div className="text-gray-500">18:36:28</div></div></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><span className="text-gray-400">-</span></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div className="text-sm"><div className="font-medium text-gray-900">$0.00/lot</div><div className="text-gray-500">20.00% spread</div></div></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        <div className="flex items-center gap-2">
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300">
                                                                <span className="mr-2"><ViewIcon /></span>View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* Row 3 */}
                                            <tr className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div><div className="font-medium text-gray-900">Rasik Katoch</div><div className="text-sm text-gray-500">katochrasik795@gmail.com</div></div></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                        <div className="flex flex-col gap-1">
                                                            <span className="inline-block px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-md">Common Partner</span>
                                                            <span className="inline-block px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-md">Common Partner</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div className="text-sm"><div className="font-medium text-gray-900">11/13/2025</div><div className="text-gray-500">01:15:30</div></div></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><span className="text-gray-400">-</span></div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900"><div className="text-sm"><div className="font-medium text-gray-900">$0.00/lot</div><div className="text-gray-500">20.00% spread</div></div></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        <div className="flex items-center gap-2">
                                                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300">
                                                                <span className="mr-2"><ViewIcon /></span>View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                             {/* Pagination Approved */}
                             <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                                <div className="text-sm text-gray-700">Showing <span className="font-medium">0</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> results</div>
                                <div className="flex items-center gap-2">
                                    <button disabled="" className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"><ChevronLeftIcon /><span className="hidden sm:inline">Previous</span></button>
                                    <div className="flex items-center gap-1"><button className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors bg-blue-600 text-white">1</button></div>
                                    <button disabled="" className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"><span className="hidden sm:inline">Next</span><ChevronRightIcon /></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IBRequests;
