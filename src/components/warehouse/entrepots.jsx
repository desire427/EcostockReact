import React, { useEffect, useState } from 'react';
import WarehousePageShell from './WarehousePageShell';
import Ajouter from '../bouton/ajouter.jsx';
import Sidebar from '../sidebar/sidebar.jsx';
import WarehouseHeader from './WarehouseHeader';
import StatCard from './StatCard';
import WarehouseCard from './WarehouseCard';
import apiClient from '../api/axios.js';

function Entrepots() {
    const [warehouses, setWarehouses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchWarehouses = async () => {
        setLoading(true);
        setError('');
        try {
            const { data } = await apiClient.get('/warehouse/');
            setWarehouses(data);
        } catch {
            setError('Impossible de charger les entrepôts.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWarehouses();
    }, []);

    // Stats calculées depuis les données réelles
    const totalCapacity = warehouses.reduce((sum, w) => sum + (w.capacity || 0), 0);
    const activeCount = warehouses.length;

    const sidebar = <Sidebar />;

    return (
        <WarehousePageShell sidebar={sidebar}>
            <WarehouseHeader
                eyebrow="Infrastructure"
                title="Entrepôts"
                description="Suivi de la capacité, de l'emplacement et du niveau d'occupation de chaque site de stockage."
                actions={
                    <div className="flex items-center gap-3">
                        <Ajouter type="entrepot" onSuccess={fetchWarehouses} />
                    </div>
                }
            />

            <section className="mb-6 grid gap-4 md:grid-cols-3">
                <StatCard label="Sites actifs" value={loading ? '…' : String(activeCount)} />
                <StatCard label="Capacité totale" value={loading ? '…' : `${totalCapacity.toLocaleString('fr-FR')} m²`} />
                <StatCard label="Entrepôts" value={loading ? '…' : String(activeCount)} accent />
            </section>

            {error && (
                <p className="mb-4 rounded-xl border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-400">
                    {error}
                </p>
            )}

            {loading ? (
                <p className="text-sm text-slate-400">Chargement…</p>
            ) : (
                <section className="grid gap-6 xl:grid-cols-2">
                    {warehouses.map((warehouse) => (
                        <WarehouseCard
                            key={warehouse.id}
                            title={warehouse.name}
                            location={warehouse.location}
                            capacity={`${warehouse.capacity} m²`}
                            occupation={warehouse.occupation ?? 0}
                            responsable={warehouse.responsable ?? '—'}
                            products={String(warehouse.product_count ?? 0)}
                            actionLabel="Voir les détails"
                            actionHref={`/entrepots/${warehouse.id}`}
                        />
                    ))}
                </section>
            )}
        </WarehousePageShell>
    );
}

export default Entrepots;
