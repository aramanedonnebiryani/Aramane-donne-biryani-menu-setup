import React from 'react';

const getFoodDot = (food_type) => {
  let color = '#43a047'; // green for veg
  if (String(food_type).toLowerCase() === 'non-veg') color = '#d32f2f'; // red for nonveg
  if (String(food_type).toLowerCase() === 'egg') color = '#fbc02d'; // yellow for egg
  return (
    <span
      className="food-dot"
      style={{
        display: 'inline-block',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: color,
        marginRight: '0.5em',
        border: '1.5px solid #555',
        verticalAlign: 'middle'
      }}
      aria-label={food_type}
    ></span>
  );
};

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map(menuItems => {
        const { id, title, img, price, desc, food_type } = menuItems;
        return (
          <article key={id} className='menu-item menu-item-row'>
            <img src={img} alt={title} className='photo small-photo' />
            <div className='item-info'>
              <header>
                <h4 className="item-title">
                  {getFoodDot(food_type)}
                  {title}
                </h4>
                <h4 className='price'>₹{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;