import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5"><span className="px-2">Latest Blog</span></p>
          <h1 className="mb-4">Latest Articles From Blog</h1>
        </div>
        <div className="row pb-3">
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm mb-2">
              <img className="card-img-top mb-2" src="img/blog-1.jpg" alt="" />
              <div className="card-body bg-light text-center p-4">
                <h4 className="">Diam amet eos at no eos</h4>
                <div className="d-flex justify-content-center mb-3">
                  <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                  <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                  <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                </div>
                <p>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                <Link to="/" className="btn btn-primary px-4 mx-auto my-2">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm mb-2">
              <img className="card-img-top mb-2" src="img/blog-2.jpg" alt="" />
              <div className="card-body bg-light text-center p-4">
                <h4 className="">Diam amet eos at no eos</h4>
                <div className="d-flex justify-content-center mb-3">
                  <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                  <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                  <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                </div>
                <p>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                <Link to="/" className="btn btn-primary px-4 mx-auto my-2">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm mb-2">
              <img className="card-img-top mb-2" src="img/blog-3.jpg" alt="" />
              <div className="card-body bg-light text-center p-4">
                <h4 className="">Diam amet eos at no eos</h4>
                <div className="d-flex justify-content-center mb-3">
                  <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                  <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                  <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                </div>
                <p>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                <Link to="/" className="btn btn-primary px-4 mx-auto my-2">Read More</Link>
              </div>
            </div>
          </div>
          {/* Additional card components go here */}
          <div className="col-md-12 mb-4">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item disabled">
                  <Link className="page-link" to="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </Link>
                </li>
                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                <li className="page-item">
                  <Link className="page-link" to="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
