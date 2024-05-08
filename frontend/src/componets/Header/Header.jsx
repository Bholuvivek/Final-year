import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.jpg'
const Header = () => {
  return (
    <div className="container-fluid bg-light position-relative shadow">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <Link to="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '3em', textAlign: 'center' }}>
          <img
            src={logo}
            className="logo"
            style={{ width: '50px', borderRadius: '30px', marginLeft: '5px', marginTop: '-15px' }}
            alt="Logo"
          />
          <span className="text-primary" style={{ marginLeft: '5px', marginBottom: '85px' }}>EduPark</span>
        </Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
            <NavLink to="/classes" className="nav-item nav-link">Classes</NavLink>
            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink to="/teachers" className="nav-item nav-link">Teachers</NavLink>
            <NavLink to="/gallery" className="nav-item nav-link">Gallery</NavLink>
            <div className="nav-item dropdown">
          <NavLink to="page1" className="nav-link dropdown-toggle" data-toggle="dropdown">Blogs</NavLink>
          <div className="dropdown-menu rounded-0 m-0">
            <NavLink to="/page1" className="dropdown-item">Blog Grid</NavLink>
            <NavLink to="/page2" className="dropdown-item">Blog Detail</NavLink>
          </div>
          

        </div>
           
</div>
<NavLink to="/registration" className="btn btn-primary px-4">Join Class</NavLink></div>
</nav></div>
    
  );
};

export default Header

