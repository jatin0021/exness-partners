import React, { useState } from 'react';

const LoyaltyProgram = () => {
    const [expanded, setExpanded] = useState(false);

    // Icons
    const ChevronDown = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6l6 -6"></path>
        </svg>
    );

    const ChevronUp = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6l-6 6"></path>
        </svg>
    );

    const LockIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 1 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
    );

    // Collapsed View
    if (!expanded) {
        return (
            <div className="w-full bg-white rounded-lg p-5 shadow-sm border border-gray-200 mt-6 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl font-bold text-gray-900">Loyalty Program</h2>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-gray-200 bg-gray-50 text-[10px] text-gray-500">
                             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            Data is updated every 4 hours
                        </div>
                    </div>
                    <button
                        onClick={() => setExpanded(true)}
                        className="flex items-center gap-1 text-gray-500 hover:text-gray-900 text-xs font-medium transition-colors"
                    >
                        Show details
                        <ChevronDown />
                    </button>
                </div>

                <p className="text-gray-700 text-xs mb-6">
                    Hit all three targets to claim your reward. You can choose to take the prize or receive a cash alternative.
                </p>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shadow-sm overflow-hidden p-1">
                             <img src="/loyalty_images/cash.png" alt="Cash" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">$500 Cash</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                             {[1, 2, 3].map((i) => (
                                <div key={i} className="w-5 h-5 rounded-full bg-[#FF444F] flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                            ))}
                        </div>
                        <span className="text-sm text-gray-700">0 out of 3 targets achieved</span>
                    </div>
                </div>
            </div>
        );
    }

    // Expanded View
    return (
        <div className="w-full bg-white rounded-lg p-5 shadow-sm border border-gray-200 mt-6 animate-fadeIn transition-all">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-gray-900">Loyalty Program</h2>
                        <button className="flex items-center gap-1 text-blue-500 font-medium hover:bg-blue-50 rounded px-2 py-0.5 transition-colors">
                            <span className="text-xl font-medium">billion USD</span>
                            <ChevronDown />
                        </button>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-gray-200 bg-gray-50 text-[10px] text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="9"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Data is updated every 4 hours
                    </div>
                </div>
                <button
                    onClick={() => setExpanded(false)}
                    className="flex items-center gap-1 text-gray-500 hover:text-gray-900 text-xs font-medium transition-colors"
                >
                    Hide details
                    <ChevronUp />
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Targets */}
                <div>
                    <p className="text-gray-900 text-[15px] mb-8 font-normal">
                        Hit all three targets to claim your reward. You can choose to take the prize or receive a cash alternative.
                    </p>

                    <div className="flex flex-col gap-8 pl-4"> 
                        {/* Target 1 */}
                        <div className="relative border border-dashed border-[#8B5CF6] rounded-xl p-8 bg-[#F5F3FF]/30 min-h-[160px] flex flex-col justify-center">
                            <div className="absolute -top-3 left-8 bg-white px-2 text-[#8B5CF6] text-sm font-medium z-10">Target 1</div>
                            <div className="absolute -top-3 -right-3 bg-white rounded-full p-1 cursor-help shadow-sm z-10">
                                <div className="w-6 h-6 bg-[#007AFF] rounded-full flex items-center justify-center text-white"><span className="font-bold font-serif italic text-sm">i</span></div>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-[#FF444F] border-[3px] border-white flex items-center justify-center text-white shadow-sm z-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>
                            <div className="pl-2">
                                <h4 className="font-medium text-gray-900 text-[15px] mb-2 leading-tight">Qualifying Lifetime Trading Volume of clients</h4>
                                <div className="mb-3"><div className="text-gray-900 font-bold text-2xl">500 million USD to your target</div></div>
                                <div className="text-[13px] text-gray-900 font-medium">Current result: <span className="font-bold">0 USD</span></div>
                            </div>
                        </div>

                        {/* Target 2 */}
                        <div className="relative border border-dashed border-[#8B5CF6] rounded-xl p-8 bg-[#F5F3FF]/30 min-h-[160px] flex flex-col justify-center">
                             <div className="absolute -top-3 left-8 bg-white px-2 text-[#8B5CF6] text-sm font-medium z-10">Target 2</div>
                            <div className="absolute -top-3 -right-3 bg-white rounded-full p-1 cursor-help shadow-sm z-10">
                                <div className="w-6 h-6 bg-[#007AFF] rounded-full flex items-center justify-center text-white"><span className="font-bold font-serif italic text-sm">i</span></div>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-[#FF444F] border-[3px] border-white flex items-center justify-center text-white shadow-sm z-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>
                            <div className="pl-2">
                                <h4 className="font-medium text-gray-900 text-[15px] mb-2 leading-tight max-w-[95%]">Qualifying Trading Volume in the past 12 months &gt; 20% of clients Qualifying Lifetime Trading Volume</h4>
                                <div className="mb-3"><div className="text-gray-900 font-bold text-2xl">0 USD to your target</div></div>
                                <div className="text-[13px] text-gray-900 font-medium">Current result: <span className="font-bold">0 USD</span></div>
                            </div>
                        </div>

                        {/* Target 3 */}
                        <div className="relative border border-dashed border-[#8B5CF6] rounded-xl p-8 bg-[#F5F3FF]/30 min-h-[160px] flex flex-col justify-center">
                             <div className="absolute -top-3 left-8 bg-white px-2 text-[#8B5CF6] text-sm font-medium z-10">Target 3</div>
                            <div className="absolute -top-3 -right-3 bg-white rounded-full p-1 cursor-help shadow-sm z-10">
                                <div className="w-6 h-6 bg-[#007AFF] rounded-full flex items-center justify-center text-white"><span className="font-bold font-serif italic text-sm">i</span></div>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-[#FF444F] border-[3px] border-white flex items-center justify-center text-white shadow-sm z-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>
                            <div className="pl-2">
                                <h4 className="font-medium text-gray-900 text-[15px] mb-2 leading-tight">Number of active clients in the last 3 calendar months ≥ 5</h4>
                                <div className="mb-3"><div className="text-gray-900 font-bold text-2xl">5 active clients until next target</div></div>
                                <div className="text-[13px] text-gray-900 font-medium">Current result: <span className="font-bold">0 active clients</span></div>
                            </div>
                        </div>

                        <a href="https://ex.guide/4o7tCdj" target="_blank" rel="noopener noreferrer" className="bg-[#FFD900] hover:bg-[#FFE000] text-black text-center font-medium py-3 px-8 rounded shadow-sm w-fit mt-2 transition-colors text-sm">
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right Column: Timeline */}
                <div className="flex gap-4">
                    {/* Vertical Sidebar */}
                    <div className="relative w-8 flex flex-col items-center">
                         {/* Rotated Text */}
                         <div className="absolute top-[40%] -left-[120px] w-[300px] transform -rotate-90 origin-center text-gray-400 font-medium text-xs text-center whitespace-nowrap">
                            Qualifying Lifetime Trading Volume in billion USD
                        </div>
                        {/* Thick Gray Bar */}
                        <div className="w-2 bg-[#546e7a] h-full rounded-full opacity-80"></div>
                    </div>

                    {/* Content List */}
                    <div className="flex-1">
                         {/* Header */}
                         <div className="mb-8 pl-0">
                             <h3 className="font-bold text-gray-900 text-[15px]">
                                 Reach the top and receive $200,000 for every extra 500 bln!
                             </h3>
                         </div>

                        <div className="flex flex-col">
                            {/* 800 bln */}
                            <div className="flex items-center py-5 border-t border-b border-dashed border-[#8B5CF6]/50 relative">
                                {/* Connector Tick */}
                                <div className="absolute top-0 -left-6 w-4 h-[1px] bg-gray-300"></div> 
                                
                                <div className="w-24 font-bold text-gray-900 text-[16px]">800 bln</div>
                                <div className="relative mx-3">
                                    <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border-4 border-white shadow-sm flex items-center justify-center p-2 overflow-hidden">
                                        <img src="/loyalty_images/cash.png" alt="Cash" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A78BFA] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                        <LockIcon />
                                    </div>
                                </div>
                                <span className="text-[15px] font-medium text-gray-700">$300,000 Cash</span>
                            </div>

                            {/* 300 bln */}
                            <div className="flex items-center py-5 border-b border-dashed border-[#8B5CF6]/50 relative">
                                <div className="w-24 font-bold text-gray-900 text-[16px]">300 bln</div>
                                <div className="relative mx-3">
                                     <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
                                        <img src="/loyalty_images/luxury_car.png" alt="Car" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A78BFA] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                        <LockIcon />
                                    </div>
                                </div>
                                <a href="#" className="text-[15px] font-medium text-[#1976D2] underline decoration-solid underline-offset-2 hover:text-blue-700">Luxury Sports Car</a>
                            </div>

                            {/* 100 bln */}
                            <div className="flex items-center py-5 border-b border-dashed border-[#8B5CF6]/50 relative">
                                <div className="w-24 font-bold text-gray-900 text-[16px]">100 bln</div>
                                <div className="relative mx-3">
                                    <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border-4 border-white shadow-sm flex items-center justify-center p-2 overflow-hidden">
                                        <img src="/loyalty_images/cash.png" alt="Cash" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                                    </div>
                                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A78BFA] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                        <LockIcon />
                                    </div>
                                </div>
                                <span className="text-[15px] font-medium text-gray-700">$40,000 Cash</span>
                            </div>

                            {/* 50 bln */}
                            <div className="flex items-center py-5 border-b border-dashed border-[#8B5CF6]/50 relative">
                                <div className="w-24 font-bold text-gray-900 text-[16px]">50 bln</div>
                                <div className="relative mx-3">
                                    <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border-4 border-white shadow-sm flex items-center justify-center p-1 overflow-hidden">
                                        <img src="/loyalty_images/luxury_watch.png" alt="Watch" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                                    </div>
                                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A78BFA] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                        <LockIcon />
                                    </div>
                                </div>
                                <a href="#" className="text-[15px] font-medium text-[#1976D2] underline decoration-solid underline-offset-2 hover:text-blue-700">A Luxury Watch</a>
                            </div>

                            {/* 25 bln */}
                            <div className="flex items-center py-5 border-b border-dashed border-[#8B5CF6]/50 relative">
                                <div className="w-24 font-bold text-gray-900 text-[16px]">25 bln</div>
                                <div className="relative mx-3">
                                    <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
                                        <img src="/loyalty_images/trip.png" alt="Trip" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                                    </div>
                                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A78BFA] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                        <LockIcon />
                                    </div>
                                </div>
                                <a href="#" className="text-[15px] font-medium text-[#1976D2] underline decoration-dashed underline-offset-4 hover:text-blue-700">Luxury International Trip for 2</a>
                            </div>

                             {/* 10 bln */}
                             <div className="flex items-center py-5 border-b border-dashed border-[#8B5CF6]/50 relative">
                                <div className="w-24 font-bold text-gray-900 text-[16px]">10 bln</div>
                                <div className="relative mx-3">
                                    <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
                                        <img src="/loyalty_images/trip.png" alt="Trip" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                                    </div>
                                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A78BFA] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                        <LockIcon />
                                    </div>
                                </div>
                                <a href="#" className="text-[15px] font-medium text-[#1976D2] underline decoration-dashed underline-offset-4 hover:text-blue-700">Luxury City Break for 2</a>
                            </div>

                            {/* 5 bln */}
                            <div className="flex items-center py-5 border-b border-dashed border-[#8B5CF6]/50 relative">
                                <div className="w-24 font-bold text-gray-900 text-[16px]">5 bln</div>
                                <div className="relative mx-3">
                                    <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border-4 border-white shadow-sm flex items-center justify-center p-1 overflow-hidden">
                                        <img src="/loyalty_images/electronics.png" alt="Electronics" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                                    </div>
                                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A78BFA] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                        <LockIcon />
                                    </div>
                                </div>
                                <span className="text-[15px] font-medium text-gray-300 pointer-events-none">High-end Electronics</span>
                            </div>

                            {/* 2.5 bln */}
                            <div className="flex items-center py-5 border-b border-dashed border-[#8B5CF6]/50 relative">
                                <div className="w-24 font-bold text-gray-900 text-[16px]">2.5 bln</div>
                                <div className="relative mx-3">
                                    <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border-4 border-white shadow-sm flex items-center justify-center p-1 overflow-hidden">
                                        <img src="/loyalty_images/smartphone.png" alt="Smartphone" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                                    </div>
                                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A78BFA] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                        <LockIcon />
                                    </div>
                                </div>
                                <span className="text-[15px] font-medium text-gray-300 pointer-events-none">Smartphone</span>
                            </div>

                             {/* 1 bln */}
                             <div className="flex items-center py-5 border-b border-dashed border-[#8B5CF6]/50 relative">
                                <div className="w-24 font-bold text-gray-900 text-[16px]">1 bln</div>
                                <div className="relative mx-3">
                                    <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border-4 border-white shadow-sm flex items-center justify-center p-1 overflow-hidden">
                                        <img src="/loyalty_images/smartwatch.png" alt="Smartwatch" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                                    </div>
                                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A78BFA] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                        <LockIcon />
                                    </div>
                                </div>
                                <span className="text-[15px] font-medium text-gray-300 pointer-events-none">Smartwatch</span>
                            </div>

                            {/* 0.5 bln */}
                            <div className="flex items-center py-5 border-b border-dashed border-[#8B5CF6]/50 relative">
                                <div className="w-24 font-bold text-gray-900 text-[16px]">0.5 bln</div>
                                <div className="relative mx-3">
                                    <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border-4 border-white shadow-sm flex items-center justify-center p-2 overflow-hidden">
                                        <img src="/loyalty_images/cash.png" alt="Cash" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                                    </div>
                                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A78BFA] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                        <LockIcon />
                                    </div>
                                </div>
                                <span className="text-[15px] font-medium text-gray-300 pointer-events-none">$500 Cash</span>

                                {/* Current Position Indicator Line - Mock */}
                                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-gray-300"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-end mt-6">
                <button
                    onClick={() => setExpanded(false)}
                    className="flex items-center gap-1 text-gray-500 hover:text-gray-900 text-xs font-medium transition-colors"
                >
                    Hide details
                    <ChevronUp />
                </button>
            </div>

        </div>
    );
};

export default LoyaltyProgram;
