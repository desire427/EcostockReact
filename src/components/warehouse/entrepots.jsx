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
    const [warehouseProducts, setWarehouseProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getConnectedUserName = () => {
        const storedUser = localStorage.getItem('current_user');
        if (storedUser) return storedUser;

        const token = localStorage.getItem('access_token');
        if (!token) return 'Utilisateur';

        try {
            const payload = token.split('.')[1];
            const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
            return decoded.username || decoded.user_name || 'Utilisateur';
        } catch {
            return 'Utilisateur';
        }
    };

    const fetchWarehouses = async () => {
        setLoading(true);
        setError('');
        try {
            const { data } = await apiClient.get('/warehouse/');
            setWarehouses(data);

            const counts = {};
            const promises = data.map(async (warehouse) => {
                try {
                    const response = await apiClient.get(`/products/?warehouse=${warehouse.id}`);
                    counts[warehouse.id] = response.data?.length ?? 0;
                } catch {
                    counts[warehouse.id] = 0;
                }
            });

            await Promise.all(promises);
            setWarehouseProducts(counts);
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
                            responsable={warehouse.responsible || warehouse.responsable || getConnectedUserName()}
                            products={String(warehouseProducts[warehouse.id] ?? 0)}
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
