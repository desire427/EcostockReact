import React from 'react';
import { Link } from 'react-router-dom';
import WarehousePageShell from './WarehousePageShell';
import WarehouseSidebar from './WarehouseSidebar';
import WarehouseHeader from './WarehouseHeader';
import StatCard from './StatCard';
import WarehouseCard from './WarehouseCard';

function Entrepots() {
    const sidebar = (
        <WarehouseSidebar
            subtitle="Gestion des entrepôts"
            navItems={[
                { label: 'Accueil', href: '/accueil', active: false },
                { label: 'Produits', href: '/produits', active: false },
                { label: 'Entrepôts', href: '/entrepots', active: true },
                { label: 'Rapports', href: '#', active: false },
                { label: 'Paramètres', href: '#', active: false },
            ]}
            footerTitle="Opérations"
            footerDescription="Logistique"
            footerActionLabel="Se déconnecter"
        />
    );

    return (
        <WarehousePageShell sidebar={sidebar}>
            <WarehouseHeader
                eyebrow="Infrastructure"
                title="Entrepôts"
                description="Suivi de la capacité, de l’emplacement et du niveau d’occupation de chaque site de stockage."
                actions={
                    <Link to="/produits" className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-800">
                        Voir les produits
                    </Link>
                }
            />

            <section className="mb-6 grid gap-4 md:grid-cols-3">
                <StatCard label="Sites actifs" value="4" />
                <StatCard label="Capacité totale" value="12 800 m²" />
                <StatCard label="Taux d’occupation" value="78%" accent />
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
                <WarehouseCard
                    title="Entrepôt principal"
                    location="Quartier central"
                    capacity="4 200 m²"
                    occupation={82}
                    responsable="Jean M."
                    products="145"
                    actionLabel="Voir les détails"
                    actionHref="/entrepots/1"
                />
                <WarehouseCard
                    title="Entrepôt secondaire"
                    location="Zone industrielle"
                    capacity="3 100 m²"
                    occupation={63}
                    responsable="Aline K."
                    products="92"
                    actionLabel="Voir les détails"
                    actionHref="/entrepots/2"
                />
            </section>
        </WarehousePageShell>
    )
}

export default Entrepots;