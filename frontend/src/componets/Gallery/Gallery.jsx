import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import portfolio1 from '../img/portfolio-1.jpg'
import portfolio2 from '../img/portfolio-2.jpg'
import portfolio3 from '../img/portfolio-3.jpg'
import portfolio4 from '../img/portfolio-4.jpg'
import portfolio5 from '../img/portfolio-5.jpg'
import portfolio6 from '../img/portfolio-6.jpg'

const Gallery = () => {
  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5"><span className="px-2">Our Gallery</span></p>
          <h1 className="mb-4">Our Kids School Gallery</h1>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
              <li className="btn btn-outline-primary m-1 active" data-filter="*">All</li>
              <li className="btn btn-outline-primary m-1" data-filter=".first">Playing</li>
              <li className="btn btn-outline-primary m-1" data-filter=".second">Drawing</li>
              <li className="btn btn-outline-primary m-1" data-filter=".third">Reading</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {/* Portfolio Item 1 */}
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <img className="img-fluid w-100" src={portfolio1} alt="" />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href={portfolio1} data-lightbox="portfolio">
                  <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
            <div className="position-relative overflow-hidden mb-2">
              <img className="img-fluid w-100" src={portfolio2} alt="" />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href={portfolio2} data-lightbox="portfolio">
                  <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
            <div className="position-relative overflow-hidden mb-2">
              <img className="img-fluid w-100" src={portfolio3} alt="" />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href={portfolio3} data-lightbox="portfolio">
                  <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Item 4 */}
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <img className="img-fluid w-100" src={portfolio4} alt="" />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href={portfolio4} data-lightbox="portfolio">
                  <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Item 5 */}
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
            <div className="position-relative overflow-hidden mb-2">
              <img className="img-fluid w-100" src={portfolio5} alt="" />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href={portfolio5} data-lightbox="portfolio">
                  <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Item 6 */}
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
            <div className="position-relative overflow-hidden mb-2">
              <img className="img-fluid w-100" src={portfolio6} alt="" />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href={portfolio6} data-lightbox="portfolio">
                  <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Repeat the similar structure for other portfolio items */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
