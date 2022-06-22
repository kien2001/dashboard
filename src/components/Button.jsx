import React from 'react';

import { useStateValue } from '../contexts/contextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const [{ }, dispatch] = useStateValue();

  return (
    <button
      type="button"
      onClick={() => dispatch({type: "HANDLE_CLICK"})}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;