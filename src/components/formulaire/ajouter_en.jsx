import React from 'react';

function AjouterEn({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-slate-950/70">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/50 animate-in fade-in zoom-in-95 duration-200">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Ajouter un entrepôt</h3>
            <p className="mt-1 text-sm text-slate-400">Renseignez les détails du nouveau site de stockage.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-800 p-1.5 text-slate-400 hover:bg-slate-700 hover:text-white transition"
          >
            <span className="sr-only">Fermer</span>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Nom de l'entrepôt</label>
            <input
              type="text"
              required
              placeholder="ex: Entrepôt principal"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Localisation</label>
            <input
              type="text"
              required
              placeholder="ex: Zone industrielle, Quartier central"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Capacité (m²)</label>
              <input
                type="text"
                required
                placeholder="ex: 4 200 m²"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-500"
              />
            </div>
            <div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-350 hover:bg-slate-800 transition"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition"
            >
              Créer l'entrepôt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AjouterEn;
