import React, { useState } from 'react';

const PartnerLevelsDialog = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('Common');

  if (!open) return null;

  const tabs = ['Common', 'Advanced', 'Bronze', 'Silver', 'Gold', 'Brilliant'];

  const levelsData = {
    Common: {
      spreadShare: { standard: '20%', pro: '17%' },
      fixedCommission: { eurusd: '1.00', xauusd: '1.35' },
      qualification: { tradingVolume: '0 - 15', activeClients: '≥ 0' }
    },
    Advanced: {
      spreadShare: { standard: '25%', pro: '20%' },
      fixedCommission: { eurusd: '1.50', xauusd: '1.80' },
      qualification: { tradingVolume: '15 - 50', activeClients: '≥ 5' }
    },
    Bronze: {
      spreadShare: { standard: '30%', pro: '25%' },
      fixedCommission: { eurusd: '2.00', xauusd: '2.30' },
      qualification: { tradingVolume: '50 - 100', activeClients: '≥ 10' }
    },
    Silver: {
      spreadShare: { standard: '35%', pro: '30%' },
      fixedCommission: { eurusd: '2.50', xauusd: '2.80' },
      qualification: { tradingVolume: '100 - 200', activeClients: '≥ 20' }
    },
    Gold: {
      spreadShare: { standard: '40%', pro: '35%' },
      fixedCommission: { eurusd: '3.00', xauusd: '3.30' },
      qualification: { tradingVolume: '200 - 500', activeClients: '≥ 50' }
    },
    Brilliant: {
      spreadShare: { standard: '45%', pro: '40%' },
      fixedCommission: { eurusd: '3.50', xauusd: '3.80' },
      qualification: { tradingVolume: '500+', activeClients: '≥ 100' }
    }
  };

  const currentData = levelsData[activeTab];

  // Helper to split price into whole and decimal parts
  const formatPrice = (price) => {
    const [whole, decimal] = price.split('.');
    return { whole, decimal };
  };

  const eurusd = formatPrice(currentData.fixedCommission.eurusd);
  const xauusd = formatPrice(currentData.fixedCommission.xauusd);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-[36rem] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 pb-2 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Partner levels</h2>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 relative">
          <div className="flex overflow-x-auto no-scrollbar px-10 pt-6 gap-10 scroll-smooth pr-20">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-[20px] font-medium whitespace-nowrap transition-colors border-b-[3px] flex items-center gap-1.5 ${
                  activeTab === tab 
                    ? 'border-gray-900 text-gray-900 font-medium' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 font-normal'
                }`}
              >
                {tab}
                {tab === 'Common' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#00B69B" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rounded-full">
                    <circle cx="12" cy="12" r="10" fill="#00B69B" stroke="none"></circle>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                )}
              </button>
            ))}
          </div>
          {/* Next Button Overlay */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-2 pl-4 bg-gradient-to-l from-white via-white to-transparent">
             <button className="p-1 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"></path>
                </svg>
             </button>
          </div>
        </div>

        <div className="overflow-y-auto px-5 py-5 scrollbar-hide">
          {/* Info Alert */}
          <div className="bg-[#E5F1FD] rounded-lg p-4 flex gap-3 mb-6 text-[#0C2B57]">
            <div className="text-[#3B82F6] flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            <div>
              <div className="font-bold text-sm mb-1">Reward structure</div>
              <p className="text-sm leading-snug">
                We offer spread sharing and fixed commission per lot plans. Your reward structure depends on the referred clients' account type.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Spread Share Column */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-0.5">Spread share</h3>
                <p className="text-gray-500 text-xs">Earn a percentage of our spread revenue</p>
              </div>

              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{currentData.spreadShare.standard}</div>
                <div className="text-xs text-gray-500 leading-tight">
                  <span className="font-bold text-gray-900 block mb-0.5">Client account:</span> Standard, Cent, Social Standard, ST Investment Standard
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{currentData.spreadShare.pro}</div>
                <div className="text-xs text-gray-500 leading-tight">
                  <span className="font-bold text-gray-900 block mb-0.5">Client account:</span> Pro, Social Pro, ST Investment Pro, PIM Investment Pro
                </div>
              </div>

              <a href="https://ex.guide/46E3mBt" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 hover:underline text-sm decoration-1 underline-offset-2">
                Learn more about spread share
              </a>
            </div>

            {/* Fixed Commission Column */}
            <div className="flex flex-col gap-6">
               <div>
                <h3 className="font-bold text-gray-900 text-base mb-0.5">Fixed commission per lot</h3>
                <p className="text-gray-500 text-xs">Only on Raw Spread and Zero accounts</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-1 mb-0.5">
                      <span className="text-2xl font-bold text-gray-900">{eurusd.whole}</span>
                      <span className="text-xl font-normal text-gray-900">.{eurusd.decimal}</span>
                      <span className="text-lg font-normal text-gray-900">USD</span>
                    </div>
                    <div className="text-xs text-gray-500">EURUSD</div>
                    <div className="text-xs font-bold text-gray-900">Zero</div>
                  </div>
                  <div className="w-px bg-gray-200 h-14 mx-1"></div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-1 mb-0.5">
                      <span className="text-2xl font-bold text-gray-900">{eurusd.whole}</span>
                      <span className="text-xl font-normal text-gray-900">.{eurusd.decimal}</span>
                      <span className="text-lg font-normal text-gray-900">USD</span>
                    </div>
                    <div className="text-xs text-gray-500">EURUSD</div>
                    <div className="text-xs font-bold text-gray-900">Raw Spread</div>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                     <div className="flex items-baseline gap-1 mb-0.5">
                      <span className="text-2xl font-bold text-gray-900">{xauusd.whole}</span>
                      <span className="text-xl font-normal text-gray-900">.{xauusd.decimal}</span>
                      <span className="text-lg font-normal text-gray-900">USD</span>
                    </div>
                    <div className="text-xs text-gray-500">XAUUSD</div>
                    <div className="text-xs font-bold text-gray-900">Zero</div>
                  </div>
                  <div className="w-px bg-gray-200 h-14 mx-1"></div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-1 mb-0.5">
                      <span className="text-2xl font-bold text-gray-900">{xauusd.whole}</span>
                      <span className="text-xl font-normal text-gray-900">.{xauusd.decimal}</span>
                      <span className="text-lg font-normal text-gray-900">USD</span>
                    </div>
                    <div className="text-xs text-gray-500">XAUUSD</div>
                    <div className="text-xs font-bold text-gray-900">Raw Spread</div>
                  </div>
                </div>
              </div>

              <a href="#" className="text-blue-500 hover:text-blue-600 hover:underline text-sm decoration-1 underline-offset-2">
                Check other instruments
              </a>
            </div>
          </div>

          {/* Qualification Footer */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Qualification criteria</h3>
            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-0.5">
                 <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{currentData.qualification.tradingVolume}</span>
                    <span className="text-lg font-normal text-gray-900">Mln. USD</span>
                  </div>
                  <div className="text-xs text-gray-500">Trading volume</div>
              </div>
              <div className="w-px bg-gray-200 h-10"></div>
              <div className="flex flex-col gap-0.5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{currentData.qualification.activeClients}</span>
                  </div>
                  <div className="text-xs text-gray-500">Active clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 px-5 border-t border-gray-100 flex justify-between items-center bg-white sticky bottom-0 z-10">
           <a href="https://ex.guide/3Wnk41N" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-700 text-sm hover:text-gray-900 font-normal">
             What is trading volume?
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
           </a>

           <button 
            onClick={onClose}
            className="px-5 py-1.5 border border-gray-300 rounded hover:bg-gray-50 font-medium text-gray-700 transition-colors text-sm"
           >
             Close
           </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerLevelsDialog;
