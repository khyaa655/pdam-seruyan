
import React, { useState } from 'react';
import { mockBills } from '../services/mockData';
import { BillStatus } from '../types';

const Billing: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredBills = filter === 'All' 
    ? mockBills 
    : mockBills.filter(b => b.status === filter);

  const getStatusColor = (status: BillStatus) => {
    switch(status) {
      case BillStatus.PAID: return 'bg-emerald-100 text-emerald-700';
      case BillStatus.PENDING: return 'bg-amber-100 text-amber-700';
      case BillStatus.OVERDUE: return 'bg-rose-100 text-rose-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Manajemen Tagihan</h2>
          <p className="text-slate-500 mt-1">Pantau dan kelola faktur pemakaian air pelanggan di seluruh zona.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
            <span className="material-symbols-outlined text-lg">download</span> Eksport
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">add_circle</span> Buat Tagihan
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        {/* Filter Toolbar */}
        <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl w-fit">
            {['All', BillStatus.PENDING, BillStatus.PAID, BillStatus.OVERDUE].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  filter === f 
                    ? 'bg-white shadow-sm text-primary' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {f === 'All' ? 'Semua Tagihan' : f}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Zona:</label>
              <select className="bg-slate-50 border-none rounded-lg text-xs font-bold py-1.5 pl-3 pr-8 focus:ring-2 focus:ring-primary/20">
                <option>Semua Wilayah</option>
                <option>Zone A - North</option>
                <option>Zone B - South</option>
                <option>Zone C - Central</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Periode:</label>
              <select className="bg-slate-50 border-none rounded-lg text-xs font-bold py-1.5 pl-3 pr-8 focus:ring-2 focus:ring-primary/20">
                <option>Okt 2023</option>
                <option>Sep 2023</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Bill ID</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pelanggan</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Wilayah</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Pemakaian (m³)</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Jumlah Tagihan</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Jatuh Tempo</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-center"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredBills.map((bill) => (
                <tr key={bill.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-primary hover:underline cursor-pointer">{bill.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">{bill.customerName}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">ID: {bill.customerId}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500">{bill.zone}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 text-center">{bill.usage} m³</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 text-right">Rp {bill.amount.toLocaleString('id-ID')}</td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500 whitespace-nowrap">{bill.dueDate}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${getStatusColor(bill.status)}`}>
                      {bill.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-slate-300 group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-500">Menampilkan <span className="font-bold text-slate-900">1</span> sampai <span className="font-bold text-slate-900">{filteredBills.length}</span> dari <span className="font-bold text-slate-900">1.240</span> tagihan</p>
          <div className="flex items-center gap-2">
            <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
            <button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-sm">1</button>
            <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 text-xs font-bold hover:bg-white transition-all">2</button>
            <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 text-xs font-bold hover:bg-white transition-all">3</button>
            <span className="text-slate-300 mx-1">...</span>
            <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
