export const ListItem = ({ item, selected, onSelect }) => (
  <div
    className={`panel${selected ? ' panel--selected' : ''}`}
    onClick={() => onSelect(item.id)}
  >
    {item.name}
  </div>
);
