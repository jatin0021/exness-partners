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
    <div className="font-bold text-lg leading-none" style={{ color }}>ex</div>
  )},
];

const promoCards = [
  {
    id: 1,
    title: 'Choose from a variety of metals',
    description: 'Promote metals beyond gold, such as silver and platinum. Use the assets for stable pricing and competitive conditions to attract a broader audience.',
    image: 'https://storage-us-gcs.bfldr.com/fv47tgx59rf2xwx4g2crq/v/1278276917/original/EN_Metals_Image_306x204.png?Expires=1765294204&KeyName=gcs-bfldr-prod&Signature=4t_Mp_Ys3pr3KEbNQDE2p3HiIyA=',
    stats: [
      { label: 'Banners', count: 3 },
      { label: 'Videos', count: 1 }
    ]
  },
  {
    id: 2,
    title: 'Trade with enhanced stop-out protection',
    description: 'Explore promotional materials that highlight Exness’ unique stop-out protection feature. These assets explain how it can help delay or even prevent stop-outs during periods of market volatility.',
    image: 'https://storage-us-gcs.bfldr.com/rv6nvmgmbmc325kcfk5g98wq/v/1278276963/original/EN_Stop_out_Image_306x204.png?Expires=1765294204&KeyName=gcs-bfldr-prod&Signature=GA43xLAl038OKOhH8A1sFZySuBk=',
    stats: [
      { label: 'Banners', count: 4 },
      { label: 'Videos', count: 4 }
    ]
  },
  {
    id: 3,
    title: 'Experience next-level trading with Exness',
    description: 'Check out the creatives that promote a reliable trading platform with tight and stable spreads, fast execution, and seamless withdrawals.',
    image: 'https://storage-us-gcs.bfldr.com/h3r7rmhgb6hks657k3f8847/v/1278299678/original/EN_Exness_tools_Image_306x204.png?Expires=1765294204&KeyName=gcs-bfldr-prod&Signature=-12vwQl1QwDufL7u7CYz5W9G5xk=',
    stats: [
      { label: 'Banners', count: 10 },
      { label: 'Videos', count: 5 }
    ]
  },
  {
    id: 4,
    title: 'Be the trader you were born to be',
    description: 'Download of the top converting creatives of the "Born to Trade" global campaign. The core message is designed to resonate with serious traders and showcases key product strengths like tight spreads, fast execution, and seamless withdrawals. Use them to drive more traders.',
    image: 'https://storage-us-gcs.bfldr.com/xcfsqv2s3c46ntpm7n3j8vb5/v/1278299600/original/EN_Born_to_trade_Image_306x204.png?Expires=1765294204&KeyName=gcs-bfldr-prod&Signature=A60Pd0tIO0GrO1wKluWBoWeGtuY=',
    stats: [
      { label: 'Banners', count: 7 },
      { label: 'Landings', count: 1 },
      { label: 'Videos', count: 31 }
    ]
  },
  {
    id: 5,
    title: 'Withdraw your money fast',
    description: 'Access creatives focused on the convenience of the fastest withdrawals. The materials emphasize that withdrawals are processed in under one minute, 24/7, with no commissions.',
    image: 'https://storage-us-gcs.bfldr.com/mhr6tb7h5nmf5gwwmxs7k9kx/v/1278299755/original/EN_Instant_withdrawals_Image_306x204.png?Expires=1765294204&KeyName=gcs-bfldr-prod&Signature=NYrTKL_SjnEuQaW_3S6ZhyKaJd4=',
    stats: [
      { label: 'Banners', count: 6 },
      { label: 'Videos', count: 3 }
    ]
  },
  {
    id: 6,
    title: 'Never go into a negative balance',
    description: 'Discover assets that promote the Negative Balance Protection feature. Materials explain that a trader\'s account balance will never go below zero.',
    image: 'https://storage-us-gcs.bfldr.com/5s7hqn66svmxbn37sxjgm7vj/v/1278299795/original/EN_Negative_Image_306x204.png?Expires=1765294204&KeyName=gcs-bfldr-prod&Signature=9yJncoEE8fG6AKizQFnOSpnMBEQ=',
    stats: [
      { label: 'Videos', count: 3 }
    ]
  }
];

