import React from 'react';

const Dashboard = () => {
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
    <div className="flex flex-col items-center pt-5 h-full bg-[#F7F9FA]">
      <div className="flex flex-col items-center gap-8 w-full max-w-[75rem] px-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <h1 className="text-[16px] font-bold text-gray-900">
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

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              {step.active ? (
                <a 
                  href={step.href} 
                  target="_self"
                  className="flex flex-col items-center gap-3 group no-underline"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border bg-white border-gray-200 text-gray-900 group-hover:border-blue-500 transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-[12px] text-blue-500 hover:underline underline-offset-4 decoration-dotted">
                    {step.label}
                  </span>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border bg-gray-100 border-gray-200 text-gray-400">
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

        {/* Button */}
        <div className="mt-4">
          <button className="bg-[#FFD900] hover:bg-[#F5D000] text-black font-medium py-3 px-8 rounded shadow-sm transition-colors">
            Complete registration
          </button>
        </div>

        {/* MT5 Banner */}
        <div className="w-full bg-[#E8F3EE] rounded-lg p-6 relative flex items-center justify-between mt-4">
          <div className="flex flex-col gap-1 max-w-2xl">
            <h3 className="text-[16px] font-bold text-gray-900">MT5 now available in Copy Trading</h3>
            <p className="text-[14px] text-gray-700">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            
            {/* Balance Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                      <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">Balance</span>
                </div>
                <button className="bg-[#FFD900] hover:bg-[#F5D000] rounded-full p-1.5 transition-colors" title="Withdrawal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M15 9l-6 6"></path>
                    <path d="M15 15v-6h-6"></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">0</span>
                  <span className="text-xl font-bold text-gray-900">.00</span>
                  <span className="text-xl text-gray-500 ml-1">USD</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Total profit <span className="text-gray-900">0.00</span> USD
                </div>
              </div>
            </div>

            {/* Partner Link Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 15l6 -6"></path>
                      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
                      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">Your Partner Link</span>
                </div>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button className="px-3 py-1 text-sm font-medium bg-gray-600 text-white rounded-md shadow-sm">Partner link</button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-900">Partner code</button>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-500 text-center text-lg break-all hover:underline cursor-pointer">
                  https://one.exnessonelink.com/a/4xeij4lc8j
                </div>
              </div>

              <div className="flex justify-center gap-8 mb-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
                  </svg>
                  Copy
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <path d="M7 17l0 .01"></path>
                    <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <path d="M7 7l0 .01"></path>
                    <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <path d="M17 7l0 .01"></path>
                    <path d="M14 14l3 0"></path>
                    <path d="M20 14l0 .01"></path>
                    <path d="M14 14l0 3"></path>
                    <path d="M14 20l3 0"></path>
                    <path d="M17 17l3 0"></path>
                    <path d="M20 17l0 3"></path>
                  </svg>
                  QR code
                </button>
              </div>

              <div className="text-center text-sm text-gray-500">
                See all of your partner codes and links <a href="#" className="text-blue-500 hover:underline">here</a>
              </div>
            </div>

            {/* Knowledge Base Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
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
          <div className="flex flex-col gap-6">
            
            {/* Common Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex flex-col">
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
                <button className="bg-[#FFD900] hover:bg-[#F5D000] text-black text-sm font-medium px-4 py-2 rounded flex items-center gap-2 transition-colors">
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
                  <div className="text-2xl font-bold text-blue-500 hover:underline cursor-pointer">20%</div>
                  <div className="text-sm text-gray-500">Standard</div>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div>
                  <div className="text-2xl font-bold text-blue-500 hover:underline cursor-pointer">17%</div>
                  <div className="text-sm text-gray-500">Pro</div>
                </div>
              </div>

              <div className="mb-8">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded flex items-center gap-2 transition-colors">
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

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">Qualification criteria (0/2)</h4>
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
                    <a href="#" className="text-blue-500 hover:underline decoration-dotted underline-offset-4">Trading volume</a>
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
                    <a href="#" className="text-blue-500 hover:underline decoration-dotted underline-offset-4">Active clients</a>
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
        <div className="w-full bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">Loyalty Program</h2>
              <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-gray-200 bg-gray-50 text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Data is updated every 4 hours
              </div>
            </div>
            <button className="flex items-center gap-1 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">
              Show details
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6l6 -6"></path>
              </svg>
            </button>
          </div>

          <p className="text-gray-700 text-sm mb-8">
            Hit all three targets to claim your reward. You can choose to take the prize or receive a cash alternative.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Reward */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">$500 Cash</span>
            </div>

            {/* Targets */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-[#FF444F] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-700">0 out of 3 targets achieved</span>
            </div>
          </div>
        </div>

        {/* Quick Reports Section */}
        <div className="w-full bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Quick reports</h2>
            <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500">Period</label>
                <div className="relative">
                    <input 
                        type="text" 
                        readOnly 
                        value="09 Nov, 2025 – 08 Dec, 2025" 
                        className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 w-64 focus:outline-none focus:border-blue-500 cursor-pointer"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Profit Chart */}
            <div>
                <div className="flex items-center gap-2 mb-4 text-gray-500">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v3m-4 -3v6m8 -6v6"></path>
                        <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"></path>
                    </svg>
                    <span className="font-medium text-gray-900">Profit</span>
                </div>
                <div className="flex flex-col items-center justify-center py-6">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-gray-900">0</span>
                        <span className="text-xl font-bold text-gray-900">.00</span>
                        <span className="text-xl text-gray-500 ml-1">USD</span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">Per period</div>
                </div>
                {/* Chart Lines Placeholder */}
                <div className="w-full h-40 flex flex-col justify-between mt-4">
                     {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="w-full border-t border-dashed border-gray-200 h-0"></div>
                     ))}
                </div>
            </div>

            {/* Registrations Chart */}
            <div>
                <div className="flex items-center gap-2 mb-4 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                        <path d="M15 19l2 2l4 -4"></path>
                    </svg>
                    <span className="font-medium text-gray-900">Registrations</span>
                </div>
                <div className="flex flex-col items-center justify-center py-6">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-gray-900">0</span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">Per period</div>
                </div>
                {/* Chart Lines Placeholder */}
                <div className="w-full h-40 flex flex-col justify-between mt-4">
                     {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="w-full border-t border-dashed border-gray-200 h-0"></div>
                     ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;