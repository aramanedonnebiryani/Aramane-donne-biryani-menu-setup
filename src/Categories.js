// import React from 'react';

// const Categories = ({ categories, filterItems }) => {
  
//   return (

//     <div className="btn-container">
//       {categories.map((category, index) => {
//         return <button type="button" className='filter-btn' key={index}
//           onClick={() => filterItems(category)}>{category}
//         </button>

//       })}
//       </div>
//   );
// };

// export default Categories;


import React, { useState } from 'react';

const Categories = ({ categories, filterItems, currentCategory }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
      <button className="categories-menu-btn" onClick={() => setShowModal(true)}>
        {currentCategory} <span style={{ marginLeft: '0.5em', fontSize: '1.1em' }}>▼</span>
      </button>
      {showModal && (
        <div className="categories-modal">
          <div className="categories-modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            <div className="categories-list">
              {categories.map((category, index) => (
                <button
                  type="button"
                  className="filter-btn"
                  key={index}
                  onClick={() => {
                    filterItems(category);
                    setShowModal(false);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;