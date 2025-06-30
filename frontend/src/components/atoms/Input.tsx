import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, ...props }: InputProps) => (
  <div style={{ marginBottom: 12 }}>
    {label && (
      <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>
    )}
    <input
      {...props}
      style={{ padding: 8, width: '100%', boxSizing: 'border-box' }}
    />
  </div>
);
