import { Link } from 'react-router-dom'
import VoirProduitEntrepot from '../bouton/voirproduitentrepot.jsx'
import Ajouter from '../bouton/ajouter.jsx'
import Modifier from '../bouton/modifier.jsx'
import Supprimer from '../bouton/supprimer.jsx'

function ProductHeader() {
  return (
    <header className="mb-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="mt-2 text-3xl font-semibold text-white">Produits</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Ajouter type="produit" />
        </div>
      </div>
    </header>
  )
}

export default ProductHeader
