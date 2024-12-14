import React, { useState, useEffect } from 'react';
import './header.css';
import nike from './nike.png';
import search from './Save.png';
import heart from './heart.png';
import cart from './Cart.png';
import user from './user.png';
import SearchComponent from './search';
import menuItems from './menuItems.json';


const Header = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeMobileButton, setActiveMobileButton] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDropdown = (index) => {
    setActiveButton(activeButton === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleMobileButtonClick = (index) => {
    setActiveMobileButton(activeMobileButton === index ? null : index);
  };

  useEffect(() => {
    const header = document.getElementById('header');
    if (activeButton !== null) {
      const expandedHeader = document.querySelector('.expanded-header');
      if (expandedHeader) {
        const height = expandedHeader.offsetHeight;
        header.style.paddingBottom = `${height}px`;
      }
    } else {
      header.style.paddingBottom = '0';
    }
  }, [activeButton]);

  const handleMouseEnter = () => {
    document.getElementById('header').classList.add('hovered');
  };

  const handleMouseLeave = () => {
    document.getElementById('header').classList.remove('hovered');
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1068);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="navbar">
        <div className="logo-nike">
          <img src={nike} alt="Logo" />
        </div>
        <div className="navbar-center">
          {Object.keys(menuItems).map((button, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={() => {
                toggleDropdown(index);
                handleMouseEnter();
              }}
              onMouseLeave={() => {
                toggleDropdown(index);
                handleMouseLeave();
              }}
            >
              <button className="nav-button" id="nav-btn">
                {button}
              </button>
              {activeButton === index && (
                <div className="expanded-header">
                  {Object.keys(menuItems[button]).map((category, subIndex) => (
                    <div key={subIndex} className="dropdown-category">
                      <button className="cat-btn">{category}</button>
                      <ul className="ul-dropdown">
                        {menuItems[button][category].map((item, itemIndex) => (
                          <li key={itemIndex} className="dropdown-item">
                            <a href="#" className="dropdown-link">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      <div className="container">
        <div className="search" onClick={handleSearchClick}>
          <img src={search} alt="Search Icon" className="srch-icon" />
          <span className="search-span">Search</span>
        </div>
        <div className="heart">
          <a href="#image1">
            <img src={isMobile ? user : heart} alt="Icon" />
          </a>
        </div>
        <div className="cart">
          <a href="#image2">
            <img src={cart} alt="Cart Icon" />
          </a>
        </div>
        {!showSearch && !showMobileMenu && (
          <button className="menu-button" onClick={toggleMobileMenu}>
            ☰
          </button>
        )}

        {showMobileMenu && (
          <button className="menu-button close" onClick={toggleMobileMenu}>
            ×
          </button>
        )}
      </div>
    {showMobileMenu && (
      <div className={`mobile-menu ${showMobileMenu ? 'show' : ''}`}>
        {Object.keys(menuItems).map((button, index) => (
          <div key={index}>
            <div
              className="mobile-menu-item"
              onClick={() => handleMobileButtonClick(index)}
            >
              {button}
            </div>
            {activeMobileButton === index && (
              <div className="mobile-expanded-header">
                {Object.keys(menuItems[button]).map((category, subIndex) => (
                  <div key={subIndex} className="mobile-dropdown-category">
                    <button className="mobile-cat-btn">{category}</button>
                    <ul className="mobile-ul-dropdown">
                      {menuItems[button][category].map((item, itemIndex) => (
                        <li key={itemIndex} className="mobile-dropdown-item">
                          <a href="#" className="mobile-dropdown-link">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )}
      {showSearch && <SearchComponent onClose={() => setShowSearch(false)} />}
    </header>
  );
};

export default Header;