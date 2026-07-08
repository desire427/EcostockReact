function ProductAside() {
  return (
    <aside className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-semibold text-white">Points de vigilance</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-400">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <p className="font-medium text-white">Produit B</p>
            <p className="mt-1">Stock critique à réapprovisionner.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <p className="font-medium text-white">Produit E</p>
            <p className="mt-1">Expiration proche dans 10 jours.</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-semibold text-white">Activité récente</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-400">
          <div className="border-b border-slate-800 pb-3">Mise à jour du stock Produit A</div>
          <div className="border-b border-slate-800 pb-3">Réception dans l’entrepôt Principal</div>
          <div>Modification du statut Produit C</div>
        </div>
      </div>
    </aside>
  )
}

export default ProductAside
