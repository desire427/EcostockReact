import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/axios.js';

function SupprimerF({ type = 'produit', onClose, onSuccess, warehouseId, productId }) {
  const normalizedType = String(type || '').toLowerCase().trim();
  const isProduct = ['produit', 'product', 'produits'].includes(normalizedType);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    setError('');

    if (isProduct) {
      if (!productId) {
        setError('Impossible d’identifier le produit à supprimer.');
        return;
      }

      setLoading(true);
      try {
        await apiClient.delete(`/products/${productId}/`);
        if (onSuccess) onSuccess();
        onClose();
        navigate('/produits');
      } catch {
        setError('Impossible de supprimer le produit. Réessayez.');
      } finally {
        setLoading(false);
      }
      return;
    }

    setLoading(true);
    try {
      await apiClient.delete(`/warehouse/${warehouseId}/`);
      if (onSuccess) onSuccess();
      onClose();
      navigate('/entrepots');
    } catch {
      setError('Impossible de supprimer l\'entrepôt. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-slate-950/70">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/50 animate-in fade-in zoom-in-95 duration-200">
        <div className="mb-4 flex items-center gap-3 text-red-500">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-xl font-semibold text-white">Confirmer la suppression</h3>
        </div>

        <p className="text-sm text-slate-400">
          Êtes-vous sûr de vouloir supprimer ce{isProduct ? ' produit' : 't entrepôt'} ? Cette action est irréversible et retirera définitivement les données du système.
        </p>

        {error && (
          <p className="mt-4 rounded-xl border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-400">
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
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition disabled:opacity-60"
          >
            {loading ? 'Suppression…' : 'Supprimer'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SupprimerF;
