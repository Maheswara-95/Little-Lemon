import React from 'react';
import './Testimonials.css'; // Import the CSS file

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="rating" src="Rating.png" alt="ratings" />
            <img id="profile" src="Profile-1.jpg" alt="Customer Pic" />
            <h2>Elizabeth.</h2>
            <p>"Absolutely loved the ambiance."</p>
          </div>
          <div className="review">
            <img id="rating" src="Rating.png" alt="ratings" />
            <img id="profile" src="Profile-2.jpg" alt="Customer Pic" />
            <h2>Isaac.</h2>
            <p>"The service was impeccable!"</p>
          </div>

          <div className="review">
            <img id="rating" src="Rating.png" alt="ratings" />
            <img id="profile" src="Profile-3.jpg" alt="Customer Pic" />
            <h2>David.</h2>
            <p>"Definitely sample the Greek Salad!"</p>
          </div>

          <div className="review">
            <img id="rating" src="Rating.png" alt="ratings" />
            <img id="profile" src="Profile-4.jpg" alt="Customer Pic" />
            <h2>Sarah.</h2>
            <p>"Serene, Delicious, Awesome Ambiance"</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
