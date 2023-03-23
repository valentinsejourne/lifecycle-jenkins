import { useState } from 'react';

export  default function Square(): any {
  const [value, setValue] = useState<any>(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}