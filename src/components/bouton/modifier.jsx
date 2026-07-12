import React, { useState } from 'react';
import ModifierF from '../formulaire/modifier_f.jsx';

function Modifier({ type = 'produit', onClick, label = 'Modifier', className, warehouseId, warehouseData, onSuccess }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e) => {
    setIsOpen(true);
    if (onClick) onClick(e);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleButtonClick}
        className={className || "rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200"}
      >
        {label}
      </button>

      {isOpen && (
        <ModifierF
          type={type}
          onClose={() => setIsOpen(false)}
          onSuccess={onSuccess}
          warehouseId={warehouseId}
          warehouseData={warehouseData}
        />
      )}
    </>
  );
}

export default Modifier;
