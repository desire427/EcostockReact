import React from 'react';

function RecentProducts({ products = [], loading = false }) {
  // 5 derniers produits (l'API retourne tous les produits, on prend les 5 derniers par id)
  const recent = [...products]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">Produits récents</h3>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-200">
          {loading ? '…' : `${recent.length} dernier${recent.length > 1 ? 's' : ''}`}
        </span>
      </div>
      <div className="space-y-3">
        {loading ? (
          <p className="text-sm text-slate-400">Chargement…</p>
        ) : recent.length === 0 ? (
          <p className="text-sm text-slate-400">Aucun produit enregistré.</p>
        ) : (
          recent.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3"
            >
              <div>
                <p className="font-medium text-white">{product.name}</p>
                <p className="text-sm text-slate-400">
                  {product.quantity} unité{product.quantity > 1 ? 's' : ''} • {product.warehouse_name ?? '—'}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecentProducts;
