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
              <h3>Developed By</h3>
              <div className={styles.developerInfo}>
              <a href='https://www.linkedin.com/in/aniketh-vijay-55a45825a/' target='_blank'><svg className={styles.linkedinIcon} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a>
                <a href='https://www.linkedin.com/in/aniketh-vijay-55a45825a/' target='_blank'>Aniketh G V</a>
              </div>
              <div className={styles.developerInfo}>
              <a href='https://www.linkedin.com/in/aravindkvishwanath' target='_blank'><svg className={styles.linkedinIcon} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a>
                <a href='https://www.linkedin.com/in/aravindkvishwanath' target='_blank'>Aravind K Vishwanath</a>
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
