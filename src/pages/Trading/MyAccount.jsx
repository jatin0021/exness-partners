import React, { useState } from 'react';
import {
  ChevronsUpDown,
  List,
  Grid3X3,
  Plus,
  ArrowRight,
  ChevronDown,
  EllipsisVertical,
  Briefcase,
  Copy,
  Pencil,
  Clock,
  RotateCcw, // Icon for Restore
  X, // Icon for closing the modal
  Mail, // For email confirmation step
  FileText, // For profile information step
  Smartphone, // For phone confirmation step
  Lock, // For security text
  DollarSign, // Placeholder for Spreads modal visual
  Zap, // Placeholder for Spreads modal visual
  Monitor, // For Trading Platform modal (Desktop)
  Globe, // For Trading Platform modal (Web)
  Repeat2, // For Transfer funds
  Scale, // For Adjust leverage
  User, // For Add/edit nickname
  Settings, // For Settings
  Eye, // For Set read-only access
  File, // For Manage your statements
  KeyRound, // For Change trading password
  Archive, // For Archive
  LogOut, // For Withdraw (used for log out, but suitable for 'leaving' funds)
} from 'lucide-react';

// --- Mock Data ---
const accountTabs = ['Real', 'Demo', 'Archived'];

const mockAccounts = {
  Real: [
    {
      id: 1,
      accountType: 'Standard',
      mt5Login: '#195927180',
      server: 'Exness-MT5Real11',
      balance: '0.00 USD',
      actualLeverage: '1:200',
      freeMargin: '0.00 USD',
      adjustLeverage: '1:200',
      equity: '0.00 USD',
      floatingPnL: '0.00 USD',
      platform: 'MT5',
    },
    // Duplicate mock account for demo purposes
    {
      id: 2,
      accountType: 'Pro',
      mt5Login: '#123456789',
      server: 'Exness-MT5Real12',
      balance: '1,500.00 USD',
      actualLeverage: '1:100',
      freeMargin: '1,450.00 USD',
      adjustLeverage: '1:100',
      equity: '1,500.00 USD',
      floatingPnL: '0.00 USD',
      platform: 'MT5',
    },
  ],
  Demo: [
    {
      id: 3,
      accountType: 'Standard',
      mt5Login: '#197953411',
      server: 'Exness-MT5Trial11',
      balance: '0.00 USD',
      actualLeverage: '1:2000',
      freeMargin: '0.00 USD',
      adjustLeverage: '1:2000',
      equity: '0.00 USD',
      floatingPnL: '0.00 USD',
      platform: 'MT5',
    },
    {
      id: 4,
      accountType: 'Zero',
      mt5Login: '#83067517',
      server: 'Exness-MT5Trial11',
      balance: '1,021.79 USD',
      actualLeverage: '1:2000',
      freeMargin: '1,021.79 USD',
      adjustLeverage: '1:2000',
      equity: '1,021.79 USD',
      floatingPnL: '0.00 USD',
      platform: 'MT5',
    },
  ],
  Archived: [
    { id: 5, accountType: 'Standard', mt5Login: '#196092361', balance: '0.00 USD', reason: 'Account archived due to inactivity' },
    { id: 6, accountType: 'Standard Cent', mt5Login: '#163047953', balance: '0.00 USC', reason: 'Account archived due to inactivity' },
    { id: 7, accountType: 'Zero', mt5Login: '#75060955', balance: '0.00 USD', reason: 'Account archived due to inactivity' },
    { id: 8, accountType: 'Standard', mt5Login: '#195971218', balance: '0.00 USD', reason: 'Account archived due to inactivity' },
  ]
};

// --- Modals Components (Reused from previous step) ---

/**
 * Change Trading Password Modal
 */
