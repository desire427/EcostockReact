import React from "react";

function Sidebar(){
    return (
        <aside className="hidden w-72 flex-col justify-between border-r border-slate-800 bg-slate-900 p-6 lg:flex">
            <div>
            <div className="mb-10">
                <h1 className="text-xl font-semibold tracking-wide text-white">EcoStock</h1>
                <p className="mt-1 text-sm text-slate-400">Détail entrepôt</p>
            </div>
            <nav className="space-y-2">
                <a href="produits.html" className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">Produits</a>
                <a href="entrepots.html" className="flex items-center rounded-xl bg-slate-800 px-4 py-3 text-sm font-medium text-white">Entrepôts</a>
            </nav>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Logistique</p>
            <p className="mt-2 font-medium text-white">Suivi des stocks</p>
            <a href="login.html" className="mt-4 inline-flex rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800">Se déconnecter</a>
            </div>
        </aside>
    )
}

export default Sidebar;