import { Link } from 'react-router-dom'

function ProductCard({ title, category, label, labelClass, quantity, expiration, warehouse }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      <div className="h-36 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950"></div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="mt-1 text-sm text-slate-400">{category}</p>
          </div>
          <span className={`rounded-full ${labelClass} px-3 py-1 text-xs font-medium`}>{label}</span>
        </div>
        <div className="mt-4 space-y-2 text-sm text-slate-400">
          <div className="flex justify-between">
            <span>Quantité</span>
            <span className="font-medium text-slate-200">{quantity}</span>
          </div>
          <div className="flex justify-between">
            <span>Expiration</span>
            <span className="font-medium text-slate-200">{expiration}</span>
          </div>
          <div className="flex justify-between">
            <span>Entrepôt</span>
            <span className="font-medium text-slate-200">{warehouse}</span>
          </div>
        </div>
        <Link to="/detail_produits.html" className="mt-5 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
          Voir le détail
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
