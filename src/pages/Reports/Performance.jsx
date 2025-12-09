import React, { useState, useEffect } from 'react';
import { Filter, ArrowDown, ArrowUp, Inbox, Info, Calendar, ChevronDown, MonitorX } from 'lucide-react';

const Performance = () => {
    const [isNewReport, setIsNewReport] = useState(false);
    const [groupBy, setGroupBy] = useState('Link');
    const [dateRange, setDateRange] = useState('10 Nov, 2025 – 09 Dec, 2025');
    const [country, setCountry] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    // Mock Data
    const mockData = [
        { id: 1, link: 'https://one.exness-track.com/a/c_12345', clicks: 1245, registrations: 84, conversion: '6.75%', startTrading: 23, volMln: '4.2000', volLots: '240.50', profit: '540.20' },
        { id: 2, link: 'https://one.exness-track.com/a/c_67890', clicks: 892, registrations: 45, conversion: '5.04%', startTrading: 12, volMln: '1.1500', volLots: '85.10', profit: '125.00' },
        { id: 3, link: 'https://one.exness-track.com/a/c_11223', clicks: 2301, registrations: 156, conversion: '6.78%', startTrading: 56, volMln: '8.4500', volLots: '520.00', profit: '1250.50' },
        { id: 4, link: 'https://one.exness-track.com/a/c_44556', clicks: 560, registrations: 22, conversion: '3.92%', startTrading: 5, volMln: '0.4500', volLots: '32.40', profit: '45.80' },
        { id: 5, link: 'https://one.exness-track.com/a/c_99887', clicks: 125, registrations: 8, conversion: '6.40%', startTrading: 2, volMln: '0.1200', volLots: '10.50', profit: '15.00' },
    ];

    // Simulate initial data load
    useEffect(() => {
        setIsLoading(true);
        // Simulate network delay
        setTimeout(() => {
            setData(mockData);
            setIsLoading(false);
        }, 800);
    }, []);

    const handleApplyFilters = () => {
        setIsLoading(true);
        setTimeout(() => {
            // Just shuffle or reload mock data for effect
            setData([...mockData].sort(() => Math.random() - 0.5));
            setIsLoading(false);
        }, 500);
    };

    const handleClearFilters = () => {
        setCountry('');
        setDateRange('10 Nov, 2025 – 09 Dec, 2025');
        handleApplyFilters();
    };

    // Calculate totals
    const totals = data.reduce((acc, curr) => ({
        clicks: acc.clicks + curr.clicks,
        registrations: acc.registrations + curr.registrations,
        startTrading: acc.startTrading + curr.startTrading,
        volMln: acc.volMln + parseFloat(curr.volMln),
        volLots: acc.volLots + parseFloat(curr.volLots),
        profit: acc.profit + parseFloat(curr.profit),
    }), { clicks: 0, registrations: 0, startTrading: 0, volMln: 0, volLots: 0, profit: 0 });

    const avgConversion = data.length > 0 ? (totals.registrations / totals.clicks * 100).toFixed(2) + ' %' : '0.00 %';

    const GroupByButton = ({ label }) => (
        <button 
            onClick={() => setGroupBy(label)}
            className={`px-3 py-1 text-[13px] rounded-full transition-colors ${
                groupBy === label 
                ? 'bg-[#546e7a] text-white font-medium' 
                : 'border border-[#cfd8dc] text-[#374151] hover:bg-gray-50 bg-white'
            }`}
        >
            {label}
        </button>
    );

  return (
    <div className="flex flex-col w-full h-full bg-[#F7F9FA] px-6 py-6 overflow-y-auto">
      <div className="w-full max-w-[1400px] mx-auto pb-10">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[32px] font-bold text-[#1d1d1d]">Performance statistics</h1>
          
          {/* Switch */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsNewReport(!isNewReport)}>
            <span className="text-[14px] text-[#1d1d1d]">Switch to new performance report</span>
            <div className={`w-11 h-6 rounded-full relative transition-colors ${isNewReport ? 'bg-[#3b82f6]' : 'bg-[#b0bec5]'}`}>
                <div className={`absolute top-1 bg-white w-4 h-4 rounded-full shadow-sm transition-all ${isNewReport ? 'left-6' : 'left-1'}`}></div>
            </div>
          </div>
        </div>

        {/* Group By Chips */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="text-[14px] font-bold text-[#1d1d1d]">Group by:</span>
            <div className="flex items-center gap-2 flex-wrap">
                <GroupByButton label="Link" />
                <GroupByButton label="Source" />
                <GroupByButton label="Day" />
                <GroupByButton label="Week" />
                <GroupByButton label="Month" />
                <GroupByButton label="Year" />
                <GroupByButton label="Country" />
                <GroupByButton label="Campaign" />
            </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-2">
             {/* Click Period */}
            <div className="flex flex-col gap-1 w-full md:w-[260px]">
                <label className="text-[12px] text-[#6b7280]">Click period</label>
                <div className="relative group cursor-pointer">
                    <input 
                        type="text" 
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer hover:border-gray-400"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
            </div>

             {/* Country */}
             <div className="flex flex-col gap-1 w-full md:w-[260px]">
                <label className="text-[12px] text-[#6b7280]">Country</label>
                <div className="relative group">
                    <select 
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full h-10 px-3 py-2 bg-white border border-[#d1d5db] rounded-[4px] text-[14px] text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer hover:border-gray-400 appearance-none"
                    >
                        <option value="">All</option>
                        <option value="ID">Indonesia</option>
                        <option value="VN">Vietnam</option>
                        <option value="TH">Thailand</option>
                        <option value="CN">China</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
            </div>

            {/* Clear Filters */}
            <button 
                onClick={handleClearFilters}
                className="flex items-center gap-1.5 text-[14px] text-[#374151] hover:text-[#1d1d1d] h-10 px-2"
            >
                <div className="bg-[#374151] rounded-full p-[1px] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                Clear filters
            </button>

             {/* Apply Button */}
             <button 
                onClick={handleApplyFilters}
                className="px-6 h-10 bg-[#FFD900] text-black font-bold text-[14px] rounded-[4px] hover:bg-[#F5D000] transition-colors shadow-sm md:ml-auto"
            >
                {isLoading ? 'Loading...' : 'Apply'}
            </button>
        </div>

        {/* Update Notice */}
        <div className="flex items-center gap-2 mb-8 text-[#546e7a] mt-4 md:mt-0">
             <Info size={16} strokeWidth={2} className="text-[#29b6f6]" />
             <span className="text-[13px]">The report is updated once in 2 hours.</span>
        </div>

        {/* Metrics Row - 7 Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10 text-center">
             <div className="flex flex-col items-center">
                 <span className="text-[24px] font-bold text-[#1d1d1d]">{totals.clicks.toLocaleString()}</span>
                 <span className="text-[12px] text-[#6b7280] mt-1">Clicks</span>
             </div>
             <div className="flex flex-col items-center">
                 <span className="text-[24px] font-bold text-[#1d1d1d]">{totals.registrations.toLocaleString()}</span>
                 <span className="text-[12px] text-[#6b7280] mt-1">Registrations</span>
             </div>
             <div className="flex flex-col items-center">
                 <div className="flex items-baseline">
                    <span className="text-[24px] font-bold text-[#1d1d1d]">{avgConversion}</span>
                 </div>
                 <span className="text-[12px] text-[#6b7280] mt-1">Conversion</span>
             </div>
             <div className="flex flex-col items-center">
                 <span className="text-[24px] font-bold text-[#1d1d1d]">{totals.startTrading.toLocaleString()}</span>
                 <span className="text-[12px] text-[#6b7280] mt-1">Start Trading</span>
             </div>
             <div className="flex flex-col items-center">
                 <div className="flex items-baseline">
                    <span className="text-[24px] font-bold text-[#1d1d1d]">{totals.volMln.toFixed(4)}</span>
                 </div>
                 <span className="text-[12px] text-[#6b7280] mt-1">Volume (Mln. USD)</span>
             </div>
             <div className="flex flex-col items-center">
                 <div className="flex items-baseline">
                    <span className="text-[24px] font-bold text-[#1d1d1d]">{totals.volLots.toFixed(4)}</span>
                 </div>
                 <span className="text-[12px] text-[#6b7280] mt-1">Volume (lots)</span>
             </div>
             <div className="flex flex-col items-center">
                 <div className="flex items-baseline">
                    <span className="text-[24px] font-bold text-[#1d1d1d]">{totals.profit.toFixed(2)}</span>
                 </div>
                 <span className="text-[12px] text-[#6b7280] mt-1">Profit (USD)</span>
             </div>
        </div>

        {/* Table */}
        <div className="w-full">
            {/* Table Header Row */}
            <div className="border-b border-[#1d1d1d] pb-2 mb-4">
                <div className="grid grid-cols-7 text-[13px] font-bold text-[#1d1d1d]">
                    <div className="flex items-center gap-1 cursor-pointer group hover:text-gray-600">
                        {groupBy === 'Link' ? 'Partner link' : groupBy}
                        <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center gap-1 cursor-pointer group hover:text-gray-600">
                        Clicks
                        <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center gap-1 cursor-pointer group hover:text-gray-600">
                        Registrations
                        <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-center gap-1 cursor-pointer group hover:text-gray-600">
                        Conversion
                        <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-end gap-1 cursor-pointer group hover:text-gray-600 pr-4">
                        Start Trading
                        <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-end gap-1 cursor-pointer group hover:text-gray-600">
                        Volume
                        <ArrowUp size={14} className="text-[#d1d5db] group-hover:text-[#9ca3af]" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center justify-end gap-1 cursor-pointer group hover:text-gray-600">
                    Profit
                    <ArrowDown size={14} className="text-[#1d1d1d]" strokeWidth={2.5} />
                    </div>
                </div>
            </div>

            {/* Table Body */}
            {data.length > 0 ? (
                <div className="flex flex-col gap-2">
                    {data.map((row) => (
                        <div key={row.id} className="grid grid-cols-7 text-[13px] text-[#1d1d1d] py-3 hover:bg-gray-50 border-b border-gray-100 transition-colors">
                            <div className="flex items-center font-medium truncate pr-2 text-blue-600 hover:underline cursor-pointer">
                                {row.link}
                            </div>
                            <div className="flex items-center justify-center">
                                {row.clicks.toLocaleString()}
                            </div>
                            <div className="flex items-center justify-center">
                                {row.registrations}
                            </div>
                            <div className="flex items-center justify-center">
                                {row.conversion}
                            </div>
                            <div className="flex items-center justify-end pr-8">
                                {row.startTrading}
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="text-[11px] text-gray-500">{row.volMln} M</span>
                                <span>{row.volLots} L</span>
                            </div>
                            <div className="flex items-center justify-end font-medium">
                                {row.profit}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center pt-16 pb-16">
                    <div className="w-16 h-16 bg-[#f3f4f6] rounded-xl flex items-center justify-center text-[#9ca3af] mb-4">
                        <Inbox size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-[16px] text-[#111827] font-medium">No data</span>
                </div>
            )}
        </div>
        
      </div>
    </div>
  );
};

export default Performance;