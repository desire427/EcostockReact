function DetailOverview() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Présentation</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Produit A</h3>
          <p className="mt-2 text-sm text-slate-400">Article de catégorie électronique, stocké dans l’entrepôt principal.</p>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">Disponible</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 p-8"></div>
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
          <div>
            <p className="text-sm text-slate-400">Quantité en stock</p>
            <p className="mt-1 text-3xl font-semibold text-white">84</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Date d’expiration</p>
            <p className="mt-1 text-lg font-semibold text-white">15/09/2026</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Entrepôt</p>
            <p className="mt-1 text-lg font-semibold text-white">Entrepôt principal</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-sm text-slate-400">Catégorie</p>
          <p className="mt-1 font-medium text-white">Électronique</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-sm text-slate-400">Statut</p>
          <p className="mt-1 font-medium text-white">Disponible</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-sm text-slate-400">Emplacement</p>
          <p className="mt-1 font-medium text-white">Étagère B-12</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-sm text-slate-400">Dernière mise à jour</p>
          <p className="mt-1 font-medium text-white">07/07/2026</p>
        </div>
      </div>
    </div>
  )
}

export default DetailOverview
