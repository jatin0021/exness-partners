import { Bell, UserCircle, Menu, X } from 'lucide-react';
import exnessLogo from '/logo.svg';
import exnessLogoMobile from '/logoMobile.svg';

// The main Topbar component
const Topbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {

  // Array of primary navigation items (icons)
  const primaryNavItems = [
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'profile', icon: UserCircle, label: 'Profile' },
  ];

  // Component for a single icon link
  const IconLink = ({ Icon, label, hasIndicator = false, className = '' }) => (
    <div
      title={label}
      className={`relative p-2 cursor-pointer transition-colors duration-150 rounded-full hover:bg-gray-100 ${className}`}
    >
      <Icon className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
      {/* Red notification indicator */}
      {hasIndicator && (
        <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
      )}
    </div>
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

            {/* Icons (Visible on all screens now for mobile layout match) */}
            <nav className="flex items-center space-x-1 md:space-x-4">
              {primaryNavItems.map((item) => (
                <IconLink
                  key={item.id}
                  Icon={item.icon}
                  label={item.label}
                  hasIndicator={item.hasIndicator}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;