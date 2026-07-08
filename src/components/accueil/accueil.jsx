import React from 'react';
import AccueilLayout from './AccueilLayout';
import AccueilSidebar from './AccueilSidebar';
import AccueilHeader from './AccueilHeader';
import StatCard from './StatCard';
import ChartsSection from './ChartsSection';
import RecentProducts from './RecentProducts';
import RecentWarehouses from './RecentWarehouses';

function Accueil() {
  return (
    <AccueilLayout sidebar={<AccueilSidebar />}>
      <AccueilHeader />

      <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Entrepôts actifs" value="4" detail="+1 cette semaine" />
        <StatCard label="Produits enregistrés" value="145" detail="Basé sur le modèle Product" />
        <StatCard label="Stock faible" value="12" detail="À réapprovisionner" />
        <StatCard label="Taux d'occupation" value="78%" detail="Capacité globale utilisée" accent />
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

