import React from 'react';
import { symbolsPipValuesData } from './data/SymbolsPipValuesData';

// --- Icons (Extracted from HTML) ---
const AddIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const SyncIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);

const CloudIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
);

const DollarIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);

const WarningIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);

const GridIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
);

const SearchIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const ClearFilterIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const PreviewIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
);

const ExportIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const SortIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400 opacity-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>
);

const EditIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);

const DeleteIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);

const StatCard = ({ icon: Icon, bgClass, label, value, subtext }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
        <div className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{label}</p>
                    {subtext ? (
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{subtext}</p>
                    ) : (
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">{value}</p>
                    )}
                </div>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${bgClass} rounded-full flex items-center justify-center flex-shrink-0 ml-2`}>
                   <Icon />
                </div>
            </div>
        </div>
    </div>
);

const SymbolsPipValues = () => {
    // Data
    const symbols = symbolsPipValuesData;

    return (
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
            <div className="space-y-6">
                
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Configure symbols, categories, and pip values (768 symbols loaded)</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-[#6242a5] to-[#8b6ec8] text-white hover:from-[#5a3a9a] hover:to-[#7d5fb8] focus:ring-[#6242a5] px-3 py-1.5 text-sm cursor-pointer ">
                            <span className="mr-2"><AddIcon /></span>
                            + Add Symbol
                        </button>
                    </div>
                </div>

                {/* Sync Symbols Panel */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="space-y-4">
                            <div className="border-b border-gray-200 pb-3">
                                <h2 className="text-lg font-semibold text-gray-900">Sync Symbols by Category</h2>
                                <p className="text-sm text-gray-600 mt-1">Sync symbols from API category by category</p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                {['Sync Forex', 'Sync Commodities', 'Sync Indices', 'Sync Cryptocurrencies', 'Sync Stocks'].map((label, index) => (
                                    <button key={index} type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 px-3 py-1.5 text-sm cursor-pointer w-full">
                                        <span className="mr-2"><SyncIcon /></span>
                                        {index + 1}) {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    <StatCard label="Total Symbols" value="768" icon={CloudIcon} bgClass="bg-blue-100" />
                    <StatCard label="Configured Pip/Lot" value="768.00" icon={DollarIcon} bgClass="bg-green-100" />
                    <StatCard label="Overrides" value="0" icon={WarningIcon} bgClass="bg-yellow-100" />
                    {/* The Categories card has different structure in HTML (subtext instead of big value). I updated StatCard to handle subtext. 
                        Wait, in my StatCard definition, I put subtext under the value if subtext exists, else I show value. 
                        For this specific card, the HTML hides value and shows subtext.
                        Let's adjust usage.
                    */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                        <div className="p-3 sm:p-4 lg:p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">Categories</p>
                                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">Commodities, Cryptocurrencies, Forex, Indices, Stocks</p>
                                </div>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 ml-2">
                                   <GridIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                                <option value="all">All Categories</option>
                                <option value="Commodities">Commodities</option>
                                <option value="Cryptocurrencies">Cryptocurrencies</option>
                                <option value="Forex">Forex</option>
                                <option value="Indices">Indices</option>
                                <option value="Stocks">Stocks</option>
                            </select>
                            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                                <option value="all">All Groups</option>
                                <option value="Commodities">Commodities</option>
                                <option value="Cryptocurrencies">Cryptocurrencies</option>
                                <option value="Forex">Forex</option>
                                <option value="Indices">Indices</option>
                                <option value="Stocks">Stocks</option>
                            </select>
                            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                            <div className="relative flex-1 w-full sm:max-w-md">
                                <SearchIcon />
                                <input placeholder="Search symbol..." className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" />
                            </div>
                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-[#6242a5] to-[#8b6ec8] text-white hover:from-[#5a3a9a] hover:to-[#7d5fb8] focus:ring-[#6242a5] px-3 py-1.5 text-sm cursor-pointer ">
                                <span className="mr-2"><AddIcon /></span>
                                + Add Symbol
                            </button>
                        </div>
                    </div>
                </div>

                {/* Debug Info */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 bg-blue-50 border-blue-200">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-4 text-sm">
                                <span className="font-medium text-blue-900">Debug Info:</span>
                                <span className="text-blue-700">Total symbols loaded: 768 | Database connection: OK |</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-xs">Log Symbol Count</button>
                                <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-xs">Test Search</button>
                                <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-xs">
                                    <span className="mr-2"><ClearFilterIcon /></span>
                                    Clear Filters
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">
                    <div className="p-3 sm:p-4 lg:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Symbols (768 total)</h2>
                            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer ">
                                <span className="mr-2"><PreviewIcon /></span>
                                Preview
                            </button>
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
                                                {['SYMBOL', 'SPREAD', 'CATEGORY', 'PIP/LOT', 'PIP VALUE', 'COMMISSION', 'CURRENCY', 'STATUS'].map((header, idx) => (
                                                    <th key={idx} className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none">
                                                        <div className="flex items-center gap-2">
                                                            <span>{header}</span>
                                                            <span className="flex-shrink-0"><SortIcon /></span>
                                                        </div>
                                                    </th>
                                                ))}
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ">
                                                    <div className="flex items-center gap-2"><span>ACTIONS</span></div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {symbols.map((item, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="font-mono font-medium text-gray-900">{item.symbol}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="text-sm font-medium text-gray-900">{item.spread}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="text-sm text-gray-700">{item.category}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="text-sm font-medium text-gray-900">{item.pipLot}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="text-sm font-medium text-green-600">{item.pipValue}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="text-sm font-medium text-green-600">{item.commission}</span></div>
                                                    </td>
                                                     <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900"><span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{item.currency}</span></div>
                                                    </td>
                                                    <td className="px-6 py-4 ">
                                                        <div className="text-sm text-gray-900">
                                                            <label className="relative inline-flex items-center cursor-pointer">
                                                                <input className="sr-only peer" type="checkbox" checked={item.status === 'Active'} readOnly />
                                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 "></div>
                                                                <span className="ml-3 text-sm font-medium text-green-600">Active</span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            <div className="flex items-center gap-2">
                                                                <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-700 hover:bg-gray-100 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-blue-600 hover:text-blue-700" title="Edit">
                                                                    <span className="mr-2"><EditIcon /></span>
                                                                </button>
                                                                <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-700 hover:bg-gray-100 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer text-red-600 hover:text-red-700" title="Delete">
                                                                    <span className="mr-2"><DeleteIcon /></span>
                                                                </button>
                                                            </div>
                                                        </div>
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

export default SymbolsPipValues;
