import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

const listOfValues = [ 
  "?filter=nutrients.fiber.value:gt:2", 
  "?filter=nutrients.proteins.value:gt:1.5", 
  "?filter=nutrients.fats.value:lt:1.3"
]

export const List = () => {
  const [items, setItems] = useState(null);
  const [filter, setFilter] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:4000/api/items${filter}`);
      const json = await response.json();
      setItems(json.data);
    };

    fetchItems();
  }, [filter]);

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list">
      <div className='container'>
        <h3>Nastavení filtru</h3>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">Vyberte</option>
          <option value="?filter=nutrients.fiber.value:gt:2">
            všechny položky s množstvím vlákniny větším než 2 g na 100 g
          </option>
          <option value="?filter=nutrients.proteins.value:gt:1.5">
            všechny položky s množstvím bílkovin větším než 1,5 g na 100 g
          </option>
          <option value="?filter=nutrients.fats.value:lt:1.3">
            všechny položky s množstvím tuků menším než 1,3 g na 100 g
          </option>
        </select>
      </div>
      
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};
