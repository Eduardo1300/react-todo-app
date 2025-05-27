import React from 'react';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="filter-bar">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        Todas
      </button>
      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        Pendientes
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completadas
      </button>
    </div>
  );
};

export default FilterBar;