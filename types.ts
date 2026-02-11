
export enum BillStatus {
  PAID = 'Paid',
  PENDING = 'Pending',
  OVERDUE = 'Overdue'
}

export interface Customer {
  id: string;
  name: string;
  type: 'Residential' | 'Commercial' | 'Social';
  zone: string;
  address: string;
  meterSerial: string;
  balance: number;
  status: 'Active' | 'Suspended' | 'Pending';
}

export interface Bill {
  id: string;
  customerId: string;
  customerName: string;
  zone: string;
  usage: number; // m3
  amount: number; // IDR
  dueDate: string;
  status: BillStatus;
}

export interface OperationalMetric {
  month: string;
  distributed: number;
  billed: number;
  loss: number;
}
