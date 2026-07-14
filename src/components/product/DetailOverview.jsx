function DetailOverview({ product }) {
  const expiration = product?.expiration_date
    ? new Date(product.expiration_date).toLocaleDateString('fr-FR')
    : '—';
  const isExpired = product?.expiration_date && new Date(product.expiration_date) < new Date();
  const status = isExpired ? 'Expiré' : Number(product?.quantity || 0) <= 10 ? 'À surveiller' : 'Disponible';

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h3 className="mt-2 text-2xl font-semibold text-white">{product?.name || 'Produit'}</h3>
          <p className="mt-2 text-sm text-slate-400">Informations issues de l’API pour cet article et son emplacement actuel.</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
          <div>
            <p className="text-sm text-slate-400">Quantité en stock</p>
            <p className="mt-1 text-3xl font-semibold text-white">{product?.quantity ?? 0}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Date d’expiration</p>
            <p className="mt-1 text-lg font-semibold text-white">{expiration}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Entrepôt</p>
            <p className="mt-1 text-lg font-semibold text-white">{product?.warehouse_name || '—'}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-sm text-slate-400">Catégorie</p>
          <p className="mt-1 font-medium text-white">Non renseignée</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-sm text-slate-400">Statut</p>
          <p className="mt-1 font-medium text-white">{status}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-sm text-slate-400">Identifiant</p>
          <p className="mt-1 font-medium text-white">#{product?.id ?? '—'}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-sm text-slate-400">Dernière mise à jour</p>
          <p className="mt-1 font-medium text-white">{expiration}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailOverview
