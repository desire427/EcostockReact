import React, { useState } from 'react';

function ModifierF({ type = 'produit', onClose }) {
  const isProduct = type === 'produit';

  // State pour pré-remplir les données de démonstration de manière modifiable
  const [productData, setProductData] = useState({
    name: 'Produit A',
    quantity: '84 unités',
    expiration: '15/09/2026',
    warehouse: 'Principal',
    alertThreshold: '10 unités',
    location: 'Étagère B-12'
  });

  const [warehouseData, setWarehouseData] = useState({
    name: 'Entrepôt principal',
    location: 'Quartier central',
    capacity: '4 200 m²',
    responsable: 'Jean M.'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de modification
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-slate-950/70">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/50 animate-in fade-in zoom-in-95 duration-200">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {isProduct ? 'Modifier le produit' : 'Modifier l\'entrepôt'}
            </h3>
            <p className="mt-1 text-sm text-slate-400">Ajustez les informations ci-dessous.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-800 p-1.5 text-slate-400 hover:bg-slate-700 hover:text-white transition"
          >
            <span className="sr-only">Fermer</span>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isProduct ? (
            <>
              <div className="grid gap-4 sm:grid-cols-1">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Nom du produit</label>
                  <input
                    type="text"
                    required
                    value={productData.name}
                    onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                  />
                </div>
                <div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Quantité</label>
                  <input
                    type="text"
                    required
                    value={productData.quantity}
                    onChange={(e) => setProductData({ ...productData, quantity: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Date d'expiration</label>
                  <input
                    type="text"
                    required
                    value={productData.expiration}
                    onChange={(e) => setProductData({ ...productData, expiration: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Entrepôt de stockage</label>
                <select
                  value={productData.warehouse}
                  onChange={(e) => setProductData({ ...productData, warehouse: e.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                >
                  <option value="Principal">Entrepôt principal</option>
                  <option value="Secondaire">Entrepôt secondaire</option>
                  <option value="Central">Entrepôt central</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Seuil d'alerte</label>
                  <input
                    type="text"
                    required
                    value={productData.alertThreshold}
                    onChange={(e) => setProductData({ ...productData, alertThreshold: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Emplacement</label>
                  <input
                    type="text"
                    required
                    value={productData.location}
                    onChange={(e) => setProductData({ ...productData, location: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Nom de l'entrepôt</label>
                <input
                  type="text"
                  required
                  value={warehouseData.name}
                  onChange={(e) => setWarehouseData({ ...warehouseData, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Localisation</label>
                <input
                  type="text"
                  required
                  value={warehouseData.location}
                  onChange={(e) => setWarehouseData({ ...warehouseData, location: e.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Capacité</label>
                  <input
                    type="text"
                    required
                    value={warehouseData.capacity}
                    onChange={(e) => setWarehouseData({ ...warehouseData, capacity: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Responsable</label>
                  <input
                    type="text"
                    required
                    value={warehouseData.responsable}
                    onChange={(e) => setWarehouseData({ ...warehouseData, responsable: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                  />
                </div>
              </div>
            </>
          )}

          <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-350 hover:bg-slate-800 transition"
            >
              Annuler
            </button>
            <button
              type="submit"
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                isProduct
                  ? 'bg-white text-slate-900 hover:bg-slate-200'
                  : 'bg-white text-slate-900 hover:bg-slate-200'
              }`}
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifierF;
