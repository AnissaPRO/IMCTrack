import React from 'react';

export default function InputQuantity({ quantity, onChange }) {
  return (
    <input
      type="number"
      placeholder="Quantité en grammes"
      value={quantity}
      onChange={onChange}
      min="0"
    />
  );
}
