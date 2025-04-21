import React from 'react';
import Books from '../Books/Books';

const Home = () => {
    return (
      <div
  className="hero min-h-screen px-30 "
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/kgsMcWZk/banner-img-1.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-4xl font-bold">It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
      <p className="mb-5">
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
    </div>
  </div>
</div>
    );
};

export default Home;