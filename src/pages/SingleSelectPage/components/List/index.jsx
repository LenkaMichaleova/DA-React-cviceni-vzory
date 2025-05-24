import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = () => {
  const [items, setItems] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [calorie, setCalorie] = useState(0)
  
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items');
      const json = await response.json();
      setItems(json.data);
    };

    fetchItems();
  }, []);

  const handleCalorie = (cislo) => {
    const selectedItem = items.find((item) => Number(selectedId) === item.id)
    setCalorie(selectedItem.nutrients.energy.value)
    setSelectedId(cislo)
  }

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          selected={item.id === selectedId}
          onSelect={handleCalorie}
        />
      ))}
      <div>Počet kalorií u vybrané položky: {calorie} kcal</div>
    </div>
  );
};
