import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import logo from '../img/logo.jpg'
const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
          <Link to="/" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: "40px", lineHeight: "40px" }}>
          <img
        src={logo}
        className="logo"
        style={{ width: '50px', borderRadius:'30px', marginLeft:'15px', marginTop:'-5px' }}
        alt="Logo"
      />
            <span className="text-white" style={{ width: '50px', borderRadius:'30px', marginLeft:'5px', marginTop:'-5px' }}>EduPark</span>
          </Link>
          <p>Explore more about us. Contact us for inquiries. Stay updated with our latest news and events. Join our community and embark on a journey of learning!</p>
          <div className="d-flex justify-content-start mt-4">
            <Link to="www.twitter.com" className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}><i className="fab fa-twitter"></i></Link>
            <Link to="www.facebook.com" className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}><i className="fab fa-facebook-f"></i></Link>
            <Link to="www.linkedin.com" className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}><i className="fab fa-linkedin-in"></i></Link>
            <Link to="www.instagram.com" className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-primary mb-4">Get In Touch</h3>
          <div className="d-flex">
            <h4 className="fa fa-map-marker-alt text-primary"></h4>
            <div className="pl-3">
              <h5 className="text-white">Address</h5>
              <p>NH 85 Siwan, Bihar, India</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-envelope text-primary"></h4>
            <div className="pl-3">
              <h5 className="text-white">Email</h5>
              <p>info@edupark.com</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-phone-alt text-primary"></h4>
            <div className="pl-3">
              <h5 className="text-white">Phone</h5>
              <p>+91 8804752876</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-primary mb-4">Quick Links</h3>
          <div className="d-flex flex-column justify-content-start">
            <Link to="/" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Home</Link>
            <Link to="/about" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>About Us</Link>
            <Link to="classes" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Our Classes</Link>
            <Link to="teachers" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Our Teachers</Link>
            <Link to="page1" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Our Blog</Link>
            <Link to="contact" className="text-white"><i className="fa fa-angle-right mr-2"></i>Contact Us</Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-primary mb-4">Newsletter</h3>
          <form action="">
            <div className="form-group">
              <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control border-0 py-4" placeholder="Your Email" required="required" />
            </div>
            <div>
              <button className="btn btn-primary btn-block border-0 py-3" type="submit">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container-fluid pt-5" style={{ borderTop: "1px solid rgba(23, 162, 184, .2)" }}>
        <p className="m-0 text-center text-white">
          &copy; <Link to="#" className="text-primary font-weight-bold">EduPark</Link>. All Rights Reserved.
          
          
        <a href="https://github.com/Bholuvivek" className="text-primary font-weight-bold">EduPark</a> 
        </p>
      </div>
   </div>
   
    </>
 
  );
};

export default Footer;
