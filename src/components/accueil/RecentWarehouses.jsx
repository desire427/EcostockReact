import React from 'react';

function RecentWarehouses({ warehouses = [], loading = false }) {
  // 3 derniers entrepôts par id décroissant
  const recent = [...warehouses]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">Derniers entrepôts</h3>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-200">
          {loading ? '…' : `${recent.length} site${recent.length > 1 ? 's' : ''}`}
        </span>
      </div>
      <div className="space-y-3">
        {loading ? (
          <p className="text-sm text-slate-400">Chargement…</p>
        ) : recent.length === 0 ? (
          <p className="text-sm text-slate-400">Aucun entrepôt enregistré.</p>
        ) : (
          recent.map((warehouse) => (
            <div key={warehouse.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white">{warehouse.name}</p>
              </div>
              <p className="mt-1 text-sm text-slate-400">
                {warehouse.location} • Capacité {warehouse.capacity.toLocaleString('fr-FR')} m²
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecentWarehouses;
