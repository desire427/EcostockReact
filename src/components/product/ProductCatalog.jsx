import ProductCard from './ProductCard.jsx'

const products = [
  {
    title: 'Produit A',
    category: 'Électronique',
    label: 'Disponible',
    labelClass: 'bg-emerald-500/15 text-emerald-300',
    quantity: '84 unités',
    expiration: '15/09/2026',
    warehouse: 'Principal',
  },
  {
    title: 'Produit B',
    category: 'Consommables',
    label: 'Stock faible',
    labelClass: 'bg-amber-500/15 text-amber-300',
    quantity: '7 unités',
    expiration: '04/08/2026',
    warehouse: 'Secondaire',
  },
  {
    title: 'Produit C',
    category: 'Matériel',
    label: 'Normal',
    labelClass: 'bg-slate-500/15 text-slate-300',
    quantity: '32 unités',
    expiration: '21/11/2026',
    warehouse: 'Principal',
  },
  {
    title: 'Produit D',
    category: 'Sécurité',
    label: 'Disponible',
    labelClass: 'bg-emerald-500/15 text-emerald-300',
    quantity: '59 unités',
    expiration: '30/12/2026',
    warehouse: 'Central',
  },
]

function ProductCatalog() {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20 xl:col-span-2">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">Catalogue des produits</h3>
          <p className="mt-1 text-sm text-slate-400">Présentation en cartes avec les informations clés de chaque article.</p>
        </div>
        <input
          type="text"
          placeholder="Rechercher"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-slate-500 sm:w-64"
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </article>
  )
}

export default ProductCatalog
