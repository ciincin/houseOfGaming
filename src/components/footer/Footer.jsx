import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Develhope Team 2. All rights reserved.</p>
        <nav className="footer-nav">
          <ul>
            <Accordion className="footer-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="prueba">About us</Accordion.Header>
                <Accordion.Body>
                  We are a group of full-stack developers applying the
                  programming knowledge acquired during the Develhope bootcamp.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Github</Accordion.Header>
                <Accordion.Body>
                  <div className="button-container">
                    <a
                      href="https://github.com/ciincin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="most-see-more-btn"> ciincin </button>
                    </a>
                    <a
                      href="https://github.com/milite96"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="most-see-more-btn"> milite96 </button>
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Contact</Accordion.Header>
                <Accordion.Body>
                  <div className="button-container">
                    <a
                      href="https://www.linkedin.com/in/cinthyars/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="most-see-more-btn"> cinthyars </button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/milite96/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="most-see-more-btn"> milite96 </button>
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="disclaimer">
              <li>
                This website is intended solely for educational purposes. It is
                a project created by a group of full-stack developers to
                practice and demonstrate the programming skills acquired during
                the Develhope bootcamp. We do not seek to generate any revenue
                or financial gain from this website. Any resemblance to real
                businesses, services, or products is purely coincidental.
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
