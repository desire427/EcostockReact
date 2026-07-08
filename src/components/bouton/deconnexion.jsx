import React from 'react';
import { Link } from 'react-router-dom';

function Deconnexion({ label = 'Se déconnecter', to = '/login', onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="mt-4 inline-flex rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
    >
      {label}
    </Link>
  );
}

export default Deconnexion;
