import React, { useState } from 'react';
import { Folder, Image as ImageIcon, Video, Monitor, FileImage, Type, ChevronLeft, ChevronRight, Filter, Download, Play, ExternalLink } from 'lucide-react';

const tabs = [
  { id: 'categories', label: 'Categories', count: '13 items', icon: ({ color }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <circle cx="12" cy="13" r="3" />
      <path d="m17 18-2.8-2.8" />
    </svg>
  )},
  { id: 'banners', label: 'Banners', count: '8,374 items', icon: ({ color }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )},
  { id: 'videos', label: 'Videos', count: '1,060 items', icon: ({ color }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2.18" ry="2.18" />
      <path d="M10 9l6 3.5L10 16V9z" />
    </svg>
  )},
  { id: 'landings', label: 'Landings', count: '94 items', icon: ({ color }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M8 21h8" />
      <path d="M12 12v-4" />
      <polyline points="9 9 12 12 15 9" />
    </svg>
  )},
  { id: 'gifs', label: 'GIFs', count: '30 items', icon: ({ color }) => (
    <div className="font-bold text-xs leading-none tracking-tighter" style={{ color, fontSize: '12px' }}>GIF</div>
  )},
  { id: 'logos', label: 'Logos', count: '4 items', icon: ({ color }) => (
    <div className="font-bold text-lg leading-none" style={{ color }}>Br</div>
  )},
];

const promoCards = [
  {
    id: 1,
    title: 'Explore Diverse Market Assets',
    description: 'Promote a wide range of assets including commodities, indices, and crypto. Use these materials to showcase stability and competitive conditions.',
    image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&w=600&q=80',
    stats: [
      { label: 'Banners', count: 5 },
      { label: 'Videos', count: 2 }
    ]
  },
  {
    id: 2,
    title: 'Advanced Risk Management Tools',
    description: 'Highlight features that help traders manage risk effectively. These assets explain protection mechanisms during improved market volatility.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    stats: [
      { label: 'Banners', count: 4 },
      { label: 'Videos', count: 3 }
    ]
  },
  {
    id: 3,
    title: 'Next-Generation Trading Platform',
    description: 'Showcase a reliable platform with fast execution, intuitive interface, and seamless funding options.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    stats: [
      { label: 'Banners', count: 8 },
      { label: 'Videos', count: 6 }
    ]
  },
  {
    id: 4,
    title: 'Empower Your Trading Journey',
    description: 'Download top-converting creatives for the global "Empower Your Trade" campaign. Resonate with serious traders using key product strengths.',
    image: 'https://images.unsplash.com/photo-1565514020176-dbf2277470a1?auto=format&fit=crop&w=600&q=80',
    stats: [
      { label: 'Banners', count: 6 },
      { label: 'Landings', count: 2 },
      { label: 'Videos', count: 12 }
    ]
  },
  {
    id: 5,
    title: 'Instant Fund Access',
    description: 'Creatives focused on the convenience of quick withdrawals. Emphasize speed and reliability of payment systems.',
    image: 'https://images.unsplash.com/photo-1560472354-b33af0c8f938?auto=format&fit=crop&w=600&q=80',
    stats: [
      { label: 'Banners', count: 5 },
      { label: 'Videos', count: 2 }
    ]
  },
  {
    id: 6,
    title: 'Negative Balance Protection',
    description: 'Promote safety features that ensure client balances never drop below zero, adding an extra layer of security.',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=600&q=80',
    stats: [
      { label: 'Videos', count: 2 }
    ]
  }
];

const bannerCards = [
  {
    id: 1,
    tag: 'Top converting',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&h=300&q=80',
    languages: 'English, Spanish',
    moreLanguages: '+3',
    sizes: '120x600, 160x600, 300x250',
    moreSizes: '+10',
    category: "Best Pricing"
  },
  {
     id: 2,
     tag: 'Top converting',
     image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1000&h=300&q=80',
     languages: 'English, German',
     moreLanguages: '+2',
     sizes: '120x600, 160x600, 300x250',
     moreSizes: '+12',
     category: "Best Pricing"
  },
   {
    id: 3,
    tag: 'Top converting',
    image: 'https://images.unsplash.com/photo-1554224154-260327c00c4b?auto=format&fit=crop&w=1000&h=300&q=80',
    languages: 'English, French, Italian',
    moreLanguages: '+5',
    sizes: '728x90, 300x600, 320x100',
    moreSizes: '+8',
    category: "Low Costs"
  },
  {
     id: 4,
     tag: 'New',
     image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1000&h=300&q=80',
     languages: 'English, Portuguese',
     moreLanguages: null,
     sizes: '300x250, 320x50, 320x480',
     moreSizes: '+5',
     category: "Crypto"
  }
];

