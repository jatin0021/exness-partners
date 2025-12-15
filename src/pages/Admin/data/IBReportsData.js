export const ibReportsStats = {
  totalIBs: { value: 4, subtext: "3 Active" },
  totalCommission: { value: "$174.70", subtext: "Fixed: $0.00 | Spread: $174.70" },
  totalVolume: { value: "$88.37M", subtext: "883.72 Lots" },
  totalClients: { value: 11, subtext: "7 New | 3 IBs" },
  pendingWithdrawals: { value: "$122.00", subtext: "1 Requests" },
  rewardClaims: { value: 3, subtext: "2 Pending" }
};

export const topPerformersData = [
  {
    name: "Parminder Singh",
    email: "shera1355@gmail.com",
    status: "Approved",
    totalCommission: "$106.45",
    totalVolume: "$54.83M",
    clients: 6,
    trades: 85
  },
  {
    name: "Parminder Singh",
    email: "parminder@zuperior.com",
    status: "Pending",
    totalCommission: "$47.06",
    totalVolume: "$15.10M",
    clients: 3,
    trades: 30
  },
  {
    name: "Rasik Katoch",
    email: "katochrasik795@gmail.com",
    status: "Approved",
    totalCommission: "$21.19",
    totalVolume: "$18.44M",
    clients: 4,
    trades: 191
  }
];

export const commissionBreakdownData = [
  {
    name: "Parminder Singh",
    email: "shera1355@gmail.com",
    totalCommission: "$106.45",
    fixedCommission: "$0.00",
    spreadCommission: "$106.45"
  },
  {
    name: "Parminder Singh",
    email: "parminder@zuperior.com",
    totalCommission: "$47.06",
    fixedCommission: "$0.00",
    spreadCommission: "$47.06"
  },
  {
    name: "Rasik Katoch",
    email: "katochrasik795@gmail.com",
    totalCommission: "$21.19",
    fixedCommission: "$0.00",
    spreadCommission: "$21.19"
  }
];

export const commissionTrendsData = [
  { date: '2025-11-20', total: 60, fixed: 0, spread: 60 },
  { date: '2025-12-10', total: 100, fixed: 0, spread: 100 },
  { date: '2025-12-15', total: 130, fixed: 0, spread: 130 },
];

export const tradingVolumeTrendsData = [
  { date: '2025-12-01', volume: 50 },
  { date: '2025-12-05', volume: 80 },
];

export const ibStatusDistributionData = [
  { name: 'Approved', value: 75, color: '#16A34A' },
  { name: 'Pending', value: 25, color: '#F59E0B' },
];

export const clientGrowthData = [
  { date: '2025-12-01', newClients: 2 },
  { date: '2025-12-05', newClients: 6 },
];

export const withdrawalAnalysisData = [
  { date: '2025-11-28', completed: 20, paid: 20, pending: 0 },
  { date: '2025-11-29', completed: 50, paid: 50, pending: 0 },
  { date: '2025-12-01', completed: 80, paid: 80, pending: 0 },
  { date: '2025-12-05', completed: 110, paid: 110, pending: 30 },
];

export const rewardClaimsStatusData = [
  { name: 'Fulfilled', value: 33, color: '#8B5CF6' },
  { name: 'Pending', value: 67, color: '#16A34A' },
];

export const topPerformersByCommissionData = [
  { name: 'Parminder Singh', commission: 106.45 },
  { name: 'Parminder Singh', commission: 47.06 },
  { name: 'Rasik Katoch', commission: 21.19 },
];
