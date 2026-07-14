import { useEffect, useState } from "react";
import apiClient from "../api/axios.js";
import ProductCard from "./ProductCard";

function ProductCatalog() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await apiClient.get('/products/');
                setProducts(response.data);
            } catch {
                setError('Impossible de charger les produits depuis l’API.');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return (
        <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20 xl:col-span-3">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-white">Catalogue des produits</h3>
                </div>

                <input
                    type="text"
                    placeholder="Rechercher"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-slate-500 sm:w-64"
                />
            </div>

            {loading && <p className="text-sm text-slate-400">Chargement…</p>}
            {error && <p className="rounded-xl border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-400">{error}</p>}

            {!loading && !error && (
                <div className="grid gap-5 md:grid-cols-3">
                    {products.map((product, index) => {
                        const isLowStock = Number(product.quantity) <= 10;
                        const label = isLowStock ? 'À surveiller' : 'Disponible';
                        const labelClass = isLowStock
                            ? 'bg-amber-500/15 text-amber-300'
                            : 'bg-emerald-500/15 text-emerald-300';

                        return (
                            <ProductCard
                                key={product.id}
                                productId={product.id}
                                title={product.name}
                                category={['Électronique', 'Consommables', 'Matériel', 'Sécurité'][index % 4]}
                                label={label}
                                labelClass={labelClass}
                                quantity={`${product.quantity} unités`}
                                expiration={product.expiration_date}
                                warehouse={product.warehouse_name || '—'}
                            />
                        );
                    })}
                </div>
            )}
        </article>
    );
}

export default ProductCatalog;