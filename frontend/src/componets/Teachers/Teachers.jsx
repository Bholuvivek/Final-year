import React from 'react';
import { Link } from 'react-router-dom';
import team1 from '../img/team-1.jpg'
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import team4 from '../img/team-4.jpg'
import testimonial1 from '../img/testimonial-1.jpg';
import testimonial2 from '../img/testimonial-2.jpg';
import testimonial3 from '../img/testimonial-3.jpg';
import testimonial4 from '../img/testimonial-4.jpg'


const Teachers = () => {
  return (
    <>
      {/* Team Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Our Teachers</span></p>
            <h1 className="mb-4">Meet Our Teachers</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={team1} alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </div>
              <h4>Pooja Kumari</h4>
              <i>Music Teacher</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={team2} alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </div>
              <h4>Rohit Yadav</h4>
              <i>Language Teacher</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={team3} alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </div>
              <h4>Sneha Singh</h4>
              <i>Dance Teacher</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={team4} alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} to="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </div>
              <h4>Ajay Kumar Sahni</h4>
              <i>Art Teacher</i>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container p-0">
          <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Testimonial</span></p>
            <h1 className="mb-4">What Parents Say!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item px-3">
              <div className="bg-light shadow-sm rounded mb-4 p-4">
                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
              </div>
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src={testimonial1} style={{ width: '70px', height: '70px' }} alt="Image" />
                <div className="pl-3">
                  <h5>Parent Name</h5>
                  <i>Profession</i>
                </div>
              </div>
            </div>
            <div className="testimonial-item px-3">
              <div className="bg-light shadow-sm rounded mb-4 p-4">
                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
              </div>
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src={testimonial2} style={{ width: '70px', height: '70px' }} alt="Image" />
                <div className="pl-3">
                  <h5>Parent Name</h5>
                  <i>Profession</i>
                </div>
              </div>
            </div>
            <div className="testimonial-item px-3">
              <div className="bg-light shadow-sm rounded mb-4 p-4">
                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
              </div>
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src={testimonial3} style={{ width: '70px', height: '70px' }} alt="Image" />
                <div className="pl-3">
                  <h5>Parent Name</h5>
                  <i>Profession</i>
                </div>
              </div>
            </div>
            <div className="testimonial-item px-3">
              <div className="bg-light shadow-sm rounded mb-4 p-4">
                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
              </div>
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src={testimonial4} style={{ width: '70px', height: '70px' }} alt="Image" />
                <div className="pl-3">
                  <h5>Parent Name</h5>
                  <i>Profession</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default Teachers;
