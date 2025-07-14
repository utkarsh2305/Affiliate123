
export interface Affiliate {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive' | 'Pending';
  registrationDate: string;
  totalEarnings: number;
  pendingCommission: number;
  clicks: number;
  conversions: number;
  conversionRate: number;
}

export interface Order {
  id: string;
  orderDate: string;
  customerName: string;
  productName: string;
  orderAmount: number;
  commissionAmount: number;
  status: 'Completed' | 'Pending' | 'Cancelled';
  affiliate: string;
}

export interface Commission {
  id: string;
  affiliateId: string;
  orderId: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Processing';
  date: string;
  type: string;
}

export interface UserStats {
  totalEarnings: number;
  pendingCommissions: number;
  totalClicks: number;
  totalConversions: number;
  monthlyEarnings: number;
  weeklyCommissions: number;
}