const bannerCards = [
  {
    id: 1,
    tag: 'Top converting',
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN_Spreads_Stable_pricing_for_unstable_markets_3-33_Google_970x250.jpg',
    languages: 'English, Arabic',
    moreLanguages: '+4',
    sizes: '120x600, 160x600, 300x250',
    moreSizes: '+14',
    category: "Exness' best pricing"
  },
  {
     id: 2,
     tag: 'Top converting',
     image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN_Spreads_Save_on_every_trade_8-1_Google_970x250.jpg',
     languages: 'English, Arabic',
     moreLanguages: '+4',
     sizes: '120x600, 160x600, 300x250',
     moreSizes: '+14',
     category: "Exness' best pricing"
  },
   {
    id: 3,
    tag: 'Top converting',
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN-The_best_pricing_on_gold_970x250_GOOGLE.png',
    languages: 'English, Arabic, Bengali',
    moreLanguages: '+7',
    sizes: '120x600, 160x600, 300x250',
    moreSizes: '+14',
    category: "Lower your trading cost"
  },
  {
     id: 4,
     tag: 'New',
     image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN_PK_C1_CRYPTO_C2_T1_ETH_67_T2_PERFORMANCE_D-3-3_STATIC_960X300_Q4_2025.jpg',
     languages: 'English, Spanish (LATAM)',
     moreLanguages: null,
     sizes: '300x250, 320x50, 320x480',
     moreSizes: '+10',
     category: "Crypto"
  }
];

const videoCards = [
  {
    id: 1,
    tag: 'Top converting',
    poster: 'https://d3dpet1g0ty5ed.cloudfront.net/Stop_out_Protection_800x450.png',
    title: 'Trade with confidence: Stop Out Protection',
    description: 'Enjoy Stop Out Protection, a proprietary feature that helps delay or avoid stop outs, making your trades stronger during volatility.',
    languages: 'English, Arabic, Bengali',
    moreLanguages: '+6',
    aspectRatios: ['Horizontal', 'Vertical', 'Square'],
    moreRatios: '+1',
    categories: ['Stop out protection']
  },
  {
    id: 2,
    tag: 'Top converting',
    poster: 'https://d3dpet1g0ty5ed.cloudfront.net/GOLD_800x450.png',
    title: 'Thrive in the gold market',
    description: 'Trade gold with better-than-market conditions.',
    languages: 'English, Arabic, Bengali',
    moreLanguages: '+3',
    aspectRatios: ['Horizontal', 'Vertical', 'Square'],
    moreRatios: '+1',
    categories: ['Metals', 'Trade metals']
  },
  {
    id: 3,
    tag: 'New',
    poster: null,
    videoSrc: 'https://storage-us-gcs.bfldr.com/25sfphfgcp953fkf6r5knk/v/1291273271/original/EN_GLOBAL_C1_SWITCH_C2_T1_SPREAD_UGC_PAYLESS_T2_PERFORMANCE_9x16_45sec_VIDEO_Q4_2025.mp4',
    languages: 'English',
    aspectRatios: ['Vertical'],
    categories: ['Spreads']
  },
  {
    id: 4,
    tag: 'New',
    poster: null,
    videoSrc: 'https://storage-us-gcs.bfldr.com/g457b6qsh3g7m7q4pkm5pmb/v/1291271485/original/EN_GLOBAL_C1_SWITCH_C2_T1_NOFEE_UGC_CUTCOSTS_T2_PERFORMANCE_9x16_15sec_VIDEO_Q4_2025.mp4',
    languages: 'English, Bengali',
    moreLanguages: '+3',
    aspectRatios: ['Vertical'],
    categories: ["Exness' unique features"]
  }
];

