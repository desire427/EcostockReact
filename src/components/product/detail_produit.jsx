import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailLayout from './DetailLayout.jsx';
import DetailHeader from './DetailHeader.jsx';
import DetailOverview from './DetailOverview.jsx';
import DetailSummary from './DetailSummary.jsx';
import apiClient from '../api/axios.js';

function DetailProduit() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProduct = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await apiClient.get(`/products/${id}/`);
      setProduct(response.data);
    } catch {
      setError('Impossible de charger les informations du produit depuis l’API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <DetailLayout>
        <p className="text-sm text-slate-400">Chargement du produit…</p>
      </DetailLayout>
    );
  }

  if (error || !product) {
    return (
      <DetailLayout>
        <p className="rounded-xl border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-400">
          {error || 'Produit introuvable.'}
        </p>
      </DetailLayout>
    );
  }

  return (
    <DetailLayout>
      <DetailHeader product={product} onRefresh={fetchProduct} />
      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <DetailOverview product={product} />
        <DetailSummary product={product} />
      </section>
    </DetailLayout>
  );
}

export default DetailProduit;
