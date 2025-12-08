import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react';

// --- Custom Icons from User HTML (Tabler Icons) ---
const DashboardIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h6v8h-6z"></path><path d="M4 16h6v4h-6z"></path><path d="M14 12h6v8h-6z"></path><path d="M14 4h6v4h-6z"></path>
  </svg>
);

const ReportsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 4l18 0"></path><path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"></path><path d="M12 16l0 4"></path><path d="M9 20l6 0"></path><path d="M8 12l3 -3l2 2l3 -3"></path>
  </svg>
);

const RebatesIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M6 18l12 -12"></path>
  </svg>
);

const PromoIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path>
  </svg>
);

const SupportIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14v-3a8 8 0 1 1 16 0v3"></path><path d="M18 19c0 1.657 -2.686 3 -6 3"></path><path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path><path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
  </svg>
);

const LanguageIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path>
  </svg>
);

const ChevronsLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 7l-5 5l5 5"></path><path d="M17 7l-5 5l5 5"></path>
  </svg>
);

// --- Data Structure for Sidebar Navigation ---
const sidebarItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    link: '/dashboard',
    isCollapsible: false,
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: ReportsIcon,
    isCollapsible: true,
    subItems: [
      { id: 'clients', label: 'Clients', link: '/reports/contact_sharing/', isNew: true },
      { id: 'client-accounts', label: 'Client accounts', link: '/reports/clients/' },
      { id: 'rewards', label: 'Reward history', link: '/reports/rewards/' },
      { id: 'transactions', label: 'Client transactions', link: '/reports/orders/' },
      { id: 'pending', label: 'Transactions pending payment', link: '/reports/pending/' },
      { id: 'performance', label: 'Performance statistics', link: '/reports/performance/' },
    ],
  },
  {
    id: 'rebates',
    label: 'Rebates',
    icon: RebatesIcon,
    link: '/rebates/approve',
    isCollapsible: false,
  },
  {
    id: 'promo',
    label: 'Promo',
    icon: PromoIcon,
    isCollapsible: true,
    subItems: [
      { id: 'promo-materials', label: 'Promo Materials', link: '/promo/materials/' },
      { id: 'registration-tools', label: 'Registration tools', link: '/promo/registration_tools/codes' },
      { id: 'exness-overview', label: 'Exness overview', link: 'https://ex.guide/4nJRiUJ', isExternal: true },
      { id: 'advertising-guidelines', label: 'Advertising guidelines', link: 'https://ex.guide/4fnsvmH', isExternal: true },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    icon: SupportIcon,
    isCollapsible: true,
    subItems: [
      { id: 'help-center', label: 'Help Center', link: 'https://ex.guide/46JuPCi', isExternal: true },
      { id: 'contacts', label: 'Contacts', link: '/support/' },
      { id: 'legal', label: 'Legal', link: '/support/legal' },
    ],
  },
];

const languageItem = {
  id: 'language',
  label: 'English',
  icon: LanguageIcon,
  isCollapsible: true,
  subItems: [
    { id: 'en', label: 'English', code: 'EN' },
    { id: 'ar', label: 'العربيّة', code: 'AR' },
    { id: 'bn', label: 'বাংলা', code: 'BN' },
    { id: 'es', label: 'Español', code: 'ES' },
    { id: 'fr', label: 'Français', code: 'FR' },
    { id: 'hi', label: 'हिन्दी', code: 'HI' },
    { id: 'id', label: 'Bahasa Indonesia', code: 'ID' },
    { id: 'ja', label: '日本語', code: 'JA' },
    { id: 'ko', label: '한국어', code: 'KO' },
    { id: 'pt', label: 'Portuguesa', code: 'PT' },
    { id: 'th', label: 'ภาษาไทย', code: 'TH' },
    { id: 'uz', label: "O'zbek", code: 'UZ' },
    { id: 'vi', label: 'Tiếng Việt', code: 'VI' },
    { id: 'zh', label: '简体中文', code: 'ZH' },
  ],
};

/**
 * Component for a single Menu Item or Sub-Menu Header.
 * Handles the display logic for both expanded and collapsed states.
 */
