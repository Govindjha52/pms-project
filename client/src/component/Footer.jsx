import './footer.css';
// import Feedback from '../footer_comp/feedback';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Footer = () => {
  return (
    <footer className="footer">
      {/* Back to Top Section */}
      <div className="foot-panel1" onClick={scrollToTop}>
        Back to Top
      </div>
      <hr />

      {/* Get to Know Us Section */}
      <div className="foot-panel2">
        <ul>
          <li><strong>Get to Know Us</strong></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">CSE Learning Platform</a></li>
          <li><a href="/">Proxy Management System</a></li>
          <li><a href="#">Investor Relations</a></li>
        </ul>

        {/* Connect with Us Section */}
        <ul>
          <li><strong>Connect with Us</strong></li>
          <li><a href="https://www.facebook.com/govindjha.govind.52"><i className="fa fa-facebook"></i> Facebook</a></li>
          <li><a href="https://www.linkedin.com/in/govind-jha-b88562245"><i className="fa fa-linkedin"></i> LinkedIn</a></li>
          <li><a href="https://www.instagram.com/govindjha.52"><i className="fa fa-instagram"></i> Instagram</a></li>
          <li><a href="https://github.com/Govindjha52"><i className="fa fa-github"></i> Github</a></li>
        </ul>

        {/* Material Provider Section */}
        <ul>
          <li><strong>Material Provider for CSE Students</strong></li>
          <li><a href="#">Learning Platform</a></li>
          <li><a href="#">Build Your Skills</a></li>
          <li><a href="#">All Materials Available</a></li>
          <li><a href="#">Advertise Your Products</a></li>
          <li><a href="#">Practice Your Coding Skills Here</a></li>
        </ul>

        {/* Help Section */}
        <ul>
          <li><strong>Let Us Help You</strong></li>
          <li><a href="/my-account">Your Account</a></li>
          {/* <li><a href="../footer_comp/feedback" onClick={<Feedback/>}>Feedback</a></li> */}
          <li><a href="#">Customer Support</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <hr />

      {/* Contact Information Section */}
      <div className="foot-panel3">
        <div className="contact-info">
          <p>Contact Us: +91 9508779910</p>
          <a href="pms@gmail.com">Email Us: pms@gmail.com</a>
          <p>Visit us at:</p>
          <address>Parul University, Vadodara, Gujarat, India</address>
        </div>
      </div>

      <hr />

      {/* Footer Links and Copyright Section */}
      <div className="foot-panel4">
        <div className="pages">
          <a href="#">Condition of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <div className="copyright">
          &copy; 2024. All the word are reserved || Proxy Management System Platform.com, Inc. or its affiliates.
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;