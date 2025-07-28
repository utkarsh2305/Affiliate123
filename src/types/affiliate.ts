
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
  daysSinceLastOrder?: number;
}

export interface Order {
  id: string;
  orderDate: string;
  customerName: string;
  productName: string;
  orderAmount: number;
  status: 'Completed' | 'Pending' | 'Processing' | 'Cancelled';
  affiliate: string;
  fao: string; // Order Assigned to: person's name and mobile number
  retailerId?: string;
  voucherCode?: string;
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
  qualifiedOrdersMTD: number;
  projectedCommission: number;
  qualifiedCommission: number;
  monthlyCommission: number;
  totalOrders: number;
  completedOrders: number;
  pendingOrders: number;
}

export interface Retailer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
  registrationDate: string;
  affiliateId: string;
  daysSinceLastOrder: number;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success';
  date: string;
}