const SidebarItem = ({ item, isExpanded }) => {
  const location = useLocation();
  // Local state to manage the expansion of sub-menus
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(item.initialOpen || false);

  const Icon = item.icon;

  // Determine if this item or any of its sub-items are active
  const isActive = item.link === location.pathname || (item.subItems && item.subItems.some(sub => sub.link === location.pathname));

  // Base classes
  const baseClasses = "flex items-center p-2 rounded-md cursor-pointer transition-all duration-200 border";
  
  // Active state styling: Boxed look with border and background
  const activeClasses = isActive 
    ? "bg-[#eff2f5] border-[#dce1e7] text-[#151a30]" 
    : "border-transparent text-[#151a30] hover:bg-[#f3f4f6]";

  const iconClass = "text-[#889da9]";
  
  const expandedClasses = `${activeClasses}`;
  const collapsedClasses = `${activeClasses} justify-center`;

  // Toggles the sub-menu if the item is collapsible
  const handleClick = (e) => {
    if (item.isCollapsible) {
      e.preventDefault();
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };

  const HeaderContent = (
    <>
      {/* Icon (always visible) */}
      <Icon className={`w-5 h-5 ${iconClass} ${isExpanded ? 'mr-3' : ''}`} />

      {isExpanded && (
        <>
          {/* Label (only visible when expanded) */}
          <span className={`flex-1 whitespace-nowrap text-[15px] font-normal`}>
            {item.label}
          </span>

          {/* 'New' Tag */}
          {item.isNew && (
            <span className="text-[10px] bg-[#ff4d4f] text-white px-1.5 py-0.5 rounded ml-auto font-bold uppercase tracking-wide">
              New
            </span>
          )}

          {/* Chevron for collapsible items */}
          {item.isCollapsible && (
            <div className="ml-auto transition-transform duration-200">
              {isSubMenuOpen ? <ChevronUp className="w-4 h-4 text-[#889da9]" /> : <ChevronDown className="w-4 h-4 text-[#889da9]" />}
            </div>
          )}
        </>
      )}
    </>
  );

  const renderHeader = () => {
    const className = `${baseClasses} ${isExpanded ? expandedClasses : collapsedClasses} ${item.subItems?.length === 0 ? 'mb-1' : ''}`;
    
    if (item.isCollapsible) {
      return (
        <div className={className} onClick={handleClick}>
          {HeaderContent}
        </div>
      );
    }

    if (item.link) {
      if (item.isExternal) {
        return (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className={`block w-full text-inherit no-underline ${className}`}>
            {HeaderContent}
          </a>
        );
      }
      return (
        <Link to={item.link} className={`block w-full text-inherit no-underline ${className}`}>
          {HeaderContent}
        </Link>
      );
    }

    return (
      <div className={className}>
        {HeaderContent}
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Menu Item Header */}
      {renderHeader()}

      {/* Sub-Items (only rendered when expanded and sub-menu is open) */}
      {isExpanded && item.subItems && isSubMenuOpen && (
        <div className="space-y-0.5 mt-1">
          {item.subItems.map((subItem) => {
            const isSubActive = subItem.link === location.pathname;
            const subTextClass = isSubActive ? "text-[#151a30] font-medium" : "text-[#151a30] font-normal";
            const subBgClass = isSubActive ? "bg-[#eff2f5]" : "hover:bg-[#f3f4f6]";

            const content = (
              <div className={`flex items-center justify-between pl-11 pr-3 py-2 rounded-md cursor-pointer text-sm transition-colors duration-200 ${subBgClass}`}>
                <div className={`flex items-center ${subTextClass}`}>
                  {subItem.label}
                  {subItem.isNew && (
                    <span className="text-[10px] bg-[#ff4d4f] text-white px-1.5 py-0.5 rounded ml-2 font-bold uppercase tracking-wide">
                      New
                    </span>
                  )}
                  {subItem.isExternal && <ExternalLink className="w-3 h-3 ml-2 inline-block align-text-bottom text-[#889da9]" />}
                </div>
                {subItem.code && (
                  <span className="text-xs text-[#889da9] font-medium">{subItem.code}</span>
                )}
              </div>
            );

            if (subItem.link) {
               if (subItem.isExternal) {
                 return (
                   <a key={subItem.id} href={subItem.link} target="_blank" rel="noopener noreferrer" className="block w-full no-underline">
                     {content}
                   </a>
                 );
               }
               return (
                 <Link key={subItem.id} to={subItem.link} className="block w-full no-underline">
                   {content}
                 </Link>
               );
            }
            
            return <div key={subItem.id}>{content}</div>;
          })}
        </div>
      )}
    </div>
  );
};

/**
 * The main Sidebar Component that manages its own expanded state.
 * It is designed to be the default export of this file.
 */
const Sidebar = ({ isExpanded, setIsExpanded, isMobileMenuOpen }) => {
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const widthClass = isExpanded ? 'w-[280px]' : 'w-[56px]';
  const controlLabel = isExpanded ? 'Collapse' : 'Expand';

  // Mobile classes: Fixed, full width, below topbar
  const mobileClasses = `fixed inset-0 top-[57px] z-40 w-full bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`;
  
  // Desktop classes: Flex item, controlled width
  const desktopClasses = `flex flex-col h-full bg-white border-r border-gray-200 transition-width duration-300 ease-in-out flex-shrink:0 ${widthClass}`;

  return (
    <div
      className={`${mobileClasses} md:flex md:flex-col md:h-full md:bg-white md:border-r md:border-gray-200 md:transition-width md:duration-300 md:ease-in-out md:flex-shrink-0 ${isExpanded ? 'md:w-[280px]' : 'md:w-[56px]'}`}
      style={{ transitionProperty: 'width, transform' }}
    >
      {/* Scrollable Navigation Area */}
      <div className="flex-1 overflow-y-auto space-y-2 p-2">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.id} item={item} isExpanded={isExpanded || isMobileMenuOpen} />
        ))}
        
        {/* Divider */}
        <div className="my-2 border-t border-gray-200" />

        {/* Language Selector */}
        <SidebarItem item={languageItem} isExpanded={isExpanded || isMobileMenuOpen} />
      </div>

      {/* Collapse/Expand Control Button (Hidden on Mobile) */}
      <div className="mt-auto hidden md:block">
        <hr className="border-gray-200 w-full" />
        <div className="">
          <button
            onClick={toggleSidebar}
            title={controlLabel}
            className={`flex items-center w-full justify-center p-2 rounded-lg text-[#889da9] hover:bg-[#f3f4f6] transition-colors duration-200`}
          >
            <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-180'}`}>
              <ChevronsLeftIcon className="w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;