import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const style = '';
  const base =
    'bg-yellow-400 text-sm uppercase font-semibold tracking-wide text-stone-800  inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base +  ' px-4 py-3 sm:px-6 sm:py-4',
    small: base +  ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base +  ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',

    secondary:
      'border-2 text-sm border-stone-300 uppercase font-semibold tracking-wide text-stone-400  inline-block rounded-full hover:bg-stone-200 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-yellow-300 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-5 md:py-3.5 text-xs',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
