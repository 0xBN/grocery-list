import React from 'react';

export const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        {length} List Item{length !== 1 ? 's' : null}
      </p>
    </footer>
  );
};
