import React from 'react';
import { Link } from 'react-router-dom';

function WarehouseCard({ title, location, capacity, occupation, responsable, products, actionLabel, actionHref }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{location} • Capacité {capacity}</p>
        </div>
      </div>
      <div className="mt-5 space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
            <span>Occupation</span>
            <span className="font-medium text-slate-200">{occupation}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-800">
            <div className={`h-2 rounded-full bg-white`} style={{ width: `${occupation}%` }}></div>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm text-slate-400">Responsable</p>
            <p className="mt-1 font-medium text-white">{responsable}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm text-slate-400">Produits stockés</p>
            <p className="mt-1 font-medium text-white">{products}</p>
          </div>
        </div>
        <Link
          to={actionHref}
          className="inline-flex rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
        >
          {actionLabel}
        </Link>
      </div>
    </article>
  );
}

export default WarehouseCard;
