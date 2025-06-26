import React from 'react';

interface LabelProps {
  text: string;
}

export const Label = ({ text }: LabelProps) => <label>{text}</label>;
