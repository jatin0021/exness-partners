import React from 'react';
import { allSymbolsData } from './data/AllSymbolsData';

// --- Icons ---
const SyncIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
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
const TotalSymbolsIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
);
const ActiveSymbolsIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);
const TotalGroupsIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);
const SymbolTypesIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
);

const StatCard = ({ label, value, icon: Icon, bgClass, textClass }) => (
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

const AllSymbols = () => {
    const symbols = allSymbolsData;

    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">All Symbols</h1>
                        <p className="text-sm sm:text-base text-gray-600">Manage trading symbols and sync from external API</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-4 py-2 text-sm cursor-pointer ">
                            <span className="mr-2"><SyncIcon /></span>
                            Sync from API
                        </button>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    <StatCard label="Total Symbols" value="857" icon={TotalSymbolsIcon} bgClass="bg-blue-100" textClass="text-gray-900" />
                    <StatCard label="Active Symbols" value="857" icon={ActiveSymbolsIcon} bgClass="bg-green-100" textClass="text-green-600" />
                    <StatCard label="Total Groups" value="1" icon={TotalGroupsIcon} bgClass="bg-purple-100" textClass="text-purple-600" />
                    <StatCard label="Symbol Types" value="1" icon={SymbolTypesIcon} bgClass="bg-orange-100" textClass="text-orange-600" />
                </div>

                {/* Toolbar */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <form className="flex items-center gap-2 w-full">
                                <div className="relative flex-1">
                                    <SearchIcon />
                                    <input placeholder="Search symbols..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" />
                                </div>
                                <button type="submit" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">Search</button>
                            </form>
                            <div className="flex items-center gap-2 text-sm text-gray-600 whitespace-nowrap">
                                <span>Showing {symbols.length} of 857 symbols</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="space-y-4">
                            
                            {/* Inner Toolbar */}
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
                                                {[
                                                    { label: 'Symbol', width: '' },
                                                    { label: 'Description', width: '' },
                                                    { label: 'Type', width: '' },
                                                    { label: 'Group', width: '' },
                                                    { label: 'Digits', width: '' },
                                                    { label: 'Spread', width: '' },
                                                    { label: 'Contract Size', width: '' },
                                                    { label: 'Swap Long', width: '' },
                                                    { label: 'Swap Short', width: '' },
                                                    { label: 'Status', width: '' },
                                                    { label: 'Actions', width: 'w-20 sm:w-auto', align: 'text-right' }
                                                ].map((header, idx) => (
                                                    <th key={idx} className={`px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 ${header.width || ''} ${header.align || ''}`}>
                                                        {header.label !== 'Actions' ? (
                                                            <div className="flex items-center gap-1">
                                                                <span className="text-xs sm:text-sm">{header.label}</span>
                                                                <span className="text-xs">↕️</span>
                                                            </div>
                                                        ) : (
                                                            <span className="text-xs sm:text-sm">{header.label}</span>
                                                        )}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {symbols.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50">
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0"><div className="font-medium text-gray-900">{row.symbol}</div></div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0"><div className="text-gray-600">{row.desc}</div></div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0"><span className="capitalize">{row.type}</span></div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0"><div className="text-gray-600">{row.group}</div></div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0"><div className="text-center">{row.digits}</div></div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0"><div className="text-center">{row.spread}</div></div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0"><div className="text-right">{row.contract}</div></div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0"><div className="text-right">{row.swapLong}</div></div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0"><div className="text-right">{row.swapShort}</div></div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                                                        <div className="text-sm text-gray-900 min-w-0"><span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span></div>
                                                    </td>
                                                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-sm font-medium w-20 sm:w-auto">
                                                        <div className="flex items-center justify-end gap-1 sm:gap-2"></div>
                                                    </td>
                                                </tr>
                                            ))}
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

export default AllSymbols;
