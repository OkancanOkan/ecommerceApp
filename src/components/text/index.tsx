import React from 'react';
import '../text/text.css';

interface TextProps {
  children?: React.ReactNode;
  size: 'xxs' | 'xs' | 's' | 'sm' | 'm' | 'ml' | 'l' | 'xl' | 'xxl';
  colour: 'black' | 'white' | 'orange' | 'red' | 'grey';
  bold?: boolean;
}

const Text: React.FC<TextProps> = ({
  children,
  size,
  colour,
  bold = false,
}) => {
  return (
    <span
      className={`styled-text ${
        bold ? 'bold' : 'normal'
      } colour-${colour} size-${size}`}
    >
      {children}
    </span>
  );
};

export default Text;
