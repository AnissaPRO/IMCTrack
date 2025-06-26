import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <button
    {...props}
    style={{
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
);

export const SecondaryButton = ({ children, className = '', ...props }: ButtonProps) => (
  <button
    {...props}
    className={`bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition-all ${className}`}
  >
    {children}
  </button>
);
