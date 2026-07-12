import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WarehousePageShell from './WarehousePageShell';
import Retour from '../bouton/retour.jsx';
import Modifier from '../bouton/modifier.jsx';
import Supprimer from '../bouton/supprimer.jsx';
import Sidebar from '../sidebar/sidebar.jsx';
import WarehouseHeader from './WarehouseHeader';
import DetailWarehouseInfo from './DetailWarehouseInfo';
import WarehouseProductsList from './WarehouseProductsList';
import apiClient from '../api/axios.js';

function DetailEntrepots() {
    const { id } = useParams();

    const [warehouse, setWarehouse] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        setLoading(true);
        setError('');
        try {
            const [warehouseRes, productsRes] = await Promise.all([
                apiClient.get(`/warehouse/${id}/`),
                apiClient.get(`/products/?warehouse=${id}`),
            ]);
            setWarehouse(warehouseRes.data);
            setProducts(productsRes.data);
        } catch {
            setError('Impossible de charger les données de l\'entrepôt.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const sidebar = <Sidebar />;

    if (loading) {
        return (
            <WarehousePageShell sidebar={sidebar}>
                <p className="text-sm text-slate-400">Chargement…</p>
            </WarehousePageShell>
        );
    }

    if (error || !warehouse) {
        return (
            <WarehousePageShell sidebar={sidebar}>
                <p className="rounded-xl border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-400">
                    {error || 'Entrepôt introuvable.'}
                </p>
            </WarehousePageShell>
        );
    }

    const infoItems = [
        { label: 'Nom', value: warehouse.name },
        { label: 'Localisation', value: warehouse.location },
        { label: 'Capacité', value: `${warehouse.capacity} m²` },
        { label: 'Responsable', value: warehouse.responsable ?? '—' },
    ];

    const productItems = products.map((p) => ({
        name: p.name,
        details: `${p.quantity} unité${p.quantity > 1 ? 's' : ''} • ${
            new Date(p.expiration_date) < new Date() ? 'Expiré' : 'Disponible'
        }`,
    }));

    return (
        <WarehousePageShell sidebar={sidebar}>
            <WarehouseHeader
                eyebrow="Site de stockage"
                title={warehouse.name}
                description="Informations complètes sur la capacité, la localisation et les produits actuellement stockés."
                actions={
                    <div className="flex items-center gap-3">
                        <Retour to="/entrepots" />
                        <Modifier type="entrepot" warehouseId={id} warehouseData={warehouse} onSuccess={fetchData} />
                        <Supprimer type="entrepot" warehouseId={id} />
                    </div>
                }
            />

            <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                <DetailWarehouseInfo
                    title="Informations générales"
                    subtitle="Vue d'ensemble de l'installation et de ses performances."
                    items={infoItems}
                />

                <WarehouseProductsList
                    title="Produits dans l'entrepôt"
                    subtitle="Liste des articles actuellement enregistrés."
                    countLabel={`${products.length} article${products.length > 1 ? 's' : ''}`}
                    products={productItems}
                />
            </section>
        </WarehousePageShell>
    );
}

export default DetailEntrepots;
