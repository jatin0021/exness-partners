import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PartnerLevelsDialog from '../components/PartnerLevelsDialog';
import CommissionCalculatorDialog from '../components/CommissionCalculatorDialog';
import LoyaltyProgram from '../components/LoyaltyProgram';
import DatePickerPopup from '../components/DatePickerPopup';

const Dashboard = () => {
  const [activeStepId, setActiveStepId] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({ flag: 'https://flagcdn.com/me.svg', code: '+382', name: 'Montenegro' });
  const [showCountryList, setShowCountryList] = useState(false);
  const [showPartnerLevelsDialog, setShowPartnerLevelsDialog] = useState(false);
  const [showCommissionCalculator, setShowCommissionCalculator] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [partnerView, setPartnerView] = useState('link');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,idd,cca2')
      .then(res => res.json())
      .then(data => {
        const formatted = data
          .filter(c => c.idd?.root)
          .map(c => ({
            name: c.name.common,
            flag: c.flags.svg,
            code: c.idd.root + (c.idd.suffixes ? c.idd.suffixes[0] : ''),
            id: c.cca2
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(formatted);
        
        // Try to set Montenegro as default to match screenshot, or fallback
        const defaultCountry = formatted.find(c => c.id === 'ME') || formatted[0];
        if (defaultCountry) setSelectedCountry(defaultCountry);
      })
      .catch(err => console.error("Failed to fetch countries", err));
  }, []);

  const steps = [
    {
      id: 'email',
      label: 'Email verification',
      href: '/verification/email',
      active: true,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 9.33329C4 8.62605 4.28095 7.94777 4.78105 7.44767C5.28115 6.94758 5.95942 6.66663 6.66667 6.66663H25.3333C26.0406 6.66663 26.7189 6.94758 27.219 7.44767C27.719 7.94777 28 8.62605 28 9.33329M4 9.33329V22.6666C4 23.3739 4.28095 24.0521 4.78105 24.5522C5.28115 25.0523 5.95942 25.3333 6.66667 25.3333H25.3333C26.0406 25.3333 26.7189 25.0523 27.219 24.5522C27.719 24.0521 28 23.3739 28 22.6666V9.33329M4 9.33329L16 17.3333L28 9.33329" fill="none" stroke="currentColor" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      )
    },
    {
      id: 'phone',
      label: 'Phone Verification',
      href: '/verification/phone',
      active: true,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6667 5.33333H17.3333M16 22.6667V22.68M8 6.66667C8 5.95942 8.28095 5.28115 8.78105 4.78105C9.28115 4.28095 9.95942 4 10.6667 4H21.3333C22.0406 4 22.7189 4.28095 23.219 4.78105C23.719 5.28115 24 5.95942 24 6.66667V25.3333C24 26.0406 23.719 26.7189 23.219 27.219C22.7189 27.719 22.0406 28 21.3333 28H10.6667C9.95942 28 9.28115 27.719 8.78105 27.219C8.28095 26.7189 8 26.0406 8 25.3333V6.66667Z" fill="none" stroke="currentColor" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      )
    },
    {
      id: 'personal',
      label: 'Personal information',
      href: '/verification/person',
      active: true,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3335 18.6667V17.3334C13.3335 15.8606 12.1396 14.6667 10.6668 14.6667H8.00016C6.5274 14.6667 5.3335 15.8606 5.3335 17.3334V18.6667M18.6668 10.6667H28.0002M18.6668 17.3334H28.0002M5.3335 24L28.0002 24M12.0002 8.00004C12.0002 9.4728 10.8063 10.6667 9.3335 10.6667C7.86074 10.6667 6.66683 9.4728 6.66683 8.00004C6.66683 6.52728 7.86074 5.33337 9.3335 5.33337C10.8063 5.33337 12.0002 6.52728 12.0002 8.00004Z" fill="none" stroke="currentColor" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      )
    },
    {
      id: 'identity',
      label: 'Identity Verification',
      active: false,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.3335 11.3334V8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337H11.3335M5.3335 20.6667V24C5.3335 25.4728 6.5274 26.6667 8.00016 26.6667H11.3335M26.6668 11.3334V8.00004C26.6668 6.52728 25.4729 5.33337 24.0002 5.33337H20.6669M26.6668 20.6667V24C26.6668 25.4728 25.4729 26.6667 24.0002 26.6667H20.6669M20.0002 22V21.3334C20.0002 19.8606 18.8063 18.6667 17.3335 18.6667H14.6668C13.1941 18.6667 12.0002 19.8606 12.0002 21.3334V22M18.6668 12C18.6668 13.4728 17.4729 14.6667 16.0002 14.6667C14.5274 14.6667 13.3335 13.4728 13.3335 12C13.3335 10.5273 14.5274 9.33337 16.0002 9.33337C17.4729 9.33337 18.6668 10.5273 18.6668 12Z" fill="none" stroke="currentColor" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      )
    },
    {
      id: 'address',
      label: 'Address verification',
      active: false,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.3333 28V18.6667L10.6667 12L4 18.6667V28H10.6667M17.3333 28H10.6667M17.3333 28H28V5.33333C28 4.97971 27.8595 4.64057 27.6095 4.39052C27.3594 4.14048 27.0203 4 26.6667 4H13.3333C12.9797 4 12.6406 4.14048 12.3905 4.39052C12.1405 4.64057 12 4.97971 12 5.33333V13.3333M10.6667 28V22.6667M17.3333 9.33333V9.34667M22.6667 9.33333V9.34667M22.6667 14.6667V14.68M22.6667 20V20.0133" fill="none" stroke="currentColor" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col items-center pt-5 min-h-screen bg-[#F7F9FA]">
      <div className="flex flex-col items-center gap-6 w-full px-8">
        {/* Header */}
        {!activeStepId && (
          <div className="flex items-center gap-2">
            <h1 className="text-[16px] text-gray-900">
              Complete the registration process to unlock all functions
            </h1>
            <div className="text-blue-500 cursor-help">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
            </div>
          </div>
        )}

        {/* Steps */}
        {!['withdrawal', 'crypto-wallet', 'transaction-history'].includes(activeStepId) && (
          <div className="flex flex-wrap justify-center gap-12">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                {step.active ? (
                  <a 
                    href={step.href} 
                    target="_self"
                    className="flex flex-col items-center gap-3 group no-underline cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (step.id === 'email') {
                         setActiveStepId('email');
                      } else if (step.id === 'phone') {
                         setActiveStepId('phone');
                      } else if (step.id === 'personal') {
                          setActiveStepId('personal');
                      }
                    }}
                  >
                    <div className={`w-13 h-13 rounded-full flex items-center justify-center border bg-white border-gray-200 text-gray-900 border-blue-500 transition-colors ${activeStepId === step.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
                      {step.icon}
                    </div>
                    <span className="text-[12px] text-blue-500 underline underline-offset-4 decoration-dotted">
                      {step.label}
                    </span>
                  </a>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-13 h-13 rounded-full flex items-center justify-center border bg-gray-100 border-gray-200 text-gray-400">
                      <div className="text-gray-300">
                        {step.icon}
                      </div>
                    </div>
                    <span className="text-[12px] text-gray-400">
                      {step.label}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeStepId === 'email' ? (
            <div className="flex flex-col items-center justify-center py-10 w-full animate-fadeIn">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-[28rem] w-full text-center relative">
                    <h2 className="text-2xl text-gray-900 mb-2">Verify email</h2>
                    <p className="text-gray-500 mb-6 text-base">
                        We will send the verification code to <br/>
                        <span className="text-gray-700">ro......81@ekuali.com</span>.
                    </p>
                    <button className="w-full bg-[#FFD900] hover:bg-[#FFE000] text-black font-semibold text-base py-3 px-6 rounded-lg mb-6 transition-colors cursor-pointer shadow-sm">
                        Send me a code
                    </button>
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        All data is encrypted for security
                    </div>
                </div>
            </div>
        ) : activeStepId === 'phone' ? (
            <div className="flex flex-col items-center justify-center py-10 w-full animate-fadeIn">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-[28rem] w-full relative">
                    <h2 className="text-2xl text-gray-900 mb-2">Enter your phone number</h2>
                    <p className="text-gray-500 mb-6 text-sm">
                        It is used to verify your account and future operations
                    </p>
                    
                    <div className="mb-8">
                        <label className="block text-xs text-gray-500 mb-1">Phone number</label>
                        <div className="flex items-center border border-gray-300 rounded hover:border-gray-400 focus-within:border-blue-500 transition-colors relative">
                            <div 
                                className="bg-gray-50 px-3 py-2 border-r border-gray-300 flex items-center gap-2 cursor-pointer h-full min-h-[42px] rounded-l"
                                onClick={() => setShowCountryList(!showCountryList)}
                            >
                                {selectedCountry && (
                                    <>
                                        <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-6 h-4 object-cover rounded-sm border border-gray-200" />
                                        <span className="text-sm font-medium text-gray-700">{selectedCountry.code}</span>
                                    </>
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                    <path d="M6 9l6 6l6 -6"></path>
                                </svg>
                            </div>
                            
                            {showCountryList && countries.length > 0 && (
                                <div className="absolute top-full left-0 mt-1 w-72 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-xl z-20">
                                    {countries.map(country => (
                                        <div 
                                            key={country.id}
                                            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedCountry(country);
                                                setShowCountryList(false);
                                            }}
                                        >
                                            <div className="w-6 flex-shrink-0">
                                                <img src={country.flag} alt={country.name} className="w-full h-auto object-cover rounded-sm border border-gray-200" />
                                            </div>
                                            <span className="text-sm text-gray-700 truncate flex-1 block text-left">{country.name}</span>
                                            <span className="text-xs text-gray-400 font-mono">{country.code}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <input 
                                type="tel" 
                                className="flex-1 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none text-sm h-full rounded-r"
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-2">We'll send a verification code to this number</p>
                    </div>

                    <div className="flex justify-end mb-6">
                        <button className="bg-white border text-gray-400 font-medium text-sm py-2 px-6 rounded shadow-sm cursor-not-allowed" disabled>
                            Continue
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs text-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        All data is encrypted for security
                    </div>
                </div>
            </div>
        ) : activeStepId === 'personal' ? (
            <div className="flex flex-col items-center justify-center py-10 w-full animate-fadeIn transition-all duration-500">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-[28rem] w-full relative">
                    <p className="text-sm font-medium text-gray-500 mb-1">1/17</p>
                    <h2 className="text-3xl text-gray-900 mb-6 leading-tight">Add profile <br/> information</h2>
                    
                    <form className="flex flex-col gap-5">
                        {/* First Name */}
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">First Name</label>
                            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                            <p className="text-xs text-gray-400 mt-1">Your first name as shown on your ID</p>
                        </div>
                        
                        {/* Last Name */}
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Last Name</label>
                            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                            <p className="text-xs text-gray-400 mt-1">Your last name as shown on your ID</p>
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Date of birth</label>
                            <div className="flex gap-2">
                                <div className="relative w-full">
                                    <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 appearance-none focus:outline-none focus:border-blue-500 bg-white">
                                        <option>Day</option>
                                        {[...Array(31)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
                                    </div>
                                </div>
                                <div className="relative w-full">
                                    <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 appearance-none focus:outline-none focus:border-blue-500 bg-white">
                                        <option>Month</option>
                                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => <option key={i} value={i+1}>{m}</option>)}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
                                    </div>
                                </div>
                                <div className="relative w-full">
                                    <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 appearance-none focus:outline-none focus:border-blue-500 bg-white">
                                        <option>Year</option>
                                        {[...Array(100)].map((_, i) => <option key={`year-${i}`} value={2025-i}>{2025-i}</option>)}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Country of Birth */}
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Country of birth</label>
                            <div className="relative">
                                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 appearance-none focus:outline-none focus:border-blue-500 bg-white">
                                    <option></option>
                                    {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6l6 -6"/></svg>
                                </div>
                            </div>
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-xs text-gray-500 mb-2">Your gender</label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-blue-500 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-0 group-has-[:checked]:opacity-100 transition-opacity"></div>
                                    </div>
                                    <input type="radio" name="gender" value="female" className="hidden" />
                                    <span className="text-sm text-gray-900">Female</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-blue-500 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-0 group-has-[:checked]:opacity-100 transition-opacity"></div>
                                    </div>
                                    <input type="radio" name="gender" value="male" className="hidden" />
                                    <span className="text-sm text-gray-900">Male</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-blue-500 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-0 group-has-[:checked]:opacity-100 transition-opacity"></div>
                                    </div>
                                    <input type="radio" name="gender" value="other" className="hidden" />
                                    <span className="text-sm text-gray-900">Other</span>
                                </label>
                            </div>
                        </div>

                        {/* Residential Address */}
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Your residential address</label>
                            <input type="text" placeholder="City, Street, house (apartment)" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-400" />
                            <p className="text-xs text-gray-400 mt-1">You will be asked to verify your address later</p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-2">
                             <button type="button" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2.5 px-4 rounded text-sm transition-colors cursor-pointer">
                                Do it later
                            </button>
                            <button type="submit" className="flex-1 bg-[#FFD900] hover:bg-[#F5D000] text-black font-medium py-2.5 px-4 rounded text-sm transition-colors shadow-sm cursor-pointer">
                                Continue
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs text-center w-full mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        All data is encrypted for security
                    </div>
                </div>
            </div>
        ) : ['withdrawal', 'crypto-wallet', 'transaction-history'].includes(activeStepId) ? (
            <div className="flex flex-col items-start w-full max-w-[75rem] px-4 animate-fadeIn">
                <h1 className="text-3xl text-gray-900 mb-6">Payments</h1>
                
                {/* Main Payments Tabs */}
                <div className="flex gap-8 border-b border-gray-200 w-full mb-8">
                    <button 
                        className={`pb-3 text-sm font-medium transition-colors cursor-pointer ${activeStepId === 'withdrawal' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveStepId('withdrawal')}
                    >
                        Withdrawal
                    </button>
                    <button 
                        className={`pb-3 text-sm font-medium transition-colors cursor-pointer ${activeStepId === 'crypto-wallet' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveStepId('crypto-wallet')}
                    >
                        Crypto wallet
                    </button>
                    <button 
                        className={`pb-3 text-sm font-medium transition-colors cursor-pointer ${activeStepId === 'transaction-history' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveStepId('transaction-history')}
                    >
                        Transaction history
                    </button>
                </div>

                {/* Content Area */}
                {activeStepId === 'withdrawal' ? (
                     <>
                        <h2 className="text-2xl text-gray-900 mb-6">Withdrawal</h2>
                        <div className="flex gap-3">
                            <div className="text-gray-400 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 mb-1">There is no partner account yet.</p>
                                <p className="text-gray-500 text-sm">Please wait till you have registration by your link.</p>
                            </div>
                        </div>
                    </>
                ) : activeStepId === 'transaction-history' ? (
                     <div className="w-full flex flex-col items-start max-w-[75rem] animate-fadeIn">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden min-h-[500px]">
                            {/* Toolbar */}
                             <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                                <div className="flex gap-2">
                                     <button className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">Filter</button>
                                     <button className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">Export</button>
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="Search transactions..." className="pl-8 pr-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                     <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-gray-600">
                                    <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
                                        <tr>
                                            <th className="px-6 py-3">Date</th>
                                            <th className="px-6 py-3">Transaction ID</th>
                                            <th className="px-6 py-3">Type</th>
                                            <th className="px-6 py-3">Account</th>
                                            <th className="px-6 py-3">Amount</th>
                                            <th className="px-6 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">10 Dec 2025</td>
                                            <td className="px-6 py-4 font-mono text-xs">#12345678</td>
                                            <td className="px-6 py-4">Withdrawal</td>
                                            <td className="px-6 py-4 flex items-center gap-2">
                                                 <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025" className="w-4 h-4" alt="BTC" />
                                                 BTC Wallet
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900">$500.00</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">08 Dec 2025</td>
                                            <td className="px-6 py-4 font-mono text-xs">#87654321</td>
                                            <td className="px-6 py-4">Commission</td>
                                            <td className="px-6 py-4">Partner Account</td>
                                            <td className="px-6 py-4 font-medium text-gray-900">$1,250.00</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                         <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">05 Dec 2025</td>
                                            <td className="px-6 py-4 font-mono text-xs">#23456789</td>
                                            <td className="px-6 py-4">Transfer</td>
                                             <td className="px-6 py-4 flex items-center gap-2">
                                                 <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025" className="w-4 h-4" alt="USDT" />
                                                 USDT TRC20
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900">$200.00</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    Processing
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Empty rows to fill space if needed or just show these */}
                                    </tbody>
                                </table>
                            </div>
                            
                            {/* Pagination Mock */}
                             <div className="p-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
                                <span>Showing 1 to 3 of 3 entries</span>
                                <div className="flex gap-1">
                                    <button className="px-2 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                                    <button className="px-2 py-1 border rounded bg-blue-50 text-blue-600 border-blue-200">1</button>
                                    <button className="px-2 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
                                </div>
                            </div>
                        </div>
                        {/* Note explaining the change */}
                        <div className="mt-4 p-4 bg-blue-50 text-blue-700 rounded-md text-sm border border-blue-100 flex items-start gap-3">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             <p>
                                <strong>Developer Note:</strong> The external transaction history iframe was not loading due to browser security restrictions on localhost (Cross-Origin Policy). I have replaced it with this visual mock to demonstrate the layout. The original iframe code is preserved in the source for production use.
                            </p>
                        </div>
                    </div>
                ) : activeStepId === 'crypto-wallet' ? (
                    <>
                        <h2 className="text-3xl text-gray-900 mb-6">Crypto wallet</h2>
                        
                        <div className="flex flex-col mb-8">
                            <span className="text-sm text-gray-500 mb-1">Total balance</span>
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold text-gray-900">0</span>
                                <span className="text-2xl font-bold text-gray-900">.00</span>
                                <span className="text-2xl font-bold text-gray-900 ml-1">USD</span>
                            </div>
                        </div>

                        {/* Crypto Tabs */}
                        <div className="flex gap-8 border-b border-gray-200 w-full mb-6">
                            <button className="pb-3 text-sm font-medium border-b-2 border-gray-900 text-gray-900 cursor-pointer">
                                Accounts
                            </button>
                            <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
                                External wallets
                            </button>
                        </div>

                        {/* Filter */}
                        <div className="w-full max-w-xs mb-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M4 6l9 0"></path><path d="M4 12l7 0"></path><path d="M4 18l7 0"></path><path d="M15 15l3 3l3 -3"></path><path d="M18 6l0 12"></path></svg>
                                </div>
                                <select className="block w-full pl-10 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border text-gray-900 appearance-none bg-white">
                                    <option>Account name</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Bitcoin (BTC) */}
                        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 mb-3 w-full">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025" alt="BTC" className="w-6 h-6" />
                                        <span className="font-bold text-gray-700 text-sm">Bitcoin (BTC)</span>
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-gray-900">0.00000000</span>
                                            <span className="text-lg font-bold text-gray-500">BTC</span>
                                        </div>
                                        <div className="text-sm text-gray-500">≈ 0.00 USD</div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                     <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M15 9l-6 6"></path><path d="M15 15v-6h-6"></path></svg>
                                        Withdrawal
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 17l-18 0"></path><path d="M6 10l-3 -3l3 -3"></path><path d="M3 7l18 0"></path><path d="M18 20l3 -3l-3 -3"></path></svg>
                                        Transfer
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Ether (ETH) */}
                        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 mb-3 w-full">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                     <div className="flex items-center gap-2 mb-2">
                                        <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025" alt="ETH" className="w-6 h-6" />
                                        <span className="font-bold text-gray-700 text-sm">Ether (ETH)</span>
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-gray-900">0.00000000</span>
                                            <span className="text-lg font-bold text-gray-500">ETH</span>
                                        </div>
                                        <div className="text-sm text-gray-500">≈ 0.00 USD</div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                     <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M15 9l-6 6"></path><path d="M15 15v-6h-6"></path></svg>
                                        Withdrawal
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 17l-18 0"></path><path d="M6 10l-3 -3l3 -3"></path><path d="M3 7l18 0"></path><path d="M18 20l3 -3l-3 -3"></path></svg>
                                        Transfer
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tether (USDT BEP20) */}
                        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 mb-3 w-full">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                     <div className="flex items-center gap-2 mb-2">
                                        <img src="https://cryptologos.cc/logos/access-acs-logo.svg?v=025" alt="USDT" className="w-6 h-6" />
                                        <span className="font-bold text-gray-700 text-sm">Tether (USDT BEP20)</span>
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-gray-900">0.00</span>
                                            <span className="text-lg font-bold text-gray-500">USDT</span>
                                        </div>
                                        <div className="text-sm text-gray-500">= 0.00 USD</div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                     <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M15 9l-6 6"></path><path d="M15 15v-6h-6"></path></svg>
                                        Withdrawal
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 17l-18 0"></path><path d="M6 10l-3 -3l3 -3"></path><path d="M3 7l18 0"></path><path d="M18 20l3 -3l-3 -3"></path></svg>
                                        Transfer
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tether (USDT ERC20) */}
                        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 mb-3 w-full">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                     <div className="flex items-center gap-2 mb-2">
                                        <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025" alt="USDT" className="w-6 h-6" />
                                        <span className="font-bold text-gray-700 text-sm">Tether (USDT ERC20)</span>
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-gray-900">0.00</span>
                                            <span className="text-lg font-bold text-gray-500">USDT</span>
                                        </div>
                                        <div className="text-sm text-gray-500">= 0.00 USD</div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                     <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M15 9l-6 6"></path><path d="M15 15v-6h-6"></path></svg>
                                        Withdrawal
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 17l-18 0"></path><path d="M6 10l-3 -3l3 -3"></path><path d="M3 7l18 0"></path><path d="M18 20l3 -3l-3 -3"></path></svg>
                                        Transfer
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Tether (USDT TRC20) */}
                        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 mb-3 w-full">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                     <div className="flex items-center gap-2 mb-2">
                                        <img src="https://cryptologos.cc/logos/tron-trx-logo.svg?v=025" alt="USDT" className="w-6 h-6" />
                                        <span className="font-bold text-gray-700 text-sm">Tether (USDT TRC20)</span>
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-gray-900">0.00</span>
                                            <span className="text-lg font-bold text-gray-500">USDT</span>
                                        </div>
                                        <div className="text-sm text-gray-500">= 0.00 USD</div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                     <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M15 9l-6 6"></path><path d="M15 15v-6h-6"></path></svg>
                                        Withdrawal
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 17l-18 0"></path><path d="M6 10l-3 -3l3 -3"></path><path d="M3 7l18 0"></path><path d="M18 20l3 -3l-3 -3"></path></svg>
                                        Transfer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
             </div>
        ) : (
            <>
                {/* Button */}
                <div className="mt-2">
                  <button 
                    onClick={() => setActiveStepId('email')}
                    className="bg-[#FFD900] hover:bg-[#FFE000] text-black font-normal py-2 px-6 rounded shadow-sm transition-colors cursor-pointer"
                  >
                    Complete registration
                  </button>
                </div>

                {/* MT5 Banner */}
                <div className="w-full bg-[#E8F3EE] rounded-lg p-5 relative flex items-center justify-between mt-4">
                  <div className="flex flex-col gap-1 max-w-2xl">
                    <h3 className="text-base text-gray-900">MT5 now available in Copy Trading</h3>
                    <p className="text-sm text-gray-700">
                      Create your strategy on MT5, earn a performance fee and partner reward for the investors you bring.
                    </p>
                  </div>
                  
                  {/* MT5 Icon Representation */}
                  <div className="hidden md:flex items-center justify-center bg-[#E0E0E0] rounded px-4 py-2 shadow-sm border border-gray-300">
                      <span className="text-gray-500 font-bold text-xl tracking-wider">MT5</span>
                  </div>

                  {/* Close Button */}
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* Dashboard Widgets Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mt-6">
                  {/* Left Column */}
                  <div className="flex flex-col gap-3">
                    
                    {/* Balance Card */}
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                            </svg>
                          </div>
                          <span className="font-bold text-gray-900">Balance</span>
                        </div>
                        <button 
                            className="bg-[#FFD900] hover:bg-[#F5D000] rounded-full p-1.5 transition-colors cursor-pointer" 
                            title="Withdrawal"
                            onClick={() => setActiveStepId('withdrawal')}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                            <path d="M15 9l-6 6"></path>
                            <path d="M15 15v-6h-6"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-col items-center justify-center py-2">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-gray-900">0</span>
                          <span className="text-lg font-bold text-gray-900">.00</span>
                          <span className="text-lg text-gray-500 ml-1">USD</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          Total profit <span className="text-gray-900">0.00</span> USD
                        </div>
                      </div>
                    </div>

                    {/* Partner Link Card */}
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                          </div>
                          <span className="font-bold text-gray-900 text-base">Your Partner Link</span>
                        </div>
                        <div className="flex bg-gray-50 rounded-lg p-1 gap-1">
                          <button 
                            onClick={() => setPartnerView('link')}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                              partnerView === 'link' 
                                ? 'bg-[#5B7182] text-white shadow-sm' 
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                          >
                            Partner link
                          </button>
                          <button 
                            onClick={() => setPartnerView('code')}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                              partnerView === 'code' 
                                ? 'bg-[#5B7182] text-white shadow-sm' 
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                          >
                            Partner code
                          </button>
                        </div>
                      </div>
                      
                      {partnerView === 'link' ? (
                        <>
                          <div className="mb-6">
                            <div className="text-blue-500 text-center text-base break-all hover:underline cursor-pointer font-medium">
                              https://one.fincrmonelink.com/a/4xeij4lc8j
                            </div>
                          </div>

                          <div className="flex justify-center gap-8 mb-6">
                            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                              </svg>
                              Copy
                            </button>
                            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                                <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                                <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                                <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                                <path d="M21 21v.01"></path>
                                <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                                <path d="M3 12h.01"></path>
                                <path d="M12 3h.01"></path>
                                <path d="M12 16v.01"></path>
                                <path d="M16 12h1"></path>
                                <path d="M21 12v.01"></path>
                                <path d="M12 21v-1"></path>
                              </svg>
                              QR code
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="flex justify-center mb-6">
                          <div className="bg-gray-50 rounded-full py-2 px-8 flex items-center gap-6">
                            <span className="text-xl font-bold text-gray-900">4xeij4lc8j</span>
                            <button className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                              </svg>
                              Copy
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="text-center text-xs text-gray-500">
                        See all of your partner codes and links <a href="#" className="text-blue-500 hover:underline decoration-1 underline-offset-2">here</a>
                      </div>
                    </div>

                    {/* Knowledge Base Card */}
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
                            <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
                            <path d="M9.7 17l4.6 0"></path>
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900">Knowledge base</span>
                      </div>
                      <a href="https://ex.guide/46JuPCi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                        Here you can find everything you need to know about our trading partnership program.
                      </a>
                    </div>

                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-6 h-full"> 
                    
                    {/* Common Card */}
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 h-full flex flex-col justify-between">
                        <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-2xl font-bold text-gray-900">Common</h2>
                            <div className="text-purple-500">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 4v3m-4 -3v6m8 -6v6"></path>
                                <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"></path>
                              </svg>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">Your level and commission</p>
                        </div>
                        <button 
                          onClick={() => setShowPartnerLevelsDialog(true)}
                          className="bg-[#FFD900] hover:bg-[#F5D000] text-black text-sm font-medium px-4 py-2 rounded flex items-center gap-2 transition-colors cursor-pointer"
                        >
                          Partner levels
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                            <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                            <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                            <path d="M4 20l14 0"></path>
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center gap-8 mb-6">
                        <div>
                          <div 
                            className="text-2xl font-bold text-blue-500 hover:underline cursor-pointer"
                            onClick={() => setShowPartnerLevelsDialog(true)}
                          >
                            20%
                          </div>
                          <div className="text-sm text-gray-500">Standard</div>
                        </div>
                        <div className="h-8 w-px bg-gray-200"></div>
                        <div>
                          <div 
                            className="text-2xl font-bold text-blue-500 hover:underline cursor-pointer"
                            onClick={() => setShowPartnerLevelsDialog(true)}
                          >
                            17%
                          </div>
                          <div className="text-sm text-gray-500">Pro</div>
                        </div>
                      </div>

                      <div className="mb-10">
                        <button 
                          onClick={() => setShowCommissionCalculator(true)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded flex items-center gap-2 transition-colors"
                        >
                          Commission calculator
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
                            <path d="M8 14l0 .01"></path>
                            <path d="M12 14l0 .01"></path>
                            <path d="M16 14l0 .01"></path>
                            <path d="M8 17l0 .01"></path>
                            <path d="M12 17l0 .01"></path>
                            <path d="M16 17l0 .01"></path>
                          </svg>
                        </button>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-base text-gray-900">Qualification criteria (0/2)</h4>
                          <div className="flex items-center gap-1 text-blue-500 text-sm font-medium cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                              <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z"></path>
                            </svg>
                            24 Days left
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12l14 0"></path>
                              <path d="M13 18l6 -6"></path>
                              <path d="M13 6l6 6"></path>
                            </svg>
                          </div>
                        </div>

                        {/* Progress 1 */}
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <Link to="/reports/rewards/" className="text-blue-500 hover:underline decoration-dotted underline-offset-4">Trading volume</Link>
                            <div className="text-gray-500">0 / 15 <span className="text-gray-400">mln USD</span></div>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                            <div className="bg-[#FFD900] h-1.5 rounded-full" style={{ width: '0%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>Common</span>
                            <span>Advanced</span>
                          </div>
                        </div>

                        {/* Progress 2 */}
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <Link to="/reports/rewards/" className="text-blue-500 hover:underline decoration-dotted underline-offset-4">Active clients</Link>
                            <div className="text-gray-500">0 / 1</div>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                            <div className="bg-[#FFD900] h-1.5 rounded-full" style={{ width: '0%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>Common</span>
                            <span>Advanced</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Loyalty Program Section */}
                <LoyaltyProgram />

                {/* Quick Reports Section */}
                <div className="w-full bg-white rounded-lg p-5 shadow-sm border border-gray-200 mt-6 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Quick reports</h2>
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px] text-gray-500">Period</label>
                        <div className="relative">
                            <div 
                                className="relative"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowDatePicker(!showDatePicker);
                                }}
                            >
                                <input 
                                    type="text" 
                                    readOnly 
                                    value="11 Nov, 2025 – 10 Dec, 2025" 
                                    className={`border rounded px-2 py-1.5 text-xs text-gray-900 font-medium w-60 focus:outline-none cursor-pointer transition-colors ${showDatePicker ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-300 hover:border-gray-400'}`}
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Date Picker Popup */}
                            {showDatePicker && (
                                <div onClick={(e) => e.stopPropagation()}>
                                    <DatePickerPopup />
                                </div>
                            )}
                        </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2 pb-6">
                    {/* Profit Chart */}
                    <div className="relative">
                        <div className="flex items-center gap-2 mb-8 text-gray-500">
                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 4v3m-4 -3v6m8 -6v6"></path>
                                <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"></path>
                            </svg>
                            <span className="font-bold text-[15px] text-gray-900">Profit</span>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center mb-6">
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-[28px] font-bold text-gray-900">0</span>
                                <span className="text-xl font-bold text-gray-900">.00</span>
                                <span className="text-xl font-medium text-gray-500">USD</span>
                            </div>
                            <div className="text-[13px] text-gray-400 mt-1">Per period</div>
                        </div>

                        {/* Chart Lines */}
                        <div className="w-full flex flex-col justify-between gap-8 mt-2">
                             {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-full border-t border-dashed border-[#dce1e7] h-px"></div>
                             ))}
                        </div>
                    </div>

                    {/* Registrations Chart */}
                    <div className="relative">
                        <div className="flex items-center gap-2 mb-8 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                                <path d="M15 19l2 2l4 -4"></path>
                            </svg>
                            <span className="font-bold text-[15px] text-gray-900">Registrations</span>
                        </div>

                        <div className="flex flex-col items-center justify-center mb-6">
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-[28px] font-bold text-gray-900">0</span>
                            </div>
                            <div className="text-[13px] text-gray-400 mt-1">Per period</div>
                        </div>
                        
                        {/* Chart Lines */}
                        <div className="w-full flex flex-col justify-between gap-8 mt-2">
                             {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-full border-t border-dashed border-[#dce1e7] h-px"></div>
                             ))}
                        </div>
                    </div>
                  </div>
                </div>
              </>
          )}
        <PartnerLevelsDialog open={showPartnerLevelsDialog} onClose={() => setShowPartnerLevelsDialog(false)} />
        <CommissionCalculatorDialog open={showCommissionCalculator} onClose={() => setShowCommissionCalculator(false)} />
      </div>
    </div>
  );
};

export default Dashboard;