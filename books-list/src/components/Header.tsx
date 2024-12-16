import React from 'react';
import './Header.css'; 
import logo from '../../public/logo.jpg'

const Header: React.FC = () => {
  return (
    <header className="header bg-white">
      <div className="container d-flex align-items-center py-3">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo me-8" />
        {/* Text */}
        <h1 className="app-title mb-0">Books list</h1>
        <h2 className='app-title mb-0'>Books are doors to new worlds.</h2>
      </div>
    </header>
  );
};

export default Header;
