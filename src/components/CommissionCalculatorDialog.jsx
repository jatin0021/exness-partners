import React, { useState } from 'react';

const CommissionCalculatorDialog = ({ open, onClose }) => {
  if (!open) return null;

  const [accountType, setAccountType] = useState('');
  const [instrument, setInstrument] = useState('');
  const [lots, setLots] = useState('1.00');

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn ">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-[32rem] overflow-hidden flex flex-col max-h-[90vh] ">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Commission calculator</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {/* Hero Section */}
          <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center text-center mb-6">
            <div className="mb-4 text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="3" width="16" height="18" rx="2"></rect>
                <line x1="8" y1="7" x2="16" y2="7"></line>
                <line x1="8" y1="11" x2="16" y2="11"></line>
                <line x1="8" y1="15" x2="10" y2="15"></line>
                <line x1="14" y1="15" x2="16" y2="15"></line>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">See how much you can earn.</h3>
            <p className="text-sm text-gray-500 max-w-[80%]">
              Get a commission estimate based on your referred clients' account type, instruments, and trading volume.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">
            {/* Account Type */}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Account type</label>
              <div className="relative">
                <select 
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-900 appearance-none focus:outline-none focus:border-blue-500 bg-white"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                >
                  <option value="" disabled>Select account</option>
                  <option value="standard">Standard</option>
                  <option value="pro">Pro</option>
                  <option value="zero">Zero</option>
                  <option value="raw">Raw Spread</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {/* Instrument */}
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1.5">Instrument</label>
                <div className="relative">
                  <select 
                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-900 appearance-none focus:outline-none focus:border-blue-500 bg-white"
                    value={instrument}
                    onChange={(e) => setInstrument(e.target.value)}
                  >
                    <option value="" disabled>Select instrument</option>
                    <option value="eurusd">EURUSD</option>
                    <option value="gbpusd">GBPUSD</option>
                    <option value="xauusd">XAUUSD</option>
                    <option value="usdjpy">USDJPY</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6l6 -6"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Number of Lots */}
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1.5">Number of lots</label>
                <input 
                  type="text" 
                  value={lots}
                  onChange={(e) => setLots(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-100 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded text-sm transition-colors"
          >
            Back
          </button>
          <button 
            disabled 
            className="px-6 py-2 border border-blue-200 text-blue-300 font-medium rounded text-sm cursor-not-allowed bg-white"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommissionCalculatorDialog;
