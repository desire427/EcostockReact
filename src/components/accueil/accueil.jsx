import React, { useEffect, useState } from 'react';
import AccueilLayout from './AccueilLayout';
import Sidebar from '../sidebar/sidebar.jsx';
import AccueilHeader from './AccueilHeader';
import StatCard from './StatCard';
import ChartsSection from './ChartsSection';
import RecentProducts from './RecentProducts';
import RecentWarehouses from './RecentWarehouses';
import apiClient from '../api/axios.js';

function Accueil() {
  const [stats, setStats] = useState(null);
  const [products, setProducts] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [statsRes, productsRes, warehousesRes] = await Promise.all([
          apiClient.get('/products/stats/'),
          apiClient.get('/products/'),
          apiClient.get('/warehouse/'),
        ]);
        setStats(statsRes.data);
        setProducts(productsRes.data);
        setWarehouses(warehousesRes.data);
      } catch {
        // En cas d'erreur, on garde les états vides — les composants gèrent l'affichage
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <AccueilLayout sidebar={<Sidebar />}>
      <AccueilHeader />

      <section className="mb-6 grid gap-4 md:grid-cols-3 xl:grid-cols-3">
        <StatCard
          label="Produits enregistrés"
          value={loading ? '…' : String(stats?.total_products ?? 0)}
        />
        <StatCard
          label="Stock faible"
          value={loading ? '…' : String(stats?.a_surveiller ?? 0)}
        />
        <StatCard
          label="Entrepôts actifs"
          value={loading ? '…' : String(warehouses.length)}
        />
      </section>

      <ChartsSection products={products} warehouses={warehouses} loading={loading} />

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <RecentProducts products={products} loading={loading} />
        <RecentWarehouses warehouses={warehouses} loading={loading} />
      </section>
    </AccueilLayout>
  );
}

export default Accueil;
