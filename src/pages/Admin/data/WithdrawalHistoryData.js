// Stats Data
export const statsData = {
  totalWithdrawals: 8,
  totalAmount: '$1,042.00',
  pending: 1,
  completed: 0
};

// Pie Chart Data: Withdrawals by Status
export const withdrawalsByStatusData = [
  { name: 'Pending', value: 1, color: '#F59E0B' }, // Yellow
  { name: 'Approved', value: 7, color: '#10B981' }, // Green
];

// Bar Chart Data: Monthly Withdrawal Trends
export const monthlyTrendsData = [
  { name: '2025-11', amount: 850 },
  { name: '2025-12', amount: 200 },
];

// Bar Chart Data: Top 10 Users by Withdrawal Amount
export const topUsersData = [
  { name: 'Parminder Singh', amount: 600 },
  { name: 'Rasik Katoch', amount: 442 },
];

// Table Data: Withdrawals by User
export const withdrawalsByUserData = [
  {
    ibName: 'Parminder Singh',
    totalRequests: 2,
    totalAmount: '$600.00',
    pending: 0,
    approved: 2,
    paid: 0,
    completed: 0,
    rejected: 0
  },
  {
    ibName: 'Rasik Katoch',
    totalRequests: 6,
    totalAmount: '$442.00',
    pending: 1,
    approved: 5,
    paid: 0,
    completed: 0,
    rejected: 0
  }
];

// Table Data: All Withdrawals
export const allWithdrawalsData = [
  {
    id: 10,
    ibName: 'Parminder Singh',
    amount: '$100.00',
    paymentMethod: 'USDT (TRC20)',
    status: 'APPROVED',
    transactionId: 'fyukfyuk',
    requestDate: '05/12/2025, 19:13:24',
    lastUpdated: '05/12/2025, 19:13:52'
  },
  {
    id: 9,
    ibName: 'Rasik Katoch',
    amount: '$100.00',
    paymentMethod: 'Bank - HDFC',
    status: 'APPROVED',
    transactionId: 'ruyguk',
    requestDate: '02/12/2025, 02:23:59',
    lastUpdated: '02/12/2025, 02:24:22'
  },
  {
    id: 8,
    ibName: 'Rasik Katoch',
    amount: '$122.00',
    paymentMethod: 'Bank - HDFC',
    status: 'PENDING',
    transactionId: '-',
    requestDate: '29/11/2025, 19:58:26',
    lastUpdated: '29/11/2025, 19:58:26'
  },
  {
    id: 7,
    ibName: 'Rasik Katoch',
    amount: '$100.00',
    paymentMethod: 'Bank - HDFC',
    status: 'APPROVED',
    transactionId: 'GYgeiuhioqw',
    requestDate: '29/11/2025, 19:38:14',
    lastUpdated: '29/11/2025, 19:40:04'
  },
  {
    id: 6,
    ibName: 'Rasik Katoch',
    amount: '$10.00',
    paymentMethod: 'Bank - HDFC',
    status: 'APPROVED',
    transactionId: '-',
    requestDate: '29/11/2025, 19:17:45',
    lastUpdated: '29/11/2025, 19:31:46'
  },
  {
    id: 5,
    ibName: 'Rasik Katoch',
    amount: '$100.00',
    paymentMethod: 'Bank - HDFC',
    status: 'APPROVED',
    transactionId: '-',
    requestDate: '29/11/2025, 19:15:16',
    lastUpdated: '29/11/2025, 19:31:46'
  },
  {
    id: 4,
    ibName: 'Parminder Singh',
    amount: '$500.00',
    paymentMethod: 'USDT (TRC20)',
    status: 'APPROVED',
    transactionId: '-',
    requestDate: '28/11/2025, 20:07:21',
    lastUpdated: '29/11/2025, 19:31:46'
  },
  {
    id: 3,
    ibName: 'Rasik Katoch',
    amount: '$10.00',
    paymentMethod: 'Bank - HDFC',
    status: 'APPROVED',
    transactionId: '-',
    requestDate: '13/11/2025, 20:51:05',
    lastUpdated: '29/11/2025, 19:31:46'
  }
];
