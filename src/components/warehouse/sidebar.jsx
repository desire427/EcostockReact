import React from "react";
import { Link } from "react-router-dom";
import Deconnexion from '../bouton/deconnexion.jsx';

function Sidebar(){
    return (
        <aside className="hidden w-72 flex-col justify-between border-r border-slate-800 bg-slate-900 p-6 lg:flex">
            <div>
            <div className="mb-10">
                <h1 className="text-xl font-semibold tracking-wide text-white">EcoStock</h1>
                <p className="mt-1 text-sm text-slate-400">Détail entrepôt</p>
            </div>
            <nav className="space-y-2">
                <Link to="/produits" className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">Produits</Link>
                <Link to="/entrepots" className="flex items-center rounded-xl bg-slate-800 px-4 py-3 text-sm font-medium text-white">Entrepôts</Link>
            </nav>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Logistique</p>
            <p className="mt-2 font-medium text-white">Suivi des stocks</p>
            <Deconnexion />
            </div>
        </aside>
    )
}

export default Sidebar;