const videoCards = [
  {
    id: 1,
    tag: 'Top converting',
    poster: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&h=450',
    title: 'Trade with Confidence',
    description: 'Enjoy protection features that help delay or avoid stop outs, making your trades stronger.',
    languages: 'English, Spanish',
    moreLanguages: '+4',
    aspectRatios: ['Horizontal', 'Vertical'],
    moreRatios: '+1',
    categories: ['Risk Protection']
  },
  {
    id: 2,
    tag: 'Top converting',
    poster: 'https://images.unsplash.com/photo-1610375461246-d5de5a005578?auto=format&fit=crop&w=800&h=450',
    title: 'Thrive in the Gold Market',
    description: 'Trade gold with better-than-market conditions and tight spreads.',
    languages: 'English, German',
    moreLanguages: '+2',
    aspectRatios: ['Horizontal', 'Square'],
    moreRatios: '+1',
    categories: ['Metals', 'Trading']
  },
  {
    id: 3,
    tag: 'New',
    poster: null,
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    languages: 'English',
    aspectRatios: ['Vertical'],
    categories: ['Spreads']
  },
  {
    id: 4,
    tag: 'New',
    poster: null,
    videoSrc: 'https://www.w3schools.com/html/movie.mp4',
    languages: 'English, French',
    moreLanguages: '+1',
    aspectRatios: ['Vertical'],
    categories: ["Unique Features"]
  }
];

const landingCards = [
  {
    id: 1,
    tag: 'Top converting',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&h=300',
    title: null,
    description: null,
    languages: 'English, Spanish',
    moreLanguages: '+3',
    category: "Best Pricing",
    link: '#'
  },
  {
    id: 2,
    tag: 'Top converting',
    image: 'https://images.unsplash.com/photo-1579532537598-6a8624779047?auto=format&fit=crop&w=1000&h=300',
    title: 'Best Spreads on Gold',
    description: 'Learn how to trade gold with tight and stable spreads to give your strategy an advantage.',
    languages: 'English, Arabic',
    moreLanguages: '+5',
    category: "Best Pricing",
    link: '#'
  },
  {
    id: 3,
    tag: 'Top converting',
    image: 'https://images.unsplash.com/photo-1519681393798-2f61924730a9?auto=format&fit=crop&w=1000&h=300',
    title: 'Best Pricing on Oil',
    description: 'Discover how to trade oil with industry-leading spreads.',
    languages: 'English, French',
    moreLanguages: '+4',
    category: "Best Pricing",
    link: '#'
  },
  {
    id: 4,
    tag: 'Top converting',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef902a?auto=format&fit=crop&w=600&h=400',
    title: 'One Platform, Multiple Instruments',
    description: 'Diversify your portfolio with a wide range of instruments on a user-friendly platform.',
    languages: 'English, German',
    moreLanguages: '+2',
    category: "Multi-Asset",
    link: '#'
  },
  {
    id: 5,
    tag: 'Top converting',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&h=400',
    title: 'Trade Stocks Commission-Free',
    description: 'Trade stocks of the biggest names in the international market with low transaction costs.',
    languages: 'English, Italian',
    moreLanguages: '+3',
    category: "Stocks",
    link: '#'
  },
  {
    id: 6,
    tag: 'Top converting',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&h=400',
    title: 'Trade Oil with Better Conditions',
    description: 'Enjoy better-than-market conditions for trading oil, including tight spreads.',
    languages: 'English, Portuguese',
    moreLanguages: '+3',
    category: "Commodities",
    link: '#'
  }
];



const gifCards = [
  {
    id: 1,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=300&h=300',
    title: 'Save on Trading Costs',
    description: "Keep more of what you earn with tight spreads and swap-free trading on popular assets.",
    languages: 'English, Indonesian',
    moreLanguages: '+2',
    sizes: '300x300, 300x600, 728x90',
    category: "Low Costs"
  },
  {
    id: 2,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?auto=format&fit=crop&w=300&h=300',
    title: 'Take Control of Your Trading',
    description: 'Trade majors, minors, and exotics with tight spreads and flexible leverage.',
    languages: 'English, Thai',
    moreLanguages: '+2',
    sizes: '300x300, 300x600, 728x90',
    category: "Forex"
  }
];

