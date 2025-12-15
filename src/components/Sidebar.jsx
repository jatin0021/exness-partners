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

// --- Admin Icons ---
const IBDashboardIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);
const IBOverviewIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const IBRequestsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
);
const IBProfilesIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const TradersProfileIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const GroupsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
);
const CommissionStructuresIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
);
const AllSymbolsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
);
const SymbolsPipValuesIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
);
const IBWithdrawalsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
);
const WithdrawalHistoryIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const ClientLinkingIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
);
const CommissionDistributionIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
);
const ClaimedRewardsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
);
const IBReportsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
);

// --- Data Structure for Sidebar Navigation ---
const sidebarItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    link: '/',
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
      { id: 'fincrm-overview', label: 'FINCRM overview', link: 'https://ex.guide/4nJRiUJ', isExternal: true },
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

const adminSidebarItems = [
  { id: 'ib-dashboard', label: 'IB Dashboard', icon: IBDashboardIcon, link: '/admin', isCollapsible: false },
  { id: 'ib-overview', label: 'IB Overview', icon: IBOverviewIcon, link: '/admin/ib-management', isCollapsible: false },
  { id: 'ib-requests', label: 'IB Requests', icon: IBRequestsIcon, link: '/admin/ib-management/requests', isCollapsible: false },
  { id: 'ib-profiles', label: 'IB Profiles', icon: IBProfilesIcon, link: '/admin/ib-management/profiles', isCollapsible: false },
  { id: 'traders-profile', label: 'Traders Profile', icon: TradersProfileIcon, link: '/admin/ib-management/traders', isCollapsible: false },
  { id: 'groups', label: 'Groups', icon: GroupsIcon, link: '/admin/ib-management/commissions', isCollapsible: false },
  { id: 'commission-structures', label: 'Commission Structures', icon: CommissionStructuresIcon, link: '/admin/ib-management/commission-structures', isCollapsible: false },
  { id: 'all-symbols', label: 'All Symbols', icon: AllSymbolsIcon, link: '/admin/ib-management/all-symbols', isCollapsible: false },
  { id: 'symbols-pip-values', label: 'Symbols & Pip Values', icon: SymbolsPipValuesIcon, link: '/admin/trading-management/symbols', isCollapsible: false },
  { id: 'ib-withdrawals', label: 'IB Withdrawals', icon: IBWithdrawalsIcon, link: '/admin/trading-management/ib-withdrawals', isCollapsible: false },
  { id: 'withdrawal-history', label: 'Withdrawal History', icon: WithdrawalHistoryIcon, link: '/admin/reports/withdrawal-history', isCollapsible: false },
  { id: 'client-linking', label: 'Client Linking', icon: ClientLinkingIcon, link: '/admin/trading-management/client-linking', isCollapsible: false },
  { id: 'trading-groups', label: 'Trading Groups', icon: GroupsIcon, link: '/admin/group-management/trading-groups', isCollapsible: false },
  { id: 'commission-distribution', label: 'Commission Distribution', icon: CommissionDistributionIcon, link: '/admin/group-management/commission-distribution', isCollapsible: false },
  { id: 'claimed-rewards', label: 'Claimed Rewards', icon: ClaimedRewardsIcon, link: '/admin/rewards/claims', isCollapsible: false },
  { id: 'ib-reports', label: 'IB Reports', icon: IBReportsIcon, link: '/admin/ib-reports', isCollapsible: false },
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
const SidebarItem = ({ item, isExpanded, isOpen, onToggle }) => {
  const location = useLocation();
  
  const Icon = item.icon;

  // Determine if this item or any of its sub-items are active
  const isActive = item.link === location.pathname || (item.subItems && item.subItems.some(sub => sub.link === location.pathname));

  // Base classes
  const baseClasses = "flex items-center p-2 rounded-md cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-400";
  
  // Active state styling: Boxed look with border and background
  const activeClasses = isActive 
    ? "bg-[#eff2f5] border-gray-400 text-[#151a30]" 
    : "text-[#151a30] hover:bg-[#f3f4f6]";

  const iconClass = "text-[#889da9]";
  
  const expandedClasses = `${activeClasses}`;
  const collapsedClasses = `${activeClasses} justify-center`;

  // Toggles the sub-menu if the item is collapsible
  const handleClick = (e) => {
    if (item.isCollapsible) {
      e.preventDefault();
      onToggle(item.id);
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
              {isOpen ? <ChevronUp className="w-4 h-4 text-[#889da9]" /> : <ChevronDown className="w-4 h-4 text-[#889da9]" />}
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
      {isExpanded && item.subItems && isOpen && (
        <div className="space-y-2 mt-2">
          {item.subItems.map((subItem) => {
            const isSubActive = subItem.link === location.pathname;
            const subTextClass = isSubActive ? "text-[#151a30] font-medium" : "text-[#151a30] font-normal";
            const subBgClass = isSubActive ? "bg-[#eff2f5] border-gray-400" : "hover:bg-[#f3f4f6]";

            const content = (
              <div className={`flex items-center justify-between pl-4 pr-3 py-2 ml-4 rounded-md cursor-pointer text-sm transition-colors duration-200 border border-transparent hover:border-gray-400 ${subBgClass}`}>
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
  const location = useLocation();
  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const [isHovered, setIsHovered] = useState(false);
  const showExpanded = isExpanded || isHovered;

  // Initialize open state based on active route
  const [openItemId, setOpenItemId] = useState(() => {
     // Check sidebarItems
     const currentItems = location.pathname.startsWith('/admin') ? adminSidebarItems : sidebarItems;
     const activeItem = currentItems.find(item =>  
       item.isCollapsible && (
         item.link === location.pathname || 
         (item.subItems && item.subItems.some(sub => sub.link === location.pathname))
       )
     );
     if (activeItem) return activeItem.id;
     
     // Check languageItem (less likely to be active by route, but consistent)
     if (languageItem.isCollapsible && languageItem.subItems && languageItem.subItems.some(sub => sub.link === location.pathname)) {
        return languageItem.id;
     }
     
     return null;
  });

  const handleItemToggle = (id) => {
    setOpenItemId(prev => prev === id ? null : id);
  };

  const controlLabel = isExpanded ? 'Collapse' : 'Expand';

  return (
    <>
      <div 
        className={`hidden md:block flex-shrink-0 transition-all duration-300 ease-in-out ${isExpanded ? 'w-[280px]' : 'w-[56px]'}`}
      />
      <div
        onMouseEnter={() => !isExpanded && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed inset-0 top-[57px] z-40 w-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex-shrink-0 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:flex md:flex-col 
          ${showExpanded ? 'md:w-[280px]' : 'md:w-[56px]'}`}
      >
      {/* Scrollable Navigation Area */}
      <div className={`flex-1 overflow-y-auto space-y-2 p-2 ${showExpanded ? 'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100' : 'no-scrollbar'}`}>
        {(location.pathname.startsWith('/admin') ? adminSidebarItems : sidebarItems).map((item) => (
          <SidebarItem 
            key={item.id} 
            item={item} 
            isExpanded={showExpanded || isMobileMenuOpen} 
            isOpen={openItemId === item.id}
            onToggle={handleItemToggle}
          />
        ))}
        
        {/* Divider */}
        <div className="my-2 border-t border-gray-200" />

        {/* Language Selector */}
        <SidebarItem 
            item={languageItem} 
            isExpanded={showExpanded || isMobileMenuOpen} 
            isOpen={openItemId === languageItem.id}
            onToggle={handleItemToggle}
        />
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
            {/* Rotate icon based on isExpanded (pinned state) or visual state? 
                User feedback implies confusion if state doesn't match visual.
                However, persistent pin state is clearer for the button action.
                We'll stick to 'isExpanded' to indicate the ACTION (Pin/Unpin). */}
            <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-180'}`}>
              <ChevronsLeftIcon className="w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;