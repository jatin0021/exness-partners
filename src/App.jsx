import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import ExnessTerminal from './pages/Trading/ExnessTerminal'
import MyAccount from './pages/Trading/MyAccount'
import Performance from './pages/Trading/Performance'
import HistoryOfOrders from './pages/Trading/HistoryOfOrders'

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
              <Route path="/" element={<MyAccount />} />
              <Route path="/dashboard" element={<MyAccount />} />
              <Route path="/exness-terminal" element={<ExnessTerminal />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/history-of-orders" element={<HistoryOfOrders />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App