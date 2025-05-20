import { useState } from 'react';

export const ListItem = ({ item, onSelect, number}) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
    selected ? onSelect(number - 1) : onSelect(number + 1)
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
