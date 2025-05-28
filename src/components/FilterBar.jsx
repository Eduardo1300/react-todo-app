const FilterBar = ({ current, onChange }) => (
  <div className="flex justify-around my-4">
    {['all', 'pending', 'completed'].map(key => (
      <button
        key={key}
        className={`px-3 py-1 rounded ${current === key ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        onClick={() => onChange(key)}
      >
        {key === 'all' ? 'Todas' : key === 'pending' ? 'Pendientes' : 'Completadas'}
      </button>
    ))}
  </div>
);
export default FilterBar;