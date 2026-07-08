import React from 'react';
import { Link } from 'react-router-dom';

function WarehouseSidebar({ title, subtitle, navItems = [], footerTitle, footerDescription, footerActionLabel }) {
  return (
    <aside className="hidden w-72 flex-col justify-between border-r border-slate-800 bg-slate-900 p-6 lg:flex">
      <div>
        <div className="mb-10">
          <h1 className="text-xl font-semibold tracking-wide text-white">EcoStock</h1>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                item.active
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{footerTitle}</p>
        <p className="mt-2 font-medium text-white">{footerDescription}</p>
        <Link
          to="/login"
          className="mt-4 inline-flex rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
        >
          {footerActionLabel}
        </Link>
      </div>
    </aside>
  );
}

export default WarehouseSidebar;
