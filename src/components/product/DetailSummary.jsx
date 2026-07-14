function DetailSummary({ product }) {
  const quantity = Number(product?.quantity || 0);
  const isExpired = product?.expiration_date && new Date(product.expiration_date) < new Date();
  const status = isExpired ? 'Expiré' : quantity <= 10 ? 'À surveiller' : 'Disponible';

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
        <h3 className="text-lg font-semibold text-white">Résumé opérationnel</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-400">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span>Stock actuel</span>
            <span className="font-medium text-white">{quantity} unité{quantity > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span>Seuil d’alerte</span>
            <span className="font-medium text-white">10 unités</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Disponibilité</span>
            <span className={`font-medium ${isExpired ? 'text-red-300' : quantity <= 10 ? 'text-amber-300' : 'text-emerald-300'}`}>{status}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailSummary
