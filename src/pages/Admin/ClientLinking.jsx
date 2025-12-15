import React, { useState } from 'react';
import { clientLinkingStats, usersList, ibList } from './data/ClientLinkingData';

// --- Icons ---
const ExportIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const RefreshIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);

const TotalLinkingsIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const ActiveIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

const InactiveIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
);

const PendingIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const SortIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400 opacity-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>
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

const ClientLinking = () => {
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedIB, setSelectedIB] = useState('');

    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Client Linking</h1>
                        <p className="text-sm sm:text-base text-gray-600">Move user to another IB and manage client-to-IB linking relationships</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">
                            <span className="mr-2"><ExportIcon /></span>
                            Export
                        </button>
                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">
                            <span className="mr-2"><RefreshIcon /></span>
                            Refresh
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard label="Total Linkings" value={clientLinkingStats.totalLinkings} icon={TotalLinkingsIcon} bgClass="bg-blue-100" />
                    <StatCard label="Active" value={clientLinkingStats.active} icon={ActiveIcon} bgClass="bg-green-100" valueClass="text-green-600" />
                    <StatCard label="Inactive" value={clientLinkingStats.inactive} icon={InactiveIcon} bgClass="bg-gray-100" valueClass="text-gray-600" />
                    <StatCard label="Pending" value={clientLinkingStats.pending} icon={PendingIcon} bgClass="bg-yellow-100" valueClass="text-yellow-600" />
                </div>

                {/* Move User Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Move User to Another IB</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Select User</label>
                                    <select 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                                        value={selectedUser}
                                        onChange={(e) => setSelectedUser(e.target.value)}
                                    >
                                        <option value="">Select a user...</option>
                                        {usersList.map(user => (
                                            <option key={user.id} value={user.id}>{user.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Assign To (New IB)</label>
                                    <select 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                                        value={selectedIB}
                                        onChange={(e) => setSelectedIB(e.target.value)}
                                    >
                                        <option value="">Select an IB...</option>
                                        {ibList.map(ib => (
                                            <option key={ib.id} value={ib.id}>{ib.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <button 
                                    type="button" 
                                    className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-[#6242a5] to-[#8b6ec8] text-white hover:from-[#5a3a9a] hover:to-[#7d5fb8] focus:ring-[#6242a5] px-4 py-2 text-sm opacity-50 cursor-not-allowed w-full bg-black hover:bg-gray-800" disabled
                                >
                                    Move User
                                </button>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">Current IB, Direct Volume & IB Information</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3 h-[200px] flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                        Select a user to view current IB and direct volume
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* History Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Client Linking History (0 total)</h2>
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
                                                    <div className="flex items-center gap-2"><span>User</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>From IB</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>To IB</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>Action</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>Moved By</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                    <div className="flex items-center gap-2"><span>Date</span><span className="flex-shrink-0"><SortIcon /></span></div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td colSpan="7" className="px-6 py-12 text-center text-sm text-gray-500">
                                                    <div className="flex flex-col items-center justify-center">
                                                        <p className="text-gray-400 mb-2">Select a user to view linking history</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientLinking;
