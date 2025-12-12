import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountSettings = () => {
  const settingsItems = [
    {
      id: 'personal-data',
      title: 'Personal data',
      description: 'View the personal details you have provided',
      link: '/settings/profile/personal-info',
    },
    {
      id: 'notification-settings',
      title: 'Notification settings',
      description: 'You can select the communications from Exness',
      link: '/settings/profile/notifications',
    },
    {
      id: 'marketing-integration',
      title: 'Marketing network integration',
      description: 'Connect your digital campaigns to an external tracker',
      link: '/settings/profile/marketing-integration',
    },
    {
      id: 'client-allocation',
      title: 'Client allocation check',
      description: 'Check if a client is allocated to you under your partner link',
      link: '#', // Placeholder
    },
  ];

  return (
    <div className="flex justify-center p-6 bg-gray-50/50 min-h-full">
      <div className="w-full max-w-[500px] h-fit bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {settingsItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.link}
              className="group flex items-center justify-between p-5 hover:bg-gray-50 transition-colors duration-200 cursor-pointer no-underline"
            >
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-gray-900 mb-0.5 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </span>
                <span className="text-[13px] text-gray-500 font-normal leading-snug">
                  {item.description}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