const landingCards = [
  {
    id: 1,
    tag: 'Top converting',
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN_Spreads_Stable_pricing_for_unstable_markets_3-33_Google_970x250.jpg', // Placeholder
    title: null,
    description: null,
    languages: 'English, Arabic',
    moreLanguages: '+4',
    category: "Exness' best pricing",
    link: '#'
  },
  {
    id: 2,
    tag: 'Top converting',
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN-The_best_pricing_on_gold_970x250_GOOGLE.png',
    title: 'The best spreads on gold',
    description: 'Learn how to trade gold with tight and stable spreads to give your strategy an advantage.',
    languages: 'English, Arabic, Bengali',
    moreLanguages: '+7',
    category: "Exness' best pricing",
    link: 'https://www.exnesspromo.com/en/trade-metals-superiority/'
  },
  {
    id: 3,
    tag: 'Top converting',
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN_Spreads_Save_on_every_trade_8-1_Google_970x250.jpg', // Placeholder
    title: 'Best pricing on oil',
    description: 'Discover how to trade oil with industry-leading spreads.',
    languages: 'English, Arabic, French',
    moreLanguages: '+5',
    category: "Exness' best pricing",
    link: 'https://www.exnesspromo.com/en/trade-oil-superiority/'
  },
  {
    id: 4,
    tag: 'Top converting',
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN_Exness_tools_Image_306x204.png', // Placeholder
    title: 'One platform, multiple instruments',
    description: 'Diversify your portfolio with a wide range of instruments on a user-friendly Exness trading platform, designed for all trading levels.',
    languages: 'English, Arabic, French',
    moreLanguages: '+5',
    category: "Trade multi-assets",
    link: 'https://www.exnesspromo.com/en/trade-multi-assets/'
  },
  {
    id: 5,
    tag: 'Top converting',
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN_Born_to_trade_Image_306x204.png', // Placeholder
    title: 'Trade stocks with zero commission',
    description: 'Trade stocks of the biggest names in the international market with low transaction costs.',
    languages: 'English, Arabic, French',
    moreLanguages: '+5',
    category: "Stocks",
    link: 'https://www.exnesspromo.com/en/trade-stocks/'
  },
  {
    id: 6,
    tag: 'Top converting',
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN_Metals_Image_306x204.png', // Placeholder
    title: 'Trade oil with better-than-market conditions',
    description: 'Enjoy better-than-market conditions for trading oil with Exness, including tight spreads.',
    languages: 'English, Arabic, French',
    moreLanguages: '+5',
    category: "Trade oil",
    link: 'https://www.exnesspromo.com/en/trade-oil/'
  }
];



const gifCards = [
  {
    id: 1,
    tag: 'New',
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN_Take_Control_300x300px.gif',
    title: 'Save on trading costs',
    description: "Keep more of what you earn with Exness' tight spreads and swap-free trading on popular assets.",
    languages: 'English, Indonesian',
    moreLanguages: '+3',
    sizes: '300x300, 300x600, 728x90',
    category: "Lower your trading cost"
  },
  {
    id: 2,
    tag: 'New',
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/EN_Trading_Conditions_300x300px.gif',
    title: 'Take control of your forex trading',
    description: 'Trade FX majors, minors, and exotics with tight spreads and flexible leverage.',
    languages: 'English, Indonesian',
    moreLanguages: '+3',
    sizes: '300x300, 300x600, 728x90',
    category: "Forex"
  }
];

