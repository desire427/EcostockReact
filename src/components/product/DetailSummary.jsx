function DetailSummary() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
        <h3 className="text-lg font-semibold text-white">Résumé opérationnel</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-400">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span>Valeur en stock</span>
            <span className="font-medium text-white">10 080 000 FC</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span>Seuil d’alerte</span>
            <span className="font-medium text-white">10 unités</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Disponibilité</span>
            <span className="font-medium text-emerald-300">Satisfaisante</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DetailSummary
