import React from 'react';

function Supprimer({ onClick, label = 'Supprimer' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
    >
      {label}
    </button>
  );
}

export default Supprimer;