const logoCards = [
  {
    id: 1,
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/Exness_Logo_Dark.svg',
    title: 'Exness Logo Dark',
    bg: 'bg-white'
  },
  {
    id: 2,
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/Exness_Logo_White.svg',
    title: 'Exness Logo White',
    bg: 'bg-[#0B1221]'
  },
  {
    id: 3,
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/Exness_Partners_Logo_Horizontal_Dark.svg',
    title: 'Exness Partners Logo Horizontal',
    bg: 'bg-white'
  },
  {
    id: 4,
    image: 'https://d3dpet1g0ty5ed.cloudfront.net/Exness_Partners_Logo_Portrait_Dark.svg',
    title: 'Exness Partners Logo Portrait',
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
    <div className="p-8 w-full font-['aktiv-grotesk','poppins']">
      {/* Header Section */}
      <h1 className="text-[32px] font-bold text-gray-900 mb-8 tracking-tight">Promo Materials</h1>

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
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
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
            <p>Trading is risky. T&Cs apply. exness.com</p>
            <p>1 Spreads may fluctuate and widen due to factors including market volatility and liquidity, news releases, economic events, when markets open or close, and the type of instruments being traded.</p>
            <p>2 Best spread claims refer to the lowest maximum spreads and the tightest average spreads on the Exness Pro account, for XAUUSD and USOIL based on data collected from 12-25 May 2025, when compared to the corresponding spreads across commission-free accounts of other brokers.</p>
            <p>3 BTCUSD CFD spreads held at their minimums 99.98%+ of the time (23 Jun-3 Jul 2025).</p>
            <p>4 Executable spread claims refer to maximum spreads on XAUUSD, USDJPY, EURUSD, and GBPUSD for the first two seconds following high-impact news. This comparison is made between the Exness Pro account and commission-free accounts of several competitors, all excluding agent commission, from 1 January to 23 August 2024.</p>
            <p>5 At Exness, over 98% of withdrawals are processed automatically. Processing times may vary depending on the chosen payment method.</p>
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
                      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{card.title}</h3>
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
            <p>Trading is risky. T&Cs apply. exness.com</p>
            <p>1 Spreads may fluctuate and widen due to factors including market volatility and liquidity, news releases, economic events, when markets open or close, and the type of instruments being traded.</p>
            <p>2 Best spread claims refer to the lowest maximum spreads and the tightest average spreads on the Exness Pro account, for XAUUSD and USOIL based on data collected from 12-25 May 2025, when compared to the corresponding spreads across commission-free accounts of other brokers.</p>
            <p>3 BTCUSD CFD spreads held at their minimums 99.98%+ of the time (23 Jun-3 Jul 2025).</p>
            <p>4 Executable spread claims refer to maximum spreads on XAUUSD, USDJPY, EURUSD, and GBPUSD for the first two seconds following high-impact news. This comparison is made between the Exness Pro account and commission-free accounts of several competitors, all excluding agent commission, from 1 January to 23 August 2024.</p>
            <p>5 At Exness, over 98% of withdrawals are processed automatically. Processing times may vary depending on the chosen payment method.</p>
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
                      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{card.title}</h3>
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
            <p>Trading is risky. T&Cs apply. exness.com</p>
            <p>1 Spreads may fluctuate and widen due to factors including market volatility and liquidity, news releases, economic events, when markets open or close, and the type of instruments being traded.</p>
            <p>2 Best spread claims refer to the lowest maximum spreads and the tightest average spreads on the Exness Pro account, for XAUUSD and USOIL based on data collected from 12-25 May 2025, when compared to the corresponding spreads across commission-free accounts of other brokers.</p>
            <p>3 BTCUSD CFD spreads held at their minimums 99.98%+ of the time (23 Jun-3 Jul 2025).</p>
            <p>4 Executable spread claims refer to maximum spreads on XAUUSD, USDJPY, EURUSD, and GBPUSD for the first two seconds following high-impact news. This comparison is made between the Exness Pro account and commission-free accounts of several competitors, all excluding agent commission, from 1 January to 23 August 2024.</p>
            <p>5 At Exness, over 98% of withdrawals are processed automatically. Processing times may vary depending on the chosen payment method.</p>
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
                      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{card.title}</h3>
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
            <p>Trading is risky. T&Cs apply. exness.com</p>
            <p>1 Spreads may fluctuate and widen due to factors including market volatility and liquidity, news releases, economic events, when markets open or close, and the type of instruments being traded.</p>
            <p>2 Best spread claims refer to the lowest maximum spreads and the tightest average spreads on the Exness Pro account, for XAUUSD and USOIL based on data collected from 12-25 May 2025, when compared to the corresponding spreads across commission-free accounts of other brokers.</p>
            <p>3 BTCUSD CFD spreads held at their minimums 99.98%+ of the time (23 Jun-3 Jul 2025).</p>
            <p>4 Executable spread claims refer to maximum spreads on XAUUSD, USDJPY, EURUSD, and GBPUSD for the first two seconds following high-impact news. This comparison is made between the Exness Pro account and commission-free accounts of several competitors, all excluding agent commission, from 1 January to 23 August 2024.</p>
            <p>5 At Exness, over 98% of withdrawals are processed automatically. Processing times may vary depending on the chosen payment method.</p>
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
            <p>Trading is risky. T&Cs apply. exness.com</p>
            <p>1 Spreads may fluctuate and widen due to factors including market volatility and liquidity, news releases, economic events, when markets open or close, and the type of instruments being traded.</p>
            <p>2 Best spread claims refer to the lowest maximum spreads and the tightest average spreads on the Exness Pro account, for XAUUSD and USOIL based on data collected from 12-25 May 2025, when compared to the corresponding spreads across commission-free accounts of other brokers.</p>
            <p>3 BTCUSD CFD spreads held at their minimums 99.98%+ of the time (23 Jun-3 Jul 2025).</p>
            <p>4 Executable spread claims refer to maximum spreads on XAUUSD, USDJPY, EURUSD, and GBPUSD for the first two seconds following high-impact news. This comparison is made between the Exness Pro account and commission-free accounts of several competitors, all excluding agent commission, from 1 January to 23 August 2024.</p>
            <p>5 At Exness, over 98% of withdrawals are processed automatically. Processing times may vary depending on the chosen payment method.</p>
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
