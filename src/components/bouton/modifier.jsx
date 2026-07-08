import React from 'react';

function Modifier({ onClick, label = 'Modifier', className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className || "rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200"}
    >
      {label}
    </button>
  );
}

export default Modifier;
