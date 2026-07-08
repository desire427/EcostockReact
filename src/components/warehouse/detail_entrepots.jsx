import React from 'react';
import { Link } from 'react-router-dom';
import WarehousePageShell from './WarehousePageShell';
import WarehouseSidebar from './WarehouseSidebar';
import WarehouseHeader from './WarehouseHeader';
import DetailWarehouseInfo from './DetailWarehouseInfo';
import WarehouseProductsList from './WarehouseProductsList';

function DetailEntrepots() {
    const sidebar = (
        <WarehouseSidebar
            subtitle="Détail entrepôt"
            navItems={[
                { label: 'Accueil', href: '/accueil', active: false },
                { label: 'Produits', href: '/produits', active: false },
                { label: 'Entrepôts', href: '/entrepots', active: true },
            ]}
            footerTitle="Logistique"
            footerDescription="Suivi des stocks"
            footerActionLabel="Se déconnecter"
        />
    );

    return (
        <WarehousePageShell sidebar={sidebar}>
            <WarehouseHeader
                eyebrow="Site de stockage"
                title="Entrepôt principal"
                description="Informations complètes sur la capacité, la localisation et les produits actuellement stockés."
                actions={
                    <>
                        <Link to="/entrepots" className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-800">
                            Retour
                        </Link>
                        <button className="rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
                            Gérer
                        </button>
                    </>
                }
            />

            <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                <DetailWarehouseInfo
                    title="Informations générales"
                    subtitle="Vue d’ensemble de l’installation et de ses performances."
                    items={[
                        { label: 'Nom', value: 'Entrepôt principal' },
                        { label: 'Localisation', value: 'Quartier central' },
                        { label: 'Capacité', value: '4 200 m²' },
                        { label: 'Responsable', value: 'Jean M.' },
                    ]}
                />

                <WarehouseProductsList
                    title="Produits dans l’entrepôt"
                    subtitle="Liste des articles actuellement enregistrés."
                    countLabel="145 articles"
                    products={[
                        { name: 'Produit A', details: '84 unités • Disponible' },
                        { name: 'Produit C', details: '32 unités • Normal' },
                        { name: 'Produit D', details: '59 unités • Disponible' },
                    ]}
                />
            </section>
        </WarehousePageShell>
    )
}

export default DetailEntrepots;