import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import FINCRMTerminal from './pages/Trading/FINCRMTerminal'

// Reports
import Clients from './pages/Reports/Clients'
import ClientAccounts from './pages/Reports/ClientAccounts'
import Rewards from './pages/Reports/Rewards'
import ClientTransactions from './pages/Reports/ClientTransactions'
import PendingTransactions from './pages/Reports/PendingTransactions'
import Performance from './pages/Reports/Performance'

// Rebates
import Approve from './pages/Rebates/Approve'

// Promo
import Materials from './pages/Promo/Materials'
import RegistrationTools from './pages/Promo/RegistrationTools'

// Support
import Contacts from './pages/Support/Contacts'
import Legal from './pages/Support/Legal'

// Settings
import AccountSettings from './pages/AccountSettings'
import PersonalInformation from './pages/PersonalInformation'
import NotificationSettings from './pages/NotificationSettings'
import MarketingIntegration from './pages/MarketingIntegration'
import ClientAllocationCheck from './pages/ClientAllocationCheck'

// Admin Pages
import AdminDashboard from './pages/Admin/Dashboard'
import IBOverview from './pages/Admin/IBOverview'
import IBRequests from './pages/Admin/IBRequests'
import IBProfiles from './pages/Admin/IBProfiles'
import TradersProfile from './pages/Admin/TradersProfile'
import MT5Groups from './pages/Admin/MT5Groups'
import CommissionStructures from './pages/Admin/CommissionStructures'
import AllSymbols from './pages/Admin/AllSymbols'
import SymbolsPipValues from './pages/Admin/SymbolsPipValues'
import IBWithdrawals from './pages/Admin/IBWithdrawals'
import WithdrawalHistory from './pages/Admin/WithdrawalHistory'
import ClientLinking from './pages/Admin/ClientLinking'

import CommissionDistribution from './pages/Admin/CommissionDistribution'
import ClaimedRewards from './pages/Admin/ClaimedRewards'
import IBReports from './pages/Admin/IBReports'
import AdminPagePlaceholder from './pages/Admin/Placeholder'

const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="h-screen flex flex-col">
        <div className="">
          <Topbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
        <div className="content flex flex-1 overflow-hidden">
          <Sidebar 
            isExpanded={isExpanded} 
            setIsExpanded={setIsExpanded} 
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Reports */}
              <Route path="/reports/contact_sharing/" element={<Clients />} />
              <Route path="/reports/clients/" element={<ClientAccounts />} />
              <Route path="/reports/rewards/" element={<Rewards />} />
              <Route path="/reports/orders/" element={<ClientTransactions />} />
              <Route path="/reports/pending/" element={<PendingTransactions />} />
              <Route path="/reports/performance/" element={<Performance />} />

              {/* Rebates */}
              <Route path="/rebates/approve" element={<Approve />} />

              {/* Promo */}
              <Route path="/promo/materials/" element={<Materials />} />
              <Route path="/promo/registration_tools/codes" element={<RegistrationTools />} />

              {/* Support */}
              <Route path="/support/" element={<Contacts />} />
              <Route path="/support/legal" element={<Legal />} />

              {/* Legacy/Extra */}
              <Route path="/fincrm-terminal" element={<FINCRMTerminal />} />
              
              {/* Account Settings */}
              <Route path="/settings/profile" element={<AccountSettings />} />
              <Route path="/settings/profile/personal-info" element={<PersonalInformation />} />
              <Route path="/settings/profile/notifications" element={<NotificationSettings />} />
              <Route path="/settings/profile/marketing-integration" element={<MarketingIntegration />} />
              <Route path="/settings/profile/client-allocation" element={<ClientAllocationCheck />} />

              {/* Admin Panel Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/ib-management" element={<IBOverview />} />
              <Route path="/admin/ib-management/requests" element={<IBRequests />} />
              <Route path="/admin/ib-management/profiles" element={<IBProfiles />} />
              <Route path="/admin/ib-management/traders" element={<TradersProfile />} />
              <Route path="/admin/ib-management/commissions" element={<MT5Groups />} />
              <Route path="/admin/ib-management/commission-structures" element={<CommissionStructures />} />
              <Route path="/admin/ib-management/all-symbols" element={<AllSymbols />} />
              
              <Route path="/admin/trading-management/symbols" element={<SymbolsPipValues />} />
              <Route path="/admin/trading-management/ib-withdrawals" element={<IBWithdrawals />} />
              <Route path="/admin/trading-management/client-linking" element={<ClientLinking />} />
              
              <Route path="/admin/reports/withdrawal-history" element={<WithdrawalHistory />} />
              
              <Route path="/admin/group-management/trading-groups" element={<MT5Groups />} />
              <Route path="/admin/group-management/commission-distribution" element={<CommissionDistribution />} />
              
              <Route path="/admin/rewards/claims" element={<ClaimedRewards />} />
              <Route path="/admin/ib-reports" element={<IBReports />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App