import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductCatalog() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("http://127.0.0.1:8000/api/v1/products/")
            .then(res => res.json())
            .then(data => {

                setProducts(data);
            })
            .catch(error => console.error(error));

    }, []);

    return (

        <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20 xl:col-span-3">

            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>

                    <h3 className="text-xl font-semibold text-white">
                        Catalogue des produits
                    </h3>

                </div>

                <input
                    type="text"
                    placeholder="Rechercher"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-slate-500 sm:w-64"
                />

            </div>

            <div className="grid gap-5 md:grid-cols-3">

                {products.map((product, index) => (

                    <ProductCard

                        key={product.id}

                        title={product.name}

                        category={[
                            "Électronique",
                            "Consommables",
                            "Matériel",
                            "Sécurité"
                        ][index % 4]}

                        labelClass={[
                            "bg-emerald-500/15 text-emerald-300",
                            "bg-amber-500/15 text-amber-300",
                            "bg-slate-500/15 text-slate-300",
                            "bg-emerald-500/15 text-emerald-300"
                        ][index % 4]}

                        quantity={`${product.quantity} unités`}

                        expiration={product.expiration_date}

                        warehouse={product.warehouse}

                    />

                ))}

            </div>

        </article>

    );

}

export default ProductCatalog;