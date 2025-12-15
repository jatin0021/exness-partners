import React from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

// --- Icons Components (Extracted from User Snippet) ---

const RefreshIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
  </svg>
);

const ExportIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const SettingsIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const TotalIBsIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const ActiveIBsIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>;
const TotalVolumeIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
const RevenueIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const CommissionGenIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-indigo-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
const CommissionPaidIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-emerald-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const WithdrawalPendingIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-orange-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const TotalWithdrawalIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>;
const LotsTradedIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-cyan-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;


// --- Chart Data ---
const performanceData = [
  { name: 'Jan', IBs: 0, Volume: 20, Revenue: 0 },
  { name: 'Feb', IBs: 0, Volume: 40, Revenue: 0 },
  { name: 'Mar', IBs: 0, Volume: 55, Revenue: 0 },
  { name: 'Apr', IBs: 1, Volume: 70, Revenue: 0 },
  { name: 'May', IBs: 3, Volume: 90, Revenue: 0 },
  { name: 'Jun', IBs: 4, Volume: 100, Revenue: 0 },
];

const statusData = [
  { name: 'Approved', value: 3 },
  { name: 'Pending', value: 1 },
  { name: 'Rejected', value: 0 },
];

const StatCard = ({ icon: Icon, bgClass, label, value, change }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 relative overflow-hidden h-full">
    <div className="p-3 sm:p-4 lg:p-6">
      <div className="flex flex-col items-center justify-center text-center h-full">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${bgClass} rounded-full flex items-center justify-center mb-2`}>
          <Icon />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs lg:text-sm font-medium text-gray-600">{label}</p>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mt-0.5 sm:mt-1">{value}</p>
          <p className="text-xs lg:text-sm mt-0.5 sm:mt-1 text-green-600">{change}</p>
        </div>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-5 sm:py-6">
      <div className="space-y-6">
        
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">IB Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-600">Dynamic overview of IB activities and real-time performance metrics</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer">
              <span className="mr-2"><RefreshIcon /></span>
              <span className="hidden sm:inline">Refresh Data</span>
              <span className="sm:hidden">Refresh</span>
            </button>
            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer">
              <span className="mr-2"><ExportIcon /></span>
              <span className="hidden sm:inline">Export Report</span>
              <span className="sm:hidden">Export</span>
            </button>
            <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer">
              <span className="mr-2"><SettingsIcon /></span>
              <span className="hidden sm:inline">Settings</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
          <StatCard icon={TotalIBsIcon} bgClass="bg-blue-100" label="Total IBs" value="4" change="+1% from last month" />
          <StatCard icon={ActiveIBsIcon} bgClass="bg-green-100" label="Active IBs" value="3" change="+12% from last month" />
          <StatCard icon={TotalVolumeIcon} bgClass="bg-purple-100" label="Total Volume" value="$98.6M" change="+21% from last month" />
          <StatCard icon={RevenueIcon} bgClass="bg-yellow-100" label="Revenue" value="$5K" change="+6% from last month" />
          <StatCard icon={CommissionGenIcon} bgClass="bg-indigo-100" label="Total Commission Generated" value="$5K" change="+1% from last month" />
          <StatCard icon={CommissionPaidIcon} bgClass="bg-emerald-100" label="Total Commission Paid" value="$0K" change="+13% from last month" />
          <StatCard icon={WithdrawalPendingIcon} bgClass="bg-orange-100" label="Withdrawal Pending" value="$0K" change="+10% from last month" />
          <StatCard icon={TotalWithdrawalIcon} bgClass="bg-red-100" label="Total Withdrawal" value="$1K" change="+7% from last month" />
          <StatCard icon={LotsTradedIcon} bgClass="bg-cyan-100" label="Overall Lots Traded" value="986.23" change="+8% from last month" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {/* IB Performance Trends */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                </span>
                <h3 className="text-sm sm:text-base font-medium text-gray-900">IB Performance Trends</h3>
              </div>
            </div>
            <div className="p-3 sm:p-4 lg:p-6">
              <div className="h-64 sm:h-72 lg:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Line type="monotone" dataKey="Volume" stroke="#16A34A" strokeWidth={2} dot={{ r: 4, fill: '#fff', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="IBs" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4, fill: '#fff', strokeWidth: 2 }} />
                    <Line type="monotone" dataKey="Revenue" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4, fill: '#fff', strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* IB Status Distribution */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                </span>
                <h3 className="text-sm sm:text-base font-medium text-gray-900">IB Status Distribution</h3>
              </div>
            </div>
            <div className="p-3 sm:p-4 lg:p-6">
              <div className="h-64 sm:h-72 lg:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={statusData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                    <Tooltip 
                       cursor={{ fill: '#f3f4f6' }}
                       contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} barSize={50} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          
          {/* Pending Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </span>
                <h3 className="text-sm sm:text-base font-medium text-gray-900">Pending Actions</h3>
              </div>
            </div>
            <div className="p-3 sm:p-4 lg:p-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-yellow-50 rounded-lg gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base truncate">IB Requests</p>
                      <p className="text-xs sm:text-sm text-gray-600">1 pending approval</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-yellow-100 text-yellow-800 px-3 py-1 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>pending
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-blue-50 rounded-lg gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base truncate">Settlements</p>
                      <p className="text-xs sm:text-sm text-gray-600">0 pending payment</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-yellow-100 text-yellow-800 px-3 py-1 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>pending
                  </span>
                </div>
                <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-[#6242a5] to-[#8b6ec8] text-white hover:from-[#5a3a9a] hover:to-[#7d5fb8] focus:ring-[#6242a5] px-3 py-1.5 text-sm cursor-pointer w-full">
                  View All Actions
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </span>
                <h3 className="text-sm sm:text-base font-medium text-gray-900">Recent Activity</h3>
              </div>
            </div>
            <div className="p-3 sm:p-4 lg:p-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-green-400"></div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">IB approved: Rasik Katoch</p>
                    <p className="text-xs text-gray-600">01:19:33</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-green-400"></div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">IB approved: Shruti Mudliar</p>
                    <p className="text-xs text-gray-600">02:19:28</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-green-400"></div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">IB approved: Parminder Singh</p>
                    <p className="text-xs text-gray-600">17:58:06</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-blue-400"></div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">IB pending: Parminder Singh</p>
                    <p className="text-xs text-gray-600">17:55:21</p>
                  </div>
                </div>
                <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-700 hover:bg-gray-100 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer w-full text-xs sm:text-sm">
                  View All Activity
                </button>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </span>
                <h3 className="text-sm sm:text-base font-medium text-gray-900">System Status</h3>
              </div>
            </div>
            <div className="p-3 sm:p-4 lg:p-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm text-gray-600">API Status</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-2 py-1 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>active
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm text-gray-600">Database</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-2 py-1 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>active
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm text-gray-600">Payment Gateway</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-2 py-1 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>active
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm text-gray-600">Trading Platform</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-2 py-1 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>active
                  </span>
                </div>
                <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer w-full text-xs sm:text-sm">
                  <span className="hidden sm:inline">System Health Check</span>
                  <span className="sm:hidden">Health Check</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent IBs Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </span>
              <h3 className="text-sm sm:text-base font-medium text-gray-900">Recent IBs</h3>
            </div>
          </div>
          <div className="p-3 sm:p-4 lg:p-6">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IB Name</th>
                    <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clients</th>
                    <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                    <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-2 sm:px-6 py-3 sm:py-4">
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">Rasik Katoch</div>
                        <div className="text-xs text-gray-500 truncate">katochrasik795@gmail.com</div>
                      </div>
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-2 py-1 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>approved
                      </span>
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900">0</td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900">$0K</td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-blue-100 text-blue-800 px-2 py-1 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>new
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-2 sm:px-6 py-3 sm:py-4">
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">Shruti Mudliar</div>
                        <div className="text-xs text-gray-500 truncate">shruti@zuperior.com</div>
                      </div>
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-2 py-1 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>approved
                      </span>
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900">0</td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900">$0K</td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-blue-100 text-blue-800 px-2 py-1 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>new
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-2 sm:px-6 py-3 sm:py-4">
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">Parminder Singh</div>
                        <div className="text-xs text-gray-500 truncate">shera1355@gmail.com</div>
                      </div>
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-green-100 text-green-800 px-2 py-1 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>approved
                      </span>
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900">0</td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900">$0K</td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-blue-100 text-blue-800 px-2 py-1 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>new
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 sm:mt-4 text-center">
              <button type="button" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 px-3 py-1.5 text-sm cursor-pointer">
                View All IBs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
