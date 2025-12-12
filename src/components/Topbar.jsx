import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, UserCircle, Menu, X, Info, Settings, LogOut } from 'lucide-react';
import exnessLogo from '/logo.svg';
import exnessLogoMobile from '/logoMobile.svg';

// The main Topbar component
const Topbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [activePopup, setActivePopup] = useState(null); // 'notifications', 'profile', or null
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // Check for notification click
      if (activePopup === 'notifications' && notificationRef.current && !notificationRef.current.contains(event.target)) {
        setActivePopup(null);
      }
      // Check for profile click
      if (activePopup === 'profile' && profileRef.current && !profileRef.current.contains(event.target)) {
        setActivePopup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopup]);

  const togglePopup = (popupName) => {
    if (activePopup === popupName) {
      setActivePopup(null);
    } else {
      setActivePopup(popupName);
    }
  };

  const handleAccountClick = () => {
    navigate('/settings/profile');
    setActivePopup(null);
  };

  // Array of primary navigation items (icons)
  const primaryNavItems = [
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'profile', icon: UserCircle, label: 'Profile' },
  ];

  // Component for a single icon link
  const IconLink = ({ Icon, label, hasIndicator = false, className = '', onClick, isActive }) => (
    <button
      type="button"
      onClick={onClick}
      title={label}
      className={`relative p-2 cursor-pointer transition-colors duration-150 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-200' : ''} ${className}`}
    >
      <Icon className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
      {/* Red notification indicator */}
      {hasIndicator && (
        <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
      )}
    </button>
  );

  return (
    <header className="bg-transparent w-full border-b border-gray-200 z-10 h-[57px]">
      <div className="mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Left Section - Mobile Toggle & Logo */}
          <div className="flex items-center">
            {/* Mobile Menu Button (Visible on md screens and down) */}
            <div className="md:hidden mr-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              {/* Desktop Logo */}
              <img src={exnessLogo} alt="exness Partners" className="hidden md:block h-10 w-auto" />
              {/* Mobile Logo */}
              <img src={exnessLogoMobile} alt="exness Partners" className="block md:hidden h-8 w-auto" />
            </div>
          </div>

          {/* Right Section - Balance, Nav Items */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            
            {/* Value Display - Always visible */}
            <div className="flex items-baseline text-md font-medium text-gray-900 ">
              <span className='font-bold'>0.00</span>
              <span className="text-sm font-normal ml-1">USD</span>
            </div>

            {/* Icons */}
            <nav className="flex items-center space-x-1 md:space-x-4">
              {primaryNavItems.map((item) => {
                if (item.id === 'notifications') {
                  return (
                    <div key={item.id} className="relative" ref={notificationRef}>
                      <IconLink
                        Icon={item.icon}
                        label={item.label}
                        hasIndicator={item.hasIndicator}
                        isActive={activePopup === 'notifications'}
                        onClick={() => togglePopup('notifications')}
                      />
                      
                      {/* Notifications Dropdown */}
                      {activePopup === 'notifications' && (
                        <div className="absolute right-0 top-full mt-2 w-[380px] z-50">
                          {/* Arrow Tip */}
                          <div className="absolute top-[-6px] right-3 w-3 h-3 bg-white border-t border-l border-gray-200 transform rotate-45 z-[51]"></div>
                          
                          {/* Popup Content */}
                          <div className="bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.15)] border border-gray-200 relative z-[50]">
                            <div className="p-4 border-b border-gray-100">
                              <h3 className="font-bold text-gray-900 text-[16px]">Notifications</h3>
                            </div>
                            <div className="p-4">
                              <div className="bg-slate-100 rounded-md p-4 flex items-start gap-3 border border-slate-200/50">
                                <Info className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" strokeWidth={2} />
                                <p className="text-[14px] text-gray-700 leading-relaxed">
                                  At the moment there are no new messages available
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                
                if (item.id === 'profile') {
                    return (
                      <div key={item.id} className="relative" ref={profileRef}>
                        <IconLink
                          Icon={item.icon}
                          label={item.label}
                          hasIndicator={item.hasIndicator}
                          isActive={activePopup === 'profile'}
                          onClick={() => togglePopup('profile')}
                        />
                        
                        {/* Profile Dropdown */}
                        {activePopup === 'profile' && (
                          <div className="absolute right-0 top-full mt-2 min-w-[200px] z-50">
                             {/* Arrow Tip */}
                             <div className="absolute top-[-6px] right-3 w-3 h-3 bg-white border-t border-l border-gray-200 transform rotate-45 z-[51]"></div>

                            <div className="bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.15)] border border-gray-200 relative z-[50] py-2">
                                <button 
                                  onClick={handleAccountClick}
                                  className="w-full text-left px-4 py-3 flex items-center hover:bg-gray-50 transition-colors text-gray-700"
                                >
                                    <Settings className="w-5 h-5 mr-3" strokeWidth={2.5} />
                                    <span className="font-normal text-[15px]">Account</span>
                                </button>
                                <button className="w-full text-left px-4 py-3 flex items-center hover:bg-gray-50 transition-colors text-gray-700">
                                    <LogOut className="w-5 h-5 mr-3" strokeWidth={2.5} />
                                    <span className="font-normal text-[15px]">Sign out</span>
                                </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                }

                return (
                  <IconLink
                    key={item.id}
                    Icon={item.icon}
                    label={item.label}
                    hasIndicator={item.hasIndicator}
                  />
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Topbar;