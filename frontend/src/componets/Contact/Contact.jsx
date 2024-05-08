import React from 'react';

const Contact = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5"><span className="px-2">Get In Touch</span></p>
          <h1 className="mb-4">Contact Us For Any Query</h1>
        </div>
        <div className="row">
          <div className="col-lg-7 mb-5">
            <div className="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="control-group">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea className="form-control" rows="6" id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <p>Labore sea amet kasd diam justo amet ut vero justo. Ipsum ut et kasd duo sit, ipsum sea et erat est dolore, magna ipsum et magna elitr. Accusam accusam lorem magna, eos et sed eirmod dolor est eirmod eirmod amet.</p>
            <div className="d-flex">
              <i className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }}></i>
              <div className="pl-3">
                <h5>Address</h5>
                <p>Siwan, Bihar, India</p>
              </div>
            </div>
            <div className="d-flex">
              <i className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }}></i>
              <div className="pl-3">
                <h5>Email</h5>
                <p>info@edupark.com</p>
              </div>
            </div>
            <div className="d-flex">
              <i className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }}></i>
              <div className="pl-3">
                <h5>Phone</h5>
                <p>+91 8804752876</p>
              </div>
            </div>
            <div className="d-flex">
              <i className="far fa-clock d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }}></i>
              <div className="pl-3">
                <h5>Opening Hours</h5>
                <strong>Sunday - Friday:</strong>
                <p className="m-0">08:00 AM - 05:00 PM </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
