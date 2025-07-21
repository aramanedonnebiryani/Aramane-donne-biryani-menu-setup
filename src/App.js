import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import axios from 'axios';

function App() {
  const [menuItems, setMenuItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]); 
  const [categories, setCategories] = useState(['All']);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [loading, setLoading] = useState(true); // <-- Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbxUUbaJMoGIY9wCPvKU0PDc8Nzxr7u_eGUZNCHS9M74XqUIWStrOmbci3aAurTScOZr_Q/exec');
        const data = response.data;
        const allCategories = new Set(data.map(item => item.category));
        setMenuItems(data); 
        setFilteredItems(data); 
        setCategories(['All', ...allCategories]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // <-- Hide spinner after loading
      }
    };

    fetchData();
  }, []); 

  const filterItems = (category) => {
    setCurrentCategory(category);
    if (category === 'All') {
      setFilteredItems(menuItems);
    } else {
      const newItems = menuItems.filter((item) => item.category === category);
      setFilteredItems(newItems);
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='banner-image'></div>
        <div className='header'>
          <h3>Aramane Donne Biriyani</h3>
          <div className='icons'>
            <div className='icon'>
              <a href='tel:+91 861872051'>
                <span role='img' aria-label='phone'>📞</span>
                <span className='icon-text'>&thinsp;+91 8618712051</span>
              </a>
            </div>
            <div className='icon'>
              <span role='img' aria-label='location'>📍</span>
              <span className='icon-text'>&thinsp;Near New Bus Stand, Kumta-581343</span>
            </div>
          </div>
        </div>
        <br />
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            <Categories categories={categories} filterItems={filterItems} currentCategory={currentCategory} />
            <Menu items={filteredItems} />
            <br />
          </>
        )}
      </section>
    </main>
  );
}

export default App;