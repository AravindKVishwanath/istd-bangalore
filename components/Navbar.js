import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const [dropdownOpen, setDropdownOpen] = useState({
    ourTeam: false,
    joinUs: false,
  }); // State for dropdown menus on mobile

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Close mobile menu when window is resized to desktop
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setDropdownOpen({ ourTeam: false, joinUs: false });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>ISTD Website</div>
        
        {/* Hamburger Icon for mobile screens */}
        <div className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navbar Links */}
        <ul className={`${styles.navbarLinks} ${menuOpen ? styles.active : ''}`}>
          <li>
            <Link href="/" className={styles.navbarItem} onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={styles.navbarItem} onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/services" className={styles.navbarItem} onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
          
          {/* Dropdown for Our Team */}
          <li className={`${styles.dropdownMenu} ${dropdownOpen.ourTeam ? styles.dropdownActive : ''}`}>
            <span 
              className={styles.dropdownToggle}
              onClick={() => toggleDropdown('ourTeam')}
              aria-haspopup="true"
              aria-expanded={dropdownOpen.ourTeam}
              role="button"
              tabIndex="0"
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleDropdown('ourTeam');
                }
              }}
            >
              Our Team <span className={styles.dropdownArrow}></span>
            </span>
            <ul className={`${styles.dropdownContent} ${dropdownOpen.ourTeam ? styles.dropdownActive : ''}`}>
              <li>
                <Link href="/team/committee" className={styles.dropdownItem} onClick={() => { setMenuOpen(false); setDropdownOpen({ ...dropdownOpen, ourTeam: false }); }}>Committee Members</Link>
              </li>
              <li>
                <Link href="/team/past-chairperson" className={styles.dropdownItem} onClick={() => { setMenuOpen(false); setDropdownOpen({ ...dropdownOpen, ourTeam: false }); }}>Past Chairperson</Link>
              </li>
            </ul>
          </li>
          
          <li>
            <Link href="/blog" className={styles.navbarItem} onClick={() => setMenuOpen(false)}>Blog</Link>
          </li>
          
          {/* Dropdown for Join Us */}
          <li className={`${styles.dropdownMenu} ${dropdownOpen.joinUs ? styles.dropdownActive : ''}`}>
            <span 
              className={styles.dropdownToggle}
              onClick={() => toggleDropdown('joinUs')}
              aria-haspopup="true"
              aria-expanded={dropdownOpen.joinUs}
              role="button"
              tabIndex="0"
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleDropdown('joinUs');
                }
              }}
            >
              Join Us <span className={styles.dropdownArrow}></span>
            </span>
            <ul className={`${styles.dropdownContent} ${dropdownOpen.joinUs ? styles.dropdownActive : ''}`}>
              <li>
                <Link href="/join/membership" className={styles.dropdownItem} onClick={() => { setMenuOpen(false); setDropdownOpen({ ...dropdownOpen, joinUs: false }); }}>Membership</Link>
              </li>
              <li>
                <Link href="/join/pgdiploma" className={styles.dropdownItem} onClick={() => { setMenuOpen(false); setDropdownOpen({ ...dropdownOpen, joinUs: false }); }}>PG Diploma</Link>
              </li>
            </ul>
          </li>
          
          <li>
            <Link href="/contact" className={styles.navbarItem} onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
