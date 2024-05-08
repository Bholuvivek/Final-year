import React from 'react'
import headerphoto from '../img/header.png'
function Home() {
  return (
    <>
    <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
      <div className="row align-items-center px-3">
        <div className="col-lg-6 text-center text-lg-left">
          <h4 className="text-white mb-4 mt-5 mt-lg-0">Kids Learning Center</h4>
          <h1 className="display-3 font-weight-bold text-white">New Approach to Kids Education</h1>
          <p className="text-white mb-4">We offer immersive, personalized learning experiences in a safe environment. Join our vibrant community and start your child's educational journey today. With us, learning is fun, interactive, and tailored to your child's unique needs..</p>
          <a href="#" className="btn btn-secondary mt-1 py-3 px-5">Learn More</a>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <img className="img-fluid mt-5" src={headerphoto} alt="" />
        </div>
      </div>
    </div>
      {/* Facilities Start */}
      <div className="container-fluid pt-5">
        <div className="container pb-3">
          <div className="row">
            {/* Facility 1 */}
            <div className="col-lg-4 col-md-6 pb-1">
              <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
                <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3"></i>
                <div className="pl-4">
                  <h4>Play Ground</h4>
                  <p className="m-0">Unleash creativity and fun at our playground! With exciting activities and a safe environment, kids can explore, play, and learn together. Join us for endless adventures and unforgettable memories.</p>
                </div>
              </div>
            </div>
            {/* Facility 2 */}
<div className="col-lg-4 col-md-6 pb-1">
  <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
    <i className="flaticon-022-drum h1 font-weight-normal text-primary mb-3"></i>
    <div className="pl-4">
      <h4>Music and Dance</h4>
      <p className="m-0">Unleash your child's creativity with our vibrant music and dance programs. From rhythmic beats to expressive movements, our classes inspire joy and self-expression in every child.</p>
    </div>
  </div>
</div>

{/* Facility 3 */}
<div className="col-lg-4 col-md-6 pb-1">
  <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
    <i className="flaticon-030-crayons h1 font-weight-normal text-primary mb-3"></i>
    <div className="pl-4">
      <h4>Arts and Crafts</h4>
      <p className="m-0">Ignite your child's imagination with our arts and crafts activities. From painting to sculpting, each project encourages creativity and self-expression, fostering a love for art and craftsmanship.</p>
    </div>
  </div>
</div>

{/* Facility 4 */}
<div className="col-lg-4 col-md-6 pb-1">
  <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
    <i className="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3"></i>
    <div className="pl-4">
      <h4>Easy Content delivery </h4>
      <p className="m-0">Streamline learning with effortless content delivery. Accessible, intuitive, and user-friendly, our platform ensures seamless access to educational resources, enhancing the learning experience for all.</p>
    </div>
  </div>
</div>

{/* Facility 5 */}
<div className="col-lg-4 col-md-6 pb-1">
  <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
    <i className="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3"></i>
    <div className="pl-4">
      <h4>Qualityful Content</h4>
      <p className="m-0">Experience top-notch content that enriches and engages. Our platform delivers high-quality resources curated for excellence, ensuring a rewarding learning experience every step of the way.</p>
    </div>
  </div>
</div>

{/* Facility 6 */}
<div className="col-lg-4 col-md-6 pb-1">
  <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
    <i className="flaticon-047-backpack h1 font-weight-normal text-primary mb-3"></i>
    <div className="pl-4">
      <h4>Educational Fest</h4>
      <p className="m-0">Join us for an enlightening educational fest filled with workshops, seminars, and interactive sessions. Explore new ideas and broaden your horizons. Don't miss out on this enriching experience!</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
      {/* Facilities End */}

      {/* About Start */}
     
      {/* About End */}

      {/* Class Start */}
      
      {/* Class End */}

      {/* Registration Start */}
     
      {/* Registration End */}

      {/* Team Start */}
     
      {/* Team End */}

      {/* Testimonial Start */}
      
      {/* Testimonial End */}
    </>
  );
}

export default Home;