import "../Reviews/Reviews.css";
import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { author: "boby", text: "This is a review" },
    { author: "bill", text: "This is a review" },
    { author: "bob", text: "This is a review lorem ipsum" },
  ]);

  return (
    <div className="reviews">
      <div className="review-panel">
        {reviews.map((review) => (
          <div className="review-item">
            <div className="review-author">{review.author}</div>
            <div className="review-text">{review.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