const logoCards = [
  {
    id: 1,
    image: 'https://placehold.co/200x50/F3F4F6/111827?text=BRAND+Dark',
    title: 'Brand Logo Dark',
    bg: 'bg-white'
  },
  {
    id: 2,
    image: 'https://placehold.co/200x50/111827/FFFFFF?text=BRAND+White',
    title: 'Brand Logo White',
    bg: 'bg-[#0B1221]'
  },
  {
    id: 3,
    image: 'https://placehold.co/200x50/F3F4F6/111827?text=PARTNERS+Horizontal',
    title: 'Partners Logo Horizontal',
    bg: 'bg-white'
  },
  {
    id: 4,
    image: 'https://placehold.co/200x50/F3F4F6/111827?text=PARTNERS+Vertical',
    title: 'Partners Logo Portrait',
    bg: 'bg-white'
  }
];



const Materials = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const [bannerFilter, setBannerFilter] = useState('All');
  const [videoFilter, setVideoFilter] = useState('All');
  const [landingFilter, setLandingFilter] = useState('All');
  const [gifFilter, setGifFilter] = useState('All');

  return (
    <div className="p-8 w-full">
      {/* Header Section */}
      <h1 className="text-[32px] text-gray-900 mb-8 tracking-tight">Promo Materials</h1>

      {/* Tabs Section */}
      <div className="border-b border-gray-200 mb-8 w-full">
        <div className="flex w-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 pb-4 flex-1 justify-center relative group outline-none transition-colors border-b-[3px] ${
                   isActive ? 'border-black' : 'border-transparent'
                }`}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <Icon color={isActive ? '#7c3aed' : '#1f2937'} />
                </div>
                <div className="flex flex-col items-start text-sm">
                  <span className={`font-semibold leading-tight text-[15px] ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                    {tab.label}
                  </span>
                  <span className="text-[13px] text-gray-500 font-medium mt-0.5">{tab.count}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {activeTab === 'categories' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {promoCards.map((card) => (
            <div key={card.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/2] bg-gray-50 relative p-4 flex items-center justify-center">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl text-gray-900 mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.stats.map((stat, index) => (
                    <button 
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium text-gray-700 transition w-auto"
                    >
                      <span>{stat.label}</span>
                      <span className="bg-gray-200 text-gray-800 text-xs px-1.5 py-0.5 rounded font-bold">
                        {stat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'banners' && (
        <div className="mb-8 font-sans">
          {/* Filters */}
          <div className="flex justify-between items-center mb-6">
             <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
               <Filter size={18} />
               Filters
             </button>
             <div className="flex bg-gray-100 rounded-lg p-1">
               {['Top converting', 'New', 'All'].map((filter) => (
                 <button 
                   key={filter}
                   onClick={() => setBannerFilter(filter)}
                   className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                     bannerFilter === filter ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
                   }`}
                 >
                   {filter}
                 </button>
               ))}
             </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bannerCards.map((card) => (
              <section key={card.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  {card.tag && (
                    <span className="absolute top-4 right-[-4px] z-10 bg-[#0094FF] text-white text-[13px] font-medium px-3 py-1 shadow-sm after:content-[''] after:absolute after:top-full after:right-0 after:border-t-[4px] after:border-l-[4px] after:border-t-[#006bb8] after:border-l-transparent">
                      {card.tag}
                    </span>
                  )}
                  <header className="bg-gray-50 h-[110px] flex items-center justify-center p-2 border-b border-gray-100">
                    <img src={card.image} alt={card.category} className="max-w-full max-h-full object-contain" />
                  </header>
                </div>

                <div className="p-3 flex-1">
                  <ul className="flex flex-col gap-0">
                    <li className="flex items-start justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-[14px]">Languages</span>
                      <div className="flex items-center gap-2 text-right">
                        <span className="text-gray-900 text-[14px]">{card.languages}</span>
                         {card.moreLanguages && (
                          <div className="bg-gray-100 rounded-full px-2 py-0.5 text-[11px] font-medium text-gray-600">
                            {card.moreLanguages}
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="flex items-start justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-[14px]">Sizes</span>
                      <div className="flex items-center gap-2 text-right">
                         <span className="text-gray-900 text-[14px]">{card.sizes}</span>
                         {card.moreSizes && (
                          <div className="bg-gray-100 rounded-full px-2 py-0.5 text-[11px] font-medium text-gray-600">
                            {card.moreSizes}
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                      <span className="text-gray-500 text-[14px]">Categories</span>
                      <div className="bg-gray-100 rounded px-2 py-1 text-[12px] text-gray-700 font-medium">
                        {card.category}
                      </div>
                    </li>
                  </ul>
                </div>

                <footer className="px-3 py-3 bg-gray-50/30 flex items-center gap-2 border-t border-gray-100">
                  <div className="flex items-center justify-center">
                     <button className="w-8 h-8 rounded bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                       <div className="w-4 h-4 border border-gray-300 rounded bg-white"></div>
                     </button>
                  </div>
                  <button className="flex-1 h-8 rounded bg-gray-50 hover:bg-gray-100 text-[14px] text-gray-700 font-medium transition flex items-center justify-center border border-gray-200">
                    Choose banners
                  </button>
                  <button className="w-8 h-8 rounded bg-gray-50 hover:bg-gray-100 text-gray-600 transition flex items-center justify-center border border-gray-200">
                    <Download size={18} />
                  </button>
                </footer>
              </section>
            ))}
          </div>
          
           <div className="mt-8 text-xs text-gray-500 space-y-2 leading-relaxed">
            <p>Trading is risky. T&Cs apply. example.com</p>
            <p>1 Spreads may fluctuate and widen due to factors including market volatility and liquidity, news releases, economic events, when markets open or close, and the type of instruments being traded.</p>
            <p>2 Best spread claims refer to the lowest maximum spreads and the tightest average spreads on the Pro account, for XAUUSD and USOIL based on data collected, when compared to the corresponding spreads across commission-free accounts of other brokers.</p>
            <p>3 BTCUSD CFD spreads held at their minimums 99.98%+ of the time.</p>
            <p>4 Executable spread claims refer to maximum spreads on XAUUSD, USDJPY, EURUSD, and GBPUSD for the first two seconds following high-impact news. This comparison is made between the Pro account and commission-free accounts of several competitors, all excluding agent commission.</p>
            <p>5 Over 98% of withdrawals are processed automatically. Processing times may vary depending on the chosen payment method.</p>
          </div>
        </div>
      )}

      {activeTab === 'videos' && (
        <div className="mb-8 font-sans">
          {/* Filters */}
          <div className="flex justify-between items-center mb-6">
             <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
               <Filter size={18} />
               Filters
             </button>
             <div className="flex bg-gray-100 rounded-lg p-1">
               {['Top converting', 'New', 'All'].map((filter) => (
                 <button 
                   key={filter}
                   onClick={() => setVideoFilter(filter)}
                   className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                     videoFilter === filter ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
                   }`}
                 >
                   {filter}
                 </button>
               ))}
             </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoCards.map((card) => (
              <section key={card.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  {card.tag && (
                    <span className="absolute top-4 right-[-4px] z-10 bg-[#0094FF] text-white text-[13px] font-medium px-3 py-1 shadow-sm after:content-[''] after:absolute after:top-full after:right-0 after:border-t-[4px] after:border-l-[4px] after:border-t-[#006bb8] after:border-l-transparent">
                      {card.tag}
                    </span>
                  )}
                  <header className="bg-gray-100 aspect-video relative flex items-center justify-center overflow-hidden">
                    {card.poster ? (
                      <img src={card.poster} alt={card.title} className="w-full h-full object-cover" />
                    ) : (
                      <video src={card.videoSrc} className="w-full h-full object-cover" muted playsInline></video>
                    )}
                    <button className="absolute inset-0 m-auto w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-900 shadow-lg hover:bg-white transition">
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </button>
                  </header>
                </div>

                <div className="p-4 flex-1">
                  {card.title && (
                    <div className="mb-4">
                      <h3 className="text-lg text-gray-900 leading-tight mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  )}

                  <ul className="flex flex-col gap-0 border-t border-gray-100 pt-2">
                    <li className="flex items-start justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-[14px]">Languages</span>
                      <div className="flex items-center gap-2 text-right">
                        <span className="text-gray-900 text-[14px]">{card.languages}</span>
                         {card.moreLanguages && (
                          <div className="bg-gray-100 rounded-full px-2 py-0.5 text-[11px] font-medium text-gray-600">
                            {card.moreLanguages}
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="flex items-start justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-[14px]">Aspect ratios</span>
                      <div className="flex flex-wrap justify-end gap-1.5">
                        {card.aspectRatios.map((ratio) => (
                           <div key={ratio} className="border border-gray-300 rounded px-2 py-0.5 text-[12px] font-medium text-gray-700">
                              {ratio}
                           </div>
                        ))}
                         {card.moreRatios && (
                          <div className="bg-gray-100 rounded-full px-2 py-0.5 text-[11px] font-medium text-gray-600">
                            {card.moreRatios}
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="flex flex-wrap items-center justify-between py-2 gap-2 mt-1">
                      <span className="text-gray-500 text-[14px] w-full">Categories</span>
                      <div className="flex flex-wrap gap-1.5 w-full">
                        {card.categories.map((cat) => (
                          <div key={cat} className="border border-gray-300 rounded px-2 py-1 text-[12px] text-gray-700 font-medium">
                            {cat}
                          </div>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>

                <footer className="px-3 py-3 bg-gray-50/30 flex items-center gap-2 border-t border-gray-100">
                  <div className="flex items-center justify-center">
                     <button className="w-8 h-8 rounded bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                       <div className="w-4 h-4 border border-gray-300 rounded bg-white"></div>
                     </button>
                  </div>
                  <button className="flex-1 h-8 rounded bg-gray-50 hover:bg-gray-100 text-[14px] text-gray-700 font-medium transition flex items-center justify-center border border-gray-200">
                    Choose videos
                  </button>
                  <button className="w-8 h-8 rounded bg-gray-50 hover:bg-gray-100 text-gray-600 transition flex items-center justify-center border border-gray-200">
                    <Download size={18} />
                  </button>
                </footer>
              </section>
            ))}
          </div>
          
           <div className="mt-8 text-xs text-gray-500 space-y-2 leading-relaxed">
            <p>Trading is risky. T&Cs apply. example.com</p>
            <p>1 Spreads may fluctuate and widen due to factors including market volatility and liquidity, news releases, economic events, when markets open or close, and the type of instruments being traded.</p>
            <p>2 Best spread claims refer to the lowest maximum spreads and the tightest average spreads on the Pro account, for XAUUSD and USOIL based on data collected, when compared to the corresponding spreads across commission-free accounts of other brokers.</p>
            <p>3 BTCUSD CFD spreads held at their minimums 99.98%+ of the time.</p>
            <p>4 Executable spread claims refer to maximum spreads on XAUUSD, USDJPY, EURUSD, and GBPUSD for the first two seconds following high-impact news. This comparison is made between the Pro account and commission-free accounts of several competitors, all excluding agent commission.</p>
            <p>5 Over 98% of withdrawals are processed automatically. Processing times may vary depending on the chosen payment method.</p>
          </div>
        </div>
      )}

      {activeTab === 'landings' && (
        <div className="mb-8 font-sans">
          {/* Filters */}
          <div className="flex justify-between items-center mb-6">
             <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
               <Filter size={18} />
               Filters
             </button>
             <div className="flex bg-gray-100 rounded-lg p-1">
               {['Top converting', 'New', 'All'].map((filter) => (
                 <button 
                   key={filter}
                   onClick={() => setLandingFilter(filter)}
                   className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                     landingFilter === filter ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
                   }`}
                 >
                   {filter}
                 </button>
               ))}
             </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landingCards.map((card) => (
              <section key={card.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  {card.tag && (
                    <span className="absolute top-4 right-[-4px] z-10 bg-[#0094FF] text-white text-[13px] font-medium px-3 py-1 shadow-sm after:content-[''] after:absolute after:top-full after:right-0 after:border-t-[4px] after:border-l-[4px] after:border-t-[#006bb8] after:border-l-transparent">
                      {card.tag}
                    </span>
                  )}
                  <header className="bg-gray-100 h-[160px] relative flex items-center justify-center overflow-hidden">
                     {/* Placeholder for the landing page visual - using image if available, else standard bg */}
                     <img src={card.image} alt={card.category} className="w-full h-full object-cover" />
                  </header>
                </div>

                <div className="p-4 flex-1">
                   {card.title && (
                    <div className="mb-4">
                      <h3 className="text-lg text-gray-900 leading-tight mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  )}

                  <ul className="flex flex-col gap-0 border-t border-gray-100 pt-2">
                    <li className="flex items-start justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-[14px]">Languages</span>
                      <div className="flex items-center gap-2 text-right">
                        <span className="text-gray-900 text-[14px]">{card.languages}</span>
                         {card.moreLanguages && (
                          <div className="bg-gray-100 rounded-full px-2 py-0.5 text-[11px] font-medium text-gray-600">
                            {card.moreLanguages}
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-2 mt-1">
                      <span className="text-gray-500 text-[14px]">Categories</span>
                      <div className="border border-gray-300 rounded px-2 py-1 text-[12px] text-gray-700 font-medium">
                        {card.category}
                      </div>
                    </li>
                  </ul>
                </div>

                <footer className="px-3 py-3 bg-gray-50/30 flex items-center gap-2 border-t border-gray-100">
                  <a 
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium text-gray-700 transition"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                  <button className="flex-1 h-8 rounded bg-gray-50 hover:bg-gray-100 text-[14px] text-gray-700 font-medium transition flex items-center justify-center border border-gray-200">
                    Get link
                  </button>
                </footer>
              </section>
            ))}
          </div>
          
           <div className="mt-8 text-xs text-gray-500 space-y-2 leading-relaxed">
            <p>Trading is risky. T&Cs apply. example.com</p>
            <p>1 Spreads may fluctuate and widen due to factors including market volatility and liquidity, news releases, economic events, when markets open or close, and the type of instruments being traded.</p>
            <p>2 Best spread claims refer to the lowest maximum spreads and the tightest average spreads on the Pro account, for XAUUSD and USOIL based on data collected, when compared to the corresponding spreads across commission-free accounts of other brokers.</p>
            <p>3 BTCUSD CFD spreads held at their minimums 99.98%+ of the time.</p>
            <p>4 Executable spread claims refer to maximum spreads on XAUUSD, USDJPY, EURUSD, and GBPUSD for the first two seconds following high-impact news. This comparison is made between the Pro account and commission-free accounts of several competitors, all excluding agent commission.</p>
            <p>5 Over 98% of withdrawals are processed automatically. Processing times may vary depending on the chosen payment method.</p>
          </div>
        </div>
      )}

      {activeTab === 'gifs' && (
        <div className="mb-8 font-sans">
          {/* Filters */}
          <div className="flex justify-between items-center mb-6">
             <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
               <Filter size={18} />
               Filters
             </button>
             <div className="flex bg-gray-100 rounded-lg p-1">
               {['Top converting', 'New', 'All'].map((filter) => (
                 <button 
                   key={filter}
                   onClick={() => setGifFilter(filter)}
                   className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                     gifFilter === filter ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
                   }`}
                 >
                   {filter}
                 </button>
               ))}
             </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gifCards.map((card) => (
              <section key={card.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  {card.tag && (
                    <span className="absolute top-4 right-[-4px] z-10 bg-[#0094FF] text-white text-[13px] font-medium px-3 py-1 shadow-sm after:content-[''] after:absolute after:top-full after:right-0 after:border-t-[4px] after:border-l-[4px] after:border-t-[#006bb8] after:border-l-transparent">
                      {card.tag}
                    </span>
                  )}
                  <header className="bg-gray-100 h-[200px] flex items-center justify-center p-4 border-b border-gray-100">
                     <img src={card.image} alt={card.title} className="h-full object-contain" />
                  </header>
                </div>

                <div className="p-4 flex-1">
                   {card.title && (
                    <div className="mb-4">
                      <h3 className="text-lg text-gray-900 leading-tight mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  )}

                  <ul className="flex flex-col gap-0 border-t border-gray-100 pt-2">
                    <li className="flex items-start justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-[14px]">Languages</span>
                      <div className="flex items-center gap-2 text-right">
                        <span className="text-gray-900 text-[14px]">{card.languages}</span>
                         {card.moreLanguages && (
                          <div className="bg-gray-100 rounded-full px-2 py-0.5 text-[11px] font-medium text-gray-600">
                            {card.moreLanguages}
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="flex items-start justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-[14px]">Sizes</span>
                      <div className="flex items-center gap-2 text-right">
                         <span className="text-gray-900 text-[14px]">{card.sizes}</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-2 mt-1">
                      <span className="text-gray-500 text-[14px]">Categories</span>
                      <div className="border border-gray-300 rounded px-2 py-1 text-[12px] text-gray-700 font-medium">
                        {card.category}
                      </div>
                    </li>
                  </ul>
                </div>

                <footer className="px-3 py-3 bg-gray-50/30 flex items-center gap-2 border-t border-gray-100">
                  <div className="flex items-center justify-center">
                     <button className="w-8 h-8 rounded bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                       <div className="w-4 h-4 border border-gray-300 rounded bg-white"></div>
                     </button>
                  </div>
                  <button className="flex-1 h-8 rounded bg-gray-50 hover:bg-gray-100 text-[14px] text-gray-700 font-medium transition flex items-center justify-center border border-gray-200">
                    Choose GIFs
                  </button>
                  <button className="w-8 h-8 rounded bg-gray-50 hover:bg-gray-100 text-gray-600 transition flex items-center justify-center border border-gray-200">
                    <Download size={18} />
                  </button>
                </footer>
              </section>
            ))}
          </div>
          
           <div className="mt-8 text-xs text-gray-500 space-y-2 leading-relaxed">
            <p>Trading is risky. T&Cs apply. example.com</p>
            <p>1 Spreads may fluctuate and widen due to factors including market volatility and liquidity, news releases, economic events, when markets open or close, and the type of instruments being traded.</p>
            <p>2 Best spread claims refer to the lowest maximum spreads and the tightest average spreads on the Pro account, for XAUUSD and USOIL based on data collected, when compared to the corresponding spreads across commission-free accounts of other brokers.</p>
            <p>3 BTCUSD CFD spreads held at their minimums 99.98%+ of the time.</p>
            <p>4 Executable spread claims refer to maximum spreads on XAUUSD, USDJPY, EURUSD, and GBPUSD for the first two seconds following high-impact news. This comparison is made between the Pro account and commission-free accounts of several competitors, all excluding agent commission.</p>
            <p>5 Over 98% of withdrawals are processed automatically. Processing times may vary depending on the chosen payment method.</p>
          </div>
        </div>
      )}

      {activeTab === 'logos' && (
        <div className="mb-8 font-sans">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logoCards.map((card) => (
              <section key={card.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <header className={`${card.bg} h-[200px] flex items-center justify-center p-8 border-b border-gray-100`}>
                     <img src={card.image} alt={card.title} className="max-w-full max-h-full object-contain" />
                  </header>
                </div>

                <footer className="p-4 bg-white">
                  <button className="w-full h-10 rounded bg-[#F3F4F6] hover:bg-gray-200 text-[14px] text-gray-700 font-medium transition flex items-center justify-center">
                    Download
                  </button>
                </footer>
              </section>
            ))}
          </div>
          
           <div className="mt-8 text-xs text-gray-500 space-y-2 leading-relaxed">
            <p>Trading is risky. T&Cs apply. example.com</p>
            <p>1 Spreads may fluctuate and widen due to factors including market volatility and liquidity, news releases, economic events, when markets open or close, and the type of instruments being traded.</p>
            <p>2 Best spread claims refer to the lowest maximum spreads and the tightest average spreads on the Pro account, for XAUUSD and USOIL based on data collected, when compared to the corresponding spreads across commission-free accounts of other brokers.</p>
            <p>3 BTCUSD CFD spreads held at their minimums 99.98%+ of the time.</p>
            <p>4 Executable spread claims refer to maximum spreads on XAUUSD, USDJPY, EURUSD, and GBPUSD for the first two seconds following high-impact news. This comparison is made between the Pro account and commission-free accounts of several competitors, all excluding agent commission.</p>
            <p>5 Over 98% of withdrawals are processed automatically. Processing times may vary depending on the chosen payment method.</p>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-12 mb-8">
        <div className="flex items-center gap-1">
          <button disabled className="p-1.5 rounded-full text-gray-300 cursor-not-allowed">
            <ChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-sm font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 text-sm font-medium">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 text-sm font-medium">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 text-sm font-medium">
            4
          </button>
           <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 text-sm font-medium">
            5
          </button>
          <button className="p-1.5 rounded-full text-gray-600 hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Materials;
