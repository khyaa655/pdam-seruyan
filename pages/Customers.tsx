
import React from 'react';
import { mockCustomers } from '../services/mockData';

const Customers: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Manajemen Pelanggan</h2>
          <p className="text-slate-500 mt-1">Database lengkap sambungan air dan status pelayanan pelanggan.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
          <span className="material-symbols-outlined text-lg">person_add</span> Tambah Pelanggan Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Pelanggan', value: '12.450', change: '+2.1%', trend: 'up' },
          { label: 'Koneksi Aktif', value: '11.200', change: '+0.5%', trend: 'up' },
          { label: 'Non-Aktif/Putus', value: '1.250', change: '-1.2%', trend: 'down' },
          { label: 'Registrasi Baru', value: '84', change: '+12%', trend: 'up' },
        ].map((card, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2">{card.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-black text-slate-900">{card.value}</h3>
              <span className={`text-[10px] font-bold flex items-center gap-0.5 ${card.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                {card.change} <span className="material-symbols-outlined text-xs">trending_{card.trend}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">ID Pelanggan</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nama Lengkap</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Wilayah / Alamat</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nomor Meter</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Saldo Saat Ini</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-center"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockCustomers.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4"><span className="text-sm font-bold text-slate-900">{c.id}</span></td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">{c.name}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{c.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-700">{c.zone}</span>
                      <span className="text-[10px] text-slate-400 font-medium truncate w-48">{c.address}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className="text-sm font-mono font-medium text-slate-500">{c.meterSerial}</span></td>
                  <td className="px-6 py-4"><span className="text-sm font-bold text-slate-900">Rp {c.balance.toLocaleString('id-ID')}</span></td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      c.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 
                      c.status === 'Suspended' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500" title="View Details">
                        <span className="material-symbols-outlined text-xl">visibility</span>
                      </button>
                      <button className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500" title="Edit">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
