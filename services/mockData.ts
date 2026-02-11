
import { BillStatus, Customer, Bill, OperationalMetric } from '../types';

export const mockCustomers: Customer[] = [
  { id: 'CUST-10293', name: 'Ahmad Sulaiman', type: 'Residential', zone: 'Zone A - Central', address: 'Jl. Merdeka No. 45, Kebayoran', meterSerial: 'WM-8820-X1', balance: 124500, status: 'Active' },
  { id: 'CUST-10294', name: 'Maria Elizabeth', type: 'Commercial', zone: 'Zone B - North', address: 'Jl. Sudirman Blok C2', meterSerial: 'WM-8822-Y5', balance: 450200, status: 'Suspended' },
  { id: 'CUST-10295', name: 'Bambang Wijaya', type: 'Residential', zone: 'Zone A - Central', address: 'Jl. Gatot Subroto No. 12', meterSerial: 'WM-8824-A1', balance: 0, status: 'Pending' },
  { id: 'CUST-10296', name: 'Siti Aminah', type: 'Social', zone: 'Zone C - South', address: 'Komp. Melati No. 8', meterSerial: 'WM-8830-Z9', balance: 22000, status: 'Active' },
  { id: 'CUST-10297', name: 'Robert Fox', type: 'Residential', zone: 'Zone C - South', address: 'Jl. Mawar No. 3', meterSerial: 'WM-1234-K1', balance: 340000, status: 'Active' },
];

export const mockBills: Bill[] = [
  { id: '#INV-2023-001', customerId: '88201-92', customerName: 'Robert Fox', zone: 'Zone C - Central', usage: 42.5, amount: 340000, dueDate: '25 Oct 2023', status: BillStatus.PAID },
  { id: '#INV-2023-002', customerId: '88201-95', customerName: 'Jane Cooper', zone: 'Zone A - North', usage: 18.2, amount: 145600, dueDate: '28 Oct 2023', status: BillStatus.PENDING },
  { id: '#INV-2023-003', customerId: '88202-12', customerName: 'Wade Warren', zone: 'Zone B - South', usage: 65.0, amount: 520000, dueDate: '15 Oct 2023', status: BillStatus.OVERDUE },
  { id: '#INV-2023-004', customerId: '88205-01', customerName: 'Esther Howard', zone: 'Zone C - Central', usage: 24.7, amount: 197600, dueDate: '24 Oct 2023', status: BillStatus.PAID },
  { id: '#INV-2023-005', customerId: '88207-44', customerName: 'Cameron Williamson', zone: 'Zone A - North', usage: 31.0, amount: 248000, dueDate: '26 Oct 2023', status: BillStatus.PENDING },
];

export const operationalMetrics: OperationalMetric[] = [
  { month: 'Jan', distributed: 10000, billed: 9200, loss: 800 },
  { month: 'Feb', distributed: 11200, billed: 10100, loss: 1100 },
  { month: 'Mar', distributed: 10500, billed: 9800, loss: 700 },
  { month: 'Apr', distributed: 12000, billed: 10800, loss: 1200 },
  { month: 'May', distributed: 11500, billed: 10400, loss: 1100 },
  { month: 'Jun', distributed: 12500, billed: 11000, loss: 1500 },
];

export const revenueData = [
  { month: 'Mei', collection: 125430, projection: 110000 },
  { month: 'Jun', collection: 132000, projection: 125000 },
  { month: 'Jul', collection: 118000, projection: 130000 },
  { month: 'Agu', collection: 145000, projection: 140000 },
  { month: 'Sep', collection: 139000, projection: 150000 },
  { month: 'Okt', collection: 155000, projection: 155000 },
];
