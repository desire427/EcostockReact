import React from 'react';
import AccueilLayout from './AccueilLayout';
import Sidebar from '../sidebar/sidebar.jsx';
import AccueilHeader from './AccueilHeader';
import StatCard from './StatCard';
import ChartsSection from './ChartsSection';
import RecentProducts from './RecentProducts';
import RecentWarehouses from './RecentWarehouses';

function Accueil() {
  return (
    <AccueilLayout sidebar={<Sidebar />}>
      <AccueilHeader />

      <section className="mb-6 grid gap-4 md:grid-cols-3 xl:grid-cols-3">
        <StatCard label="Produits enregistrés" value="145" />
        <StatCard label="Stock faible" value="12" />
        <StatCard label="Taux d'occupation" value="78%" />
      </section>

      <ChartsSection />

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <RecentProducts />
        <RecentWarehouses />
      </section>
    </AccueilLayout>
  );
}

export default Accueil;

