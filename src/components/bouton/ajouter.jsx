import React from 'react';
import { Link } from 'react-router-dom';

function Ajouter({ type = 'produit', to, onClick, label, children }) {
  const isWarehouse = type === 'entrepot';
  const defaultLabel = isWarehouse ? '+ Ajouter un entrepôt' : 'Ajouter un produit';
  const className = isWarehouse
    ? 'rounded-xl bg-emerald-600 px-2 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700'
    : 'rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200';

  const content = children || label || defaultLabel;

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  );
}

export default Ajouter;
