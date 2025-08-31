import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Shayan Fitness Club</h3>
        <p>Building strength, transforming lives.</p>

        <div className="social-icons">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-youtube"></i>
</a>

        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shayan Fitness Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
