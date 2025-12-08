import { useState } from 'react';
import { LayoutGrid, Globe, Clock, Bell, User, Menu, X } from 'lucide-react';

// The main Topbar component
const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array of primary navigation items (icons)
  const primaryNavItems = [
    { id: 'apps', icon: LayoutGrid, label: 'Apps', desktopOnly: true },
    { id: 'language', icon: Globe, label: 'Language', desktopOnly: true },
    { id: 'history', icon: Clock, label: 'History', desktopOnly: true },
    { id: 'notifications', icon: Bell, label: 'Notifications', hasIndicator: true },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  // Component for a single icon link
  const IconLink = ({ Icon, label, hasIndicator = false, className = '' }) => (
    <div
      title={label}
      className={`relative p-2 cursor-pointer transition-colors duration-150 rounded-full hover:bg-gray-100 ${className}`}
    >
      <Icon className="w-5 h-5 text-gray-700" />
      {/* Red notification indicator */}
      {hasIndicator && (
        <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
      )}
    </div>
  );

  return (
    <header className="bg-white w-full border-b border-gray-100 z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left Section - Logo */}
          <div className="flex-shrink:0">
            <h1 className="text-3xl lg:text-5xl font-semi-bold text-gray-900 tracking-tight select-none">
              exness
            </h1>
          </div>

          {/* Right Section - Primary Nav and Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            
            {/* Value Display - Always visible */}
            <div className="hidden sm:block text-sm font-semibold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full shadow-inner border border-gray-100">
              $0.00 USD
            </div>

            {/* Desktop Icons (Visible on md screens and up) */}
            <nav className="hidden md:flex items-center space-x-2">
              {primaryNavItems.map((item) => (
                <IconLink
                  key={item.id}
                  Icon={item.icon}
                  label={item.label}
                  hasIndicator={item.hasIndicator}
                />
              ))}
            </nav>

            {/* Mobile Menu Button (Visible on md screens and down) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
            
            {/* Mobile-only value display */}
            <div className="block sm:hidden text-sm font-semibold text-gray-700 bg-gray-50 px-3 py-2 rounded-lg mb-2">
              $0.00 USD
            </div>

            {primaryNavItems.map((item) => (
              // Show all items in the mobile menu, regardless of desktopOnly flag
              <div
                key={item.id}
                className="flex items-center p-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
                {item.hasIndicator && (
                  <div className="ml-auto w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Topbar;