
const Footer = () => {
  return (
    <footer className="footer bg-white py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          {/* Logo alebo názov */}
          <div className="col-12 mb-3">
            <h5 className="text-dark">BOOK LIBRARY</h5>
          </div>

          {/* Sociálne siete */}
          <div className="col-12 mb-3">
            <a href="#" className="text-dark mx-2">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-dark mx-2">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-dark mx-2">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="col-12">
            <p className="mb-0 text-muted">&copy; 2024 Book Library. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


