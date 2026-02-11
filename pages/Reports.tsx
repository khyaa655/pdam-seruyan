
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { operationalMetrics } from '../services/mockData';

const Reports: React.FC = () => {
  return (
    <div className="p-8 space-y-10 custom-scrollbar animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Laporan & Analitik</h2>
          <p className="text-slate-500 mt-1">Pantau kinerja operasional dan kebocoran air (NRW) secara mendalam.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined text-lg">calendar_month</span> Pilih Periode
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
            <span className="material-symbols-outlined text-lg">download</span> Eksport Laporan
          </button>
        </div>
      </div>

      {/* Operational Reports Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">engineering</span>
          <h3 className="text-xl font-bold text-slate-800">Laporan Operasional</h3>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className="font-bold text-slate-800">Water Loss vs Distribution (NRW)</h4>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Trend 6 Bulan Terakhir (m³)</p>
            </div>
            <span className="bg-rose-50 text-rose-600 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest border border-rose-100">-2.4% NRW</span>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={operationalMetrics} barGap={0}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
                <Bar name="Distribusi" dataKey="distributed" fill="#c7d2fe" radius={[4, 4, 0, 0]} barSize={40} />
                <Bar name="Terjual/Tertagih" dataKey="billed" fill="#1142d4" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Downloadable Reports Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">file_download</span>
            <h3 className="text-xl font-bold text-slate-800">Unduh Laporan Formal</h3>
          </div>
          <div className="flex gap-2">
            <select className="text-xs font-bold py-1.5 pl-3 pr-8 border-slate-200 rounded-lg bg-white focus:ring-primary/20">
              <option>Semua Kategori</option>
              <option>Keuangan</option>
              <option>Operasional</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {[
            { title: 'Laporan Laba Rugi Konsolidasi - Juli 2024', cat: 'Keuangan', size: '4.2 MB', updated: '2 jam yang lalu', status: 'Terverifikasi Direksi', color: 'red', icon: 'picture_as_pdf' },
            { title: 'Rekapitulasi Pemakaian Air Per Wilayah (XLSX)', cat: 'Operasional', size: '12.8 MB', updated: 'Kemarin', status: 'Draft Internal', color: 'green', icon: 'description' },
            { title: 'Laporan Sambungan Baru & Putus Segel - Q2 2024', cat: 'Pelanggan', size: '2.1 MB', updated: '15 Jul 2024', status: 'Arsip Publik', color: 'blue', icon: 'picture_as_pdf' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between hover:border-primary/40 transition-all cursor-pointer group shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-${item.color}-50 text-${item.color}-600 rounded-xl flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h5 className="font-bold text-slate-700 group-hover:text-primary transition-colors">{item.title}</h5>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Kategori: {item.cat} • {item.size} • Diperbarui {item.updated}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Status Dokumen</p>
                  <p className="text-xs font-bold text-slate-600">{item.status}</p>
                </div>
                <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reports;
