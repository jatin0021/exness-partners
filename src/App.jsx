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
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App