import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronsLeft,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  LayoutDashboard,
  Presentation,
  Percent,
  Megaphone,
  Headset,
  Globe,
} from 'lucide-react';

// --- Data Structure for Sidebar Navigation ---
const sidebarItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    link: '/dashboard',
    isCollapsible: false,
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: Presentation,
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
    icon: Percent,
    link: '/rebates/approve',
    isCollapsible: false,
  },
  {
    id: 'promo',
    label: 'Promo',
    icon: Megaphone,
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
    icon: Headset,
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
  icon: Globe,
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

  const baseClasses = "flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors duration-200";
  // Updated colors to match request: Darker text, specific gray for icons, light gray hover
  const textClass = isActive ? "text-[#151a30] font-semibold" : "text-[#151a30] font-medium";
  const iconClass = isActive ? "text-[#151a30]" : "text-[#687182]";
  const bgClass = isActive ? "bg-[#f3f4f6]" : "hover:bg-[#f3f4f6]";
  
  const expandedClasses = `${bgClass}`;
  const collapsedClasses = `${bgClass} justify-center`;

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
      <Icon className={`w-6 h-6 ${iconClass} ${isExpanded ? 'mr-3' : ''}`} />

      {isExpanded && (
        <>
          {/* Label (only visible when expanded) */}
          <span className={`flex-1 whitespace-nowrap text-[15px] ${textClass}`}>
            {item.label}
          </span>

          {/* 'New' Tag - Updated to solid red */}
          {item.isNew && (
            <span className="text-[10px] bg-[#ff4d4f] text-white px-1.5 py-0.5 rounded ml-auto font-bold uppercase tracking-wide">
              New
            </span>
          )}

          {/* Chevron for collapsible items */}
          {item.isCollapsible && (
            <div className="ml-auto transition-transform duration-200">
              {isSubMenuOpen ? <ChevronUp className="w-4 h-4 text-[#687182]" /> : <ChevronDown className="w-4 h-4 text-[#687182]" />}
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
        <div className="pl-4 pr-1 py-1 space-y-1 ml-3">
          {item.subItems.map((subItem) => {
            const isSubActive = subItem.link === location.pathname;
            const subTextClass = isSubActive ? "text-[#151a30] font-semibold" : "text-[#151a30] font-medium";
            const subBgClass = isSubActive ? "bg-[#f3f4f6]" : "hover:bg-[#f3f4f6]";

            const content = (
              <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-[14px] transition-colors duration-200 ${subBgClass}`}>
                <div className={`flex items-center ${subTextClass}`}>
                  {subItem.label}
                  {subItem.isNew && (
                    <span className="text-[10px] bg-[#ff4d4f] text-white px-1.5 py-0.5 rounded ml-2 font-bold uppercase tracking-wide">
                      New
                    </span>
                  )}
                  {subItem.isExternal && <ExternalLink className="w-3 h-3 ml-2 inline-block align-text-bottom text-[#687182]" />}
                </div>
                {subItem.code && (
                  <span className="text-xs text-[#687182] font-medium">{subItem.code}</span>
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
const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  // Updated width to 280px (w-[280px]) as requested for "given code" match
  const widthClass = isExpanded ? 'w-[280px]' : 'w-20';
  const controlLabel = isExpanded ? 'Collapse' : 'Expand';

  return (
    <div
      className={`flex flex-col h-[calc(90vh-1px)] bg-white border-r border-gray-200 transition-width duration-300 ease-in-out flex-shrink:0 ${widthClass}`}
      style={{ transitionProperty: 'width' }}
    >
      {/* Scrollable Navigation Area */}
      <div className={`flex-1 overflow-y-auto p-4 space-y-2 h-[70%] ${isExpanded ? 'pr-2' : 'p-3'}`}>
        {sidebarItems.map((item) => (
          <SidebarItem key={item.id} item={item} isExpanded={isExpanded} />
        ))}
        
        {/* Divider */}
        <div className="my-2 border-t border-gray-200" />

        {/* Language Selector */}
        <SidebarItem item={languageItem} isExpanded={isExpanded} />
      </div>

      {/* Collapse/Expand Control Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={toggleSidebar}
          title={controlLabel}
          className={`flex items-center w-full p-2 rounded-lg text-[#687182] hover:bg-[#f3f4f6] transition-colors duration-200 ${isExpanded ? 'justify-start' : 'justify-center'}`}
        >
          <div className={`p-1 rounded-full bg-gray-50 transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-180'}`}>
            {/* The ChevronsLeft icon is used for the control button, and we rotate it for the expanded state */}
            <ChevronsLeft className="w-5 h-5" />
          </div>
          {isExpanded && <span className="ml-3 text-sm font-medium text-[#151a30]">{controlLabel}</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;