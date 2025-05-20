export const ListItem = ({ item, selected, onSelect, onSelectCalories }) => {

  const handleClick = () => {
    onSelect(item.id)
    onSelectCalories(item.nutrients.energy.value)
  }

  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={handleClick}
    >
      {item.name}
    </div>
  );
};
