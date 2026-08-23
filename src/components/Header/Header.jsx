import { useState, useEffect } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem('theme') !== 'light_theme';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark_theme');
      document.body.classList.remove('light_theme');
      localStorage.setItem('theme', 'dark_theme');
    } else {
      document.body.classList.remove('dark_theme');
      document.body.classList.add('light_theme');
      localStorage.setItem('theme', 'light_theme');
    }
  }, [isDarkTheme]);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={`header${isScrolled ? ' active' : ''}`}>
      <div className="container">
        <h1 className="h1 logo">
          <a href="#">Tayyab<span>.</span></a>
        </h1>

        <div className="navbar-actions">
          <select name="language" id="lang">
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select>

          <button
            className={`theme-btn${!isDarkTheme ? ' active' : ''}`}
            aria-label="Change Theme"
            title="Change Theme"
            onClick={toggleTheme}
          >
            <span className="icon"></span>
          </button>
        </div>

        <button
          className={`nav-toggle-btn${isNavOpen ? ' active' : ''}`}
          aria-label="Toggle Menu"
          title="Toggle Menu"
          onClick={toggleNav}
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className={`navbar${isNavOpen ? ' active' : ''}`}>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" onClick={handleNavClick}>Home.</a>
            </li>
            <li>
              <a href="#about" className="navbar-link" onClick={handleNavClick}>About.</a>
            </li>
            <li>
              <a href="#skills" className="navbar-link" onClick={handleNavClick}>Skills.</a>
            </li>
            <li>
              <a href="#experience" className="navbar-link" onClick={handleNavClick}>Experience.</a>
            </li>
            <li>
              <a href="#portfolio" className="navbar-link" onClick={handleNavClick}>Portfolio.</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link" onClick={handleNavClick}>Contact.</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
