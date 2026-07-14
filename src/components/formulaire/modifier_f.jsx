import React, { useEffect, useState } from 'react';
import apiClient from '../api/axios.js';

function ModifierF({ type = 'produit', onClose, onSuccess, warehouseId, warehouseData: initialWarehouse, productId, productData: initialProductData }) {
  const normalizedType = String(type || '').toLowerCase().trim();
  const isProduct = ['produit', 'product', 'produits'].includes(normalizedType);

  const [productData, setProductData] = useState({
    name: initialProductData?.name ?? '',
    quantity: initialProductData?.quantity ?? '',
    expiration: initialProductData?.expiration_date ?? '',
    warehouse: initialProductData?.warehouse ?? '',
  });

  const [warehouseData, setWarehouseData] = useState({
    name: initialWarehouse?.name ?? '',
    location: initialWarehouse?.location ?? '',
    capacity: initialWarehouse?.capacity ?? '',
  });

  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [warehousesLoading, setWarehousesLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialProductData) {
      setProductData({
        name: initialProductData.name ?? '',
        quantity: initialProductData.quantity ?? '',
        expiration: initialProductData.expiration_date ?? '',
        warehouse: initialProductData.warehouse ?? '',
      });
    }
  }, [initialProductData]);

  useEffect(() => {
    if (initialWarehouse) {
      setWarehouseData({
        name: initialWarehouse.name ?? '',
        location: initialWarehouse.location ?? '',
        capacity: initialWarehouse.capacity ?? '',
      });
    }
  }, [initialWarehouse]);

  useEffect(() => {
    const loadWarehouses = async () => {
      if (!isProduct) return;
      setWarehousesLoading(true);
      try {
        const response = await apiClient.get('/warehouse/');
        setWarehouses(response.data || []);
      } catch {
        setWarehouses([]);
      } finally {
        setWarehousesLoading(false);
      }
    };

    loadWarehouses();
  }, [isProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isProduct) {
      if (!productId) {
        setError('Impossible d’identifier le produit à modifier.');
        return;
      }

      setLoading(true);
      try {
        await apiClient.patch(`/products/${productId}/`, {
          name: productData.name,
          quantity: Number(productData.quantity),
          expiration_date: productData.expiration,
          warehouse: productData.warehouse ? Number(productData.warehouse) : initialProductData?.warehouse,
        });
        if (onSuccess) onSuccess();
        onClose();
      } catch (err) {
        const detail = err.response?.data;
        if (detail && typeof detail === 'object') {
          const messages = Object.values(detail).flat().join(' ');
          setError(messages || 'Une erreur est survenue.');
        } else {
          setError('Impossible de modifier le produit. Réessayez.');
        }
      } finally {
        setLoading(false);
      }
      return;
    }

    setLoading(true);
    try {
      await apiClient.patch(`/warehouse/${warehouseId}/`, {
        name: warehouseData.name,
        location: warehouseData.location,
        capacity: Number(warehouseData.capacity),
      });
      if (onSuccess) onSuccess();
      onClose();
    } catch (err) {
      const detail = err.response?.data;
      if (detail && typeof detail === 'object') {
        const messages = Object.values(detail).flat().join(' ');
        setError(messages || 'Une erreur est survenue.');
      } else {
        setError('Impossible de modifier l\'entrepôt. Réessayez.');
      }
    } finally {
      setLoading(false);
    }
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
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Quantité</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={productData.quantity}
                    onChange={(e) => setProductData({ ...productData, quantity: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Date d'expiration</label>
                  <input
                    type="date"
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
                  disabled={warehousesLoading}
                >
                  {warehousesLoading ? (
                    <option value="">Chargement des entrepôts…</option>
                  ) : warehouses.length > 0 ? (
                    warehouses.map((warehouse) => (
                      <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                    ))
                  ) : (
                    <option value="">Aucun entrepôt disponible</option>
                  )}
                </select>
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

              <div className="grid gap-4 sm:grid-cols-1">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Capacité (m²)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={warehouseData.capacity}
                    onChange={(e) => setWarehouseData({ ...warehouseData, capacity: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
                  />
                </div>
              </div>
            </>
          )}

          {error && (
            <p className="rounded-xl border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-400">
              {error}
            </p>
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
              disabled={loading}
              className="rounded-xl px-4 py-2.5 text-sm font-medium transition bg-white text-slate-900 hover:bg-slate-200 disabled:opacity-60"
            >
              {loading ? 'Enregistrement…' : 'Enregistrer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifierF;