const ChangeTradingPasswordModal = ({ isOpen, onClose, mt5Login }) => {
  const [password, setPassword] = useState('');
  const passwordLength = password.length;

  if (!isOpen) return null;

  // Password requirements
  const requirements = [
    { label: 'Between 8-15 characters', check: passwordLength >= 8 && passwordLength <= 15 },
    { label: 'At least one upper and one lower case letter', check: /[a-z]/.test(password) && /[A-Z]/.test(password) },
    { label: 'At least one number', check: /\d/.test(password) },
    { label: 'At least one special character', check: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  const allRequirementsMet = requirements.every(req => req.check);

  // Helper to render password requirements list
  const RequirementItem = ({ label, check }) => (
    <li className={`flex items-center space-x-2 text-sm ${check ? 'text-green-600' : 'text-gray-500'}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${check ? 'bg-green-600' : 'bg-gray-400'}`}></span>
      <span>{label}</span>
    </li>
  );

  return (
    // Modal Backdrop
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center p-4">
      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 pb-4 flex justify-between items-start">
          <h3 className="text-xl font-extrabold text-gray-900">Change trading password</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (Input and Requirements) */}
        <div className="px-6 py-4 space-y-6">
          <p className="text-sm font-semibold text-gray-700">Account: <span className="text-gray-900">{mt5Login}</span></p>

          {/* Password Input Field */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
              placeholder="Enter new password"
              autoFocus
            />
            {/* Mock Eye Icon to show/hide password (for visual parity) */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
              <Eye className="w-5 h-5" />
            </div>
          </div>
          
          {/* Password Requirements */}
          <div className="space-y-2">
            <ul className="list-none p-0 space-y-1">
              <li className="flex justify-between items-start text-sm text-gray-500">
                {/* Length Requirement is handled slightly differently in the UI */}
                <span className={`flex items-center space-x-2 ${requirements[0].check ? 'text-green-600' : 'text-gray-500'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${requirements[0].check ? 'bg-green-600' : 'bg-gray-400'}`}></span>
                  <span>{requirements[0].label}</span>
                </span>
                <span className={`font-medium ${passwordLength > 15 ? 'text-red-500' : 'text-gray-900'}`}>{passwordLength}</span>
              </li>
              
              {/* Other requirements */}
              <RequirementItem label={requirements[1].label} check={requirements[1].check} />
              <RequirementItem label={requirements[2].label} check={requirements[2].check} />
              <RequirementItem label={requirements[3].label} check={requirements[3].check} />
            </ul>
          </div>
        </div>

        {/* Footer (Action Button) */}
        <div className="p-6 pt-4 bg-gray-50 flex justify-end border-t border-gray-100">
          <button 
            onClick={() => console.log('Password Changed!')}
            disabled={!allRequirementsMet}
            className={`px-6 py-3 rounded-lg text-base font-semibold transition-colors shadow-md ${
              allRequirementsMet
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};


/**
 * Spreads Strategy Modal (opens via "Pay less, keep more" banner)
 */
const SpreadsStrategyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Modal Backdrop
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center p-4">
      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 pb-4 flex justify-between items-start">
          <h3 className="text-xl font-extrabold text-gray-900">Power your strategy with the best spreads</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (Content) */}
        <div className="px-6 py-4 space-y-6 overflow-y-auto max-h-[60vh]">
          <p className="text-sm text-gray-600">
            Pricing can make or break a strategy. That's why you deserve the best.
          </p>
          
          <div className="space-y-3">
            <p className="font-semibold text-gray-800">Trade with:</p>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
              <li>The tightest and most stable spreads on gold and USOIL.</li>
              <li>The most stable spreads on EURUSD, GBPUSD, and USDJPY after high-impact news.</li>
              <li>4x more stable spreads on BTCUSD than the industry average.</li>
              <li>67% reduced spreads on ETHUSD.</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600">
            Verify our claims with full <a href="#" className="text-blue-600 hover:underline font-medium">data and disclosures</a>.
          </p>
          
          {/* Image Placeholder (Mimics the visual from the image) */}
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Mock background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 opacity-70"></div>
            {/* Mock icons for assets */}
            <DollarSign className="w-12 h-12 text-yellow-500 absolute top-4 left-4 transform rotate-12 opacity-50" />
            <Zap className="w-16 h-16 text-blue-500 absolute bottom-6 right-6 transform -rotate-12 opacity-50" />
            
            {/* Placeholder for the person/graph image */}
            <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-300">
                <p className="font-bold text-lg text-gray-800">Trading Performance</p>
                <p className="text-sm text-gray-500">Visual Placeholder</p>
            </div>
          </div>
        </div>

        {/* Footer (Action Button) */}
        <div className="p-6 pt-4 bg-gray-50 flex justify-end border-t border-gray-100">
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-base font-semibold hover:bg-yellow-500 transition-colors shadow-md">
            Trade
          </button>
        </div>
      </div>
    </div>
  );
};


/**
 * Trade Selection Modal
 */
const TradeSelectionModal = ({ isOpen, onClose, mt5Login, platform }) => {
  const [showOtherOptions, setShowOtherOptions] = useState(false);
  const [useAsDefault, setUseAsDefault] = useState(false);
  
  if (!isOpen) return null;

  // A helper component for each platform option
  const PlatformLink = ({ Icon, title, subtitle, onClick }) => (
    <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100">
      {/* Mocking the Exness Terminal Icon with a simple placeholder */}
      <div className="p-3 rounded-full bg-yellow-50 text-yellow-600">
        {Icon ? <Icon className="w-5 h-5" /> : (
            <span className="font-extrabold text-sm">Ex</span> // Mock Exness logo style
        )}
      </div>
      <div className="flex-1">
        <h4 className="text-base font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
      </div>
      <button
        onClick={onClick}
        className="text-gray-400 hover:text-gray-600 text-sm font-semibold flex items-center shrink-0"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );

  const handleTerminalClick = (terminalName) => {
    // In a real app, this would navigate the user to the respective terminal
    console.log(`Action: Go to ${terminalName}`);
    // onClose(); // Optionally close the modal after action
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 pb-4 flex justify-between items-start">
          <h3 className="text-xl font-extrabold text-gray-900">Trade</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (Platforms) */}
        <div className="p-6 pt-0 space-y-3 overflow-y-auto">
          
          {/* Option 1: Exness Terminal */}
          <PlatformLink
            title="Exness terminal"
            subtitle="Trade directly from your browser"
            onClick={() => handleTerminalClick('Exness terminal')}
          />

          {/* Option 2: MetaTrader 5 */}
          <PlatformLink
            // Using Monitor icon as a generic platform visual placeholder
            Icon={Monitor} 
            title={`${platform} Terminal`}
            subtitle="Download and install the MT5 platform"
            onClick={() => handleTerminalClick(platform + ' Terminal')}
          />

          {/* Other options toggle */}
          <div className="pt-2">
            <button 
              onClick={() => setShowOtherOptions(!showOtherOptions)}
              className="flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900"
            >
              Other options 
              <ChevronDown 
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${showOtherOptions ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </div>

          {/* Expanded Content (QR Code & Web Terminal) */}
          {showOtherOptions && (
            <div className="pt-4 pb-2 space-y-4 animate-in fade-in duration-300">
              <div className="text-center space-y-4">
                <p className="text-sm font-semibold text-gray-800">Get the Exness Trade app</p>
                
                {/* Mock QR Code Placeholder */}
                <div className="w-32 h-32 mx-auto bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center">
                   {/* Using Smartphone icon inside to represent the mobile app download */}
                  <Smartphone className="w-10 h-10 text-gray-500" />
                </div>
                
                <p className="text-sm text-gray-500">Or trade on</p>
                
                {/* MT5 WebTerminal Button */}
                <button 
                    onClick={() => handleTerminalClick('MT5 WebTerminal')}
                    className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                >
                    MT5 WebTerminal
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer (Default Terminal Checkbox) */}
        <div className="p-6 pt-0 border-t border-gray-100">
          <div className="flex items-start space-x-3">
            <input 
              id="default-terminal"
              type="checkbox"
              checked={useAsDefault}
              onChange={(e) => setUseAsDefault(e.target.checked)}
              className="mt-1 w-4 h-4 text-yellow-500 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500"
            />
            <label htmlFor="default-terminal" className="text-sm text-gray-700">
              Always use this terminal
              <p className="text-xs text-gray-500 mt-0.5">You can change this later in "Settings"</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};


/**
 * Verification Steps Modal
 */
const VerificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // A helper component for each step's structure
  const Step = ({ number, title, features, isActive = false }) => (
    <div className="relative flex">
      {/* Step Number and Connector Line */}
      <div className="flex flex-col items-center mr-4">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
          isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
        }`}>
          {number}
        </div>
        {/* Vertical line connecting steps (only for steps 1 and 2) */}
        {number < 3 && (
          <div className="flex-grow w-px bg-gray-300 ml-3.5 mt-1"></div>
        )}
      </div>

      {/* Step Content */}
      <div className="flex-1 pb-8">
        <h4 className={`text-base font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
          {title}
        </h4>
        <div className="text-sm text-gray-600 mt-1">
          <div className="font-medium mb-1">Features and Limits</div>
          <ul className="list-disc ml-5 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    // Modal Backdrop
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center p-4">
      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-100">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900">Verification steps</h3>
            <p className="text-sm text-gray-500 mt-1">This will take about 10 minutes</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (Steps) */}
        <div className="p-6 space-y-4 overflow-y-auto">
          <Step
            number={1}
            title="Confirm email and phone number"
            features={['Withdrawals']}
            isActive={true}
          />
          <Step
            number={2}
            title="Verify your identity"
            features={[
              'Deposits up to 10,000 USD',
              'Global and local payment methods',
              'Bank card and crypto payments',
              'Trading',
            ]}
          />
          <Step
            number={3}
            title="Verify residential address"
            features={['Unlimited deposits']}
          />
        </div>

        {/* Footer (Action Button) */}
        <div className="p-6 pt-4 bg-gray-50 flex justify-end">
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-base font-semibold hover:bg-yellow-500 transition-colors shadow-md">
            Start now
          </button>
        </div>
      </div>
    </div>
  );
};


/**
 * Contact Verification Modal
 */
const ContactVerificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // A helper component for each step's structure
  const ProfileStep = ({ Icon, title, description, isActive = false }) => (
    <div className="flex space-x-4 items-start pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
      <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h4 className={`text-base font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
          {title}
        </h4>
        <p className={`text-sm ${isActive ? 'text-gray-600' : 'text-gray-500'} mt-0.5`}>
          {description}
        </p>
      </div>
    </div>
  );

  return (
    // Modal Backdrop
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center p-4">
      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-100">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900">Verify your contact details</h3>
            <p className="text-sm text-gray-500 mt-1">This process takes less than 5 minutes</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (Steps) */}
        <div className="p-6 space-y-4 overflow-y-auto">
          <ProfileStep
            Icon={Mail}
            title="1. Confirm email address"
            description="ro-----81@ekuali.com" // Mock email address
            isActive={true}
          />
          <ProfileStep
            Icon={FileText}
            title="2. Add profile information"
            description="Get a more tailored experience"
          />
          <ProfileStep
            Icon={Smartphone}
            title="3. Confirm phone number"
            description="Make your account more secure"
          />
        </div>

        {/* Footer (Actions and Security Note) */}
        <div className="p-6 pt-4 bg-gray-50 flex flex-col items-center border-t border-gray-100">
          <div className="flex space-x-3 w-full justify-end">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-300 transition-colors"
            >
              Do it later
            </button>
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-base font-semibold hover:bg-yellow-500 transition-colors shadow-md">
              Get started now
            </button>
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-4">
            <Lock className="w-3 h-3 mr-1" />
            All data is encrypted for security
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Trading Hours Changes Modal
 */
const TradingHoursModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Modal Backdrop
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center p-4">
      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 pb-4 flex justify-between items-start">
          <h3 className="text-xl font-extrabold text-gray-900">Changes to trading hours</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (Content) */}
        <div className="px-6 py-4 space-y-6">
          <p className="text-sm text-gray-600">
            Temporary changes are scheduled between 26.11.2025 - 01.12.2025
          </p>
          
          {/* Image/Icon Placeholder (Mocked 3D clock from the image) */}
          <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            {/* Using a larger Clock icon with a background to mimic the visual style */}
            <div className="p-8 rounded-full bg-gray-200 text-gray-400 shadow-inner">
              <Clock className="w-16 h-16" />
            </div>
          </div>
        </div>

        {/* Footer (Action Button) */}
        <div className="p-6 pt-4 bg-gray-50 flex justify-end border-t border-gray-100">
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-base font-semibold hover:bg-yellow-500 transition-colors shadow-md">
            View changes
          </button>
        </div>
      </div>
    </div>
  );
};


/**
 * Account Dropdown Menu
 * This is the component that shows the menu items (Transfer funds, Adjust leverage, etc.)
 */
const AccountDropdownMenu = ({ account, isDemo, onPasswordChange, onClose }) => {
  
  // Action handler for "Change trading password"
  const handlePasswordChange = () => {
    onPasswordChange(account); // Pass the entire account object for context
    onClose();
  };

  // Define menu items based on the active account type (Real/Demo)
  const menuItems = [
    { label: 'Transfer funds', icon: Repeat2, hideForDemo: true, onClick: () => console.log('Transfer funds clicked') },
    { label: 'Adjust leverage', icon: Scale, onClick: () => console.log('Adjust leverage clicked') },
    { label: 'Add or edit nickname', icon: User, onClick: () => console.log('Add or edit nickname clicked') },
    { label: 'Settings', icon: Settings, onClick: () => console.log('Settings clicked') },
    { label: 'Set read-only access', icon: Eye, onClick: () => console.log('Set read-only access clicked') },
    { label: 'Manage your statements', icon: File, hideForDemo: true, onClick: () => console.log('Manage your statements clicked') },
    { label: 'Change trading password', icon: KeyRound, onClick: handlePasswordChange },
    { label: 'Archive', icon: Archive, onClick: () => console.log('Archive clicked') },
  ];

  return (
    <div className="absolute right-0 top-10 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 z-10 py-2 origin-top-right animate-in fade-in zoom-in-95">
      <ul className="divide-y divide-gray-50">
        {menuItems
          .filter(item => !isDemo || !item.hideForDemo) // Filter items if it's a Demo account
          .map((item) => (
            <li key={item.label}>
              <button
                onClick={item.onClick}
                className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <item.icon className="w-4 h-4 text-gray-500" />
                <span>{item.label}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};


/**
 * Account Summary Card 
 * The layout now switches between 'list' and 'grid' view modes.
 */
const AccountCard = ({ account, activeTab, viewMode, onTradeClick, onPasswordChange }) => {
  // Always keep details open in grid view, otherwise respect state
  const [isDetailsOpen, setIsDetailsOpen] = useState(true); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const isArchived = activeTab === 'Archived';
  const isDemo = activeTab === 'Demo';
  const isGridView = viewMode === 'grid';

  // Data for the summary statistics grid
  const statsList = [
    // Data tailored for the Grid View (vertical stack)
    { label: 'Number', value: account.mt5Login.replace('#', '') },
    { label: 'Platform', value: account.platform },
    { label: 'Type', value: account.accountType },
    { label: 'Server', value: account.server },
    { label: 'Free margin', value: account.freeMargin, hideInGrid: !isDemo && !isGridView }, // Only show in Grid for Real/Demo
    { label: 'Actual leverage', value: account.actualLeverage },
    { label: 'Adjust leverage', value: account.adjustLeverage },
    
    // Additional items for List View
    { label: 'Equity', value: account.equity, hideInGrid: true },
    { label: 'Floating P/L', value: account.floatingPnL, hideInGrid: true },
    { label: 'Platform', value: account.platform, hideInGrid: true },
  ].filter(stat => !isGridView || !stat.hideInGrid); // Filter stats based on view mode

  // Action buttons component
  const ActionButton = ({ Icon, label, primary = false, onClick = () => {} }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
        primary
          ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-md'
          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{label}</span>
    </button>
  );

  // Helper component for List View statistics display (side-by-side)
  const ListStatsGrid = ({ stats }) => {
    // We will render stats in pairs to mimic the side-by-side display
    const visibleStats = stats.filter(s => !s.hideInGrid);
    const pairs = [];
    for (let i = 0; i < visibleStats.length; i += 2) {
      pairs.push([visibleStats[i], visibleStats[i + 1]]);
    }

    const listGridStyle = `
      .list-stats-grid {
        display: grid;
        gap: 1rem 3rem; /* vertical and horizontal gap */
      }
      @media (min-width: 768px) { /* md breakpoint and up */
        .list-stats-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
    `;

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: listGridStyle }} />
        <div className="list-stats-grid">
          {pairs.map((pair, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {/* Left Column Item */}
              <div className="flex justify-between items-center pr-4">
                <div className="text-gray-500">{pair[0].label}</div>
                <div className="font-medium text-gray-800">{pair[0].value}</div>
              </div>
              {/* Right Column Item (if exists) */}
              {pair[1] && (
                <div className="flex justify-between items-center pl-4">
                  <div className="text-gray-500">{pair[1].label}</div>
                  <div className="font-medium text-gray-800">{pair[1].value}</div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </>
    );
  };

  // Helper component for Grid View statistics display (vertical stack)
  const GridStatsStack = ({ stats }) => (
    <div className="grid grid-cols-2 gap-4">
      {statsList
        .filter(s => ['Number', 'Platform', 'Type', 'Server', 'Free margin', 'Actual leverage', 'Adjust leverage'].includes(s.label))
        .map((stat) => (
          <div key={stat.label} className="flex flex-col space-y-1">
            <div className="text-gray-500 text-sm">{stat.label}</div>
            <div className="font-medium text-gray-800 text-base">{stat.value}</div>
          </div>
        ))}
    </div>
  );


  // Render Grid View
  if (isGridView && !isArchived) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col space-y-4">
        {/* Header - Top Row */}
        <div className="flex justify-between items-center">
          {/* Account Type/Login */}
          <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900">
            <span>{isDemo ? 'Demo' : 'Real'}</span>
            <span className="text-gray-400">|</span>
            <span>{account.accountType}</span>
          </div>

          {/* Ellipsis Menu Button - This is the button the user is asking about */}
          <div className="relative">
            <button
              title="More Options"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <EllipsisVertical className="w-5 h-5" />
            </button>
            {isMenuOpen && (
              <AccountDropdownMenu 
                account={account} 
                isDemo={isDemo} 
                onPasswordChange={onPasswordChange} 
                onClose={() => setIsMenuOpen(false)} 
              />
            )}
          </div>
        </div>

        {/* Balance */}
        <div className="text-3xl font-extrabold text-gray-900 pt-2">
          {account.balance}
        </div>

        {/* Detailed Stats in Grid Format */}
        <div className="pt-2 border-t border-gray-100">
          <GridStatsStack stats={statsList} />
        </div>
        
        {/* Footer Actions (Deposit/Withdraw/Trade) */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 space-x-3">
            <ActionButton label="Trade" primary Icon={ArrowRight} onClick={() => onTradeClick(account)} />
            {isDemo ? <ActionButton label="Set Balance" /> : <ActionButton label="Deposit" />}
        </div>
      </div>
    );
  }
  
  // Render Archived View (Always List-like, but simple)
  if (isArchived) {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 space-y-4">
          {/* Header and Toggle */}
          <div
            className="flex justify-between items-center"
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          >
            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900">
              <Briefcase className={`w-4 h-4 text-gray-500`} />
              <span>{isDemo ? 'Demo' : 'Real'}</span>
              <span className="text-gray-400">|</span>
              <span>MT5</span>
              <span className="text-gray-400">|</span>
              <span>{account.mt5Login}</span>
              <span className="text-gray-400">|</span>
              <span>{account.accountType}</span>
            </div>
            {/* Toggle is always visible but might not perform collapse for simple archived cards */}
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform ${isDetailsOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 border-t border-gray-100">
            <div className="text-xl font-extrabold text-gray-900 mb-2 sm:mb-0">
              {account.balance}
              <span className="ml-3 text-sm font-medium text-gray-500">
                {account.reason}
              </span>
            </div>
            <ActionButton label="Restore" primary Icon={RotateCcw} />
          </div>
        </div>
    );
  }

  // --- Default: Render List View (Real/Demo not Archived) ---
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 space-y-4">
      {/* Header and Toggle */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsDetailsOpen(!isDetailsOpen)}
      >
        <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900">
          <Briefcase className={`w-4 h-4 ${isArchived ? 'text-gray-500' : 'text-yellow-500'}`} />
          <span>{isDemo ? 'Demo' : 'Real'}</span>
          <span className="text-gray-400">|</span>
          <span>MT5</span>
          <span className="text-gray-400">|</span>
          <span>{account.mt5Login}</span>
          <span className="text-gray-400">|</span>
          <span>{account.accountType}</span>
        </div>
        {/* Toggle Icon */}
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${isDetailsOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {/* Conditional Content */}
      {isDetailsOpen && (
        <div className="space-y-6">
          {/* Balance and Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 border-t border-gray-100">
            <div className="text-3xl font-extrabold text-gray-900 mb-4 sm:mb-0">
              {account.balance}
            </div>
            <div className="flex space-x-3 relative">
              <ActionButton label="Trade" primary Icon={ArrowRight} onClick={() => onTradeClick(account)} />
              {isDemo ? <ActionButton label="Set Balance" /> : <ActionButton label="Deposit" />}
              {/* FIX: Corrected the JSX closing tag */}
              {!isDemo && <ActionButton label="Withdraw" />}
              
              {/* Ellipsis Menu Button */}
              <button
                title="More Options"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card collapse when clicking menu button
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 border border-gray-200"
              >
                <EllipsisVertical className="w-5 h-5" />
              </button>
              
              {/* Dropdown Menu */}
              {isMenuOpen && (
                <AccountDropdownMenu 
                  account={account} // Pass the account details
                  isDemo={isDemo} 
                  onPasswordChange={onPasswordChange} // Pass the new handler
                  onClose={() => setIsMenuOpen(false)} 
                />
              )}
            </div>
          </div>

          {/* Detailed Statistics Grid (List View Layout) */}
          <div className="text-sm border-t border-gray-100 pt-4">
            <ListStatsGrid stats={statsList} />
          </div>

          {/* Footer Metadata and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-2 sm:space-y-0">
            <div className="flex flex-wrap items-center space-x-4">
              <span>Server: {account.server}</span>
              <span>
                MT5 login: {account.mt5Login.replace('#', '')}
                <Copy className="w-3 h-3 ml-1 inline cursor-pointer hover:text-gray-700" title="Copy Login" />
              </span>
            </div>
            <button 
              onClick={() => onPasswordChange(account)} // Direct link handler
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
            >
              <Pencil className="w-4 h-4 mr-1" />
              Change trading password
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Main MyAccount Component
 */
const MyAccount = () => {
  // 'Real' is the default active tab
  const [activeTab, setActiveTab] = useState('Real');
  // State for view mode: 'list' (default, previous style) or 'grid' (new style)
  const [viewMode, setViewMode] = useState('list'); 
  
  // Modal states (omitted for brevity, maintained from previous steps)
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isTradingHoursModalOpen, setIsTradingHoursModalOpen] = useState(false);
  const [isSpreadsModalOpen, setIsSpreadsModalOpen] = useState(false);
  const [isTradeSelectionModalOpen, setIsTradeSelectionModalOpen] = useState(false);
  const [selectedAccountDetails, setSelectedAccountDetails] = useState(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordAccountDetails, setPasswordAccountDetails] = useState(null);

  // Handler for opening the Password Change Modal
  const handlePasswordChange = (account) => {
    setPasswordAccountDetails(account);
    setIsPasswordModalOpen(true);
  };


  // Handler for Trade button click in AccountCard
  const handleTradeClick = (account) => {
    setSelectedAccountDetails(account);
    setIsTradeSelectionModalOpen(true); // Open the new modal
  };

  // Get the accounts corresponding to the active tab
  const accountsToDisplay = mockAccounts[activeTab] || [];

  // Tab Item component
  const TabItem = ({ name }) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`pb-2 px-1 text-sm font-semibold transition-colors duration-200 ${
        activeTab === name
          ? 'text-gray-900 border-b-2 border-yellow-500'
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      {name}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Top Alert/Header Banner */}
      <div className="bg-yellow-50 border border-yellow-200 px-4 py-6  flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <p className="text-sm font-medium text-gray-800 mb-3 md:mb-0">
          👋 Hello. Fill in your account details to make your first deposit
        </p>
        <div className="flex space-x-3">
          <button
            onClick={() => setIsVerificationModalOpen(true)} // Toggles the Verification Modal
            className="text-sm font-medium text-gray-700 hover:underline bg-gray-300/50 px-2 rounded-md"
          >
            Learn more
          </button>
          <button
            onClick={() => setIsProfileModalOpen(true)} // Toggles the Contact Verification Modal
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm  hover:bg-yellow-500 transition-colors "
          >
            Complete profile
          </button>
        </div>
      </div>

      <div className='p-4 md:p-8 lg:p-12'>
        {/* 2. Info/Ad Banners */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Banner 1: Changes to trading hours - CLICKABLE */}
        <div 
          onClick={() => setIsTradingHoursModalOpen(true)} 
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold text-gray-800">Changes to trading hours</h3>
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
            <Clock className="w-6 h-6" />
          </div>
        </div>
        
        {/* Banner 2: Pay less, keep more - NOW CLICKABLE */}
        <div 
          onClick={() => setIsSpreadsModalOpen(true)} // Open the new modal
          className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-md flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Pay less, keep more</h3>
            <p className="text-sm text-gray-600">Trade with the best spreads on the market.</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <Briefcase className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* 3. My Accounts Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-900">My accounts</h2>
        <button className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 border border-gray-200 shadow-sm">
          <Plus className="w-5 h-5" />
          <span>Open account</span>
        </button>
      </div>

      {/* 4. Tab Navigation and Filter Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-gray-200">
        {/* Tabs */}
        <div className="flex space-x-6 mb-4 sm:mb-0">
          {accountTabs.map((tab) => (
            <TabItem key={tab} name={tab} />
          ))}
        </div>

        {/* Filters and View Controls */}
        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <button className="flex items-center space-x-1 bg-white px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span>Newest</span>
              <ChevronsUpDown className="w-3.5 h-3.5" />
            </button>
            {/* Dropdown Menu Placeholder */}
          </div>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 rounded-lg p-0.5 bg-white">
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'
              }`}
              title="List View"
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'
              }`}
              title="Grid View"
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 5. Account Cards List / Grid */}
      <div className={viewMode === 'list' ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'}>
        {accountsToDisplay.map((account) => (
          <AccountCard 
            key={account.id} 
            account={account} 
            activeTab={activeTab} 
            viewMode={viewMode} // Pass the view mode state
            onTradeClick={handleTradeClick} 
            onPasswordChange={handlePasswordChange} 
          />
        ))}
      </div>

      {/* 6. Modals */}
      <VerificationModal isOpen={isVerificationModalOpen} onClose={() => setIsVerificationModalOpen(false)} />
      <ContactVerificationModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
      <TradingHoursModal isOpen={isTradingHoursModalOpen} onClose={() => setIsTradingHoursModalOpen(false)} />
      <SpreadsStrategyModal isOpen={isSpreadsModalOpen} onClose={() => setIsSpreadsModalOpen(false)} />
      
      {/* Trade Selection Modal */}
      <TradeSelectionModal 
        isOpen={isTradeSelectionModalOpen} 
        onClose={() => setIsTradeSelectionModalOpen(false)} 
        mt5Login={selectedAccountDetails?.mt5Login || ''}
        platform={selectedAccountDetails?.platform || 'MT5'}
      />

      {/* Change Trading Password Modal */}
      <ChangeTradingPasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        mt5Login={passwordAccountDetails?.mt5Login || ''}
      />
      </div>
    </div>
  );
};

export default MyAccount;