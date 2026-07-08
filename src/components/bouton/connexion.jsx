import React from 'react';

function Connexion({ onClick, label = 'Se connecter', type = 'submit' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
    >
      {label}
    </button>
  );
}

export default Connexion;
