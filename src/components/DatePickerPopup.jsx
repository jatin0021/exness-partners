import React from 'react';

const DatePickerPopup = () => {
  // Calendar data for December 2025
  // Dec 1 is Monday.
  // Days: 31
  
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // Generating visual state to match the screenshot exactly
  // Row 1: Empty, 1, 2, 3, 4, 5, 6
  // Row 2: 7, 8, 9, 10, 11, 12, 13
  // ...
  
  const renderDay = (day) => {
    if (!day) return <div className="w-9 h-9"></div>;

    // Range logic for 7-10
    const isRange = day >= 7 && day <= 10;
    const isStart = day === 7;
    const isEnd = day === 10;
    const isMiddle = day > 7 && day < 10;

    if (isEnd) {
      return (
        <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Background connection to left */}
           <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#f0f2f5]"></div>
           <button className="relative w-9 h-9 rounded-full bg-[#546e7a] text-white flex items-center justify-center text-sm font-medium z-10 shadow-sm">
            {day}
          </button>
        </div>
      );
    }

    if (isStart) {
        return (
            <div className="relative w-9 h-9 flex items-center justify-center">
               <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#f0f2f5]"></div> 
               <button className="relative w-9 h-9 rounded-full bg-[#f0f2f5] text-gray-900 flex items-center justify-center text-sm font-medium hover:bg-gray-200 z-10">
                {day}
              </button>
            </div>
          );
    }

    if (isMiddle) {
        return (
            <div className="w-9 h-9 flex items-center justify-center bg-[#f0f2f5]">
              <button className="w-9 h-9 text-gray-900 flex items-center justify-center text-sm font-medium">
                {day}
              </button>
            </div>
          );
    }

    // Normal day
    return (
      <button className="w-9 h-9 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 flex items-center justify-center text-sm transition-colors">
        {day}
      </button>
    );
  };

  return (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-200 p-4 w-[290px] z-50 animate-fadeIn select-none">
      
      {/* 30 Days Dropdown */}
      <div className="mb-4">
        <button className="w-full flex items-center justify-between bg-[#eff2f5] hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md text-[13px] font-medium transition-colors border border-transparent">
          <span>30 days</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M6 9l6 6l6 -6"/></svg>
        </button>
      </div>

      <div className="px-1">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-4">
            <button className="flex items-center gap-2 font-bold text-gray-900 text-[14px] hover:bg-gray-50 rounded px-2 py-1 transition-colors">
            December 2025
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M6 9l6 6l6 -6"/></svg>
            </button>
            <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6l6-6"/></svg>
            </button>
            <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded-full text-gray-300 transition-colors cursor-not-allowed">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6l-6-6"/></svg>
            </button>
            </div>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 text-center mb-2">
            {weekDays.map((day, i) => (
                <div key={i} className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{day}</div>
            ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-1">
            {/* Row 1 */}
            {renderDay(null)}
            {renderDay(1)}
            {renderDay(2)}
            {renderDay(3)}
            {renderDay(4)}
            {renderDay(5)}
            {renderDay(6)}

            {/* Row 2 */}
            {renderDay(7)}
            {renderDay(8)}
            {renderDay(9)}
            {renderDay(10)}
            {renderDay(11)}
            {renderDay(12)}
            {renderDay(13)}

            {/* Row 3 */}
            {renderDay(14)}
            {renderDay(15)}
            {renderDay(16)}
            {renderDay(17)}
            {renderDay(18)}
            {renderDay(19)}
            {renderDay(20)}

            {/* Row 4 */}
            {renderDay(21)}
            {renderDay(22)}
            {renderDay(23)}
            {renderDay(24)}
            {renderDay(25)}
            {renderDay(26)}
            {renderDay(27)}

            {/* Row 5 */}
            {renderDay(28)}
            {renderDay(29)}
            {renderDay(30)}
            {renderDay(31)}
            {renderDay(null)}
            {renderDay(null)}
            {renderDay(null)}
        </div>
      </div>
    </div>
  );
};

export default DatePickerPopup;
