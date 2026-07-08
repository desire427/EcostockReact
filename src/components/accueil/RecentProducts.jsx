import React from 'react';

function RecentProducts() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">Produits récents</h3>
          <p className="mt-1 text-sm text-slate-400">Derniers enregistrements issus du modèle Product</p>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-200">5 derniers</span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
          <div>
            <p className="font-medium text-white">Produit A</p>
            <p className="text-sm text-slate-400">84 unités • Entrepôt principal</p>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">Disponible</span>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
          <div>
            <p className="font-medium text-white">Produit C</p>
            <p className="text-sm text-slate-400">32 unités • Entrepôt secondaire</p>
          </div>
          <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-xs font-medium text-amber-300">À surveiller</span>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
          <div>
            <p className="font-medium text-white">Produit D</p>
            <p className="text-sm text-slate-400">59 unités • Entrepôt nord</p>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">Disponible</span>
        </div>
      </div>
    </div>
  );
}

export default RecentProducts;
