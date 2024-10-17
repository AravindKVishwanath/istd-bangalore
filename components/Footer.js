import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.col} ${styles.footerLinks}`}>
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              </ul>
            </div>

            <div className={`${styles.col} ${styles.footerLinks}`}>
              <h4>Quick Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="https://www.istd.in/">ISTD</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="https://www.istd.in/membership/">Membership</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="https://www.istd.in/diploma-programme/">PG Diploma</a></li>
              </ul>
            </div>

            <div className={`${styles.col} ${styles.footerContact}`}>
              <h4>Contact Us</h4>
              <p>
                No.17, Unit 16, Casa Capitol<br />
                Wood Street, Ashok Nagar<br />
                Bengaluru - 560 025<br />
              </p>
            </div>

            <div className={`${styles.col} ${styles.footerInfo}`}>
              <h3>About ISTD</h3>
              <p>ISTD, established in April 1970, is a national level professional & non-profit society.</p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.twitter}><i className="bx bxl-twitter"></i></a>
                <a href="#" className={styles.facebook}><i className="bx bxl-facebook"></i></a>
                <a href="#" className={styles.instagram}><i className="bx bxl-instagram"></i></a>
                <a href="#" className={styles.linkedin}><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.copyright}>
          &copy; Copyright <strong><span>2021</span></strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
