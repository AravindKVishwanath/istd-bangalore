import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.navbarContainer} ${isScrolled ? styles.centered : ''}`}>
        <div className={styles.navbarLogo}>ISTD Website</div>
        <ul className={styles.navbarLinks}>
          <li>
            <Link href="/" className={styles.navbarItem}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={styles.navbarItem}>About</Link>
          </li>
          <li>
            <Link href="/services" className={styles.navbarItem}>Services</Link>
          </li>
          {/* Dropdown for Our Team */}
          <li className={styles.dropdownMenu}>
            <span className={styles.dropdownToggle}>
              Our Team 
            </span>
            <ul className={styles.dropdownContent}>
              <li>
                <Link href="/team/committee" className={styles.dropdownItem}>Committee Members</Link>
              </li>
              <li>
                <Link href="/team/past-chairperson" className={styles.dropdownItem}>Past Chairperson</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/blog" className={styles.navbarItem}>Blog</Link>
          </li>
          {/* Dropdown for Join Us */}
          <li className={styles.dropdownMenu}>
            <span className={styles.dropdownToggle}>
              Join Us 
            </span>
            <ul className={styles.dropdownContent}>
              <li>
                <Link href="/join/membership" className={styles.dropdownItem}>Membership</Link>
              </li>
              <li>
                <Link href="/join/pgdiploma" className={styles.dropdownItem}>PG Diploma</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" className={styles.navbarItem}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
