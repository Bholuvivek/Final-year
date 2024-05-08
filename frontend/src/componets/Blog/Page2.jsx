import React from 'react';

const Page2 = () => {
  return (
    <div className="container py-5">
      <div className="row pt-5">
        <div className="col-lg-8">
          <div className="d-flex flex-column text-left mb-3">
            <p className="section-title pr-5"><span className="pr-2">Blog Detail Page</span></p>
            <h1 className="mb-3">Diam dolor est ipsum clita lorem</h1>
            <div className="d-flex">
              <p className="mr-3"><i className="fa fa-user text-primary"></i> Admin</p>
              <p className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</p>
              <p className="mr-3"><i className="fa fa-comments text-primary"></i> 15</p>
            </div>
          </div>
          <div className="mb-5">
            <img className="img-fluid rounded w-100 mb-4" src="img/detail.jpg" alt="Image" />
            <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>
            {/* Rest of the content */}
          </div>
          {/* Related Post */}
          <div className="mb-5 mx-n3">
            <h2 className="mb-4 ml-3">Related Post</h2>
            <div className="owl-carousel post-carousel position-relative">
              {/* Related post content goes here */}
            </div>
          </div>
          {/* Comment List */}
          <div className="mb-5">
            <h2 className="mb-4">3 Comments</h2>
            {/* Comment list content goes here */}
          </div>
          {/* Comment Form */}
          <div className="bg-light p-5">
            <h2 className="mb-4">Leave a comment</h2>
            {/* Comment form content goes here */}
          </div>
        </div>

        <div className="col-lg-4 mt-5 mt-lg-0">
          {/* Author Bio */}
          <div className="d-flex flex-column text-center bg-primary rounded mb-5 py-5 px-4">
            {/* Author bio content goes here */}
          </div>
          {/* Search Form */}
          <div className="mb-5">
            {/* Search form content goes here */}
          </div>
          {/* Category List */}
          <div className="mb-5">
            {/* Category list content goes here */}
          </div>
          {/* Single Image */}
          <div className="mb-5">
            {/* Single image content goes here */}
          </div>
          {/* Recent Post */}
          <div className="mb-5">
            {/* Recent post content goes here */}
          </div>
          {/* Tag Cloud */}
          <div className="mb-5">
            {/* Tag cloud content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
