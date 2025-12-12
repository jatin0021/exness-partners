import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotificationSettings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('email');
  
  // State for checkboxes
  const [settings, setSettings] = useState({
    newRegistrations: true,
    tradingRegistrations: false,
    partnerChange: true,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const Checkbox = ({ label, checked, onChange }) => (
    <div 
      className="flex items-center gap-3 cursor-pointer group mb-4 select-none"
      onClick={onChange}
    >
      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors duration-200 ${
        checked 
          ? 'bg-[#6b7c93] border-[#6b7c93]' 
          : 'bg-white border-gray-300 group-hover:border-gray-400'
      }`}>
        {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </div>
      <span className="text-[14px] text-gray-700">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50/50 min-h-full">
      <div className="w-full max-w-[500px]">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-[14px] text-gray-700 hover:text-gray-900 transition-colors mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={2.5} />
          Back
        </button>

        {/* Content Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 min-h-[400px]">
          <h1 className="text-[20px] font-bold text-gray-900 mb-2">Notification settings</h1>
          <p className="text-[13px] text-gray-500 leading-relaxed mb-8">
            Choose how we contact you about important events. Enable or disable notifications in your email or Personal Area
          </p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('email')}
              className={`pb-2 px-8 text-[14px] font-medium transition-colors relative ${
                activeTab === 'email' 
                  ? 'text-gray-900' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Email
              {activeTab === 'email' && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-900"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('personal_area')}
              className={`pb-2 px-8 text-[14px] font-medium transition-colors relative ${
                activeTab === 'personal_area' 
                  ? 'text-gray-900' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Personal area
              {activeTab === 'personal_area' && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-900"></div>
              )}
            </button>
          </div>

          {/* Content */}
          {activeTab === 'email' && (
            <div className="mt-4">
              <Checkbox 
                label="New Personal Area registrations" 
                checked={settings.newRegistrations} 
                onChange={() => handleToggle('newRegistrations')} 
              />
              <Checkbox 
                label="New trading account registrations" 
                checked={settings.tradingRegistrations} 
                onChange={() => handleToggle('tradingRegistrations')} 
              />
              <Checkbox 
                label="Partner change request" 
                checked={settings.partnerChange} 
                onChange={() => handleToggle('partnerChange')} 
              />
            </div>
          )}
          
          {activeTab === 'personal_area' && (
             <div className="mt-4 text-sm text-gray-500">
               {/* Placeholder content since design wasn't provided for this tab */}
               <p>Personal Area notification settings go here.</p>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
