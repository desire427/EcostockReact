import { Link } from 'react-router-dom'

function DetailHeader() {
  return (
    <header className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Produit</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Produit A</h2>
        <p className="mt-2 text-sm text-slate-400">Informations détaillées et état actuel du produit dans l’inventaire.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link to="/produits.html" className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-800">
          Retour
        </Link>
        <button className="rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
          Modifier
        </button>
      </div>
    </header>
  )
}

export default DetailHeader
