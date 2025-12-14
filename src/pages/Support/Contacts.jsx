import React from 'react';
import { Phone, AtSign, MessageCircle } from 'lucide-react';

const supportData = [
  { language: 'English', accessibility: 'Available now', time: ['24/7'] },
  { language: 'Chinese', accessibility: 'Available now', time: ['24/7'] },
  { language: 'Thai', accessibility: 'Available now', time: ['24/7'] },
  { language: 'Vietnamese', accessibility: 'Available now', time: ['24/7'] },
  { language: 'Arabic', accessibility: 'Available now', time: ['24/7'] },
  { language: 'Bengali', accessibility: 'Available now', time: ['24/7'] },
  { language: 'French', accessibility: 'Available now', time: ['Mon 05:30 – Sat 05:30', 'Sat – Sun, 12:30 – 04:30 (next day)'] },
  { language: 'Urdu', accessibility: 'Available now', time: ['24/7'] },
  { language: 'Hindi', accessibility: 'Available now', time: ['24/7'] },
  { language: 'Bahasa Indonesia', accessibility: 'Available now', time: ['Mon 04:30 – Sat 20:30', 'Sun, 04:30 – 20:30'] },
  { language: 'Japanese', accessibility: 'Available now', time: ['Mon – Fri, 04:30 – 20:30'] },
  { language: 'Korean', accessibility: 'Not available now', time: ['Mon – Fri, 08:30 – 16:30'] },
  { language: 'Portuguese', accessibility: 'Available now', time: ['Sun 22:30 – Sat 06:30', 'Sat, 22:30 – 06:30 (next day)'] },
  { language: 'Russian', accessibility: 'Available now', time: ['Mon – Fri, 09:30 – 01:30 (next day)'] },
  { language: 'Spanish', accessibility: 'Available now', time: ['Sun 18:30 – Sat 06:30', 'Sat, 18:30 – 06:30 (next day)'] },
];

const Contacts = () => {
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto p-6 md:p-10 relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Support</h1>
        <div className="flex gap-3">
          <a 
            href="tel:+35725030959" 
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Phone size={18} className="text-gray-500" />
            <span>+357 25 030 959</span>
          </a>
          <a 
            href="mailto:support@fincrm.com" 
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <AtSign size={18} className="text-gray-500" />
            <span>Send email</span>
          </a>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-8 pb-4 border-b border-gray-200 text-sm font-bold text-gray-900">
          <div className="col-span-4">Language</div>
          <div className="col-span-4">Accessibility</div>
          <div className="col-span-4">Your Local time</div>
        </div>

        {/* Table Body */}
        <div className="flex flex-col">
          {supportData.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-6 border-b border-gray-100 items-start hover:bg-gray-50/50 transition-colors"
            >
              <div className="col-span-1 md:col-span-4 text-sm text-gray-900 font-medium md:font-normal">
                {item.language}
              </div>
              
              <div className="col-span-1 md:col-span-4 text-sm flex items-center">
                <span className="md:hidden font-bold mr-2 text-gray-500">Accessibility: </span>
                <span className={`${item.accessibility === 'Available now' ? 'text-green-400' : 'text-gray-400'}`}>
                  {item.accessibility}
                </span>
              </div>
              
              <div className="col-span-1 md:col-span-4 text-sm text-gray-900">
                <span className="md:hidden font-bold mr-2 text-gray-500 block mb-1">Local Time: </span>
                <div className="flex flex-col gap-1">
                  {item.time.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#FFD900] hover:bg-[#FACC15] text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105">
            <MessageCircle size={28} fill="black" className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default Contacts;
