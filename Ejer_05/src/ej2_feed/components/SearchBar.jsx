import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="form-control"
      type="text"
      placeholder="Buscar artículo..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
