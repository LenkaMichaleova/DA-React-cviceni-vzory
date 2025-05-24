import { useState } from 'react';

export const ListItem = ({ item, onSelect }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
    selected ? onSelect(- 1) : onSelect(+ 1)
  };

  return (
    <div 
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={toggleSelected}
    >
      {item.name}
    </div>
  );
};
