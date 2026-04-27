import React from 'react';

function CategoryFilter({ setCategory }) {
  const categories = ["All", "Engineering", "Startup", "Web Development", "Backend"];

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;